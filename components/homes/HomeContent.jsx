"use client";

import { bioData } from "@/data/bioData";
import { clientLogos } from "@/data/clientLogos";
import { contactData } from "@/data/contactData";
import { items } from "@/data/jobFeatures";
import { profileInfo } from "@/data/profileInfo";
import { socialMediaData } from "@/data/socials";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const logos = [...clientLogos, ...clientLogos];

export default function HomeContent() {
  const year = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
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
        {/* Hero */}
        <section className="text-center mb-16">
          <Image
            src={profileInfo.imageSrcOne}
            alt={profileInfo.name}
            width={140}
            height={140}
            className="rounded-full mx-auto mb-6 ring-4 ring-accent/20 dark:ring-accent/30"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-ink mb-2">
            {profileInfo.name}
          </h1>
          <p className="text-lg text-ink-muted dark:text-slate-400 mb-4">
            {profileInfo.title}
          </p>
          <div className="flex justify-center gap-4 mb-6">
            {socialMediaData.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border dark:border-dark-border flex items-center justify-center text-ink-muted dark:text-slate-400 hover:text-accent hover:border-accent dark:hover:border-accent transition-colors"
                aria-label={social.className}
              >
                <i className={social.className} />
              </a>
            ))}
          </div>
          <Link
            href="/resume/Pannawit_K_CV.html"
            target="_blank"
            className="btn btn-primary"
          >
            See Resume
          </Link>
        </section>

        {/* About */}
        <section className="reveal mb-16 max-w-2xl mx-auto">
          <h2 className="section-title">About</h2>
          <p className="text-ink-muted dark:text-slate-400 leading-relaxed mb-4">
            {bioData.descOne}
          </p>
          <p className="text-ink-muted dark:text-slate-400 leading-relaxed">
            {bioData.descTwo}
          </p>
        </section>

        {/* What I Do */}
        <section className="reveal mb-16">
          <h2 className="section-title">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.slice(0, 4).map((item) => (
              <div key={item.id} className="card">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                />
                <h3 className="font-semibold text-ink mt-3">{item.title}</h3>
                <p className="text-sm text-ink-muted dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section className="reveal mb-16">
          <h2 className="section-title">Contact Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {contactData.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-4">
                <i
                  className={item.iconClass}
                  style={{ color: item.color, fontSize: item.fontSize }}
                />
                <div>
                  <p className="text-sm text-ink-muted dark:text-slate-400 uppercase tracking-wider">
                    {item.text.label}
                  </p>
                  <p className="text-ink font-medium">{item.text.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Clients — infinite scroll */}
        <section className="reveal mb-16">
          <h2 className="section-title">Clients</h2>
          <div className="overflow-hidden mt-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-8 animate-scroll w-max">
              {logos.map((logo, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border-2 border-border dark:border-dark-border opacity-60 hover:opacity-100 hover:border-accent dark:hover:border-accent transition-all bg-white dark:bg-dark-surface flex items-center justify-center"
                >
                  <Image
                    src={logo.imgSrc}
                    alt="Client"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <span>&copy; {year} All Rights Reserved by PWTeam.</span>
        </footer>
      </main>
    </>
  );
}
