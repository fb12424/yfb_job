import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().url(),
});

const projectSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  period: z.string().min(1),
  role: z.string().min(1),
  stack: z.array(z.string().min(1)).min(1),
  cover: z.string().startsWith("/"),
  coverAlt: z.string().optional(),
  featured: z.boolean().default(false),
  order: z.number().int().nonnegative().default(99),
  sample: z.boolean().default(false),
  links: z.array(linkSchema).default([]),
});

export type ProjectMeta = z.infer<typeof projectSchema> & { slug: string };
export type Project = ProjectMeta & { content: string };

function readProject(fileName: string): Project {
  const slug = fileName.replace(/\.mdx$/, "");
  const source = fs.readFileSync(path.join(projectsDirectory, fileName), "utf8");
  const { data, content } = matter(source);
  const result = projectSchema.safeParse(data);

  if (!result.success) {
    throw new Error(
      `[content] ${fileName} 的 frontmatter 不合法：\n${result.error.message}`,
    );
  }

  return { ...result.data, slug, content };
}

export function getAllProjects(): Project[] {
  return fs
    .readdirSync(projectsDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(readProject)
    .sort((a, b) => a.order - b.order);
}

export function getProject(slug: string): Project | undefined {
  if (!/^[a-z0-9-]+$/.test(slug)) return undefined;

  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  return readProject(`${slug}.mdx`);
}
