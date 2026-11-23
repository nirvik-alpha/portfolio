import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "./index";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Project not found — Sadid Rafan" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Sadid Rafan` },
        { name: "description", content: project.desc },
        { property: "og:title", content: `${project.title} — Sadid Rafan` },
        { property: "og:description", content: project.desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft size={16} /> Back home
        </Link>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-16">
        {/* Hero */}
        <div className="relative flex min-h-[45vh] flex-col justify-center overflow-hidden">
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-10`}
          />
          <div className="container mx-auto px-6 py-12 md:py-24 relative">
            <div className="flex flex-col items-center text-center">
              <Link
                to="/"
                hash="projects"
                className="inline-flex items-center gap-2 h-9 px-3 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent transition mb-6"
              >
                <ArrowLeft size={16} /> Back to Projects
              </Link>
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
                {p.tag}
              </p>
              <h1 className="mb-3 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {p.title}
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="container mx-auto px-6 pb-12 md:pb-24">
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12">
            <div>
              <div
                className={`relative mb-8 aspect-video overflow-hidden rounded-xl border border-border ${p.image ? "bg-card" : `bg-gradient-to-br ${p.gradient}`}`}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:22px_22px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/90 font-bold text-3xl md:text-4xl tracking-tight">
                        {p.title}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-3">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{p.overview}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Key Achievements</h2>
                <ul className="space-y-3">
                  {p.achievements.map((a: string) => (
                    <li key={a} className="flex items-start text-muted-foreground">
                      <ArrowRight size={16} className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s: string) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {(p.github || p.live) && (
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                    Links
                  </p>
                  <div className="flex flex-col gap-2">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition"
                      >
                        <Github size={16} /> GitHub Repository
                      </a>
                    )}
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
