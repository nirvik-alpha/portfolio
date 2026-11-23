import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/mypic.jpeg";
import resumePdf from "@/assets/7_July_2026_Sadid_Rafan.pdf";
import mainpageImg from "@/assets/mainpage.png";
import doctorbhaiCover from "@/assets/doctorbhaicover.png";
import wowfoodImg from "@/assets/wowfood.png";
import computerMartImg from "@/assets/computer.png";
import shopifyImg from "@/assets/shopify.png";
import contactlyImg from "@/assets/contactly.png";
import libraryImg from "@/assets/library.png";
import schoolImg from "@/assets/school.png";
import microservicesImg from "@/assets/microservices.png";
import austImg from "@/assets/aust55.png";
import dicImg from "@/assets/dic55.png";
import pathaoImg from "@/assets/pathao.jpeg";
import sadidRafanCcwcImg from "@/assets/Sadid Rafan-IEEE CCWC23.jpg";
import jugImg from "@/assets/certificates/jug.jpg";
import jugbdImg from "@/assets/certificates/jugbd.jpg";
import itqaanImg from "@/assets/certificates/itqaan.png";
import softSkillsImg from "@/assets/certificates/soft skills certificate .jpg";
import microsoftCertImg from "@/assets/certificates/microsoft.png";
import kodekloudCertImg from "@/assets/certificates/kodekloud.png";
import hackerrankCertImg from "@/assets/certificates/hackerrank.png";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  ExternalLink,
  Award,
  Code2,
  Menu,
  X,
  Sun,
  Moon,
  Trophy,
  GraduationCap,
  FileText,
  ArrowUpRight,
  Star,
  ShieldCheck,
  Calendar,
  MapPin,
  Briefcase,
} from "lucide-react";

function SkillIcon({
  slug,
  name,
  color = "8b7fff",
}: {
  slug?: string;
  name: string;
  color?: string;
}) {
  const [err, setErr] = useState(false);
  if (!slug || err) return <Code2 size={18} className="text-primary" />;
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt={name}
      width={20}
      height={20}
      className="w-5 h-5 object-contain"
      onError={() => setErr(true)}
    />
  );
}

