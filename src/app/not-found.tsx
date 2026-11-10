import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-start px-5 py-24 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
        404 / Not found
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        这个页面不存在
      </h1>
      <p className="mt-4 text-sm leading-7 text-muted">
        链接可能已经失效，或者项目还没有发布。
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
      >
        返回首页
      </Link>
    </div>
  );
}
