import PostList from '@/components/post-list';
import { listPages } from '@/lib/posts';

export const dynamicParams = false;

export const metadata = {
  title: "Farm notes | Bramblecut Farm",
  description: "The Wednesday note from Bramblecut Farm: what went into the ground, what came out of it, what to cook with this week's crate, and what the weather did to the peppers.",
};

// A static export refuses a dynamic route with no pages, so a blog of one list page writes it here as page 1
export function generateStaticParams() {
  const pages = listPages();
  return (pages.length > 1 ? pages.slice(1) : pages).map((page) => ({ number: String(page.number) }));
}

export default async function BlogPage({ params }) {
  const { number } = await params;
  return <PostList {...listPages()[Number(number) - 1]} />;
}
