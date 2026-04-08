import { TypingAnimation } from "../ui/typing-animation";
import pfp from "../../assets/IMG_2445.JPG";

export const About = () =>  {
    return ( 
        <div id="about" className="w-full min-h-screen flex flex-col items-center justify-start pt-20 md:pt-24 gap-4 px-6 md:px-0 pb-12 md:pb-0" style={{fontFamily: "'Inter', sans-serif"}}>
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#c49260]/70 font-light text-center">Welcome to my cinematic world</p>
                <h1 className="text-4xl md:text-7xl font-semibold text-[#c49260] tracking-tight text-center">About Me</h1>
                <div className="w-16 h-[2px] bg-[#c49260]/40 mt-2"></div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 px-0 md:px-16 mt-6 md:mt-auto mb-0 md:mb-auto w-full max-w-4xl">
                    <img src={pfp} alt="Sudhir" className="w-40 h-40 md:w-80 md:h-80 rounded-full object-cover flex-shrink-0" />
                    <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
                        <TypingAnimation
                            className="text-xl md:text-2xl text-[#c49260] font-medium"
                            duration={80}
                        >
                            Hey I'm Sudhir, a Video Editor based in Bangalore
                        </TypingAnimation>
                        <p className="text-sm md:text-base text-white/80 leading-relaxed">
                            I'm a passionate video editor with a keen eye for storytelling and visual aesthetics. I specialize in crafting compelling narratives through seamless editing, color grading, and motion graphics.
                        </p>
                        <p className="text-sm md:text-base text-white/80 leading-relaxed">
                            With experience across diverse projects — from short films and music videos to social media content and corporate productions — I bring creative vision and technical precision to every project I work on.
                        </p>
                        <p className="text-sm md:text-base text-white/80 leading-relaxed">
                            Based in Bangalore, I'm always looking for exciting projects and collaborations that push creative boundaries.
                        </p>
                    </div>
                </div>
            </div>
     );
            
};
