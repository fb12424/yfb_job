import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "作品",
  description: "参与过的项目、技术实现与最终落地的样子。",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
        Work / {String(projects.length).padStart(2, "0")} projects
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
        作品
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
        这里是我参与过的项目。每篇会写清楚背景、我的职责、关键技术取舍，以及最后的结果。
      </p>

      <div className="mt-12 border-t border-line">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={index}
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
