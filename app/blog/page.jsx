import PostList from '@/components/post-list';
import { listPages } from '@/lib/posts';

export const metadata = {
  title: "Farm notes | Bramblecut Farm",
  description: "The Wednesday note from Bramblecut Farm: what went into the ground, what came out of it, what to cook with this week's crate, and what the weather did to the peppers.",
};

export default function Blog() {
  return <PostList {...listPages()[0]} />;
}
