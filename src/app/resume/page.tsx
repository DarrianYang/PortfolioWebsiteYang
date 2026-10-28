import type { Metadata } from "next";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${profile.name}, ${profile.title} at ${profile.company}.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-sans text-xs tracking-[0.2em] text-accent">
            RESUME
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink">
            {profile.name}
          </h1>
          <p className="mt-2 text-body">
            {profile.title} · {profile.company}
          </p>
        </div>
        <a
          href={profile.resumePath}
          download
          className="inline-flex w-fit rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-cream hover:bg-accent-dark"
        >
          Download PDF
        </a>
      </div>
      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        <iframe
          title={`${profile.name} resume PDF`}
          src={`${profile.resumePath}#view=FitH`}
          className="h-[80vh] w-full bg-surface"
        />
      </div>
      <p className="mt-4 text-sm text-muted">
        If the preview does not load,{" "}
        <a className="text-accent underline" href={profile.resumePath}>
          open the PDF directly
        </a>
        .
      </p>
    </div>
  );
}
