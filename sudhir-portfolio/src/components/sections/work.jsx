import { useState } from "react";
import Card from "../ui/Card";
import {
  Sheet,
  SheetContent,
} from "../ui/sheet";
import { ExternalLinkIcon } from "lucide-react";
import AIFilming from "../../assets/AIFilming.PNG";
import Cinematic from "../../assets/Cinematic.PNG";
import Color from "../../assets/Color.PNG";

const categories = [
  {
    image: AIFilming,
    alt: "AI Filming",
    title: "AI Filming",
    description: "Short films created using AI-assisted tools and workflows.",
    tags: ["AI", "Film"],
    isNew: false,
    projects: [
      {
        name: "Hanuman AI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tools: ["Google Flow", "Capcut", "Wink"],
        driveLink: "https://drive.google.com/file/d/1BcrcDz0ggTcxKH-E-E1Omt1nCuoeX21Z/view",
      },
      {
        name: "Theeyam AI",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tools: ["Google Flow", "Capcut", "Wink"],
        driveLink: "https://drive.google.com/file/d/1kjbIp9aQZvEe2X0IhWpdHpzLH-Wv4yxA/view?usp=drivesdk",
      },
      {
        name: "Shiva AI",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tools: ["Google Flow", "Capcut", "Wink"],
        driveLink: "https://drive.google.com/file/d/1hU4cn1L8DI0g83tuYllZ7Gp_KIjdRfns/view",
      },
      {
        name: "Bengaluru Anime",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        tools: ["Google Flow", "Capcut", "Wink"],
        driveLink: "https://drive.google.com/file/d/1V0d39IjfhscJXvgV0_bofqVKX-1h_5i7/view?usp=drivesdk",
      },
    ],
  },
  {
    image: Cinematic,
    alt: "Cinematography",
    title: "Cinematography",
    description: "Visual storytelling through expert camera work and lighting.",
    tags: ["Camera", "Lighting"],
    isNew: false,
    projects: [
      {
        name: "Ek Din Short Film",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        tools: ["Capcut", "Edits", "Wink"],
        driveLink: "https://drive.google.com/file/d/1pASsLm_NF1CVcm-Ywu5UeDQqn9pl2U0y/view?usp=drivesdk",
      },
      {
        name: "Temple Cinematography",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        tools: ["Capcut", "Edits", "Wink"],
        driveLink: "https://drive.google.com/file/d/1ZLwtosZWMqzCJ3JmrCDGTvsvJtK6CRr9/view?usp=drivesdk",
      },
      {
        name: "Timeline Edit",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        tools: ["Capcut", "Edits", "Wink"],
        driveLink: "https://drive.google.com/file/d/1cnGa6grbKIcYvj-Zg4uldCxC-9_mI_RA/view?usp=drivesdk",
      },
      {
        name: "Art of Framing",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        tools: ["Capcut", "Edits", "Wink"],
        driveLink: "https://drive.google.com/file/d/1JJn7Axmh-Viqr5noJjsrDLMUH4smgSIG/view?usp=drivesdk",
      },
    ],
  },
  {
    image: Color,
    alt: "Colour Grading",
    title: "Colour Grading",
    description: "Professional color science and LUT design for cinematic looks.",
    tags: ["Color", "Post"],
    isNew: false,
    projects: [
      {
        name: "Dharmasthala Color Grade",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tools: ["Capcut", "Wink"],
        driveLink: "https://drive.google.com/file/d/1q61j-RShgskcwhSdLjnls5IIs8dwMOsf/view?usp=drivesdk",
      },
      {
        name: "Movie Color Grade",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        tools: ["Capcut", "Wink"],
        driveLink: "https://drive.google.com/file/d/1SLxn8VHPYkG0UuSZ5NmvW6Ujy60CUv6n/view?usp=drivesdk5",
      },
      {
        name: "Nature Tone",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        tools: ["Capcut", "Wink"],
        driveLink: "https://drive.google.com/file/d/1QmnRQAuDfvy_A9JwWc6QY5Fqeb7ueGhq/view?usp=drivesdk",
      },
      {
        name: "Film Grade",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        tools: ["Capcut", "Wink"],
        driveLink: "https://drive.google.com/file/d/16wW3U82m8I8AXOutE6kDxlRiUDBruYp_/view?usp=drivesdk",
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
