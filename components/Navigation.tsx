import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-4 backdrop-blur" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary glitch cursor-blink">
            &gt; Edison.dev_
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="/Edison_Essien_Resume.pdf"
              download="Edison_Essien_Resume.pdf"
              className="pixel-border font-mono bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm transition-colors"
            >
              <span className="hidden sm:inline">Download </span>Resume
            </a>

            <a
              href="https://github.com/edisonlovescodes"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border font-mono bg-card hover:bg-accent/20 text-foreground px-4 py-2 text-sm transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/edisonessien"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-border font-mono bg-card hover:bg-accent/20 text-foreground px-4 py-2 text-sm transition-colors"
            >
              LinkedIn
            </a>

            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
