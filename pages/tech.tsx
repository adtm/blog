import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { components } from '../components/MDX/Components'
import Metadata from '../components/Metadata/Metadata'
import { getAllTechPosts, Post } from '../libs/parser'

interface MarkdownPost extends Post {
  // MDX Markdown Record<string, unknown> set
  content: any
}

interface ThoughtsProps {
  posts: Array<MarkdownPost>
}

const Thoughts = ({ posts }: ThoughtsProps) => (
  <>
    <Metadata title="Thoughts" />
    <div className="py-5 sm:py-10 mb-10 sm:mb-20">
      <p className="text-lg font-medium mb-20 text-center">Tech</p>
      <div className="text-sm">
        {posts.map((post) => (
          <div key={post.title} className="mb-20">
            <div className="text-center mb-10">
              <h2 className="italic">{post.title}</h2>
              <span className="text-xs italic">{post.date}</span>
            </div>
            <MDXRemote {...post.content} components={components} />
          </div>
        ))}
      </div>
    </div>
  </>
)

export async function getStaticProps() {
  const posts = getAllTechPosts(['title', 'date', 'short'])
  const deserializedPosts = await Promise.all(
    posts.map(async (post) => {
      const markdown = await serialize(post.short)
      return {
        ...post,
        content: markdown,
      }
    })
  )
  return { props: { posts: deserializedPosts } }
}

export default Thoughts
