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
            Bioinformatic scientist and systems architect who builds data-driven frameworks transforming biological complexity into
            actionable insight and operational excellence. Built and designed a strain resource and informatics platform supporting over
            700 fungal strain lines. This program became the backbone of all research and commercial-scale production at Ecovative.
            Engineered machine-learning and automation pipelines distilling hundreds of bioreactor parameters into a focused set of
            20-30 key features, accelerating decision making, data analysis, and experimental precision across teams. Recognized for a
            rare blend of technical fluency, computational design, effective communication and a drive for elevating team performance.
            Passionate about contributing to a culture of quality science, progress and learning.
            Currently available for consulting opportunities.
          </p>
                  </div>  {/* ADD THIS CLOSING DIV */}

        <nav className="mt-12 flex gap-6">
          <a href="/writings" className="text-blue-600 hover:underline">
            Writings
          </a>
          <a href="/projects" className="text-blue-600 hover:underline">
            Projects
          </a>
          <a 
            href="https://github.com/samueljdonato" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline flex items-center gap-2"
          >
            GitHub
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </nav>
      </div>
    </main>
  )
}