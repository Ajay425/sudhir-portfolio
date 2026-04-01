import { InteractiveHoverButton } from "./interactive-hover-button";

export default function Card({ image, alt, title, description, tags = [], isNew = false, buttonText = "View Project", onButtonClick }) {
  return (
    <div className="bg-[#0d0906] border border-[#c49260]/20 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(196,146,96,0.3)] hover:border-[#c49260]/40">
      <div className="p-6 pb-0">
        <img src={image} alt={alt} className="rounded-xl w-full h-56 object-cover" />
      </div>
      <div className="p-6 pt-4 flex flex-col items-center text-center gap-3">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-xl font-semibold text-[#e8c9a0]">{title}</h2>
          {isNew && <span className="text-[10px] px-2 py-0.5 rounded bg-[#c49260] text-[#0d0906] font-bold uppercase tracking-wider">NEW</span>}
        </div>
        <p className="text-sm text-[#c49260] leading-relaxed">{description}</p>
        <div className="flex flex-row items-center justify-center gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full border border-[#c49260]/30 text-[#c49260]">{tag}</span>
          ))}
        </div>
        <InteractiveHoverButton onClick={onButtonClick} className="mt-1 border-[#c49260] text-[#c49260]">{buttonText}</InteractiveHoverButton>
      </div>
    </div>
  );
}