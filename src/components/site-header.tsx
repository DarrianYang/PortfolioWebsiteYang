"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, profile } from "@/data/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-line bg-sage font-sans text-xs font-semibold tracking-tight text-accent">
            DY
          </span>
          <span className="text-sm font-medium text-ink group-hover:text-accent">
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
