import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import { Terminal, Database, Code2, Cpu, Cloud, Layers, Server, Atom, Github, Linkedin, MessageSquare, Sparkles } from "lucide-react";

export default function WamHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // High-end parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);

  const skills = useMemo(() => [
    { name: "Python", icon: Terminal, color: "text-fuchsia-400" },
    { name: "ML/AI", icon: BrainCircuit, color: "text-blue-400" },
    { name: "React", icon: Layers, color: "text-cyan-400" },
    { name: "Cloud", icon: Cloud, color: "text-purple-400" },
    { name: "Systems", icon: Cpu, color: "text-indigo-400" },
    { name: "Data", icon: Database, color: "text-pink-400" }
  ], []);

  // Orbital node distribution with protected "Safe Zone" for face
  const nodes = useMemo(() => {
    // Only show 4 nodes on mobile to reduce GPU load
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const skillsToShow = isMobile ? skills.slice(0, 4) : skills;
    
    return skillsToShow.map((skill, i) => {
      const angle = (i / skillsToShow.length) * (Math.PI * 2);
      const rx = isMobile ? 42 : 32; // Expanded radius for mobile to avoid face
      const ry = isMobile ? 38 : 42; 
      return {
        ...skill,
        top: `${50 + ry * Math.sin(angle)}%`,
        left: `${50 + rx * Math.cos(angle)}%`,
        delay: i * 0.15
      };
    });
  }, [skills]);

  return (
    <section ref={containerRef} className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden bg-[#050208] select-none">
      
      {/* Immersive Luminous Environment (Background) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[60%] h-[60%] bg-primary/20 blur-[160px] rounded-full animate-pulse-luminous" />
        <div className="absolute bottom-1/4 right-1/4 w-[50%] h-[50%] bg-secondary/15 blur-[140px] rounded-full animate-pulse-luminous" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Futuristic Grid */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
        />
      </div>

      {/* Cinematic Background Typography (Benchmark Style) */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 flex items-center justify-center z-0"
      >
        <h1 className="text-[10vw] font-black uppercase tracking-tighter text-stroke-futuristic opacity-10 whitespace-nowrap select-none">
          PALAK GAUTAM
        </h1>
      </motion.div>

      {/* Central Immersive Composition */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative z-10 w-full max-w-7xl h-full flex items-center justify-center"
      >
        {/* The Central Visual Anchor (Portrait) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[320px] h-[400px] md:w-[480px] md:h-[600px] aspect-[4/5] rounded-[4rem] overflow-hidden group shadow-2xl"
        >
          {/* Luminous Ribbon/Aura Effect (Inspired by NICOLAI) */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute -inset-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          </div>

          <img 
            src="/palak_portrait.png" 
            alt="Palak Gautam" 
            className="w-full h-full object-cover object-top filter grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#050208] via-transparent to-transparent opacity-80" />
          
          {/* Internal Glass Overlay */}
          <div className="absolute inset-0 border-[2px] border-white/10 rounded-[4rem] pointer-events-none m-4" />
        </motion.div>

        {/* Futuristic Orbital Nodes (Floating Intelligence Cards) */}
        <div className="absolute inset-0 pointer-events-none">
          {nodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + node.delay, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ top: node.top, left: node.left }}
              className="absolute pointer-events-auto group/node"
            >
              <motion.div
                animate={{ y: [0, -15, 0], rotateZ: [0, 2, -2, 0] }}
                transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
                className="luminous-glass px-5 py-4 rounded-[1.5rem] flex items-center gap-4 hover:border-primary/40 hover:bg-white/[0.08] transition-all duration-500 cursor-pointer shadow-xl"
              >
                <div className={`p-2 rounded-xl bg-white/5 ${node.color} group-hover/node:scale-110 transition-transform duration-500`}>
                  <node.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[8px] uppercase tracking-[0.3em] font-black text-white/30">System</span>
                  <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-white group-hover/node:text-primary transition-colors">
                    {node.name}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Cinematic Interface Layers (Overlay) */}
      <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-12 md:p-24">
        
        {/* Top Branding Section */}
        <div className="flex justify-between items-start">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="flex flex-col gap-2"
           >
             <span className="text-[8px] uppercase tracking-[0.6em] text-primary font-black drop-shadow-neon">PROTOCOL v4.0</span>
             <div className="w-16 h-[1px] bg-primary/40" />
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="text-right flex flex-col items-end gap-4 pointer-events-auto"
           >
             <div className="flex gap-8">
               <a href="https://github.com/PalakGautam-hub" target="_blank" className="text-white/30 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
               <a href="https://www.linkedin.com/in/palak-gautam-8805b0311" target="_blank" className="text-white/30 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
             </div>
           </motion.div>
        </div>

        {/* Bottom Information Architecture (Benchmark Style) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="md:col-span-4 flex flex-col gap-8 pointer-events-auto"
          >
            <div className="flex flex-col gap-4 max-w-xs">
              <div className="flex items-center gap-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-black text-white">Vision Protocol</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed tracking-wide italic font-serif">
                "Analyzing logic. Engineering the insight. Transforming data into cinematic architecture."
              </p>
            </div>
            
            <a href="mailto:gautampalak77@gmail.com" className="flex items-center gap-6 group w-fit">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                <MessageSquare className="w-4 h-4 text-white/50 group-hover:text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-[0.2em] font-black text-white/20">Communication</span>
                <span className="text-[10px] font-bold text-white tracking-widest group-hover:text-primary transition-colors uppercase">Get in touch</span>
              </div>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="md:col-span-8 flex justify-end"
          >
            <h2 className="text-2xl md:text-4xl font-light font-serif tracking-tighter text-white leading-none text-right uppercase">
              SYSTEM <br/>
              <span className="italic text-white/30">ARCHITECT.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Floating Glass Panels (Depth Accents) */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[20%] right-[15%] w-64 h-80 luminous-glass rounded-[3rem] -rotate-12 opacity-20 pointer-events-none" 
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-[15%] left-[10%] w-48 h-64 luminous-glass rounded-[2rem] rotate-12 opacity-10 pointer-events-none" 
      />

    </section>
  );
}

// Missing import from prev edits
const BrainCircuit = ({ className }: { className?: string }) => <Atom className={className} />;
