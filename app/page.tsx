"use client";

import { useState } from "react";
import ProjectButton from "@/components/project";

let projects = [
  { id: 0, content: "fort nite" },
  { id: 1, content: "idk" },
  { id: 2, content: "## fortnite battlepass" }
]

export default function Home() {
  const [currentProject, setCurrentProject] = useState(projects[0].id)

  return (
    <>
      <main className="bg-transparent w-screen h-screen overflow-hidden flex">
        <section className="w-56 h-full bg-slate-100/5 p-2 overflow-y-scroll scrollbar-none text-sm">
          <ul className="space-y-2">
            {projects.map((project) => (
              <ProjectButton key={project.id} selected={currentProject == project.id} onClick={() => setCurrentProject(project.id)} />
            ))}
          </ul>
        </section>
        <section className="flex-1 h-full overflow-y-hidden p-2">
          <textarea value={projects[currentProject].content} className="w-full p-2 rounded bg-transparent h-full border-none outline-none resize-none"></textarea>
        </section>
      </main>
    </>
  );
}
