import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: {
      color: { value: "transparent" }
    },
    fpsLimit: 120,
    particles: {
      color: { value: "#ffffff" },
      number: { value: 80, density: { enable: true, area: 800 } },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        outModes: { default: "bounce" }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      }
    }
  }), []);

  if (!init) return null;

  return (
    <Particles id="tsparticles" options={options} className="absolute inset-0 w-full h-full" />
  );
}