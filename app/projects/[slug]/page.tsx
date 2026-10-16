import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import { projects } from "@/lib/projects";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p?.name ?? "Project",
    description: p?.description,
    alternates: { canonical: "/projects/" + slug + "/" },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <>
      <Navigation />
      <main id="main" className="case shell">
        <a className="text-link" href="/#projects">
          ← All projects
        </a>
        <p className="eyebrow">{p.category}</p>
        <h1>{p.name}</h1>
        <p className="case-deck">{p.description}</p>
        <p className="case-stack">{p.stack}</p>
        {p.image && (
          <figure className={"case-image " + p.slug}>
            <Image
              src={"/images/" + p.image}
              width={1280}
              height={900}
              alt={
                p.name + " application screenshot from the October 2026 refresh"
              }
              unoptimized
            />
            <figcaption>
              Application screenshot from the October 2026 refresh.
            </figcaption>
          </figure>
        )}
        <section className="case-body">
          <div>
            <h2>{p.intro}</h2>
            <p className="case-stat">
              {p.stat}
              <span>{p.unit}</span>
            </p>
          </div>
          <div>
            <p>{p.body}</p>
            <h3>Implementation & scope</h3>
            <ul>
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <h3>Reading the results</h3>
            <p>{p.boundary}</p>
            {p.repo && (
              <a
                className="button"
                href={"https://github.com/edisonlovescodes/" + p.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code & local setup ↗
              </a>
            )}
          </div>
        </section>
        <ol className="flow">
          {p.flow.map((s, i) => (
            <li key={s}>
              <span>0{i + 1}</span>
              {s}
            </li>
          ))}
        </ol>
        <a className="text-link" href="/#projects">
          Back to selected projects ↑
        </a>
      </main>
    </>
  );
}
