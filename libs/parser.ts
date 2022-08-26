import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface Post {
  date?: string;
  title?: string;
  content?: string;
  short?: string;
}

export const BLOG_POST_DIRECTORY = join(process.cwd(), 'posts', 'blog')
export const TECH_POST_DIRECTORY = join(process.cwd(), 'posts', 'tech')

export function getBlogPostSlugs() {
  return fs.readdirSync(BLOG_POST_DIRECTORY)
}

export function getTechPostSlugs() {
  return fs.readdirSync(TECH_POST_DIRECTORY)
}

export function getTechPostBySlog(slug, fields = []): Post {
  return getPostBySlug(TECH_POST_DIRECTORY, slug, fields)
}

export function getBlogPostBySlog(slug, fields = []): Post {
  return getPostBySlug(BLOG_POST_DIRECTORY, slug, fields)
}

function getPostBySlug(directory: string, slug, fields = []): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const isPublished = data?.published || false;
  if (!isPublished) {
    return {};
  }

  const items = {}
  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content
    }
    else if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllBlogPosts(fields = []) {
  const slugs = getBlogPostSlugs()
  return slugs
    .map((slug) => getBlogPostBySlog(slug, fields))
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1))
}

export function getAllTechPosts(fields = []) {
  const slugs = getTechPostSlugs()
  return slugs
    .map((slug) => getTechPostBySlog(slug, fields))
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1))
}
