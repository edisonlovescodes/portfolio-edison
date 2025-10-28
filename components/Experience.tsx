const experiences = [
  {
    company: 'Johnson & Johnson',
    role: 'Bioprocess Engineer - PAT',
    location: 'New Brunswick, NJ',
    period: 'Apr 2025 - Sep 2025',
    value: 'Automated biomanufacturing analysis with ML',
    highlights: [
      '30% faster processing through ML automation',
      'Identified 8 critical quality attributes via spectroscopy',
      'Optimized 1,000+ data points with chemometric modeling',
    ],
  },
  {
    company: 'Temple University SOM',
    role: 'BCI Research Assistant',
    location: 'Philadelphia, PA',
    period: 'Sept 2024 - March 2025',
    value: 'Advanced brain-computer interface accuracy',
    highlights: [
      '92% classifier accuracy (15% above baseline)',
      '27% speed improvement in analysis pipelines',
      '35% reduction in EEG preprocessing time',
    ],
  },
  {
    company: 'X-NAV Technologies',
    role: 'V&V Engineer',
    location: 'Lansdale, PA',
    period: 'Apr 2024 - Sept 2024',
    value: 'Ensured medical device quality & compliance',
    highlights: [
      '30% accuracy improvement for X-Guide® System',
      'Enabled expansion into 10 new markets (ISO 13485/FDA)',
      '25% stability increase by resolving 40+ defects',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-4 scanlines">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg md:text-4xl mb-4 text-primary font-bold pixel-border inline-block px-4 py-2">
          &gt; Experience.log
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mt-4 mb-16 font-mono">
          // Real-world impact across biotech, research, and medical devices
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="pixel-border bg-card p-8 hover:bg-accent/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary font-mono mb-2">{exp.company}</h3>
                  <p className="text-secondary font-mono text-lg mb-2">{exp.role}</p>
                  <p className="text-foreground font-mono text-base font-semibold mb-4">{exp.value}</p>
                </div>
                <div className="text-muted-foreground font-mono text-sm mt-2 md:mt-0 md:text-right">
                  <div>{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>
              <div className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 font-mono text-base">
                    <span className="text-primary mt-1 text-lg">▸</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
