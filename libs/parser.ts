import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export interface Post {
  date?: string;
  title?: string;
  content?: string;
}

const postsDirectory = join(process.cwd(), 'posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []): Post {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
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

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (new Date(post1.date) > new Date(post2.date) ? -1 : 1))
}