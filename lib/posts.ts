import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface PostProps {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  content: string;
  tags?: string[];
  imageUrl?: string;
}

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): PostProps {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { ...data, content, slug: realSlug } as PostProps;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
