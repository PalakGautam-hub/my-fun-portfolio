import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";
import { Terminal, Database, Code2, Cpu, Cloud, Layers, Server, Atom, Github, Linkedin, MessageSquare, Sparkles } from "lucide-react";

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
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
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
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [300, 900], [1, 0]);
  const scale = useTransform(scrollY, [300, 900], [1, 0.9]);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const smoothY1 = useSpring(y1, springConfig);

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
      
      {/* Immersive Luminous Environment (Background) */}
      <AmbientParticles />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-primary/10 blur-3xl md:blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[50%] h-[50%] bg-secondary/10 blur-3xl md:blur-[120px] rounded-full" />
        
        {/* Subtle Futuristic Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
        />
      </div>

      {/* Cinematic Background Typography */}
      <motion.div 
        style={{ y: smoothY1, opacity }}
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
          className="flex flex-col gap-3"
        >
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[9px] uppercase tracking-[0.8em] text-primary font-black drop-shadow-neon">SYSTEM ONLINE</span>
          </div>
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
        {/* The Central Visual Anchor (Portrait) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 md:mb-12 will-change-transform"
        >
          {/* Elegant Static Glow Halo (Replaces glitchy rotating ring) */}
          <div className="absolute -inset-4 md:-inset-8 rounded-[4rem] md:rounded-[6rem] z-0 opacity-40 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, hsla(320,100%,60%,0.2), hsla(220,100%,60%,0.1) 40%, transparent 70%)' }}
          />

          {/* Photo Frame */}
          <div className="relative w-[80vw] h-[58vh] md:w-[560px] md:h-[760px] rounded-[2.8rem] md:rounded-[4.8rem] overflow-hidden group shadow-2xl z-10 border border-white/10 bg-white/5 backdrop-blur-sm">
            {/* Luminous Aura Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute -inset-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
            </div>

            <img 
              src="/palak_portrait.png" 
              alt="Palak Gautam" 
              className="w-full h-full object-cover object-[center_top] filter saturate-50 contrast-125 brightness-95 group-hover:saturate-100 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all [transition-duration:2000ms] ease-out"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050208]/80 via-[#050208]/20 to-transparent pointer-events-none" />
            
            {/* Inner Premium Glass Border */}
            <div className="absolute inset-0 rounded-[2.8rem] md:rounded-[4.8rem] pointer-events-none"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.02)' }}
            />
          </div>
        </motion.div>

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

      {/* Floating Glass Panels (Depth Accents) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[15%] right-[10%] w-72 h-96 luminous-glass rounded-[4rem] -rotate-12 opacity-10 pointer-events-none" 
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-[10%] left-[5%] w-56 h-72 luminous-glass rounded-[3rem] rotate-12 opacity-5 pointer-events-none" 
      />

    </section>
  );
}
