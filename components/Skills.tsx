const groups = [
  ["Languages", "Python, SQL, MATLAB, JavaScript, C, Go, Java"],
  [
    "Data & machine learning",
    "pandas, NumPy, SciPy, scikit-learn, PyTorch, TensorFlow, MNE",
  ],
  [
    "Software",
    "FastAPI, React, Streamlit, SQLite, PostgreSQL, Docker, Git, GitHub Actions",
  ],
  [
    "Engineering",
    "AutoCAD, SolidWorks, Autodesk Fusion, Seeq Data Lab, OSIsoft PI, Power BI",
  ],
];
export default function Skills() {
  return (
    <section id="skills" className="section shell">
      <p className="eyebrow">{"04 / > Skills.json"}</p>
      <h2>Tools I work with.</h2>
      <div className="skills-grid">
        {groups.map(([name, skills]) => (
          <div key={name}>
            <h3>{name}</h3>
            <p>{skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
