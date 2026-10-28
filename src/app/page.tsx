import Image from "next/image";
import Link from "next/link";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/content";

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4">
      <span className="font-mono text-xs tracking-[0.2em] text-teal-300">
        {index}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <section className="grid items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-3 py-1 font-mono text-xs text-teal-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
            {profile.company} · {profile.location}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-teal-200 sm:text-xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/resume/"
              className="rounded-full bg-teal-300 px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-white"
            >
              Read resume
            </Link>
            <a
              href={profile.resumePath}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-white/40"
            >
              Download PDF
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-zinc-100 hover:border-white/40"
            >
              Email
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-400">
            <a className="hover:text-white" href={profile.github}>
              GitHub
            </a>
            <a className="hover:text-white" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="hover:text-white" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] bg-teal-300/10 blur-2xl" />
          <Image
            src="/images/portrait.jpg"
            alt={`${profile.name} headshot`}
            width={480}
            height={640}
            priority
            className="relative aspect-[4/5] w-full rounded-[1.6rem] object-cover object-[center_35%] ring-1 ring-white/10"
          />
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-white/10 py-16">
        <SectionLabel index="01" title="About" />
        <div className="grid gap-8 lg:grid-cols-3">
          <p className="text-lg leading-8 text-zinc-300 lg:col-span-2">
            I keep production robotics systems running: vision container
            deployments, post-update checks, log review, and recovery across
            automated warehouse sites. My work sits between infrastructure,
            MLOps change control, and on-the-floor operations.
          </p>
          <ul className="space-y-3 font-mono text-sm text-zinc-400">
            <li>Production deployments on Ubuntu</li>
            <li>RHEL systems administration</li>
            <li>SQL and Tableau telemetry</li>
            <li>Prior U.S. Secret Clearance</li>
          </ul>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-t border-white/10 py-16">
        <SectionLabel index="02" title="Experience" />
        <ol className="space-y-10">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              className="grid gap-4 border-l border-teal-400/30 pl-6 lg:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="font-mono text-xs text-teal-300">{job.dates}</p>
                <p className="mt-2 text-sm text-zinc-400">
                  {job.company}
                  <span className="block">{job.location}</span>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-white">{job.role}</h3>
                <ul className="mt-4 space-y-3 text-zinc-400">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="leading-7">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" className="scroll-mt-24 border-t border-white/10 py-16">
        <SectionLabel index="03" title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-sm font-medium text-white">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-t border-white/10 py-16">
        <SectionLabel index="04" title="Projects" />
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-white/10 p-6"
            >
              <h3 className="text-xl font-medium text-white">{project.name}</h3>
              <p className="mt-2 font-mono text-xs text-teal-300">
                {project.stack.join(" · ")}
              </p>
              <ul className="mt-4 space-y-3 text-zinc-400">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="leading-7">
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="scroll-mt-24 border-t border-white/10 py-16">
        <SectionLabel index="05" title="Education" />
        <div>
          <h3 className="text-xl font-medium text-white">{education.school}</h3>
          <p className="mt-1 text-zinc-300">{education.degree}</p>
          <p className="mt-1 font-mono text-xs text-teal-300">
            {education.dates} · {education.location}
          </p>
          <p className="mt-5 text-sm text-zinc-500">Relevant coursework</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
