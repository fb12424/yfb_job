import { siteConfig } from "@/lib/site";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
            Let&apos;s talk
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-2 inline-block text-xl font-medium tracking-tight transition-colors hover:text-accent"
          >
            {siteConfig.email}
          </a>
          <p className="mt-2 text-sm text-muted">{siteConfig.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <span>
            © {currentYear} {siteConfig.name}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em]">
            Next.js / Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}
