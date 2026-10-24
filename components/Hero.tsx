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
        Biomedical engineering student who builds software for health and biology
      </p>
      <div className="hero-bottom">
        <p>
          This is my portfolio. Below are three apps I built that you can use
          right now in your browser: a lung-nodule image classifier, a
          protein-sequence generator and a heart-signal (ECG) analyzer.
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
          See the apps ↓
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
