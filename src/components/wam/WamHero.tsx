import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";
import { Terminal, Database, Code2, Cpu, Cloud, Layers, Server, Atom, Github, Linkedin, MessageSquare, Sparkles } from "lucide-react";

function AmbientParticles() {
  const [particleCount, setParticleCount] = useState(30);
  
  useEffect(() => {
    if (window.innerWidth < 768) setParticleCount(12);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
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
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

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

  const nodes = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const skillsToShow = isMobile ? skills.slice(0, 4) : skills;
    
    return skillsToShow.map((skill, i) => {
      const angle = (i / skillsToShow.length) * (Math.PI * 2);
      const rx = isMobile ? 42 : 32; 
      const ry = isMobile ? 38 : 42; 
      return {
        ...skill,
        top: `${50 + ry * Math.sin(angle)}%`,
        left: `${50 + rx * Math.cos(angle)}%`,
        delay: i * 0.1
      };
    });
  }, [skills]);

  return (
    <section ref={containerRef} className="relative w-full h-[100svh] md:h-[110vh] flex items-center justify-center overflow-hidden bg-[#050208] select-none">
      
      {/* Immersive Luminous Environment (Background) */}
      <AmbientParticles />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-primary/10 blur-3xl md:blur-[160px] rounded-full animate-pulse-luminous" />
        <div className="absolute bottom-1/4 right-1/4 w-[50%] h-[50%] bg-secondary/10 blur-3xl md:blur-[140px] rounded-full animate-pulse-luminous" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Futuristic Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
        />
      </div>

      {/* Cinematic Background Typography */}
      <motion.div 
        style={{ y: smoothY1, opacity }}
        className="absolute inset-0 flex items-center justify-center z-0"
      >
        <h1 className="text-[10vw] font-black uppercase tracking-tighter text-stroke-futuristic opacity-5 whitespace-nowrap select-none italic">
          PALAK GAUTAM
        </h1>
      </motion.div>

      {/* Central Immersive Composition */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative z-10 w-full max-w-7xl h-full flex flex-col md:flex-row items-center justify-between md:justify-center px-6 md:px-0 pt-32 pb-10 md:pt-[env(safe-area-inset-top)] md:pb-[env(safe-area-inset-bottom)]"
      >
        {/* The Central Visual Anchor (Portrait) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[300px] h-[480px] sm:w-[340px] sm:h-[520px] md:w-[480px] md:h-[600px] aspect-auto md:aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden group shadow-[0_0_100px_hsla(var(--primary)/0.1)] mb-10 md:mb-0 will-change-transform"
        >
          {/* Luminous Ribbon/Aura Effect */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute -inset-10 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-1000" />
          </div>

          <img 
            src="/palak_portrait.png" 
            alt="Palak Gautam" 
            className="w-full h-full object-contain group-hover:scale-105 transition-all duration-[2000ms] ease-out"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#050208]/40 via-transparent to-transparent pointer-events-none" />
          
          {/* Internal Glass Overlay */}
          <div className="absolute inset-0 border-[1px] border-white/5 rounded-[2rem] md:rounded-[4rem] pointer-events-none m-4 md:m-6" />
        </motion.div>

        {/* Futuristic Orbital Nodes (Desktop Only) */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {nodes.map((node, i) => (
            <OrbitalNode key={i} node={node} />
          ))}
        </div>

        {/* Mobile-Only Sequential Introduction (Replaces desktop orbital clutter) */}
        <div className="flex flex-col gap-6 w-full md:hidden relative z-20 items-center text-center">
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
      </motion.div>

      {/* Cinematic Interface Layers (Overlay) */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 pt-32 pb-12 md:p-24">
        
        {/* Top Branding Section */}
        <div className="flex justify-between items-start">
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

        {/* Bottom Information Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex flex-col gap-10 pointer-events-auto"
          >
            {/* Quote Block (Shown on both mobile and desktop, but styled for both) */}
            <div className="flex flex-col gap-4 md:gap-5 max-w-xs group order-2 md:order-1 items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-4">
                <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform duration-500" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/90">Digital Intelligence</span>
              </div>
              <p className="text-[11px] md:text-sm text-zinc-300 leading-relaxed tracking-wide italic font-light drop-shadow-sm">
                "Orchestrating logic. <span className="text-white/60">Architecting emotion.</span> Elevating digital existence through cinematic engineering."
              </p>
            </div>
            
            <a href="mailto:gautampalak77@gmail.com" className="flex items-center gap-8 group w-fit order-1 md:order-2">
              <div className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:border-primary/50 group-hover:scale-110">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700" />
                <MessageSquare className="w-5 h-5 text-white/30 group-hover:text-primary transition-colors duration-500" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white/20">Protocol Access</span>
                <span className="text-[11px] font-bold text-white tracking-[0.25em] group-hover:text-primary transition-all duration-500 uppercase">Initiate Contact</span>
              </div>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-8 flex justify-end"
          >
            <h2 className="text-3xl md:text-6xl font-light tracking-tighter text-white leading-none text-right uppercase mt-12 md:mt-0">
              <span className="opacity-40">VISIONARY</span> <br/>
              <span className="italic font-serif text-primary drop-shadow-[0_0_20px_rgba(var(--primary),0.3)]">ARCHITECT.</span>
            </h2>
          </motion.div>
        </div>
      </div>

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

function OrbitalNode({ node }: { node: any }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2 + node.delay, duration: 2, ease: [0.16, 1, 0.3, 1] }}
      style={{ top: node.top, left: node.left }}
      className="absolute pointer-events-auto group/node z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ 
          y: isHovered ? 0 : [0, -15, 0], 
          scale: isHovered ? 1.1 : 1,
          boxShadow: isHovered ? `0 0 30px ${node.glow}` : "0 0 0px transparent"
        }}
        transition={{ 
          y: { duration: 6 + Math.random() * 4, repeat: Infinity, ease: "easeInOut" },
          scale: { type: "spring", damping: 15, stiffness: 200 }
        }}
        className="luminous-glass px-6 py-5 rounded-[2rem] flex items-center gap-5 border-white/5 hover:border-primary/30 transition-all duration-700 cursor-pointer backdrop-blur-md md:backdrop-blur-[32px]"
      >
        <div className={`p-2.5 rounded-2xl bg-white/5 ${node.color} group-hover/node:scale-125 transition-all duration-700 ease-out`}>
          <node.icon className="w-6 h-6" />
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[9px] uppercase tracking-[0.4em] font-black text-white/20 group-hover/node:text-primary/40 transition-colors">Integrity</span>
          <span className="text-[13px] uppercase tracking-[0.2em] font-bold text-white group-hover/node:text-primary transition-colors">
            {node.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

const BrainCircuit = ({ className }: { className?: string }) => <Atom className={className} />;

