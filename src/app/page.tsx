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
        </div>
        
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

        {/* CONSULTING SERVICES SECTION */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            Consulting Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Bioinformatics & Data Science
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Genomic data analysis and pipeline development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Machine learning model development for biological systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Multi-omics integration and visualization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Automated data processing and quality control systems
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Mycology & Strain Development
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Fungal strain selection and optimization
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Strain banking and resource management systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Growth condition optimization and scale-up strategies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Contamination prevention and quality assurance protocols
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Research Informatics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Laboratory information management systems (LIMS) design
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Research data architecture and database development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Automated reporting and dashboard creation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Data governance and standardization frameworks
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Technical Advisory
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Biotechnology startup technical assessments
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Research strategy and experimental design consultation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Grant application technical writing support
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Technology stack evaluation and recommendations
                </li>
              </ul>
            </div>
          </div>
        </section>




        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="mailto:samueljdonato@gmail.com"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              samueljdonato@gmail.com
            </a>
            <a 
              href="https://www.linkedin.com/in/sam-donato-478584155/"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </main>
  )
}