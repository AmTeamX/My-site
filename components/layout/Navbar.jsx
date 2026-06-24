"use client";

import { menuItems } from "@/data/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("darkMode");
    if (stored === "true") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("darkMode", String(next));
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#ffffff] dark:bg-[#0f172a] border-b border-border dark:border-dark-border">
        <nav className="max-w-4xl mx-auto px-4 h-16 flex items-center">
          <div className="flex-1">
            <Link href="/">
              <Image
                src="/assets/img/logo/FullLogoPink.png"
                alt="PWTeam"
                width={200}
                height={48}
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                    ? "text-accent"
                    : "text-ink-muted dark:text-slate-400 hover:text-accent"
                }`}
              >
                {item.text}
              </Link>
            ))}
          </div>

          <div className="flex-1 flex items-center justify-end gap-3">
            <button
              onClick={toggleDark}
              className="w-9 h-9 rounded-full border border-border dark:border-dark-border flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? (
                <i className="fa-regular fa-sun text-sm" />
              ) : (
                <i className="fa-regular fa-moon text-sm" />
              )}
            </button>

            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-5 h-0.5 bg-ink dark:bg-white rounded" />
              <span className="block w-5 h-0.5 bg-ink dark:bg-white rounded" />
              <span className="block w-5 h-0.5 bg-ink dark:bg-white rounded" />
            </button>
          </div>
        </nav>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setMobileOpen(false)}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </>
  );
}
