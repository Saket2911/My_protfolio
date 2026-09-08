import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";

import { profile, projects, skillGroups, focusAreas } from "~/lib/portfolio";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "K. Shiva Saket | AI/ML & Cybersecurity Developer" },
    {
      name: "description",
      content:
        "Portfolio of K. Shiva Saket — an Information Technology student exploring AI/ML, cybersecurity, and practical software development.",
    },
    { property: "og:title", content: "K. Shiva Saket | AI/ML & Cybersecurity Developer" },
    {
      property: "og:description",
      content: "Building intelligent, secure, and useful software systems.",
    },
    { property: "og:type", content: "website" },
  ];
}

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
] as const;

function SocialLink({ kind, href, label }: { kind: "github" | "linkedin"; href: string; label: string }) {
  const Icon = kind === "github" ? Github : Linkedin;
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <Icon size={17} strokeWidth={1.8} />
      <span>{label}</span>
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function SectionLabel({ eyebrow, number }: { eyebrow: string; number: string }) {
  return (
    <div className="section-label">
      <span className="section-number">{number}</span>
      <span>{eyebrow}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="K. Shiva Saket home">
            <span className="brand-mark">KS</span>
            <span className="brand-name">K. Shiva <em>Saket</em></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav id="main-nav" className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow-line"><span className="status-dot" /> Available for collaboration · Hyderabad, IN</div>
              <h1 id="hero-title">Building software<br /><span>with signal.</span></h1>
              <p className="hero-role">{profile.role}</p>
              <p className="hero-intro">I&apos;m <strong>K. Shiva Saket</strong>, a 3rd-year Information Technology student at Vasavi College of Engineering. I like turning ambiguous problems into intelligent, secure, and useful software.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore projects <ArrowDownRight size={17} /></a>
                <a className="button button-quiet" href={profile.resume} download>Download resume <Download size={16} /></a>
              </div>
              <div className="hero-socials" aria-label="Social profiles">
                <SocialLink kind="github" href={profile.github} label="GitHub" />
                <SocialLink kind="linkedin" href={profile.linkedin} label="LinkedIn" />
              </div>
            </div>

            <div className="hero-visual" aria-label="Abstract network visualization" role="img">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-scanline" />
              <div className="network-node node-center"><ShieldCheck size={27} strokeWidth={1.4} /></div>
              <span className="network-node node-one" /><span className="network-node node-two" /><span className="network-node node-three" /><span className="network-node node-four" /><span className="network-node node-five" />
              <svg className="network-lines" viewBox="0 0 520 520" aria-hidden="true">
                <line x1="260" y1="260" x2="104" y2="136" /><line x1="260" y1="260" x2="416" y2="155" /><line x1="260" y1="260" x2="430" y2="366" /><line x1="260" y1="260" x2="124" y2="401" /><line x1="260" y1="260" x2="260" y2="74" /><line x1="104" y1="136" x2="260" y2="74" /><line x1="416" y1="155" x2="430" y2="366" /><line x1="124" y1="401" x2="430" y2="366" />
              </svg>
              <div className="visual-caption"><Network size={14} /> systems / signal / security <span>01—05</span></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span>Scroll to explore</span><ChevronDown size={16} /></a>
        </section>

        <section id="about" className="section section-about reveal">
          <div className="container about-grid">
            <div><SectionLabel eyebrow="A little context" number="01" /><h2>Curious by default.<br /><span>Practical by choice.</span></h2></div>
            <div className="about-body">
              <p className="lead">I&apos;m a student developer interested in the intersection of intelligence, security, and thoughtful product engineering.</p>
              <p>At Vasavi College of Engineering in Hyderabad, I&apos;m building my foundation across AI/ML, cybersecurity, software development, and data structures. Hackathons and project work are where I test ideas, learn quickly, and figure out what makes a solution genuinely useful.</p>
              <div className="focus-list">
                {focusAreas.map((area) => (
                  <div className="focus-item" key={area.title}>
                    <span className="focus-icon">{area.icon === "brain" ? <BrainCircuit size={18} /> : area.icon === "shield" ? <ShieldCheck size={18} /> : <Code2 size={18} />}</span>
                    <div><h3>{area.title}</h3><p>{area.description}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section reveal">
          <div className="container">
            <SectionLabel eyebrow="Tools of the trade" number="02" />
            <div className="section-heading-row"><h2>A growing <span>toolkit.</span></h2><p>Technologies I&apos;ve worked with across coursework, experiments, and projects.</p></div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <div className={`skill-group skill-group-${index + 1}`} key={group.label}>
                  <div className="skill-group-head"><span>0{index + 1}</span><h3>{group.label}</h3></div>
                  <div className="skill-chips">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section reveal">
          <div className="container">
            <SectionLabel eyebrow="Selected work" number="03" />
            <div className="section-heading-row projects-heading"><h2>Proof, not <span>promises.</span></h2><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">View all on GitHub <ArrowUpRight size={16} /></a></div>
            <p className="section-note">A selection of public repositories, described only as far as their visible GitHub pages support.</p>
            <div className="projects-list">
              {projects.map((project) => (
                <article className={`project-card accent-${project.accent}`} key={project.name}>
                  <div className="project-topline"><span className="project-index">{project.index}</span><span>{project.category}</span><ExternalLink size={15} /></div>
                  <div className="project-content"><h3>{project.name}</h3><p>{project.description}</p></div>
                  <div className="project-details"><div><span className="detail-label">The problem</span><p>{project.problem}</p></div><div><span className="detail-label">Stack</span><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></div>
                  <div className="project-footer"><a className="project-link" href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>{project.demo ? <a className="project-link secondary" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a> : <span className="project-unavailable">No live demo listed</span>}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section education-section reveal">
          <div className="container education-grid">
            <div><SectionLabel eyebrow="The foundation" number="04" /><h2>Learning in<br /><span>public.</span></h2></div>
            <div className="education-card"><div className="education-icon"><GraduationCap size={25} /></div><div><p className="education-kicker">Undergraduate degree · Information Technology</p><h3>Vasavi College of Engineering</h3><p className="education-place"><MapPin size={15} /> Hyderabad, India</p><div className="education-status"><span className="status-dot" /> Currently in 3rd year</div></div></div>
          </div>
        </section>

        <section className="section direction-section reveal" aria-labelledby="direction-title">
          <div className="container direction-card"><div className="direction-symbol"><Terminal size={22} /><span>~/next</span></div><div><SectionLabel eyebrow="What&apos;s next" number="05" /><h2 id="direction-title">More building.<br /><span>More learning.</span></h2></div><div className="direction-copy"><p>AI-driven security ideas like network attack forecasting and explainable threat triage are areas I&apos;m exploring. They&apos;re directions in progress—not claims about shipped public repositories.</p><a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer">Follow the work <ArrowUpRight size={17} /></a></div></div>
        </section>

        <section id="contact" className="section contact-section reveal">
          <div className="container contact-inner"><div className="contact-copy"><SectionLabel eyebrow="Start a conversation" number="06" /><h2>Have a problem<br /><span>worth solving?</span></h2><p>I&apos;m always open to thoughtful conversations about projects, technology, and opportunities to learn by building.</p></div><div className="contact-links"><a className="contact-link" href={profile.github} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Github size={20} /></span><span><small>GitHub</small><strong>@Saket2911</strong></span><ArrowUpRight size={18} /></a><a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={20} /></span><span><small>LinkedIn</small><strong>K. Shiva Saket</strong></span><ArrowUpRight size={18} /></a><a className="contact-link" href={`mailto:${profile.email}`}><span className="contact-link-icon"><Mail size={20} /></span><span><small>Email</small><strong>{profile.email}</strong></span><ArrowUpRight size={18} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><span className="brand-mark">KS</span><span>Designed &amp; built by {profile.name}</span></div><div className="footer-meta"><span>AI/ML · Security · Software</span><span className="footer-divider">/</span><a href="#top">Back to top <ChevronDown size={14} className="back-to-top" /></a></div></div></footer>
    </div>
  );
}
