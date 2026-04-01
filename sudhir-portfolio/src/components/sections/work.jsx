import Card from "../ui/Card";

const projects = [
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "Project 1",
    title: "Project One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    tags: ["React", "Tailwind"],
    isNew: true,
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "Project 2",
    title: "Project Two",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    tags: ["Node.js", "Express"],
    isNew: false,
  },
  {
    image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    alt: "Project 2",
    title: "Project Two",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    tags: ["Node.js", "Express"],
    isNew: false,
    link: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 px-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      <h2 className="text-7xl font-semibold text-[#c49260] tracking-tight text-center mb-10">My Work</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
