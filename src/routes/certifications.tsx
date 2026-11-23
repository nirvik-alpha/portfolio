import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { CERTIFICATIONS, CertificationCard } from "./index";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "All Certifications — Sadid Rafan" },
      { name: "description", content: "All verified certifications earned by Sadid Rafan." },
      { property: "og:title", content: "All Certifications — Sadid Rafan" },
      { property: "og:description", content: "Verified credentials and training." },
    ],
  }),
  component: AllCerts,
});

function AllCerts() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" hash="certifications" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition mb-6">
          <ArrowLeft size={16}/> Back home
        </Link>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">All Certifications</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Verified credentials and training that back up my technical work.</p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map(c => <CertificationCard key={c.slug} c={c}/>)}
        </div>
      </div>
    </div>
  );
}
