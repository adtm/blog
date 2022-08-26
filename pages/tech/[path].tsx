import { GetServerSideProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { components } from '../../components/MDX/Components'
import Metadata from '../../components/Metadata/Metadata'
import { getTechPostBySlog, Post } from '../../libs/parser'

interface MarkdownPost extends Post {
  // MDX Markdown Record<string, unknown> set
  content: any
}

interface TechPostProps {
  post: MarkdownPost
}

const TechPost = ({ post }: TechPostProps) => (
  <>
    <Metadata title={post.title} />
    <div className="py-5 sm:py-10 mb-10 sm:mb-20">
      <h1 className="text-lg font-medium mb-2 text-center">{post.title}</h1>
      <div className="text-center mb-10">
        <span className="text-xs italic">{post.date}</span>
      </div>
      <div className="text-sm">
        <div className="mb-20">
          <MDXRemote {...post.content} components={components} />
        </div>
      </div>
    </div>
  </>
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { path } = context.query
  const post = getTechPostBySlog(path + ".mdx", ['title', 'date', 'content']);
  const markdown = await serialize(post.content)
  return {
    props: {
      post: {
        ...post,
        content: markdown,
      }
    }
  }
}

export default TechPost
