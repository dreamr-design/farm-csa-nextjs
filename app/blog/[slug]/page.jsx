import { allPosts, getPost } from '@/lib/posts';

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { title, description } = getPost((await params).slug);
  return { title, description };
}

export default async function Post({ params }) {
  const post = getPost((await params).slug);
  return (
<main id="main">
    <article className="post" aria-labelledby="page-title">
      <div className="page-hero">
        <div className="wrap">
          <div>
            <p className="kicker">Farm notes · From the rows at Bramblecut</p>
            <h1 id="page-title">{post.title}</h1>
            <p className="lede">{post.description}</p>
            <p className="post-meta"><span>Written after chores</span><span className="post-date">{post.date}</span></p>
          </div>
          <p className="stamp stamp--round">Written<strong>Wed.</strong>packed Thurs.</p>
        </div>
      </div>

      <div className="wrap post-wrap">
        <figure className="post-lead">
          <img src="/assets/img/hills.svg" alt="Screenprint of the Bramblecut hollow at sunrise: the red barn, a silo, and the striped rows of the south slope" width="1440" height="320" />
        </figure>

        <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />

        <p className="post-back"><a href="/blog/">&larr; All farm notes</a></p>
      </div>
    </article>
  </main>
  );
}
