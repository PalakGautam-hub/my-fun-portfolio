import { motion } from "framer-motion";
import { Terminal, Database, Code2, Cpu, Cloud, Layers, Server, Atom } from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { useSoundSystem } from "./SoundSystem";

export default function WamTechStack() {
  const { playHover, playClick } = useSoundSystem();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);
  
  const techPills = useMemo(() => {
    const allSkills = [
      "Python", "Java", "C", "JavaScript (ES6+)", "SQL",
      "React.js", "HTML5", "CSS3", "Tailwind CSS",
      "Node.js", "Express.js", "REST APIs", "Microservices", "JWT",
      "MongoDB", "MySQL", "NoSQL",
      "Machine Learning", "Scikit-Learn", "Pandas", "NumPy", "Power BI",
      "Git", "Docker", "Linux", "VS Code", "Postman"
    ];

    const icons = [Terminal, Database, Code2, Cpu, Cloud, Layers, Server];
    const colors = ["text-fuchsia-400", "text-purple-400", "text-pink-400"];

    return allSkills.map((name, i) => {
       const Icon = icons[i % icons.length];
       const colorClass = colors[i % colors.length];
       
       return {
         name,
         Icon,
         colorClass,
         delay: (i * 0.03),
       };
    });
  }, []);

  return (
    <section className="relative w-full min-h-[100svh] md:min-h-screen bg-black overflow-x-hidden flex flex-col items-center border-t border-white/5 py-24 md:py-48 z-10">
      
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
      
      <div className="relative z-10 w-full max-w-[1400px] px-6 md:px-12 flex flex-col gap-12 md:gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <h3 className="text-[11px] uppercase tracking-[1em] text-primary/40 font-black">Technical Archive [ 01 ]</h3>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-primary/20 flex items-center justify-center bg-black/80 backdrop-blur-md shadow-[0_0_50px_hsla(var(--primary)/0.1)] relative shrink-0"
              >
                <div className="absolute inset-[-15%] rounded-full border border-primary/10 border-dashed animate-[spin_25s_linear_infinite]" />
                <Atom className="w-6 h-6 md:w-8 md:h-8 text-primary/60 animate-pulse" />
              </motion.div>
              <h2 className="text-3xl sm:text-6xl md:text-8xl font-light font-serif text-white tracking-tighter leading-none uppercase">
                Intelligence<br/>
                <span className="italic text-white/20">Stack.</span>
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Tech Nodes Grid (Block Manner) */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 w-full px-2">
          {techPills.map((pill, i) => (
            <TechNode key={i} pill={pill} playHover={playHover} playClick={playClick} isDesktop={isDesktop} />
          ))}
        </div>

      </div>

    </section>
  );
}

function TechNode({ pill, playHover, playClick, isDesktop }: { pill: any, playHover: any, playClick: any, isDesktop: boolean }) {
  return (
    <motion.div
      drag={isDesktop}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileDrag={{ scale: 1.1, zIndex: 100 }}
      className={`relative flex flex-col items-center justify-center gap-2 p-3 w-[28vw] h-[28vw] sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl border border-white/10 bg-white/[0.06] md:backdrop-blur-md shadow-xl ${isDesktop ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'} hover:bg-white/[0.12] hover:border-primary/50 transition-all duration-500 group hover:z-50 active:scale-90 will-change-transform`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{
        opacity: { duration: 0.4, delay: pill.delay },
        scale: { type: "spring", stiffness: 400, damping: 25 },
        y: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onMouseEnter={playHover}
      onClick={playClick}
    >
      <div className="p-2 md:p-3 rounded-xl bg-white/10 group-hover:scale-110 group-hover:bg-primary/20 transition-transform duration-700 shadow-inner pointer-events-none">
        <pill.Icon className={`w-5 h-5 md:w-8 md:h-8 ${pill.colorClass} opacity-90 drop-shadow-[0_0_8px_currentColor] group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_currentColor] transition-all duration-700`} />
      </div>
      <span className="font-mono text-[8px] sm:text-[9px] md:text-[11px] tracking-[0.1em] text-white/70 group-hover:text-white transition-colors uppercase text-center font-bold px-1 drop-shadow-md pointer-events-none">
        {pill.name}
      </span>
    </motion.div>
  );
}
