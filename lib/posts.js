import fs from 'node:fs';
import path from 'node:path';

const DIR = path.join(process.cwd(), 'posts');
const POSTS_PER_PAGE = 6;
const BLOG_URL = '/blog/';

/**
 * Read one post file: its front matter block, then the article body HTML
 * @param {string} file - A posts/<yyyy-mm-dd>-<slug>.html file name
 * @returns {object} { slug, title, description, date, published, cover, url, content }
 */
function readPost(file) {
  const text = fs.readFileSync(path.join(DIR, file), 'utf8');
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!match) throw new Error(`posts/${file} has no front matter block`);
  const front = {};
  for (const line of match[1].split(/\r?\n/)) {
    const at = line.indexOf(':');
    if (at < 1) continue;
    const value = line.slice(at + 1).trim();
    front[line.slice(0, at).trim()] = value.startsWith('"') ? JSON.parse(value) : value;
  }
  const slug = file.replace(/\.html$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return {
    slug,
    title: front.title,
    description: front.description || '',
    date: new Date(front.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }),
    published: front.date,
    cover: front.cover ? `/assets/${front.cover}` : '',
    url: `${BLOG_URL}${slug}/`,
    content: text.slice(match[0].length).trim(),
  };
}

/**
 * Every post, newest first
 * @returns {object[]}
 */
export function allPosts() {
  return fs.readdirSync(DIR).filter((file) => file.endsWith('.html')).map(readPost).sort((a, b) => b.published.localeCompare(a.published));
}

/**
 * One post by its slug
 * @param {string} slug - The post's slug
 * @returns {object}
 */
export function getPost(slug) {
  const post = allPosts().find((item) => item.slug === slug);
  if (!post) throw new Error(`No post named ${slug} in posts/`);
  return post;
}

/**
 * The url of one list page
 * @param {number} number - 1 for the first page
 * @returns {string}
 */
const listUrl = (number) => (number === 1 ? BLOG_URL : `${BLOG_URL}page/${number}/`);

/**
 * The posts split into list pages of 6, each with the newer and older page's url
 * @returns {{ number: number, posts: object[], paginator: { prev: string|null, next: string|null } }[]}
 */
export function listPages() {
  const posts = allPosts();
  const count = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  return Array.from({ length: count }, (item, index) => index + 1).map((number) => ({
    number,
    posts: posts.slice((number - 1) * POSTS_PER_PAGE, number * POSTS_PER_PAGE),
    paginator: { prev: number > 1 ? listUrl(number - 1) : null, next: number < count ? listUrl(number + 1) : null },
  }));
}
