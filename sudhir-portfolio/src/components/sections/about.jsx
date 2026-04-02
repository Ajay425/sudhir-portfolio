import { TypingAnimation } from "../ui/typing-animation";
import pfp from "../../assets/IMG_2445.JPG.jpeg";

export const About = () =>  {
    return ( 
        <div className="w-full h-screen flex flex-col items-center justify-start pt-24 gap-4" style={{fontFamily: "'Inter', sans-serif"}}>
                <p className="text-sm uppercase tracking-[0.3em] text-[#c49260]/70 font-light">Welcome to my world</p>
                <h1 className="text-7xl font-semibold text-[#c49260] tracking-tight">About Me</h1>
                <div className="w-16 h-[2px] bg-[#c49260]/40 mt-2"></div>
                <div className="flex items-center justify-center gap-16 px-16 mt-auto mb-auto">
                    <img src={pfp} alt="Sudhir" className="w-80 h-80 rounded-full object-cover flex-shrink-0" />
                    <div className="flex flex-col gap-4 max-w-lg">
                        <TypingAnimation
                            className="text-2xl text-[#c49260] font-medium"
                            duration={80}
                        >
                            Hey I'm Sudhir, a Video Editor based in Bangalore
                        </TypingAnimation>
                        <p className="text-base text-white/80 leading-relaxed">
                            I'm a passionate video editor with a keen eye for storytelling and visual aesthetics. I specialize in crafting compelling narratives through seamless editing, color grading, and motion graphics.
                        </p>
                        <p className="text-base text-white/80 leading-relaxed">
                            With experience across diverse projects — from short films and music videos to social media content and corporate productions — I bring creative vision and technical precision to every project I work on.
                        </p>
                        <p className="text-base text-white/80 leading-relaxed">
                            Based in Bangalore, I'm always looking for exciting projects and collaborations that push creative boundaries.
                        </p>
                    </div>
                </div>
            </div>
     );
            
};
