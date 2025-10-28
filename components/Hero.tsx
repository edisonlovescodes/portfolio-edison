'use client';

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 scanlines relative">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 pt-20">
        <div className="space-y-4">
          <div className="text-sm md:text-base text-muted-foreground font-mono">
            {'// Welcome to my digital portfolio'}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            <span className="inline-block">{'<Edison'}</span>
            <br />
            <span className="inline-block text-secondary">Essien</span>
            <span className="inline-block text-primary">{' />'}</span>
          </h1>

          <div className="text-lg md:text-xl text-foreground font-mono max-w-2xl mx-auto">
            <span style={{ color: 'hsl(var(--syntax-cyan))' }}>const</span>{' '}
            <span style={{ color: 'hsl(var(--syntax-magenta))' }}>role</span> ={' '}
            <span style={{ color: 'hsl(var(--syntax-yellow))' }}>
              "Biomedical Engineer & AI Developer"
            </span>
            ;
          </div>

          <p className="text-base md:text-lg text-muted-foreground font-mono max-w-2xl mx-auto mt-4">
            // Building the future of healthcare through AI, biomedical engineering, and innovative
            software solutions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button
            onClick={scrollToProjects}
            className="pixel-border font-mono text-base group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 transition-colors"
          >
            View Projects
            <svg
              className="ml-2 h-4 w-4 inline group-hover:animate-bounce"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>

          <button
            onClick={scrollToContact}
            className="pixel-border font-mono text-base bg-card hover:bg-accent/20 text-foreground px-8 py-3 transition-colors"
          >
            Get In Touch
          </button>
        </div>

        <div className="pt-12 text-sm text-muted-foreground font-mono">
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-primary animate-pulse"></span>
            <span>System.status: ONLINE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
