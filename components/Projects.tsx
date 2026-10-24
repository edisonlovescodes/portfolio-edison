import Image from "next/image";
import { projects } from "@/lib/projects";
export default function Projects() {
  return (
    <section id="projects" className="section shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{"01 / > Projects.log"}</p>
          <h2>Projects you can try</h2>
        </div>
        <p>
          The first three run live on this site. Click &ldquo;Try it live&rdquo; to
          use one, or &ldquo;Project details&rdquo; to see how it works.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <article className="project" key={p.slug}>
            <a
              className={"project-visual " + p.slug}
              href={"/projects/" + p.slug + "/"}
              aria-label={"Explore " + p.name}
            >
              {p.image ? (
                <Image
                  src={"/images/" + p.image}
                  width={1280}
                  height={900}
                  alt={p.name + " application interface"}
                  unoptimized
                />
              ) : (
                <div className="transport-visual">
                  <span>Coating → Release → Tissue transport</span>
                  <svg
                    viewBox="0 0 500 220"
                    role="img"
                    aria-label="Conceptual transport curves, not an institutional device design"
                  >
                    <path
                      d="M70 35V185 M95 45Q200 110 95 175 M140 25Q320 110 140 195 M210 10Q450 110 210 210"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M70 110H450"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="5 8"
                    />
                  </svg>
                  <small>Conceptual illustration · Ongoing senior design</small>
                </div>
              )}
            </a>
            <div className="project-meta">
              <span>{p.category}</span>
              <span>{p.n}</span>
            </div>
            <h3>
              <a href={"/projects/" + p.slug + "/"}>{p.name} ↗</a>
            </h3>
            <p>{p.description}</p>
            <div className="project-stat">
              <strong>{p.stat}</strong>
              <span>{p.unit}</span>
            </div>
            <div className="project-links">
              {p.live && <a href={p.live}>Try it live →</a>}
              <a href={"/projects/" + p.slug + "/"}>Project details →</a>
              {p.repo && (
                <a
                  href={"https://github.com/edisonlovescodes/" + p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="other-work">
        <span>More software repositories</span>
        <a
          href="https://github.com/edisonlovescodes/courtpulse"
          target="_blank"
          rel="noopener noreferrer"
        >
          CourtPulse ↗
        </a>
        <a
          href="https://github.com/edisonlovescodes/sora-whop-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sora Whop App ↗
        </a>
        <a
          href="https://github.com/edisonlovescodes/TweetTracker"
          target="_blank"
          rel="noopener noreferrer"
        >
          TweetTracker ↗
        </a>
      </div>
    </section>
  );
}
