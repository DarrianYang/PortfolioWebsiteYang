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
          <p className="font-mono text-xs tracking-[0.2em] text-teal-300">
            RESUME
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            {profile.name}
          </h1>
          <p className="mt-2 text-zinc-400">
            {profile.title} · {profile.company}
          </p>
        </div>
        <a
          href={profile.resumePath}
          download
          className="inline-flex w-fit rounded-full bg-teal-300 px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-white"
        >
          Download PDF
        </a>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        <iframe
          title={`${profile.name} resume PDF`}
          src={`${profile.resumePath}#view=FitH`}
          className="h-[80vh] w-full bg-zinc-100"
        />
      </div>
      <p className="mt-4 text-sm text-zinc-500">
        If the preview does not load,{" "}
        <a className="text-teal-300 underline" href={profile.resumePath}>
          open the PDF directly
        </a>
        .
      </p>
    </div>
  );
}
