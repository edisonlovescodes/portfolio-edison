const projects = [
  {
    title: 'OncoDetect',
    subtitle: 'AI Lung Nodule Detection',
    value: 'Catching cancer early with interpretable AI',
    description: 'Deep learning system that identifies lung nodules on CT scans with physician-level accuracy, complete with explainable AI heatmaps.',
    tech: ['Python', 'TensorFlow', 'React', 'Docker'],
    github: 'https://github.com/edisonlovescodes/oncodetect',
    metrics: ['85.71% accuracy', '97% benign recall', '667 scans analyzed'],
    category: 'Biomedical AI',
  },
  {
    title: 'Protogen',
    subtitle: 'AI Protein Generator',
    value: 'Accelerating drug discovery with generative AI',
    description: 'Transformer model that generates novel protein sequences with specific properties, integrated with structure prediction for immediate validation.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'React'],
    github: 'https://github.com/edisonlovescodes/protogen',
    metrics: ['425+ sequences', '85% accuracy', 'ESMFold integration'],
    category: 'Biomedical AI',
  },
  {
    title: 'BioSignal Analyzer',
    subtitle: 'ECG Arrhythmia Detection',
    value: 'Real-time cardiac monitoring powered by deep learning',
    description: 'CNN-based system for detecting heart arrhythmias in real-time, with automated R-peak detection and clinical-grade accuracy.',
    tech: ['Python', 'Streamlit', 'NumPy', 'Plotly'],
    github: 'https://github.com/edisonlovescodes/biosignal-analyzer',
    metrics: ['95% accuracy', 'MIT-BIH validated', 'Real-time analysis'],
    category: 'Biomedical AI',
  },
  {
    title: 'CourtPulse',
    subtitle: 'Sports Analytics Platform',
    value: 'Full-stack sports performance tracking',
    description: 'Modern web application for sports analytics with real-time data visualization, user authentication, and responsive design.',
    tech: ['TypeScript', 'Next.js', 'React', 'PostgreSQL'],
    github: 'https://github.com/edisonlovescodes/courtpulse',
    metrics: ['Full-stack app', 'Real-time data', 'Production-ready'],
    category: 'Full-Stack Web',
  },
  {
    title: 'Sora Whop App',
    subtitle: 'SaaS Application',
    value: 'Modern TypeScript SaaS platform',
    description: 'Full-featured SaaS application built with modern web technologies, demonstrating enterprise-level architecture and scalable design patterns.',
    tech: ['TypeScript', 'Next.js', 'Tailwind', 'API Integration'],
    github: 'https://github.com/edisonlovescodes/sora-whop-app',
    metrics: ['TypeScript', 'Scalable', 'Modern stack'],
    category: 'Full-Stack Web',
  },
  {
    title: 'TweetTracker',
    subtitle: 'Social Media Analytics',
    value: 'Data-driven social media insights',
    description: 'Analytics platform for tracking and visualizing social media metrics with real-time data processing and interactive dashboards.',
    tech: ['TypeScript', 'React', 'Node.js', 'API'],
    github: 'https://github.com/edisonlovescodes/TweetTracker',
    metrics: ['Real-time', 'Analytics', 'Data viz'],
    category: 'Full-Stack Web',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-4 scanlines">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-4xl mb-4 text-primary font-bold pixel-border inline-block px-4 py-2">
          &gt; Projects.log
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mt-4 mb-16 font-mono">
          // Biomedical engineer by trade, software engineer by skill — building AI solutions that save lives
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-8">
              {/* Project Header */}
              <div className="md:col-span-1">
                <div className="md:sticky md:top-32">
                  <div className="inline-block px-3 py-1 mb-3 text-xs font-mono bg-muted text-muted-foreground pixel-border">
                    {project.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-mono">
                    {project.title}
                  </h3>
                  <p className="text-secondary font-mono text-base mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-foreground font-mono text-base font-semibold mb-6">
                    {project.value}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground pixel-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="md:col-span-2">
                <div className="pixel-border bg-card p-8 hover:bg-accent/10 transition-colors h-full">
                  <p className="text-foreground font-mono text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-primary font-bold font-mono text-lg mb-1">
                          {metric.split(' ')[0]}
                        </div>
                        <div className="text-muted-foreground font-mono text-xs">
                          {metric.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-mono text-base font-semibold"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
