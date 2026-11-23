import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";
import { EVENTS } from "./index";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = EVENTS.find((e) => e.slug === params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return { meta: [{ title: "Event not found" }, { name: "robots", content: "noindex" }] };
    const { event } = loaderData;
    return {
      meta: [
        { title: `${event.title} — Sadid Rafan` },
        { name: "description", content: event.desc },
        { property: "og:title", content: event.title },
        { property: "og:description", content: event.desc },
      ],
    };
  },
  component: EventDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Event not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft size={16} /> Back home
        </Link>
      </div>
    </div>
  ),
});

function EventDetail() {
  const { event: e } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className={`relative overflow-hidden bg-gradient-to-br ${e.gradient}`}>
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="relative max-w-5xl mx-auto px-6 py-20 text-center">
          <Link
            to="/"
            hash="events"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft size={16} /> Back to Events
          </Link>
          <span className="inline-block text-xs font-semibold text-white bg-white/15 border border-white/25 px-3 py-1 rounded-md">
            {e.tag}
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {e.title}
          </h1>
          <p className="mt-3 text-white/80 text-sm flex items-center justify-center gap-3 flex-wrap">
            <Calendar size={14} /> {e.year} <span className="opacity-60">·</span>{" "}
            <MapPin size={14} /> {e.location}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">{e.overview}</p>

        {e.detailImages?.length ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {e.detailImages.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <img
                  src={img}
                  alt={`${e.title} image ${index + 1}`}
                  className="w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        ) : null}

        <h2 className="mt-10 text-2xl font-bold">What I Took Away</h2>
        <ul className="mt-4 space-y-3">
          {e.takeaways.map((t: string) => (
            <li key={t} className="flex items-start gap-2 text-muted-foreground">
              <ArrowRight size={16} className="text-primary mt-1 shrink-0" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
