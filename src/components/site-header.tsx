"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { nav, profile } from "@/data/content";

function subscribeTheme(callback: () => void) {
  window.addEventListener("themechange", callback);
  window.addEventListener("storage", callback);
  return () => { window.removeEventListener("themechange", callback); window.removeEventListener("storage", callback); };
}
function getTheme() { return document.documentElement.dataset.theme === "dark"; }
function getServerTheme() { return false; }

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const dark = useSyncExternalStore(subscribeTheme, getTheme, getServerTheme);
  function toggleTheme() {
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* The toggle still works for this visit. */ }
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="brand-lockup group inline-flex items-center gap-2.5">
          <span className="brand-mark grid h-9 w-9 place-items-center font-sans text-xs font-bold tracking-tight">
            DY
          </span>
          <span className="brand-name text-sm font-semibold tracking-tight text-ink group-hover:text-accent">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-sm text-body transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resumePath}
            download
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-cream transition-colors hover:bg-accent-dark"
          >
            Download PDF
          </a>
        </nav>

        <div className="flex items-center gap-2">
        <button type="button" onClick={toggleTheme} className="theme-toggle" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Switch to light mode" : "Switch to dark mode"}>
          {dark ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path strokeLinecap="round" d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42m0-14.14-1.42 1.42M6.35 17.65l-1.42 1.42"/></svg> : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5 8.5 8.5 0 1 0 20.5 14.1Z"/></svg>}
        </button>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-4 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-4 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-body"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profile.resumePath}
              download
              className="mt-2 inline-flex w-fit rounded-md bg-accent px-4 py-2 text-sm font-medium text-cream"
            >
              Download PDF
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
