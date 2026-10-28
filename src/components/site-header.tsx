"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, profile } from "@/data/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md border border-teal-400/30 bg-teal-400/10 font-mono text-xs font-semibold tracking-tight text-teal-300">
            DY
          </span>
          <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resumePath}
            className="rounded-full bg-teal-300 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
          >
            Download PDF
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-200 md:hidden"
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
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-zinc-300"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={profile.resumePath}
              className="mt-2 inline-flex w-fit rounded-full bg-teal-300 px-4 py-2 text-sm font-medium text-zinc-950"
            >
              Download PDF
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
