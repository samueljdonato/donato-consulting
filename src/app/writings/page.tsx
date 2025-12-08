import Link from 'next/link'
import { getAllWritings } from '@/lib/mdx'

export default function WritingsPage() {
  const writings = getAllWritings()

  return (
    <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Writings
        </h1>
        
        {writings.length === 0 ? (
          <p className="text-gray-600">No writings yet. Add MDX files to content/writings/</p>
        ) : (
          <div className="space-y-8">
            {writings.map((writing) => (
              <article key={writing.slug} className="border-b pb-8">
                <Link href={`/writings/${writing.slug}`}>
                  <h2 className="text-2xl font-semibold text-gray-900 hover:text-blue-600 mb-2">
                    {writing.title}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-2">
                  {new Date(writing.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700">{writing.summary}</p>
                <div className="mt-2 flex gap-2">
                  {writing.tags.map(tag => (
                    <span key={tag} className="text-sm bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
        
        <Link href="/" className="mt-8 inline-block text-blue-600 hover:underline">
          ← Back home
        </Link>
      </div>
    </main>
  )
}