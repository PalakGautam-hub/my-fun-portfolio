import { motion } from "framer-motion";
import { Terminal, Database, Code2, Cpu, Cloud, Layers, Server, Atom } from "lucide-react";
import { useRef, useMemo } from "react";

export default function WamTechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    // Show fewer skills on mobile to maintain 60fps
    const filteredSkills = isMobile ? allSkills.slice(0, 12) : allSkills;

    const icons = [Terminal, Database, Code2, Cpu, Cloud, Layers, Server];
    const colors = ["text-fuchsia-400", "text-purple-400", "text-pink-400"];

    return filteredSkills.map((name, i) => {
       const Icon = icons[i % icons.length];
       const colorClass = colors[i % colors.length];
       
       const angle = (i * 137.5) * (Math.PI / 180);
       const r = isMobile ? 0.55 : 0.55 + (0.4 * (Math.sqrt(i) / Math.sqrt(filteredSkills.length))); 
       
       const spreadY = isMobile ? 38 : 42; // Wider spread for desktop
       const spreadX = isMobile ? 42 : 50; 
       
       const top = 50 + r * spreadY * Math.sin(angle);
       const left = 50 + r * spreadX * Math.cos(angle);

       return {
         name,
         Icon,
         colorClass,
         top: `${top}%`,
         left: `${left}%`,
         delay: (i * 0.05),
       };
    });
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[100vh] md:min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center border-t border-white/5 py-32">
      
      {/* Refined 3D Grid - More subtle and deeper */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: `linear-gradient(rgba(240, 10, 180, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(240, 10, 180, 0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px',
             transform: 'perspective(1200px) rotateX(65deg) translateY(-150px) scale(2.8)',
             transformOrigin: 'center top'
           }}
      />

      {/* Sophisticated Layered Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-fuchsia-600/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      
      {/* Central Core Element - Framed by the nodes */}
      <div className="relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-fuchsia-500/20 flex items-center justify-center bg-black/60 backdrop-blur-2xl shadow-[0_0_60px_rgba(240,10,180,0.15)] relative"
        >
          {/* Multi-layered orbit rings */}
          <div className="absolute inset-[-10%] rounded-full border border-purple-500/30 border-dashed animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-[-25%] rounded-full border border-white/5 scale-110" />
          <Atom className="w-8 h-8 md:w-12 md:h-12 text-fuchsia-400/80" />
        </motion.div>
        
        <div className="mt-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-7xl font-bold font-sans uppercase tracking-[0.25em] text-white text-center leading-none">
            INTELLIGENCE
          </h2>
          <span className="mt-4 text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-pink-500 italic font-serif lowercase tracking-wide">
            core stack
          </span>
        </div>
      </div>

      {/* Refined Orbiting Tech Cards - Static Grid on Mobile */}
      <div className="relative z-20 w-full max-w-4xl px-6 md:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:block md:absolute md:inset-0 gap-4 md:gap-0 pointer-events-auto md:pointer-events-none">
          {techPills.map((pill, i) => (
            <motion.div
              key={i}
              className="relative md:absolute flex flex-col items-center justify-center gap-2 p-4 md:w-28 md:h-28 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:pointer-events-auto cursor-grab active:cursor-grabbing hover:bg-white/[0.05] hover:border-fuchsia-500/40 transition-colors duration-500 group"
              drag={typeof window !== 'undefined' && window.innerWidth >= 768}
              dragConstraints={containerRef}
              dragElastic={0.1}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={typeof window !== 'undefined' && window.innerWidth >= 768 ? {
                y: [0, -8, 0],
              } : {}}
              transition={{
                y: { duration: 6 + (i % 4), repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: pill.delay },
                scale: { duration: 0.5, delay: pill.delay }
              }}
              style={typeof window !== 'undefined' && window.innerWidth >= 768 ? { 
                top: pill.top, 
                left: pill.left,
                transform: 'translate(-50%, -50%)'
              } : {}}
            >
              <div className="p-2 rounded-xl bg-white/10 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-700">
                <pill.Icon className={`w-4 h-4 md:w-5 md:h-5 ${pill.colorClass.replace('fuchsia', 'primary').replace('purple', 'secondary').replace('pink', 'primary')} opacity-80 group-hover:opacity-100 group-hover:text-primary`} />
              </div>
              <span className="font-mono text-[7px] md:text-[9px] tracking-[0.2em] text-white/40 group-hover:text-white transition-colors uppercase text-center px-2">
                {pill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Interaction Hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 opacity-20 hover:opacity-50 transition-opacity">
        <div className="flex flex-col items-center gap-3">
          <div className="w-[1px] h-10 bg-gradient-to-b from-fuchsia-500 to-transparent" />
          <span className="text-[8px] md:text-[10px] tracking-[0.5em] text-white font-mono uppercase">
            Spatially Interactive
          </span>
        </div>
      </div>
      
    </section>
  );
}
