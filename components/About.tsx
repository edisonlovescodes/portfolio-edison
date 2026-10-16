export default function About() {
  return (
    <section id="about" className="about shell">
      <div>
        <p className="eyebrow">{"02 / > About.me"}</p>
        <h2>
          A biomedical foundation.
          <br />A computational approach.
        </h2>
      </div>
      <div>
        <p>
          I’m a biomedical engineering student at Drexel University with
          concentrations in bioinformatics and tissue engineering. I enjoy
          practical work: writing code, investigating data, and building tools
          that help make engineering problems easier to understand.
        </p>
        <p>
          My experience spans pharmaceutical manufacturing analytics at Merck,
          EEG and brain–computer interface research at Temple, and CAD work on
          an assistive neck brace for patients with ALS.
        </p>
        <dl className="education">
          <div>
            <dt>Degree</dt>
            <dd>B.S. Biomedical Engineering</dd>
          </div>
          <div>
            <dt>Graduation</dt>
            <dd>June 2027</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
