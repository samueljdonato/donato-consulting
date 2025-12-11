import Link from 'next/link'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Projects
        </h1>
        
        <p className="text-lg text-gray-600 mb-12">
          A collection of my work in bioinformatics, data science, and mycology.
        </p>

        <div className="space-y-8">
          {sortedProjects.map((project) => (
            <article key={project.slug} className="group">
              <Link href={`/projects/${project.slug}`}>
                <div className="p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h2>
                    {project.featured && (
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.summary}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="bg-gray-100 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-gray-500">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    <span className="text-gray-500">
                      {new Date(project.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                    
                    <span className="text-blue-600 group-hover:underline ml-auto">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <a 
            href="https://github.com/samueljdonato" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:underline"
          >
            View all projects on GitHub
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
        
        <Link href="/" className="mt-8 inline-block text-blue-600 hover:underline">
          ← Back home
        </Link>
      </div>
    </main>
  )
}