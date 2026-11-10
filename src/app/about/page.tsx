import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "关于",
  description: "前端工程师，关注 B 端系统、微信小程序与工程质量。",
};

const focus = [
  "B 端后台",
  "微信小程序",
  "React / TypeScript",
  "工程化与性能",
  "交互细节",
];

export default function AboutPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
          About
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          关于我
        </h1>
        <p className="mt-6 text-sm leading-7 text-muted">
          {siteConfig.location} · {siteConfig.role}
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-lg font-semibold tracking-tight">简介</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-muted sm:text-base">
            <p>
              我是 {siteConfig.name}，一名前端工程师。主要做 B 端后台和微信小程序，喜欢把复杂的业务流程拆成清晰、可操作的界面。
            </p>
            <p>
              相比堆叠技术名词，我更在意方案能不能被团队长期维护：边界是否清楚、失败时是否好排查、下一次需求来的时候需不需要推倒重来。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">关注方向</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {focus.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1.5 font-mono text-[11px] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">工作方式</h2>
          <div className="mt-4 space-y-4 text-sm leading-8 text-muted sm:text-base">
            <p>
              接到需求先确认约束：谁在用、最坏的情况是什么、上线后怎么验证。能用简单方案解决的不引入复杂抽象；需要抽象时，先让调用点保持零变化。
            </p>
            <p>
              做界面时会优先保证关键信息和操作常驻可见，而不是藏在悬停或二级菜单里。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">联系</h2>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium transition-colors hover:text-accent"
            >
              {siteConfig.email}
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted transition-colors hover:text-ink"
            >
              GitHub ↗
            </a>
            <Link
              href="/work"
              className="text-muted transition-colors hover:text-ink"
            >
              查看作品 →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
