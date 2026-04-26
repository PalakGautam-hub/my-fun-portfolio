import { motion } from "framer-motion";
import { Terminal, Database, Code2, Cpu, Cloud, Layers, Server, Atom } from "lucide-react";
import { useRef, useMemo, useState } from "react";
import { useSoundSystem } from "./SoundSystem";

export default function WamTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSoundSystem();
  
  const techPills = useMemo(() => {
    const allSkills = [
      "Python", "Java", "C", "JavaScript (ES6+)", "SQL",
      "React.js", "HTML5", "CSS3", "Tailwind CSS",
      "Node.js", "Express.js", "REST APIs", "Microservices", "JWT",
      "MongoDB", "MySQL", "NoSQL",
      "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Power BI",
      "Git", "Docker", "Linux", "VS Code", "Postman"
    ];

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const filteredSkills = allSkills; // Show all skills

    const icons = [Terminal, Database, Code2, Cpu, Cloud, Layers, Server];
    const colors = ["text-fuchsia-400", "text-purple-400", "text-pink-400"];

    return filteredSkills.map((name, i) => {
       const Icon = icons[i % icons.length];
       const colorClass = colors[i % colors.length];
       
       const ring1Count = 6;
       const ring2Count = 9;
       
       let ringIndex = 0;
       let posInRing = i;
       let nodesInRing = ring1Count;
       
       // Tighter radii to prevent overflow. Values are percentages from center (50%)
       let rx = isMobile ? 25 : 18; 
       let ry = isMobile ? 20 : 18;

       if (i >= ring1Count && i < ring1Count + ring2Count) {
         ringIndex = 1;
         posInRing = i - ring1Count;
         nodesInRing = ring2Count;
         rx = isMobile ? 38 : 30;
         ry = isMobile ? 32 : 30;
       } else if (i >= ring1Count + ring2Count) {
         ringIndex = 2;
         posInRing = i - (ring1Count + ring2Count);
         nodesInRing = filteredSkills.length - (ring1Count + ring2Count);
         rx = isMobile ? 46 : 42; // Max 46% so it doesn't clip
         ry = isMobile ? 42 : 42;
       }

       // Stagger angles slightly for organic look
       const angleOffset = ringIndex * (Math.PI / 8);
       const angle = (posInRing / nodesInRing) * (Math.PI * 2) + angleOffset;
       
       const top = 50 + ry * Math.sin(angle);
       const left = 50 + rx * Math.cos(angle);

       return {
         name,
         Icon,
         colorClass,
         ring: ringIndex,
         top: `${top}%`,
         left: `${left}%`,
         delay: (i * 0.05),
       };
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100svh] md:min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center border-t border-white/5 py-32">
      
      {/* Section Header */}
      <div className="absolute top-24 md:top-32 left-6 md:left-12 z-30 pointer-events-none">
        <motion.div 
          className="flex flex-col gap-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-[11px] uppercase tracking-[1em] text-primary/40 font-black mb-2">Technical Archive [ 01 ]</h3>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-light font-serif text-white tracking-tighter leading-none uppercase">
            Core <br/>
            <span className="italic text-white/20">Skills.</span>
          </h2>
        </motion.div>
      </div>

      {/* Refined 3D Grid */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(rgba(240, 10, 180, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 10, 180, 0.1) 1px, transparent 1px)`,
             backgroundSize: '80px 80px',
             transform: 'perspective(1500px) rotateX(70deg) translateY(-200px) scale(3)',
             transformOrigin: 'center top'
           }}
      />

      {/* Sophisticated Layered Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-3xl md:blur-[160px] pointer-events-none" />
      
      {/* Central Core Element */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-primary/20 flex items-center justify-center bg-black/80 backdrop-blur-md md:backdrop-blur-3xl shadow-[0_0_100px_hsla(var(--primary)/0.1)] relative"
        >
          {/* Multi-layered orbit rings */}
          <div className="absolute inset-[-15%] rounded-full border border-primary/10 border-dashed animate-[spin_25s_linear_infinite]" />
          <div className="absolute inset-[-40%] rounded-full border border-white/5 scale-110 opacity-30" />
          <Atom className="w-8 h-8 md:w-12 md:h-12 text-primary/60 animate-pulse" />
        </motion.div>
        
        <div className="mt-20 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl font-bold font-sans uppercase tracking-[0.3em] text-white text-center leading-none"
          >
            INTELLIGENCE
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="mt-6 text-xl md:text-2xl text-primary italic font-serif lowercase tracking-widest"
          >
            neural stack components
          </motion.span>
        </div>
      </div>

      {/* Spatially Interactive Nodes */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {techPills.map((pill, i) => (
          <TechNode key={i} pill={pill} containerRef={containerRef} playHover={playHover} playClick={playClick} />
        ))}
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 opacity-20 group hover:opacity-50 transition-all duration-700">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/60 to-transparent group-hover:h-20 transition-all duration-700" />
          <span className="text-[9px] tracking-[0.8em] text-white font-black uppercase">
            Kinetic Interface
          </span>
        </div>
      </div>
      
    </section>
  );
}

function TechNode({ pill, containerRef, playHover, playClick }: { pill: any, containerRef: any, playHover: any, playClick: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute flex flex-col items-center justify-center gap-1.5 p-2 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-sm md:backdrop-blur-[24px] shadow-[0_0_15px_rgba(255,255,255,0.03)] pointer-events-auto cursor-grab active:cursor-grabbing hover:bg-white/[0.12] hover:border-primary/50 transition-all duration-700 group hover:z-50 hover:shadow-[0_0_30px_rgba(var(--primary),0.2)]"
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{
        y: isHovered ? 0 : [0, -6, 0],
        scale: isHovered ? 1.2 : 1,
      }}
      transition={{
        y: { duration: 4 + (Math.random() * 4), repeat: Infinity, ease: "easeInOut" },
        opacity: { duration: 0.8, delay: pill.delay },
        scale: { type: "spring", damping: 20, stiffness: 300 }
      }}
      onMouseEnter={() => { playHover(); setIsHovered(true); }}
      onMouseLeave={() => setIsHovered(false)}
      onDragStart={playClick}
      style={{ 
        top: pill.top, 
        left: pill.left,
        transform: 'translate(-50%, -50%)',
        zIndex: isHovered ? 100 : 20 + pill.ring
      }}
    >
      <div className="p-1.5 md:p-2.5 rounded-xl bg-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-700 shadow-inner">
        <pill.Icon className={`w-4 h-4 md:w-6 md:h-6 ${pill.colorClass} opacity-90 drop-shadow-[0_0_8px_currentColor] group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-700`} />
      </div>
      <span className="font-mono text-[7px] sm:text-[8px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] text-white/70 group-hover:text-white transition-colors uppercase text-center font-bold px-1 hidden sm:block group-hover:block drop-shadow-md">
        {pill.name}
      </span>
    </motion.div>
  );
}

