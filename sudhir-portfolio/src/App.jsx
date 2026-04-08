import { useEffect } from 'react';
import { About } from './components/sections/about';
import ParticlesBackground from './components/ui/Particles';
import bgImage from './assets/bg.jpg';
import Work from './components/sections/work';
import { Contact } from './components/sections/Contact';
import { SmoothCursor } from './components/ui/smooth-cursor';
import { Dock, DockIcon } from './components/ui/dock';
import { UserIcon, BriefcaseIcon, MailIcon } from 'lucide-react';

function playClickSound() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();
  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(600, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08);
  gain.gain.setValueAtTime(0.15, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.1);
}

function App() {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest('button, a')) {
        playClickSound();
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ParticlesBackground />
      <SmoothCursor />
      <Dock className="fixed top-0 left-1/2 -translate-x-1/2 z-50 border-[#c49260]/20 bg-[#0d0906]/80 backdrop-blur-md !mt-3">
        <DockIcon>
          <a href="#about" className="text-[#c49260] hover:text-[#e8c9a0] transition-colors">
            <UserIcon className="w-full h-full" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="#work" className="text-[#c49260] hover:text-[#e8c9a0] transition-colors">
            <BriefcaseIcon className="w-full h-full" />
          </a>
        </DockIcon>
        <DockIcon>
          <a href="#contact" className="text-[#c49260] hover:text-[#e8c9a0] transition-colors">
            <MailIcon className="w-full h-full" />
          </a>
        </DockIcon>
      </Dock>
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen">
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  )
}

export default App