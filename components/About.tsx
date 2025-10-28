export default function About() {
  return (
    <section id="about" className="py-32 px-4 scanlines">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg md:text-4xl mb-8 text-primary font-bold pixel-border inline-block px-4 py-2">
          &gt; About.me
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-12 font-mono max-w-2xl">
          // Combining biomedical engineering with AI to solve healthcare&apos;s biggest challenges
        </p>

        <div className="pixel-border bg-card p-8 md:p-12 max-w-2xl mx-auto">
          <div className="font-mono text-sm md:text-base leading-relaxed">
            <p className="text-foreground">
              <span style={{ color: 'hsl(var(--syntax-cyan))' }}>const</span>{' '}
              <span style={{ color: 'hsl(var(--syntax-magenta))' }}>bio</span> = {'{'}<br />
              <span className="ml-4">name: <span style={{ color: 'hsl(var(--syntax-yellow))' }}>&quot;Edison Essien&quot;</span>,</span><br />
              <span className="ml-4">school: <span style={{ color: 'hsl(var(--syntax-yellow))' }}>&quot;Drexel University&quot;</span>,</span><br />
              <span className="ml-4">major: <span style={{ color: 'hsl(var(--syntax-yellow))' }}>&quot;Biomedical Engineering & Bioinformatics&quot;</span>,</span><br />
              <span className="ml-4">gpa: <span style={{ color: 'hsl(var(--syntax-cyan))' }}>3.8</span>,</span><br />
              <span className="ml-4">graduation: <span style={{ color: 'hsl(var(--syntax-yellow))' }}>&quot;June 2027&quot;</span>,</span><br />
              <span className="ml-4">passion: <span style={{ color: 'hsl(var(--syntax-yellow))' }}>&quot;AI + Healthcare&quot;</span></span><br />
              {'}'};
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
