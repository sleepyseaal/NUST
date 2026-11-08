"use client"

import { ArrowUpRight, FileText, Play, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const projects = [
  { number: "01", title: "The invisible architecture", type: "Orthodontics / 3D Motion", year: "2024", className: "project-one" },
  { number: "02", title: "A new kind of white", type: "Aesthetic Dentistry / Film", year: "2023", className: "project-two" },
  { number: "03", title: "Under the surface", type: "Implantology / Scientific Film", year: "2023", className: "project-three" },
]

export default function Page() {
  const [activeProject, setActiveProject] = useState<string | null>(null)

  return (
    <main className="site-shell">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand-link" href="#top" aria-label="NU Studio home">
          <Image src="/nu-studio-logo-cropped.png" alt="" width={259} height={228} priority />
        </a>
        <div className="social-links" aria-label="Social profiles and CV">
          <span role="img" aria-label="Instagram"><svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" /></svg></span>
          <span role="img" aria-label="LinkedIn"><svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M6 9v12M6 6v.01M10 21v-7a4 4 0 0 1 8 0v7M10 10v11" /></svg></span>
          <span role="img" aria-label="CV"><FileText size={17} /></span>
        </div>
      </nav>

      <section className="hero" id="top">
        <h1>I make the invisible<br /><em>visible.</em></h1>
        <div className="hero-bottom">
          <p>Clinical precision, visual poetry.<br />Motion graphics for modern dentistry.</p>
          <a className="circle-link" href="#work" aria-label="Scroll to selected work"><ArrowUpRight size={20} /></a>
        </div>
      </section>

      <section className="intro-grid" id="about">
        <p className="eyebrow">01 / The practice</p>
        <div><p className="intro-copy">I&apos;m Dr. Nada Yusif, a dentist and motion designer exploring the space between <span>science and sensation.</span></p><p className="body-copy">I translate complex clinical ideas into films that feel clear, human, and impossible to ignore. From chairside explainers to launch films for pioneering dental brands.</p></div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading"><p className="eyebrow">02 / Selected work</p><p className="section-note">Three case studies<br />from the studio</p></div>
        <div className="project-list">{projects.map((project) => <button className="project-card" key={project.number} onClick={() => setActiveProject(project.title)}><div className={`project-visual ${project.className}`}><span className="project-number">{project.number}</span><span className="play-button"><Play size={16} fill="currentColor" /></span><div className="visual-label">MOTION / CASE FILM</div></div><div className="project-meta"><div><h2>{project.title}</h2><p>{project.type}</p></div><div className="project-year">{project.year} <ArrowUpRight size={16} /></div></div></button>)}</div>
      </section>

      <section className="statement"><p className="eyebrow">03 / The approach</p><h2>Good communication<br />starts with <em>curiosity.</em></h2><div className="statement-side"><p>Whether I&apos;m visualising osseointegration or a patient&apos;s first confident smile, every frame has a job to do.</p><a href="#contact" className="text-link">Let&apos;s make something clear <ArrowUpRight size={16} /></a></div></section>

      <footer id="contact"><div className="footer-top"><p className="eyebrow">04 / Start a conversation</p><h2>Have a case<br />worth showing?</h2><a className="contact-link" href="mailto:hello@mayachen.studio">hello@mayachen.studio <ArrowUpRight size={20} /></a></div><div className="footer-bottom"><span>© 2024 Dr. Nada Yusif</span><span>Dental · Motion · Education</span></div></footer>

      {activeProject && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={activeProject} onClick={() => setActiveProject(null)}><div className="modal-card" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project"><X size={18} /></button><div className="modal-art project-one"><Play size={26} fill="currentColor" /></div><p className="eyebrow">Case study preview</p><h2>{activeProject}</h2><p>This film is part of a growing archive of clinical stories told with clarity, rhythm, and care.</p><a href="mailto:hello@mayachen.studio" className="text-link">Request the full film <ArrowUpRight size={16} /></a></div></div>}
    </main>
  )
}
