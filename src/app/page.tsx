import Image from "next/image";
import Link from "next/link";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/content";

function SectionLabel({ title }: { title: string }) {
  return <h2 className="mb-8 text-3xl tracking-tight text-ink sm:text-4xl">{title}</h2>;
}

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <section className="hero grid items-center gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
        <div className="hero-intro">
          <p className="mb-5 text-sm text-muted">
            {profile.company} · {profile.location}
          </p>
          <h1 className="hero-name max-w-3xl text-5xl tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-accent sm:text-xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-body sm:text-lg">
            {profile.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/resume/"
              className="primary-button rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-cream hover:bg-accent-dark"
            >
              Read resume <span aria-hidden="true">↗</span>
            </Link>
            <a
              href={profile.resumePath}
              download
              className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink hover:border-accent"
            >
              Download PDF
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink hover:border-accent"
            >
              Email
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-body">
            <a className="hover:text-accent" href={profile.github}>
              GitHub
            </a>
            <a className="hover:text-accent" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="hover:text-accent" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
        <div className="portrait-frame relative mx-auto w-full max-w-sm">
          <Image
            src="/images/portrait.jpg"
            alt={`${profile.name} headshot`}
            width={480}
            height={640}
            priority
            className="relative aspect-[4/5] w-full rounded-sm object-cover object-[center_35%] ring-1 ring-line"
          />
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-line py-16">
        <SectionLabel title="About" />
        <div className="grid gap-8 lg:grid-cols-3">
          <p className="text-lg leading-8 text-body lg:col-span-2">
            I keep distributed robotics systems running: vision container
            deployments, post-update checks, and hardware and software recovery
            across automated warehouse sites. I develop Python support tools
            and use SQL, Tableau, and Sankey data to investigate recurring faults
            and improve recovery workflows.
          </p>
          <ul className="space-y-3 font-sans text-sm text-body">
            <li>Production deployments on Ubuntu</li>
            <li>RHEL systems administration</li>
            <li>SQL, Tableau & Sankey telemetry</li>
            <li>Prior U.S. Secret Clearance</li>
          </ul>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 border-t border-line py-16">
        <SectionLabel title="Experience" />
        <ol className="space-y-10">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.role}`}
              className="experience-entry relative grid gap-4 border-l border-line pl-6 lg:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="font-sans text-xs text-accent">{job.dates}</p>
                <p className="mt-2 text-sm text-body">
                  {job.company}
                  <span className="block">{job.location}</span>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-ink">{job.role}</h3>
                <ul className="mt-4 space-y-3 text-body">
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

      <section id="skills" className="scroll-mt-24 border-t border-line py-16">
        <SectionLabel title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.label}
              className="skill-card rounded-xl border border-line bg-surface p-5"
            >
              <h3 className="text-sm font-medium text-ink">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-item text-sm leading-6 text-body"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-t border-line py-16">
        <SectionLabel title="Projects" />
        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="project-card rounded-xl border border-line p-6 sm:p-8"
            >
              <h3 className="text-xl font-medium text-ink">{project.name}</h3>
              <p className="mt-2 font-sans text-xs text-accent">
                {project.stack.join(" · ")}
              </p>
              <ul className="mt-4 space-y-3 text-body">
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


      <section id="education" className="scroll-mt-24 border-t border-line py-16">
        <SectionLabel title="Education" />
        <div>
          <h3 className="text-xl font-medium text-ink">{education.school}</h3>
          <p className="mt-1 text-body">{education.degree}</p>
          <p className="mt-1 font-sans text-xs text-accent">
            {education.dates} · {education.location}
          </p>
          <p className="mt-5 text-sm text-muted">Relevant coursework</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {education.coursework.map((course) => (
              <span
                key={course}
                className="rounded-md border border-line px-3 py-1 text-xs text-body"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-card mt-4 rounded-xl border border-line p-7 sm:p-10">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent">Get in touch</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Have a project in mind?</h2>
        <a href={`mailto:${profile.email}`} className="primary-button mt-6 inline-flex items-center gap-3 rounded-md bg-accent px-5 py-3 text-sm font-medium text-cream">
          Email me <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}
