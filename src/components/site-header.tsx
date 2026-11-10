import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="返回首页">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.24em]">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="flex items-center gap-1 text-sm sm:gap-2">
          <Link
            href="/work"
            className="rounded-full px-3 py-2 text-muted transition-colors hover:text-ink"
          >
            作品
          </Link>
          <Link
            href="/about"
            className="rounded-full px-3 py-2 text-muted transition-colors hover:text-ink"
          >
            关于
          </Link>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="ml-1 hidden rounded-full border border-line px-3.5 py-2 text-ink transition-colors hover:border-ink sm:inline-flex"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
