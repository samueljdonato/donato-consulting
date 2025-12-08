import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'

interface MDXContentProps {
  source: string
}

const components = {
  // Add custom components here if needed
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <MDXRemote 
      source={source}
      components={components}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeHighlight],
        },
      }}
    />
  )
}