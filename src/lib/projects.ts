export interface Project {
    slug: string
    title: string
    summary: string
    tags: string[]
    featured: boolean
    date: string
    github?: string
    demo?: string
    status: 'completed' | 'in-progress' | 'planned'
}

export const projects: Project[] = [
  {
    slug: 'strain-informatics-platform',
    title: 'Fungal Strain Informatics Platform',
    summary: 'Built comprehensive strain management system supporting 700+ fungal lines, integrating genomic data, growth metrics, and production outcomes for commercial biomanufacturing.',
    tags: ['Python', 'PostgreSQL', 'Data Architecture', 'Bioinformatics'],
    featured: true,
    date: '2023-12-01',
    status: 'completed'
  },
  {
    slug: 'bioreactor-ml-pipeline',
    title: 'Bioreactor ML Pipeline',
    summary: 'Developed machine learning pipeline that distills hundreds of bioreactor parameters into 20-30 key features, accelerating data analysis and decision-making.',
    tags: ['Machine Learning', 'Python', 'Data Engineering', 'Bioprocess'],
    featured: true,
    date: '2023-09-01',
    github: 'https://github.com/yourusername/repo',
    status: 'completed'
  },
  // Add more projects here
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}