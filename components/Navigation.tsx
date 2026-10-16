import ThemeToggle from "./ThemeToggle";
export default function Navigation() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="navigation">
        <a className="wordmark" href="/">
          byedison<span>.com</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="/#projects">Projects</a>
          <a className="nav-experience" href="/#experience">
            Experience
          </a>
          <a
            className="nav-social"
            href="https://github.com/edisonlovescodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="nav-social"
            href="https://www.linkedin.com/in/edisonessien"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="nav-resume"
            href="/Edison_Essien_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
          <ThemeToggle />
        </nav>
      </header>
    </>
  );
}
