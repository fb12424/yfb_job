import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/content";

export function ProjectCard({
  project,
  index,
  priority = false,
}: {
  project: ProjectMeta;
  index: number;
  priority?: boolean;
}) {
  return (
    <article className="group grid gap-6 border-b border-line py-10 sm:grid-cols-[1.1fr_1fr] sm:gap-10 sm:py-12">
      <Link
        href={`/work/${project.slug}`}
        className="relative block overflow-hidden rounded-xl border border-line bg-card"
        aria-label={`查看项目：${project.title}`}
      >
        <div className="aspect-[3/2]">
          <Image
            src={project.cover}
            alt={project.coverAlt ?? project.title}
            width={1536}
            height={1024}
            priority={priority}
            sizes="(max-width: 640px) 100vw, 55vw"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </Link>

      <div className="flex flex-col justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-5 bg-line" />
            <span>{project.period}</span>
            {project.sample ? (
              <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] tracking-normal text-accent">
                示例内容
              </span>
            ) : null}
          </div>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            <Link
              href={`/work/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>

          <p className="mt-3 text-sm leading-7 text-muted">
            {project.summary}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
        >
          查看项目 <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
