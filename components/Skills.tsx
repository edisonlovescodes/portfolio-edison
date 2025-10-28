const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'MATLAB', 'Java', 'SQL', 'Go', 'C', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'AI/ML',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pandas', 'NumPy', 'MNE', 'SciPy'],
  },
  {
    category: 'Web',
    skills: ['React', 'Next.js', 'FastAPI', 'Spring Boot', 'Streamlit', 'Tailwind CSS'],
  },
  {
    category: 'Tools',
    skills: ['AWS', 'Azure', 'Docker', 'Git', 'Vercel', 'Cursor', 'Claude Code'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'SQLite', 'Supabase'],
  },
  {
    category: 'Biomedical',
    skills: ['PAT', 'BCI', 'Medical Devices', 'EEG', 'Spectroscopy'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 scanlines">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-lg md:text-4xl mb-4 text-primary font-bold pixel-border inline-block px-4 py-2">
          &gt; Skills.json
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mt-4 mb-12 font-mono">
          // Full-stack developer + biomedical engineer = unique perspective on healthcare tech
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="pixel-border bg-card p-6 hover:bg-accent/10 transition-colors">
              <h3 className="text-primary font-bold mb-4 font-mono flex items-center gap-2">
                <span className="w-2 h-2 bg-primary animate-pulse"></span>
                {category.category}
              </h3>
              <div className="space-y-2 font-mono text-sm">
                {category.skills.map((skill, i) => (
                  <div key={i} className="text-foreground flex items-center gap-2">
                    <span className="text-muted-foreground">-</span>
                    {skill}
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
