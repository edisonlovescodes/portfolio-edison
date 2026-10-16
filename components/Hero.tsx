export default function Hero() {
  return (
    <section className="hero shell">
      <div className="hero-label">
        <span>{"// WELCOME TO MY PORTFOLIO"}</span>
        <span>BIOMEDICAL ENGINEERING / DATA / SOFTWARE</span>
      </div>
      <h1>
        <span className="code-bracket">{"<Edison"}</span>
        <br />
        <span>Essien</span>
        <span className="code-bracket">{" />"}</span>
      </h1>
      <p className="hero-role">
        Biomedical engineering student & software builder
      </p>
      <div className="hero-bottom">
        <p>
          I connect biomedical engineering with code—from manufacturing process
          data to scientific software and assistive technology.
        </p>
        <div>
          <p className="availability">
            <i /> Drexel University · Class of 2027
          </p>
          <p>Seeking full-time roles after June graduation.</p>
        </div>
      </div>
      <div className="hero-actions">
        <a className="button" href="#projects">
          Explore projects ↓
        </a>
        <a className="text-link" href="#contact">
          Get in touch ↗
        </a>
      </div>
      <div className="hero-rule">
        <span>byedison.com</span>
        <span>Philadelphia, PA · Open to relocation</span>
      </div>
    </section>
  );
}
