"use client";

import { education } from "@/data/education";
import { experiences } from "@/data/experience";
import { projects } from "@/data/awards";
import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { useEffect } from "react";

const languages = [
  { name: "TypeScript", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "Python", level: "Advanced" },
  { name: "Dart", level: "Intermediate" },
  { name: "Golang", level: "Intermediate" },
  { name: "PHP", level: "Intermediate" },
  { name: "C/C++", level: "Fundamental" },
  { name: "SQL", level: "Advanced" },
];

export default function ResumeContent() {
  const year = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="page-enter max-w-4xl mx-auto px-4 py-12 mt-16">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
          <h1 className="section-title mb-0">Resume</h1>
          <Link
            href="/resume/Pannawit_K_CV.html"
            target="_blank"
            className="btn btn-primary"
          >
            Download PDF
          </Link>
        </div>

        {/* Education */}
        <section className="reveal mb-16">
          <h2 className="section-title">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <span className="text-sm text-accent font-semibold">
                {edu.session}
              </span>
              <h3 className="text-lg font-bold text-ink">{edu.cardTitle}</h3>
              <p className="text-ink-muted dark:text-slate-400">
                {edu.cardSubtitleSecondary}
              </p>
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="reveal mb-16">
          <h2 className="section-title">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <span className="text-sm text-accent font-semibold">
                {exp.session}
              </span>
              <h3 className="text-lg font-bold text-ink">{exp.role}</h3>
              <p className="text-ink-muted dark:text-slate-400">
                {exp.company}
              </p>
            </div>
          ))}
        </section>

        {/* Projects & Awards */}
        <section className="reveal mb-16">
          <h2 className="section-title">Projects &amp; Awards</h2>
          {projects.map((proj) => (
            <div key={proj.id} className="timeline-item">
              <span className="text-sm text-accent font-semibold">
                {proj.role}
              </span>
              <h3 className="text-lg font-bold text-ink">{proj.title}</h3>
              <ul className="list-disc list-inside text-ink-muted dark:text-slate-400 space-y-1 mt-2">
                {proj.details.map((d, i) => (
                  <li key={i} className="text-sm">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="reveal">
          <h2 className="section-title">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="card flex flex-col items-center text-center py-3 px-4"
              >
                <span className="font-semibold text-ink text-sm">
                  {lang.name}
                </span>
                <span className="text-xs text-ink-muted dark:text-slate-400 mt-1">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer mt-16">
          <span>&copy; {year} All Rights Reserved by PWTeam.</span>
        </footer>
      </main>
    </>
  );
}
