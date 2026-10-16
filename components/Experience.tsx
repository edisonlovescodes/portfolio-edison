const experiences = [
  {
    company: "Merck & Co., Inc.",
    role: "Global Science, Engineering and Commercialization Co-Op",
    period: "MAR — SEP 2026",
    highlights: [
      "Developed Python anomaly-detection workflows in Seeq Data Lab for pharmaceutical process signals.",
      "Engineered PI/Seeq features with batch identity and manufacturing process-phase context.",
      "Prepared anomaly scores, signal summaries and traceable CSV packages for expert review.",
    ],
  },
  {
    company: "National Institute for Coordinated Health Care",
    role: "Language Access Co-op",
    period: "MAR — SEP 2025",
    highlights: [
      "Researched language-access programs supporting healthcare communication.",
      "Organized findings, project records and program documentation.",
      "Coordinated activities with program and operations teams.",
    ],
  },
  {
    company: "Temple University School of Medicine",
    role: "Brain Computer Interface Research Assistant",
    period: "MAR — SEP 2024",
    highlights: [
      "Developed Python and MATLAB workflows for EEG processing and BCI research.",
      "Processed biomedical signals and developed classifier code for communication research.",
      "Used AutoCAD, SolidWorks and Autodesk Fusion for assistive neck-brace CAD work.",
    ],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="section shell">
      <div className="section-heading">
        <p className="eyebrow">{"03 / > Experience.log"}</p>
        <h2>Research. Industry. Engineering.</h2>
      </div>
      <div className="experience-list">
        {experiences.map((e) => (
          <article key={e.company}>
            <div>
              <p className="eyebrow">{e.period}</p>
              <h3>{e.company}</h3>
              <p className="role">{e.role}</p>
            </div>
            <ul>
              {e.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
