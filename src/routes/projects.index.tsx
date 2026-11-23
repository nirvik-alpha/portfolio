import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { PROJECTS, ProjectCard } from "./index";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "All Projects — Sadid Rafan" },
      { name: "description", content: "A complete list of projects by Sadid Rafan." },
      { property: "og:title", content: "All Projects — Sadid Rafan" },
      { property: "og:description", content: "Full project portfolio." },
    ],
  }),
  component: AllProjects,
});

const TABS = ["All", "Personal", "University"] as const;
type Tab = typeof TABS[number];

function AllProjects() {
  const [tab, setTab] = useState<Tab>("All");
  const filtered = PROJECTS.filter(p =>
    tab === "All" ? true : tab === "Personal" ? p.type === "personal" : p.type === "university"
  );
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" hash="projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition mb-6">
          <ArrowLeft size={16}/> Back home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">All Projects</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Every project I've built and shipped — from personal builds to university coursework.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${tab === t ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}>
              {t} <span className="ml-1 opacity-70">({t === "All" ? PROJECTS.length : PROJECTS.filter(p => (t === "Personal" ? p.type === "personal" : p.type === "university")).length})</span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => <ProjectCard key={p.slug} p={p}/>)}
        </div>
      </div>
    </div>
  );
}
