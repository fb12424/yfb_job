const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

export const siteConfig = {
  name: "YFB",
  role: "前端工程师",
  title: "YFB · 前端工程师",
  description: "前端工程师，关注 B 端系统、微信小程序与工程质量。",
  intro: "把复杂的业务，做成清晰、好用、可维护的界面。",
  location: "中国",
  email: "you@example.com",
  github: "https://github.com/your-name",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    vercelUrl ??
    "http://localhost:3000",
};
