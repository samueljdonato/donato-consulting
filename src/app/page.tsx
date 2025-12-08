export default function Home() {
  return (
    <main className="min-h-screen px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sam Donato
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Bioinformatics & Mycology Consulting
        </p>
        
        <div className="prose prose-lg">
          <p>
            Bioinformatician with expertise in structural mycology, 
            data science, and computational biology. 
            Currently available for consulting opportunities.
          </p>
        </div>
        
        <nav className="mt-12 flex gap-6">
          <a href="/writings" className="text-blue-600 hover:underline">
            Writings
          </a>
          <a href="/projects" className="text-blue-600 hover:underline">
            Projects
          </a>
        </nav>
      </div>
    </main>
  )
}