function CodeforcesLogo({ size = 32 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-label="Codeforces">
      <rect x="4.5" y="7.5" width="4" height="12" rx="0.9" fill="#F44336" />
      <rect x="10" y="4.5" width="4" height="15" rx="0.9" fill="#1F8ACB" />
      <rect x="15.5" y="10.5" width="4" height="9" rx="0.9" fill="#FFCA28" />
    </svg>
  );
}

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefers =
      typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored ? stored === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };
  return { dark, toggle };
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sadid Rafan — Software Engineer & Full Stack Developer" },
      {
        name: "description",
        content:
          "Sadid Rafan — Software engineer building full-stack applications and enterprise systems. Portfolio, projects, and experience.",
      },
      { property: "og:title", content: "Sadid Rafan — Software Engineer" },
      {
        property: "og:description",
        content: "Portfolio of Sadid Rafan — full-stack developer, systems thinker.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const ROLES = ["Software Engineer", "Full Stack Developer", "Systems Thinker"];

function useTypewriter(words: string[], speed = 90, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((i + 1) % words.length);
      return;
    }
    const t = setTimeout(
      () => {
        setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function BrandLogo() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-1.5 font-black text-lg tracking-tight"
    >
      <span className="text-primary/80 font-mono">&lt;</span>
      <span className="bg-gradient-to-r from-primary via-fuchsia-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent group-hover:bg-[position:100%_center] transition-[background-position] duration-700">
        Sadid Rafan
      </span>
      <span className="text-primary/80 font-mono">/&gt;</span>
    </Link>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#problem-solving", label: "Problem Solving" },
    { href: "#certifications", label: "Certifications" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <BrandLogo />
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-full hover:bg-accent hover:text-foreground transition"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-primary transition"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-2 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SideSocials() {
  return (
    <div className="hidden lg:flex flex-col gap-3 fixed right-6 top-1/2 -translate-y-1/2 z-40">
      {[
        { Icon: Github, href: "https://github.com/nirvik-alpha", label: "GitHub" },
        {
          Icon: Linkedin,
          href: "https://www.linkedin.com/in/sadid-rafan-5721561a4/",
          label: "LinkedIn",
        },
        { Icon: Mail, href: "mailto:sadidrafan094@gmail.com", label: "Email" },
      ].map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}

function Hero() {
  const role = useTypewriter(ROLES);
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <p className="text-sm font-medium text-primary mb-4 tracking-wide">
            👋 Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Hi, I'm
            <br />
            Sadid Rafan
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-bold text-primary min-h-[2.5rem]">
            {role}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl leading-relaxed">
            Software engineer crafting full-stack and enterprise Java applications. Passionate about
            clean architecture, product thinking, and building things that make an impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition shadow-lg shadow-primary/20"
            >
              View My Work <ArrowRight size={16} />
            </a>
            <a
              href={resumePdf}
              download="Sadid_Rafan_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card font-medium hover:bg-accent transition"
            >
              <Download size={16} /> Resume
            </a>
          </div>
          <div className="mt-8 flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/nirvik-alpha" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/sadid-rafan-5721561a4/" },
              { Icon: Mail, href: "mailto:sadidrafan094@gmail.com" },
              { Icon: Phone, href: "tel:+10000000000" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent blur-3xl rounded-full" />
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
            <img
              src={heroImg}
              alt="Sadid Rafan"
              className="w-full h-full object-cover"
              width={1024}
              height={1024}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
  muted,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
  muted?: "50" | "30";
}) {
  const bg = muted === "50" ? "bg-muted/50" : muted === "30" ? "bg-muted/30" : "";
  return (
    <section id={id} className={`py-24 px-6 ${bg}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-primary font-semibold uppercase tracking-widest">{kicker}</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h2>
          <div className="mt-4 h-1 w-16 bg-primary rounded-full mx-auto" />
        </div>
        {children}
      </div>
    </section>
  );
}

export type Project = {
  slug: string;
  title: string;
  tag: string;
  type: "personal" | "university";
  desc: string;
  stack: string[];
  bullets: string[];
  gradient: string;
  github?: string;
  live?: string;
  image?: string;
  overview: string;
  achievements: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "roomchat",
    title: "RoomChat",
    tag: "Full Stack",
    type: "personal",
    desc: "Real-time chat platform with multiple rooms via WebSocket. Secure auth and persistent messaging.",
    stack: ["Java", "Spring Boot", "React", "WebSocket", "MongoDB", "Tailwind"],
    bullets: [
      "Real-time multi-room chat over WebSocket",
      "Secure auth and message persistence with Spring Boot + MongoDB",
    ],
    gradient: "from-indigo-500 to-purple-500",
    image: mainpageImg,
    github: "https://github.com/nirvik-alpha/RoomChat",
    overview:
      "Real-time chat platform supporting multiple chat rooms via WebSocket communication with a responsive React front-end and Spring Boot backend.",
    achievements: [
      "Built REST APIs with Spring Boot and MongoDB for secure authentication and message persistence",
      "Implemented WebSocket-based real-time chat supporting multiple concurrent rooms",
      "Designed a responsive UI with dynamic room creation and smooth message updates",
    ],
  },
  {
    slug: "contactly",
    title: "Contactly",
    tag: "Full Stack",
    type: "personal",
    desc: "Secure contact manager with OAuth (email, Google, GitHub). Profile images, search, pagination, light/dark dashboard.",
    stack: [
      "Java",
      "Spring Boot",
      "JPA",
      "OAuth",
      "Thymeleaf",
      "Spring Security",
      "JavaScript",
      "Tailwind",
      "MySQL",
    ],
    bullets: [
      "OAuth login with email/password, Google & GitHub",
      "CRUD with search, sorting, pagination and light/dark dashboard",
    ],
    gradient: "from-amber-500 to-rose-500",
    image: contactlyImg,
    github: "https://github.com/nirvik-alpha/Contactly",
    overview:
      "Secure contact management system with multi-provider authentication (email/password, Google, GitHub), CRUD with profile images, search/sort/pagination, and a light/dark dashboard.",
    achievements: [
      "Implemented email, Google and GitHub OAuth with Spring Security",
      "Built CRUD contact operations with profile details, images and links",
      "Added search, sorting and pagination for efficient contact management",
      "Designed a responsive light/dark dashboard for a smooth user experience",
    ],
  },
  {
    slug: "microservices-shopping-cart",
    title: "Micro-services Shopping Cart",
    tag: "Micro-services",
    type: "personal",
    desc: "Distributed shopping cart with independent Product, Order and Payment micro-services, Eureka discovery and API Gateway.",
    stack: ["Java", "Spring Boot", "Spring Cloud", "Eureka", "API Gateway", "Docker", "REST API"],
    bullets: [
      "Independent Product, Order and Payment services",
      "Eureka discovery, Cloud Gateway and Docker Compose",
    ],
    gradient: "from-violet-500 to-fuchsia-500",
    image: microservicesImg,
    github: "https://github.com/nirvik-alpha/microservices-shopping-cart",
    overview:
      "A distributed shopping cart system with independent micro-services for Product, Order and Payment, tied together with service discovery, an API gateway, and containerized deployment.",
    achievements: [
      "Architected independent micro-services for Product, Order and Payment",
      "Implemented service discovery with Eureka and centralized configuration with Config Server",
      "Routed traffic through Spring Cloud Gateway",
      "Containerized all services with Docker and Docker Compose for local deployment",
    ],
  },
  {
    slug: "doctorbhai",
    title: "DoctorBhai",
    tag: "Android",
    type: "personal",
    desc: "Healthcare Android app — doctor search, appointments, medicine info, BMI calculator, Google Maps for ambulances.",
    stack: ["Android", "Java", "Google Maps API", "Firebase"],
    bullets: [
      "Doctor search, appointments and medicine information",
      "Google Maps integration for locating ambulances",
    ],
    gradient: "from-emerald-500 to-teal-500",
    image: doctorbhaiCover,
    github: "https://github.com/nirvik-alpha/DoctorBhai",
    overview:
      "Healthcare Android application offering doctor search, appointment booking, medicine information, a BMI calculator, and Google Maps integration for locating nearby ambulances.",
    achievements: [
      "Built doctor search and appointment booking flows",
      "Integrated Google Maps API for locating ambulances",
      "Implemented BMI calculator and medicine information modules",
      "Backed by Firebase for auth and realtime data",
    ],
  },
  {
    slug: "shopify-android",
    title: "Shopify (Android)",
    tag: "Android",
    type: "university",
    desc: "E-commerce Android app with Firebase auth, product categories, and order management.",
    stack: ["Android", "Java", "Firebase"],
    bullets: ["Firebase auth and product management", "Category browsing and order handling"],
    gradient: "from-sky-500 to-blue-500",
    image: shopifyImg,
    github: "https://github.com/nirvik-alpha/shopify",
    overview:
      "An e-commerce Android application with Firebase-backed authentication, product categories, cart, and order management.",
    achievements: [
      "Built product listing with categories and details",
      "Integrated Firebase auth and Firestore-based ordering",
      "Implemented cart and order tracking flows",
    ],
  },
  {
    slug: "wowfood",
    title: "Wowfood",
    tag: "Android",
    type: "university",
    desc: "Food ordering Android app built as a university project with menu browsing and order placement.",
    stack: ["Android", "Java", "Firebase"],
    bullets: ["Menu browsing and order placement", "Firebase-backed data and auth"],
    gradient: "from-orange-500 to-red-500",
    image: wowfoodImg,
    github: "https://github.com/nirvik-alpha/Wowfood",
    overview:
      "A food ordering Android app built as a university project featuring menu browsing, cart, and order placement backed by Firebase.",
    achievements: [
      "Designed menu and category screens",
      "Implemented order placement and history",
      "Integrated Firebase for auth and data",
    ],
  },
  {
    slug: "mylibrary",
    title: "MyLibrary",
    tag: "Android",
    type: "university",
    desc: "Library management Android app for browsing books and tracking borrows.",
    stack: ["Android", "Java", "SQLite"],
    bullets: ["Searchable book catalog with local persistence", "Borrow and return tracking"],
    gradient: "from-yellow-500 to-orange-500",
    image: libraryImg,
    github: "https://github.com/nirvik-alpha/MyLibrary",
    overview:
      "A library management Android app supporting book cataloging, search, and borrow tracking, backed by local SQLite persistence.",
    achievements: [
      "Implemented searchable book catalog",
      "Added local persistence with SQLite",
      "Built borrow and return tracking flows",
    ],
  },
  {
    slug: "computer-mart",
    title: "ComputerMart",
    tag: "Android",
    type: "university",
    desc: "Android marketplace for computer parts and accessories with cart and order management.",
    stack: ["Android", "Java", "Firebase"],
    bullets: ["Product catalog for computer parts", "Cart and order management"],
    gradient: "from-fuchsia-500 to-purple-500",
    image: computerMartImg,
    github: "https://github.com/nirvik-alpha/ComputerMart",
    overview:
      "Android marketplace app for computer parts and accessories with product browsing, cart, and order management backed by Firebase.",
    achievements: [
      "Product catalog with category filtering",
      "Cart and checkout flow",
      "Firebase auth and Firestore-backed orders",
    ],
  },
  {
    slug: "e-school",
    title: "E-School",
    tag: "Android",
    type: "university",
    desc: "School management Android app with role-based screens for students, teachers, and admins.",
    stack: ["Android", "Java", "Firebase"],
    bullets: [
      "Role-based screens for students, teachers, admins",
      "Firebase auth and realtime data",
    ],
    gradient: "from-cyan-500 to-blue-500",
    image: schoolImg,
    github: "https://github.com/nirvik-alpha/E-school",
    overview:
      "School management Android app with role-based dashboards for students, teachers, and administrators, backed by Firebase.",
    achievements: [
      "Role-based navigation and dashboards",
      "Firebase auth and realtime data sync",
      "Class, notice and grade management",
    ],
  },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border-2 border-border bg-card overflow-hidden hover:border-primary transition-colors duration-300">
      <div
        className={`h-40 relative overflow-hidden ${p.image ? "bg-card" : `bg-gradient-to-br ${p.gradient}`}`}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.title} card preview`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:20px_20px]" />
          </>
        )}
        <div className="absolute top-3 right-3">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md backdrop-blur ${p.type === "personal" ? "bg-primary/25 text-white border border-primary/40" : "bg-white/15 text-white border border-white/25"}`}
          >
            {p.type === "personal" ? "Personal" : "University"}
          </span>
        </div>
        <div className="absolute bottom-3 left-4 text-white/90 font-semibold text-sm">{p.tag}</div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold">{p.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 4).map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
            >
              {s}
            </span>
          ))}
          {p.stack.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-md border border-border text-foreground font-medium">
              +{p.stack.length - 4}
            </span>
          )}
        </div>
        <ul className="mt-4 space-y-2 flex-1">
          {p.bullets.map((b) => (
            <li key={b} className="text-sm text-muted-foreground flex items-start">
              <ArrowRight size={14} className="text-primary mt-1 mr-2 flex-shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-2">
          <Link
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
          >
            View Details <ArrowRight size={14} />
          </Link>
          <div className="flex-1" />
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-md flex items-center justify-center text-foreground hover:bg-accent transition"
            >
              <Github size={16} />
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
              className="w-9 h-9 rounded-md flex items-center justify-center text-foreground hover:bg-accent transition"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const featured = PROJECTS.slice(0, 6);
  return (
    <Section id="projects" kicker="Featured Work" title="Projects" muted="50">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/60 bg-card text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition"
        >
          View All Projects <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}

export { ProjectCard };

const EXPERIENCE = [
  {
    role: "Junior Software Engineer",
    org: "Techno Haven Company Ltd.",
    period: "Apr 2024 – Present",
    tech: [
      "Groovy",
      "Grails",
      "Java",
      "Spring Boot",
      "Spring Framework",
      "JavaScript",
      "SQL Server",
      "Jasper Reports",
    ],
    points: [
      "Developed and delivered 5+ production-grade modules for the Bangladesh Export Processing Zone Authority (BEPZA) enterprise system, implementing end-to-end front-end and back-end functionality, business workflows, validations and seamless integration across interconnected production modules.",
      "Took ownership of the legacy Company Permission module for the BEPZA enterprise system, delivering multiple production enhancements including RBAC, multi-stage approval workflows, business validation, migration from legacy Jasper Report-based document generation to dynamic GSP-based PDF templates and historical data migration while managing cross-module dependencies and maintaining backward compatibility across high-volume historical enterprise records.",
      "Designed, developed and maintained 20+ dynamic Jasper Reports across multiple BEPZA modules, automating document generation and standardizing business reports across enterprise workflows.",
      "Diagnosed and resolved production-critical issues involving data inconsistencies, application errors, SQL query performance bottlenecks, and legacy system defects, ensuring stable production operations.",
      "Conducting research and hands-on exploration of enterprise Java frameworks (Broadleaf Commerce, Apache OFBiz), Directus CMS and reactive programming with Spring WebFlux, supporting internal training and technology evaluation initiatives.",
    ],
  },
];

function Experience() {
  return (
    <Section id="experience" kicker="My Journey" title="Experience">
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
        {EXPERIENCE.map((e, i) => (
          <div key={i} className="relative pl-14 pb-10 last:pb-0">
            <div className="absolute left-1 top-2 w-7 h-7 rounded-full bg-primary/15 border-2 border-primary flex items-center justify-center ring-4 ring-background shadow-md">
              <Briefcase size={13} className="text-primary" />
            </div>
            <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/60 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold">{e.role}</h3>
                <span className="text-xs text-muted-foreground font-mono">{e.period}</span>
              </div>
              <p className="text-primary font-medium text-sm mt-0.5">{e.org}</p>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {e.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Responsibilities
              </p>
              <ul className="mt-2 space-y-2.5">
                {e.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed"
                  >
                    <ArrowRight size={14} className="text-primary mt-1 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

type Skill = { name: string; slug?: string; color?: string };
const SKILL_GROUPS: Record<string, Skill[]> = {
  "Languages & Frameworks": [
    { name: "C++", slug: "cplusplus" },
    { name: "Java", slug: "openjdk" },
    { name: "Spring Boot", slug: "springboot" },
    { name: "Spring Framework", slug: "spring" },
    { name: "JavaScript", slug: "javascript" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "Express.js", slug: "express" },
    { name: "React", slug: "react" },
    { name: "Angular", slug: "angular" },
  ],
  "Databases & ORM": [
    { name: "MySQL", slug: "mysql" },
    { name: "MS SQL Server", slug: "microsoftsqlserver" },
    { name: "Oracle (PL/SQL)", slug: "oracle" },
    { name: "Firebase", slug: "firebase" },
    { name: "SQLite", slug: "sqlite" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "Redis", slug: "redis" },
  ],
  "DevOps / Infra": [
    { name: "Docker", slug: "docker" },
    { name: "Jenkins", slug: "jenkins" },
    { name: "CI/CD", slug: "githubactions" },
    { name: "Linux", slug: "linux" },
    { name: "Version Control (Git)", slug: "git" },
    { name: "SSH", slug: "openssh" },
  ],
  Tools: [
    { name: "Git", slug: "git" },
    { name: "GitHub", slug: "github" },
    { name: "VS Code", slug: "visualstudiocode" },
    { name: "IntelliJ IDEA", slug: "intellijidea" },
    { name: "Postman", slug: "postman" },
    { name: "Figma", slug: "figma" },
    { name: "Linux", slug: "linux" },
  ],
  Others: [
    { name: "Data Structures & Algorithms" },
    { name: "OOP" },
    { name: "SOLID" },
    { name: "Design Patterns" },
    { name: "SDLC" },
    { name: "System Design" },
    { name: "Micro-services" },
    { name: "WebSocket" },
    { name: "JWT" },
  ],
};

function Skills() {
  const [tab, setTab] = useState<keyof typeof SKILL_GROUPS>("Languages & Frameworks");
  return (
    <Section id="skills" kicker="Toolbox" title="Technical Skills">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {Object.keys(SKILL_GROUPS).map((k) => (
          <button
            key={k}
            onClick={() => setTab(k as keyof typeof SKILL_GROUPS)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${tab === k ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}
          >
            {k}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {SKILL_GROUPS[tab].map((s) => (
          <div
            key={s.name}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-card border border-border hover:border-primary hover:-translate-y-0.5 transition-all"
          >
            <SkillIcon slug={s.slug} name={s.name} />
            <span className="text-sm font-medium">{s.name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

const ACHIEVEMENTS = [
  {
    title: "Cefalo Codefiesta Intra AUST Programming Contest (IAPC)",
    highlights: [{ text: "Team-Game_Bounce_Back" }, { text: "22nd", suffix: " among 70 Teams" }],
    location: "Dhaka, Bangladesh",
    period: "AUST",
  },
  {
    title: "Intra AUST Software Exhibition Competition",
    highlights: [
      { text: "Team-Black Coders" },
      { prefix: "Project — ", text: "Breeze Blow" },
      { text: "2nd Runner Up", suffix: " among 12 Teams" },
    ],
    location: "Dhaka, Bangladesh",
    period: "AUST",
  },
  {
    title: "ICPC Dhaka Regional Online Preliminary Round",
    highlights: [
      { text: "Participated 2021 & 2022", suffix: " (Team: " },
      { text: "AUST_Codeshedding", suffix: ")" },
    ],
    location: "Dhaka, Bangladesh",
    period: "2021 & 2022",
  },
  {
    title: "CodeSamurai 2022 Preliminary Round",
    highlights: [
      { text: "Ranked 210th", suffix: " among 510+ Teams (Team: " },
      { text: "AUST_Codeshedding", suffix: ")" },
    ],
    location: "Bangladesh",
    period: "2022",
  },
  {
    title: "Intra AUST Programming Contest Spring-21",
    highlights: [{ text: "Ranked 32nd", suffix: " among 100 Participants (Individual)" }],
    location: "Dhaka, Bangladesh",
    period: "Spring 2021",
  },
  {
    title: "Intra AUST Programming Contest Fall-20",
    highlights: [{ text: "Ranked 36th", suffix: " among 100 Participants (Individual)" }],
    location: "Dhaka, Bangladesh",
    period: "Fall 2020",
  },
  {
    title: "",
    highlights: [
      {
        text: "Samsung R&D Code Contest 2022, Google Code Jam, Google Kick Start, Codegoda 2023",
        suffix: " — Participated",
      },
    ],
    location: "Global",
    period: "2022-2023",
  },
];

function Achievements() {
  return (
    <Section id="achievements" kicker="Milestones" title="Achievements" muted="30">
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-border" />
        {ACHIEVEMENTS.map((a, i) => (
          <div key={i} className="relative pl-16 pb-5 last:pb-0 group">
            <div className="absolute left-0 top-3 w-10 h-10 rounded-full bg-card border-2 border-primary/60 flex items-center justify-center shadow-md hover:scale-110 hover:rotate-6 hover:border-primary hover:bg-primary/15 hover:shadow-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <Trophy
                size={16}
                className="text-primary transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="rounded-xl border border-border bg-card px-5 py-4 flex flex-wrap items-start justify-between gap-3 hover:border-primary/60 transition-colors">
              <p className="text-sm md:text-[15px] leading-relaxed flex-1 min-w-0">
                {a.title && <span className="font-medium">{a.title} </span>}
                {a.highlights.map((h, j) => (
                  <span key={j}>
                    {j > 0 && !h.prefix && " "}
                    {h.prefix && <span className="text-muted-foreground">{h.prefix}</span>}
                    <span className="text-primary font-medium">{h.text}</span>
                    {h.suffix && <span className="text-muted-foreground">{h.suffix}</span>}
                  </span>
                ))}
              </p>
              <div className="text-right text-xs font-mono text-muted-foreground shrink-0">
                <div>{a.location}</div>
                <div>{a.period}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const PUBLICATIONS = [
  {
    badge: "Best Paper Award — IEEE CCWC 2023",
    title:
      "Informational Query Detection on Social Media Posts in Bengali Language Using Machine Learning And Transfer Learning Techniques",
    venue: "Published at IEEE CCWC 2023",
    subVenue:
      "2023 IEEE 13th Annual Computing and Communication Workshop and Conference — Virtual Conference",
    link: "https://ieeexplore.ieee.org/",
    linkLabel: "View on IEEE Xplore",
    conference: "IEEE CCWC 2023",
    conferenceSub: "VIRTUAL CONFERENCE",
    conferenceFooter: "2023 IEEE 13TH ANNUAL COMPUTING AND COMMUNICATION WORKSHOP AND CONFERENCE",
    image: sadidRafanCcwcImg,
  },
];

function Publications() {
  return (
    <Section id="publications" kicker="Research" title="Publication">
      <div className="max-w-5xl mx-auto space-y-6">
        {PUBLICATIONS.map((p, i) => (
          <div key={i} className="relative rounded-xl border border-border bg-card overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: "oklch(0.85 0.17 90)" }}
            />
            <div className="grid md:grid-cols-[1fr_460px] gap-6 p-6 md:p-8 pl-8">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold"
                  style={{ background: "oklch(0.85 0.17 90 / 0.15)", color: "oklch(0.85 0.17 90)" }}
                >
                  <Award size={12} /> {p.badge}
                </div>
                <h3 className="mt-4 text-lg md:text-xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-foreground/90">{p.venue}</p>
                <p className="mt-1 text-xs italic text-muted-foreground">{p.subVenue}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-mono hover:underline"
                  style={{ color: "oklch(0.85 0.17 90)" }}
                >
                  <ArrowRight size={14} /> {p.linkLabel}
                </a>
              </div>
              <div className="rounded-lg bg-background/60 p-5 flex items-center justify-center text-center">
                {p.image ? (
                  <img
                    src={p.image}
                    alt="Sadid Rafan IEEE CCWC23"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const EDUCATION = [
  {
    school: "Ahsanullah University of Science and Technology",
    degree: "Bachelor of Science (B.Sc.)",
    field: "Computer Science and Engineering",
    period: "January 2019 — July 2023",
    grade: "CGPA: 3.14 / 4.00",
    accent: "oklch(0.75 0.17 145)",
    initials: "AUST",
    logo: austImg,
    link: "https://www.aust.edu",
  },
  {
    school: "Dhaka Imperial College",
    degree: "Higher Secondary School Certificate (H.S.C.)",
    field: "Science",
    period: "2016 — 2018",
    grade: "GPA: 4.83 / 5.00",
    accent: "oklch(0.78 0.17 65)",
    initials: "DIC",
    logo: dicImg,
    link: "#",
  },
];

function Education() {
  return (
    <Section id="education" kicker="Education" title="Academic Background" muted="30">
      <div className="max-w-5xl mx-auto space-y-5">
        {EDUCATION.map((e, i) => (
          <div key={i} className="relative rounded-xl border border-border bg-card overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: e.accent }} />
            <div className="flex flex-col sm:flex-row gap-5 p-6 pl-8 items-start">
              <div
                className="w-24 h-full flex items-center justify-center shrink-0 overflow-hidden bg-transparent"
                style={{ color: e.accent, backgroundColor: "transparent" }}
              >
                {e.logo ? (
                  <img
                    src={e.logo}
                    alt={`${e.initials} logo`}
                    className="max-h-full w-auto object-contain bg-transparent"
                  />
                ) : (
                  <span className="font-bold text-sm">{e.initials}</span>
                )}
              </div>
              <div className="flex-1">
                <a
                  href={e.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-lg font-semibold hover:underline"
                  style={{ color: e.accent }}
                >
                  {e.school} <ArrowUpRight size={16} />
                </a>
                <div className="mt-2 space-y-0.5 text-sm text-foreground/90">
                  <div>{e.degree}</div>
                  <div>{e.field}</div>
                  <div>{e.period}</div>
                  <div>{e.grade}</div>
                </div>
              </div>
              <GraduationCap size={20} className="text-muted-foreground hidden sm:block" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export const PROBLEM_SOLVING = [
  {
    name: "Codeforces",
    custom: "codeforces",
    rating: "1145",
    note: "600+ Problems · 78+ Contests",
    handle: "Xcoder123",
    url: "https://codeforces.com/profile/Xcoder123",
  },
  {
    name: "CodeChef",
    slug: "codechef",
    color: "5b4638",
    rating: "1545",
    note: "2 Star · 100+ Problems",
    handle: "nirvik094",
    url: "https://www.codechef.com/users/nirvik094",
  },
  {
    name: "LeetCode",
    slug: "leetcode",
    color: "ffa116",
    rating: "1426",
    note: "350+ DSA Problems",
    handle: "RafanX",
    url: "https://leetcode.com/RafanX",
  },
  {
    name: "GeeksforGeeks",
    slug: "geeksforgeeks",
    color: "2f8d46",
    rating: "190+",
    note: "DSA Problems Solved",
    handle: "sadidrafan094",
    url: "https://auth.geeksforgeeks.org/user/sadidrafan094",
  },
];

function ProblemSolving() {
  return (
    <Section
      id="problem-solving"
      kicker="Competitive Programming"
      title="Problem Solving"
      muted="30"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {PROBLEM_SOLVING.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border-2 border-border bg-card p-6 text-center hover:border-primary transition-colors"
          >
            <div className="mx-auto w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-4 group-hover:border-primary/60 transition">
              {p.custom === "codeforces" ? (
                <CodeforcesLogo size={30} />
              ) : (
                <img
                  src={`https://cdn.simpleicons.org/${p.slug}/${p.color}`}
                  alt={p.name}
                  className="w-8 h-8 object-contain"
                />
              )}
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-foreground">{p.name}</p>
            <p className="mt-2 text-3xl font-extrabold text-primary tracking-tight">{p.rating}</p>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.note}</p>
            <p className="mt-3 text-xs font-mono text-primary/90 group-hover:underline">
              {p.handle}
            </p>
          </a>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground italic">
        * Numbers shown are max rating, except GeeksforGeeks which reflects total problems solved.
      </p>
      <div className="mt-8 max-w-6xl mx-auto rounded-2xl border-2 border-border bg-card px-6 py-10 text-center">
        <p className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight">1200+</p>
        <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Total Problems Solved
        </p>
        <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          ICPC Dhaka Regional 2021 & 2022 · AUST Intra Contests · CodeSamurai 2022 · Samsung R&D ·
          Google Code Jam · Google Kick Start · Codegoda 2023
        </p>
      </div>
    </Section>
  );
}

export const CERTIFICATIONS = [
  {
    slug: "foundational-csharp",
    title: "Foundational C# with Microsoft",
    issuer: "Microsoft Inc. | freeCodeCamp",
    verified: true,
    icons: [
      { slug: "microsoft", color: "5e5e5e" },
      { slug: "freecodecamp", color: "0a0a23" },
    ],
    accent: "from-blue-500/25 to-indigo-500/10",
    image: microsoftCertImg,
    skills:
      "C# fundamentals, object-oriented programming, .NET ecosystem, data types, control structures, collections, LINQ, and building console applications.",
    link: "#",
  },
  {
    slug: "docker-training",
    title: "Docker Training for the Absolute Beginners",
    issuer: "KodeKloud",
    verified: true,
    icons: [{ slug: "docker", color: "2496ED" }],
    accent: "from-sky-500/25 to-cyan-500/10",
    image: kodekloudCertImg,
    skills:
      "Docker architecture, containers vs VMs, Docker images and containers, Docker Hub, volumes, networking, Docker Compose, and containerizing applications for deployment.",
    link: "#",
  },
  {
    slug: "problem-solving-basic",
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    verified: true,
    icons: [{ slug: "hackerrank", color: "00EA64" }],
    accent: "from-emerald-500/25 to-green-500/10",
    image: hackerrankCertImg,
    skills:
      "Data structures, algorithms, problem decomposition, time & space complexity analysis, sorting, searching, recursion, and foundational problem solving techniques.",
    link: "#",
  },
];

export function CertificationCard({ c }: { c: (typeof CERTIFICATIONS)[number] }) {
  return (
    <article className="group flex flex-col rounded-2xl border-2 border-border bg-card overflow-hidden hover:border-primary transition-colors">
      <div
        className={`relative h-40 ${c.image ? "bg-card" : `bg-gradient-to-br ${c.accent}`} border-b border-border flex items-center justify-center`}
      >
        {c.image ? (
          <img
            src={c.image}
            alt={`${c.title} certificate`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold leading-snug">{c.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{c.issuer}</p>
        {c.verified && (
          <p className="mt-1 text-xs text-primary inline-flex items-center gap-1">
            <ShieldCheck size={12} /> Verified Certification
          </p>
        )}
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">
          <span className="text-foreground font-semibold">Skills gained: </span>
          {c.skills}
        </p>
        <div className="mt-6 flex items-center gap-2">
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 h-8 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition"
          >
            View Certificate <ArrowRight size={14} />
          </a>
          <div className="flex-1" />
          <div className="flex items-center gap-1.5">
            {c.icons.map((ic, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center"
                title={ic.slug}
              >
                <img
                  src={`https://cdn.simpleicons.org/${ic.slug}/${ic.color}`}
                  alt=""
                  className="w-4 h-4 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Certifications() {
  return (
    <Section id="certifications" kicker="Credentials" title="Certifications">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((c) => (
          <CertificationCard key={c.slug} c={c} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          to="/certifications"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/60 bg-card text-foreground font-medium hover:bg-primary hover:text-primary-foreground transition"
        >
          View All Certifications <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}

export const TRAININGS = [
  {
    title: "Reboot and Rise: Soft Skills for Tech Professionals",
    subtitle: "Reboot and Rise",
    sub2: "Soft Skills for Tech Professionals",
    org: "Megaminds Learning",
    initials: "MM",
    accentFrom: "from-emerald-500/30",
    accentTo: "to-teal-500/10",
    badgeColor: "text-emerald-400",
    kind: "CERTIFICATE OF COMPLETION",
    image: softSkillsImg,
    link: softSkillsImg,
    skills:
      "Communication in tech environments, teamwork & collaboration, professional presentation, growth mindset, conflict resolution, and career development strategies for tech professionals.",
  },
  {
    title: "Communication Skill & Conflict Management Workshop 2025",
    subtitle: "Communication & Conflict",
    sub2: "Management Workshop 2025",
    org: "Itqaan Management Training & Research",
    initials: "IQ",
    accentFrom: "from-fuchsia-500/25",
    accentTo: "to-rose-500/10",
    badgeColor: "text-fuchsia-400",
    kind: "CERTIFICATE OF PARTICIPATION",
    image: itqaanImg,
    link: itqaanImg,
    skills:
      "Effective verbal & written communication, active listening, conflict de-escalation, negotiation strategies, workplace dynamics, and managing disagreements in professional settings.",
  },
];

function Trainings() {
  return (
    <Section id="training" kicker="08 — Training" title="Professional Training" muted="30">
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {TRAININGS.map((t) => (
          <article
            key={t.title}
            className="rounded-2xl border-2 border-border bg-card p-6 hover:border-primary transition-colors"
          >
            <div
              className={`relative rounded-xl border border-border overflow-hidden ${t.image ? "bg-card" : `bg-gradient-to-br ${t.accentFrom} ${t.accentTo}`}`}
            >
              {t.image ? (
                <img
                  src={t.image}
                  alt={`${t.title} certificate`}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-11 h-11 rounded-full bg-background/80 border border-border flex items-center justify-center mb-3">
                    <ShieldCheck size={20} className="text-primary" />
                  </div>
                  <p className={`text-[11px] font-bold tracking-[0.2em] ${t.badgeColor}`}>
                    {t.kind}
                  </p>
                  <p className="mt-2 text-lg font-bold">{t.subtitle}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.sub2}</p>
                </div>
              )}
            </div>
            <div className="mt-5 flex items-start gap-3">
              <h3 className="text-base font-bold flex-1">{t.title}</h3>
              <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
                {t.initials}
              </div>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{t.org}</p>
            <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mt-3">
              <Star size={12} className="text-primary" />
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">Skills gained: </span>
              {t.skills}
            </p>
            <div className="mt-6 flex items-center justify-between gap-3">
              <a
                href={t.link ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
              >
                View Certificate
              </a>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {t.kind}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export const EVENTS = [
  {
    slug: "java-developers-conference-2025",
    title: "Java Developers' Conference 2025",
    tag: "Conference",
    year: "2025",
    location: "Dhaka, Bangladesh",
    desc: "Annual conference bringing together Java developers, tech leads, and engineers to explore modern JVM ecosystem, microservices, and industry best practices.",
    gradient: "from-teal-700 to-slate-800",
    iconSlug: "openjdk",
    iconColor: "f89820",
    image: jugImg,
    detailImages: [jugImg, jugbdImg],
    overview:
      "The Java Developers' Conference 2025 gathered engineers, tech leads, and open-source contributors from across Bangladesh to explore the modern JVM ecosystem. Sessions covered Spring Boot, microservices, cloud-native Java, and performance tuning at scale.",
    takeaways: [
      "Deep-dive workshops on Spring Boot 3 and reactive programming",
      "Hallway conversations with senior Java engineers from industry",
      "Hands-on demos of virtual threads and Project Loom",
      "Panel discussion on Java's place in the AI-first era",
    ],
  },
  {
    slug: "prompt-to-product-pathao-hq",
    title: "Prompt to Product @ Pathao HQ",
    tag: "AI/Tech Event",
    year: "2025",
    location: "Pathao Headquarters, Dhaka",
    desc: "Hands-on AI product event hosted at Pathao HQ, exploring how to turn AI prompts into real-world products — from ideation to deployment with modern LLM tooling.",
    gradient: "from-purple-800 to-fuchsia-900",
    iconSlug: "openai",
    iconColor: "e879f9",
    image: pathaoImg,
    overview:
      "Prompt to Product was an intensive session at Pathao HQ on shipping real products with LLMs — going beyond demos to production-grade prompt design, tool use, evaluation, and cost/latency tradeoffs.",
    takeaways: [
      "Live prompt engineering walkthroughs from Pathao's engineering team",
      "Case study on integrating LLM features into a ride-hailing product",
      "Techniques for evaluation, guardrails, and structured outputs",
      "Networking with founders and AI engineers across Dhaka's tech scene",
    ],
  },
];

function Events() {
  return (
    <Section id="events" kicker="09 — Activity" title="Conferences & Events">
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {EVENTS.map((e) => (
          <article
            key={e.slug}
            className="rounded-2xl border-2 border-border bg-card overflow-hidden hover:border-primary transition-colors"
          >
            <div
              className={`relative h-52 ${e.image ? "bg-card" : `bg-gradient-to-br ${e.gradient}`} flex items-center justify-center`}
            >
              {e.image ? (
                <img
                  src={e.image}
                  alt={e.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : null}
              <div
                className={`absolute inset-0 ${e.image ? "bg-slate-950/40" : "opacity-25"} [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:22px_22px]`}
              />
            </div>
            <div className="p-6">
              <span className="inline-block text-xs font-semibold text-primary px-2.5 py-1 rounded-md border border-primary/40">
                {e.tag}
              </span>
              <h3 className="mt-3 text-lg font-bold">{e.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground flex items-center gap-2 flex-wrap">
                <Calendar size={12} /> {e.year} <span className="opacity-60">·</span>{" "}
                <MapPin size={12} /> {e.location}
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              <Link
                to="/events/$slug"
                params={{ slug: e.slug }}
                className="mt-5 inline-flex items-center gap-1.5 px-4 h-9 rounded-md border border-primary/60 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" kicker="Who I Am" title="About Me">
      <div className="max-w-3xl mx-auto text-center space-y-4 text-muted-foreground text-lg leading-relaxed">
        <p>
          I'm <span className="text-foreground font-semibold">Sadid Rafan</span>, a Junior Software
          Engineer at Techno Haven Company Ltd., building enterprise Java systems for BEPZA.
        </p>
        <p>
          My work spans full-stack web applications, enterprise modules, and distributed systems —
          but the thread across all of it is a fascination with how systems think and scale.
        </p>
        <p>
          When I'm not shipping code, I'm exploring new frameworks, contributing to open source, and
          grinding competitive programming.
        </p>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" kicker="Say Hello" title="Get In Touch">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-muted-foreground text-lg">
          I'm always open to interesting conversations, collaborations, and opportunities. Drop me a
          line — I'll get back to you.
        </p>
        <a
          href="mailto:sadidrafan094@gmail.com"
          className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-xl shadow-primary/20"
        >
          <Mail size={18} /> sadidrafan094@gmail.com
        </a>
        <div className="mt-10 flex justify-center gap-4">
          {[
            { Icon: Github, href: "https://github.com/nirvik-alpha", label: "GitHub" },
            {
              Icon: Linkedin,
              href: "https://www.linkedin.com/in/sadid-rafan-5721561a4/",
              label: "LinkedIn",
            },
            { Icon: Mail, href: "mailto:sadidrafan094@gmail.com", label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-1 transition-all"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Sadid Rafan. Designed & built with care.</p>
    </footer>
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <SideSocials />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ProblemSolving />
        <Achievements />
        <Certifications />
        <Trainings />
        <Events />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
