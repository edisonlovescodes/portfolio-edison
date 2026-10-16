import ThemeToggle from "./ThemeToggle";
export default function Navigation() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="navigation">
        <a className="wordmark" href="/">
          Edison<span>.dev</span>
          <i aria-hidden="true">_</i>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#projects">Projects</a>
          <a href="/#experience">Experience</a>
          <a className="nav-resume" href="/Edison_Essien_Resume.pdf">
            Resume ↗
          </a>
          <ThemeToggle />
        </nav>
      </header>
    </>
  );
}
