import Image from "next/image";
import Link from "next/link";
import { PhotoGallery } from "@/components/photo-gallery";
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
          <p className="hero-eyebrow mb-5 text-sm">ROBOTICS / INFRASTRUCTURE / OPERATIONS</p>
          <h1 className="hero-name max-w-3xl text-5xl tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="hero-role mt-4 text-lg sm:text-xl">{profile.title} <span>at {profile.company}</span></p>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-body sm:text-lg">
            {profile.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/resume/"
              className="primary-button rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-cream hover:bg-accent-dark"
            >
              Read resume
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
          <span className="portrait-coordinates" aria-hidden="true">SYSTEMS<br />IN MOTION</span>
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

      <div className="systems-visual" aria-hidden="true">
        <div className="systems-visual-label">ROBOTICS OPERATIONS <span> / </span> SYSTEMS VIEW</div>
        <svg viewBox="0 0 1000 120" preserveAspectRatio="none" fill="none">
          <path d="M0 85H115L155 45H310L350 85H510L555 40H720L765 85H1000" />
          <path className="systems-secondary" d="M0 105H205L245 65H420L460 105H680L720 65H1000" />
          <circle cx="155" cy="45" r="6" /><circle cx="350" cy="85" r="6" /><circle cx="555" cy="40" r="6" /><circle cx="765" cy="85" r="6" />
        </svg>
      </div>
      <div className="focus-ribbon" aria-label="Areas of focus">
        <span>01 <b>Robotics infrastructure</b></span><span>02 <b>Linux systems</b></span><span>03 <b>Warehouse &amp; logistics</b></span><span>04 <b>Automation &amp; tooling</b></span>
      </div>

      <section id="about" className="scroll-mt-24 border-t border-line py-16">
        <SectionLabel title="About" />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-5 text-lg leading-8 text-body lg:col-span-2">
            <p>
              I’m a Robot Teleoperations Supervisor with a background in robotics
              infrastructure, systems engineering, and automation.
            </p>
            <p>
              I lead five direct reports within a larger teleoperations team
              providing 24/7 robotics support to automated warehouse customer
              sites. Across the broader team, I oversee operational procedures,
              scheduling, and training, and work to improve performance, robot
              reliability, and customer support.
            </p>
            <p>
              Beyond team leadership, I contribute to internal application
              development, process automation, data-driven reporting, and
              cross-functional engineering projects that improve operations.
            </p>
            <p>
              My technical background spans robotics infrastructure, warehouse
              automation and logistics, Linux systems, software development, and
              data analytics. I’m passionate about connecting engineering and
              operational leadership, solving technical challenges, and helping
              teams grow through continuous improvement.
            </p>
          </div>
          <ul className="space-y-3 font-sans text-sm text-body">
            <li>Team leadership &amp; teleoperations</li>
            <li>Warehouse logistics &amp; SKU handling</li>
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

      <section id="outside-work" className="outside-work scroll-mt-24 border-t border-line py-16">
        <SectionLabel title="Outside of work" />
        <div className="outside-work-content">
          <p className="max-w-2xl text-lg leading-8 text-body">
            I enjoy staying active and looking for the next challenge, both
            physically and mentally. I often participate in Spartan races,
            marathons, and half marathons. When I’m looking to slow down,
            you might find me fishing.
          </p>
          <div className="outside-work-tags" aria-label="Interests">
            <span>Spartan races</span><span>Marathons</span><span>Half marathons</span><span>Fishing</span>
          </div>
        </div>
        <PhotoGallery />
      </section>

      <section className="contact-card mt-4 rounded-xl border border-line p-7 sm:p-10">
        <div className="contact-orbit" aria-hidden="true"><span></span><span></span><span></span></div>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-accent">Get in touch</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Let’s build reliable systems.</h2>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a href={`mailto:${profile.email}`} className="primary-button inline-flex items-center rounded-md bg-accent px-5 py-3 text-sm font-medium text-cream">
            Email me
          </a>
          <a href={`tel:${profile.phoneHref}`} className="inline-flex min-h-11 items-center font-medium text-ink underline decoration-accent underline-offset-4 hover:text-accent">
            {profile.phone}
          </a>
        </div>
      </section>
    </div>
  );
}
