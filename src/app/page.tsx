import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const facts = [
  { label: "方向", value: "B 端系统 · 微信小程序" },
  { label: "关注", value: "工程化 · 交互细节 · 性能" },
  { label: "状态", value: "开放新机会" },
];

export default function HomePage() {
  const featured = getAllProjects()
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
          <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
            <span className="h-px w-8 bg-accent" />
            {siteConfig.role} / Portfolio
          </p>

          <h1 className="mt-8 max-w-4xl text-[2.6rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            把复杂的业务，
            <br />
            做成<span className="text-accent">清晰好用</span>的界面。
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            我是 {siteConfig.name}。{siteConfig.description}
            这里记录我参与过的项目、做过的取舍，以及它们最终落地的样子。
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              查看作品
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              关于我
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px bg-line sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-paper px-5 py-6 sm:px-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {fact.label}
              </p>
              <p className="mt-2 text-sm font-medium">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              01 / Selected work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              精选项目
            </h2>
          </div>
          <Link
            href="/work"
            className="shrink-0 text-sm text-muted transition-colors hover:text-ink"
          >
            全部作品 →
          </Link>
        </div>

        <div>
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-card">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:grid-cols-[0.9fr_1.1fr] sm:px-8 sm:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
              02 / About
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              先理解问题，
              <br />
              再选技术方案。
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-muted sm:text-base">
            <p>
              我做前端这些年，大部分时间在 B 端系统和微信小程序里打转：把复杂流程拆成可理解的界面，把一次性的需求沉淀成可复用的能力，也处理过不少性能和兼容性问题。
            </p>
            <p>
              这个站点会持续整理我做过的事、踩过的坑，以及当时为什么这么选。
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent"
            >
              了解更多 <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
