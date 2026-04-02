import { About } from './components/sections/about';
import ParticlesBackground from './components/ui/Particles';
import bgImage from './assets/bg.jpg';
import Work from './components/sections/work';
import { Contact } from './components/sections/Contact';
import { SmoothCursor } from './components/ui/smooth-cursor';

function App() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <ParticlesBackground />
      <SmoothCursor />
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen">
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  )
}

export default App