import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";
import { Terminal, Database, Code2, Cpu, Cloud, Layers, Server, Atom, Github, Linkedin, MessageSquare, Sparkles } from "lucide-react";
import Hyperspeed from './Hyperspeed';

function AmbientParticles() {
  const [particleCount, setParticleCount] = useState(10);
  
  useEffect(() => {
    if (window.innerWidth < 768) setParticleCount(12);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full will-change-transform"
          initial={{
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "vh",
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 2 + 0.5
          }}
          animate={{
            y: [null, Math.random() * -200 - 100],
            x: [null, Math.random() * 100 - 50],
            opacity: [null, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * i * 0.1
          }}
        />
      ))}
    </div>
  );
}

export default function WamHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // High-end parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [300, 900], [1, 0]);
  const scale = useTransform(scrollY, [300, 900], [1, 0.9]);

  const skills = useMemo(() => [
    { name: "Python", icon: Terminal, color: "text-fuchsia-400", glow: "rgba(255, 0, 128, 0.2)" },
    { name: "ML/AI", icon: Atom, color: "text-blue-400", glow: "rgba(0, 128, 255, 0.2)" },
    { name: "React", icon: Layers, color: "text-cyan-400", glow: "rgba(0, 255, 255, 0.2)" },
    { name: "Cloud", icon: Cloud, color: "text-purple-400", glow: "rgba(128, 0, 255, 0.2)" },
    { name: "Systems", icon: Cpu, color: "text-indigo-400", glow: "rgba(75, 0, 130, 0.2)" },
    { name: "Data", icon: Database, color: "text-pink-400", glow: "rgba(255, 105, 180, 0.2)" }
  ], []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#050208] select-none pt-40 md:pt-48 pb-20">
      
      {/* Immersive Background Layers */}
      <div className="absolute inset-0 z-0">
        <Hyperspeed 
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x050208,
              islandColor: 0x050208,
              background: 0x050208,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3
            }
          }}
        />
        
        <div className="absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-primary/10 blur-3xl md:blur-[120px] rounded-full mix-blend-overlay" />
        <div className="absolute bottom-1/4 right-1/4 w-[50%] h-[50%] bg-secondary/10 blur-3xl md:blur-[120px] rounded-full mix-blend-overlay" />
        
        {/* Subtle Futuristic Grid */}
        <div className="absolute inset-0 opacity-[0.03] z-20" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#050208]/20 via-transparent to-[#050208] z-30" />
      </div>

      {/* Cinematic Background Typography */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
      >
        <h1 className="text-[10vw] font-black uppercase tracking-tighter text-stroke-futuristic opacity-5 whitespace-nowrap select-none italic">
          PALAK GAUTAM
        </h1>
      </motion.div>

      {/* Cinematic Interface Layers (Top Branding ONLY) */}
      <div className="absolute top-0 inset-x-0 z-30 pointer-events-none flex justify-between p-6 pt-32 md:p-24">
        {/* Top Branding Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 pointer-events-auto"
        >
          <a href="/" className="flex items-center gap-5 group">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center p-2 group-hover:border-primary/40 transition-all duration-700">
              <img src="/logo_pg.png" alt="PG Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.6em] text-primary font-black">SYSTEM ONLINE</span>
              </div>
              <span className="text-[10px] md:text-sm font-black tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">PALAK GAUTAM</span>
            </div>
          </a>
          <div className="w-24 h-[1px] bg-gradient-to-r from-primary/60 to-transparent" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-right flex flex-col items-end gap-4 pointer-events-auto"
        >
          <div className="flex gap-10">
            <a href="https://github.com/PalakGautam-hub" target="_blank" className="text-white/20 hover:text-primary transition-all duration-500 hover:scale-110"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/palak-gautam-8805b0311" target="_blank" className="text-white/20 hover:text-primary transition-all duration-500 hover:scale-110"><Linkedin className="w-5 h-5" /></a>
          </div>
        </motion.div>
      </div>

      {/* Central Immersive Composition (Photo + Text Below) */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center px-6 md:px-0"
      >

        {/* Mobile-Only Sequential Introduction */}
        <div className="flex flex-col gap-6 w-full md:hidden relative z-20 items-center text-center mt-2 mb-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {skills.slice(0, 3).map((skill, i) => (
              <div key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-3">
                <skill.icon className={`w-3.5 h-3.5 ${skill.color}`} />
                <span className="text-[10px] font-black tracking-widest text-white/60 uppercase">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Text Block - Placed underneath the photo */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-10 mt-4 md:mt-8 z-20 pointer-events-auto w-full"
        >
          {/* Quote Block */}
          <div className="flex flex-col gap-4 md:gap-6 max-w-2xl group items-center text-center px-4">
            <div className="flex items-center gap-4">
              <Sparkles className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-500" />
              <span className="text-[12px] uppercase tracking-[0.5em] font-black text-white/90">Digital Intelligence</span>
            </div>
            <p className="text-base md:text-xl text-zinc-300 leading-relaxed tracking-wide italic font-light drop-shadow-sm">
              "Orchestrating logic. <span className="text-white/60">Architecting emotion.</span> Elevating digital existence through cinematic engineering."
            </p>
          </div>
          
          {/* Contact Button */}
          <a href="mailto:gautampalak77@gmail.com" className="flex flex-col items-center gap-4 group">
            <div className="relative w-14 h-14 rounded-full border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:border-primary/50 group-hover:scale-110">
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
              <MessageSquare className="w-6 h-6 text-white/30 group-hover:text-primary transition-colors duration-500" />
            </div>
            <div className="flex flex-col gap-1 items-center">
              <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/20">Protocol Access</span>
              <span className="text-[11px] font-bold text-white tracking-[0.25em] group-hover:text-primary transition-all duration-500 uppercase">Initiate Contact</span>
            </div>
          </a>
        </motion.div>

      </motion.div>

    </section>
  );
}
