export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 scanlines">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg md:text-4xl mb-4 text-primary font-bold pixel-border inline-block px-4 py-2">
          &gt; Contact.connect()
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-sm mt-4 mb-12 font-mono">
          // Let&apos;s build something together
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="mailto:eee47@drexel.edu"
            className="pixel-border bg-card p-6 hover:bg-accent/20 transition-colors group"
          >
            <div className="font-mono">
              <div className="text-primary mb-2 text-sm">// Email</div>
              <div className="text-foreground group-hover:text-primary transition-colors">
                eee47@drexel.edu
              </div>
            </div>
          </a>

          <a
            href="tel:484-655-5217"
            className="pixel-border bg-card p-6 hover:bg-accent/20 transition-colors group"
          >
            <div className="font-mono">
              <div className="text-primary mb-2 text-sm">// Phone</div>
              <div className="text-foreground group-hover:text-primary transition-colors">
                484-655-5217
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/edisonessien"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border bg-card p-6 hover:bg-accent/20 transition-colors group"
          >
            <div className="font-mono">
              <div className="text-primary mb-2 text-sm">// LinkedIn</div>
              <div className="text-foreground group-hover:text-primary transition-colors">
                @edisonessien
              </div>
            </div>
          </a>

          <a
            href="https://github.com/edisonlovescodes"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-border bg-card p-6 hover:bg-accent/20 transition-colors group"
          >
            <div className="font-mono">
              <div className="text-primary mb-2 text-sm">// GitHub</div>
              <div className="text-foreground group-hover:text-primary transition-colors">
                @edisonlovescodes
              </div>
            </div>
          </a>
        </div>

        <div className="pixel-border bg-card p-8">
          <div className="font-mono text-base">
            <div className="text-primary mb-4 text-lg">// Currently seeking</div>
            <p className="text-foreground leading-relaxed">
              Summer 2026 internship opportunities in <span className="text-secondary">AI</span>,{' '}
              <span className="text-secondary">biomedical engineering</span>, or{' '}
              <span className="text-secondary">software engineering</span>
            </p>
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t-4" style={{ borderColor: 'var(--border)' }}>
          <div className="text-center font-mono">
            <p className="text-muted-foreground text-sm">
              // Built with <span className="text-primary">{'<Next.js />'}</span> and{' '}
              <span className="text-secondary">Tailwind CSS</span>
            </p>
            <p className="text-muted-foreground text-xs mt-2">
              © 2025 Edison Essien - System.version: 1.0.0
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
