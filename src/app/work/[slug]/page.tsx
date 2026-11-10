import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/mdx";
import { getAllProjects, getProject } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((item) => item.slug === project.slug);
  const nextProject =
    allProjects.length > 1
      ? allProjects[(currentIndex + 1) % allProjects.length]
      : undefined;

  return (
    <article>
      <header className="mx-auto w-full max-w-5xl px-5 pb-10 pt-12 sm:px-8 sm:pt-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
        >
          ← 返回作品
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          <span>{project.period}</span>
          <span className="h-px w-5 bg-line" />
          <span>{project.role}</span>
          {project.sample ? (
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] tracking-normal text-accent">
              示例内容
            </span>
          ) : null}
        </div>

        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
          {project.summary}
        </p>

        <dl className="mt-10 grid gap-6 border-y border-line py-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              职责
            </dt>
            <dd className="mt-2 text-sm font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              技术栈
            </dt>
            <dd className="mt-2 text-sm font-medium">
              {project.stack.join(" / ")}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              周期
            </dt>
            <dd className="mt-2 text-sm font-medium">{project.period}</dd>
          </div>
        </dl>
      </header>

      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-2xl border border-line bg-card">
          <Image
            src={project.cover}
            alt={project.coverAlt ?? project.title}
            width={1536}
            height={1024}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="h-auto w-full"
          />
        </div>
      </div>

      <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="prose prose-stone max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-ink prose-p:leading-8 prose-p:text-muted prose-li:leading-8 prose-li:text-muted prose-strong:text-ink prose-a:text-accent prose-a:underline prose-a:decoration-accent/30 prose-a:underline-offset-4 prose-blockquote:not-italic prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-1 prose-blockquote:text-ink prose-table:text-sm prose-th:text-ink prose-td:text-muted">
          <MDXRemote
            source={project.content}
            components={mdxComponents}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>

        {project.links.length > 0 ? (
          <div className="mt-12 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-ink"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        ) : null}
      </div>

      {nextProject && nextProject.slug !== project.slug ? (
        <nav className="mx-auto w-full max-w-5xl px-5 pb-20 sm:px-8">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex items-center justify-between gap-6 border-t border-line pt-6"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                Next project
              </p>
              <p className="mt-2 text-xl font-medium transition-colors group-hover:text-accent">
                {nextProject.title}
              </p>
            </div>
            <span
              className="text-2xl text-muted transition-transform group-hover:translate-x-1"
              aria-hidden
            >
              →
            </span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
