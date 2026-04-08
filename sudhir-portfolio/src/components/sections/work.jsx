import { useState } from "react";
import Card from "../ui/Card";
import {
  Sheet,
  SheetContent,
} from "../ui/sheet";
import { ExternalLinkIcon } from "lucide-react";

const categories = [
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "AI Filming",
    title: "AI Filming",
    description: "Short films created using AI-assisted tools and workflows.",
    tags: ["AI", "Film"],
    isNew: true,
    projects: [
      {
        name: "Project 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tools: ["DaVinci Resolve", "After Effects"],
        driveLink: "https://drive.google.com/example1",
      },
      {
        name: "Project 2",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tools: ["Premiere Pro", "RunwayML"],
        driveLink: "https://drive.google.com/example2",
      },
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "Cinematography",
    title: "Cinematography",
    description: "Visual storytelling through expert camera work and lighting.",
    tags: ["Camera", "Lighting"],
    isNew: false,
    projects: [
      {
        name: "Project 1",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        tools: ["Premiere Pro", "Photoshop"],
        driveLink: "https://drive.google.com/example3",
      },
    ],
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "Colour Grading",
    title: "Colour Grading",
    description: "Professional color science and LUT design for cinematic looks.",
    tags: ["Color", "Post"],
    isNew: false,
    projects: [
      {
        name: "Project 1",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tools: ["DaVinci Resolve", "FilmConvert"],
        driveLink: "https://drive.google.com/example4",
      },
      {
        name: "Project 2",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        tools: ["DaVinci Resolve", "Baselight"],
        driveLink: "https://drive.google.com/example5",
      },
    ],
  },
];

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section id="work" className="py-20 px-6 flex flex-col items-center gap-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#c49260]/70 font-light">Featured projects</p>
      <h2 className="text-4xl md:text-7xl font-semibold text-[#c49260] tracking-tight text-center">My Work</h2>
      <div className="w-16 h-[2px] bg-[#c49260]/40 mt-2 mb-10"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Card
            key={category.title}
            {...category}
            buttonText="View Projects"
            onButtonClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>

      <Sheet open={!!selectedCategory} onOpenChange={(open) => { if (!open) setSelectedCategory(null); }}>
        <SheetContent side="right" className="bg-[#0d0906] border-[#c49260]/20 overflow-y-auto p-0">
          {selectedCategory && (
            <div className="flex flex-col gap-4 p-4 pt-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              <h2 className="text-xl font-semibold text-[#e8c9a0] text-center">{selectedCategory.title}</h2>

              {selectedCategory.projects.map((project, idx) => (
                <div key={idx} className="rounded-xl border border-[#c49260]/20 bg-[#1a1210] p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#e8c9a0]">{project.name}</h3>
                    <a
                      href={project.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#a855f7] hover:bg-[#9333ea] text-white text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5" />
                      Drive Link
                    </a>
                  </div>
                  <p className="text-sm text-[#c49260] leading-relaxed">{project.description}</p>
                  <div>
                    <p className="text-xs font-semibold text-[#c49260]/60 uppercase tracking-wider mb-1.5">Tools Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-xs px-3 py-1 rounded-md bg-[#0d0906] border border-[#c49260]/20 text-[#e8c9a0]">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
