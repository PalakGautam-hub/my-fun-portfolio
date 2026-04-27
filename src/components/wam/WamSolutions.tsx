import { motion } from "framer-motion";
import { BrainCircuit as Zap, Database, Cpu, Lock, Terminal, Code2, Layers, Server, Atom } from "lucide-react";
import { useSoundSystem } from "./SoundSystem";
import { useMemo, useState, useEffect } from "react";
import LiquidEther from "./LiquidEther";

interface ExpertiseCardProps {
  title: string;
  desc: string;
  icon: any;
  tags: string[];
  id: string;
}

function ExpertiseCard({ title, desc, icon: Icon, tags, id }: ExpertiseCardProps) {
  const { playHover } = useSoundSystem();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={playHover}
      className="group relative bg-white/[0.08] border border-white/20 p-8 md:p-20 flex flex-col gap-12 hover:bg-white/[0.12] hover:border-primary/60 transition-all duration-1000 overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
    >
      {/* Background Decorative Layer */}
      <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover:opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000 ease-out">
        <Icon className="w-64 h-64 text-white" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-[2.5rem] bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-700 shadow-xl">
            <Icon className="w-6 h-6 md:w-8 md:h-8 text-white/30 group-hover:text-primary transition-all duration-700" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.8em] text-white/10 font-black">Capability</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary/40 font-black">Archive {id}</span>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-white/5 group-hover:bg-primary transition-all duration-700 animate-pulse" />
      </div>

      <div className="flex flex-col gap-8 relative z-10">
        <h3 className="text-4xl md:text-5xl font-light font-serif text-white tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-1000">
          {title} <span className="italic text-white/20">Intelligence.</span>
        </h3>
        <p className="text-base md:text-lg text-zinc-500 max-w-xl leading-relaxed tracking-wide font-light">
          {desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 relative z-10 mt-6">
        {tags.map((tag) => (
          <span key={tag} className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.4em] font-black text-white/20 border border-white/5 px-4 md:px-8 py-2 md:py-3 rounded-full uppercase group-hover:text-primary group-hover:border-primary/10 transition-all duration-700 bg-white/[0.01]">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Luminous Glow Accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-3xl md:blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
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

export default function WamSolutions() {
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
      "Python", "Java", "C", "JavaScript", "SQL",
      "React.js", "Tailwind CSS", "Node.js", "Express.js",
      "MongoDB", "MySQL", "ML", "Git", "Docker"
    ];

    const icons = [Terminal, Database, Code2, Cpu, Layers, Server];
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
    <section id="expertise" className="w-full bg-[#050208] py-48 md:py-80 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Luminous Aura */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/5 blur-3xl md:blur-[240px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-40 md:mb-72">
          <motion.div 
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-[11px] uppercase tracking-[1em] text-primary/40 font-black mb-2">Capabilities Archive [ 02 ]</h3>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light font-serif text-white tracking-tighter leading-none uppercase">
              Strategic <br/>
              <span className="italic text-white/20">Capabilities.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-zinc-500 max-w-md text-lg md:text-xl leading-relaxed tracking-wide font-light italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 2 }}
          >
            "Leveraging a dual background in engineering and analytics to build <span className="text-white/40">high-performance systems</span> that drive measurable impact."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
          <ExpertiseCard 
            id="01"
            title="Data Architecture"
            desc="Developing end-to-end pipelines tracking retention, revenue risk, and SLA compliance for enterprise-scale operations."
            icon={Database}
            tags={["Power BI", "Python", "SQL", "KPI Dashboards"]}
          />
          <ExpertiseCard 
            id="02"
            title="System Engineering"
            desc="Building sub-100ms latency microservices and responsive frontends with a focus on scalable, secure cloud architecture."
            icon={Cpu}
            tags={["React", "Node.js", "Docker", "RESTful APIs"]}
          />
          <ExpertiseCard 
            id="03"
            title="Applied Intelligence"
            desc="Harnessing machine learning and NLP to drive document review automation and predictive insights."
            icon={Zap}
            tags={["NLP", "LLMs", "Scikit-Learn", "Innovation"]}
          />
          <ExpertiseCard 
            id="04"
            title="Security Protocol"
            desc="Implementing robust authentication systems and high-coverage testing strategies to ensure data integrity."
            icon={Lock}
            tags={["JWT", "Unit Testing", "CI/CD", "Authentication"]}
          />
        </div>

        {/* Integrated Core Tech Stack Visual */}
        <div className="mt-48 flex flex-col gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
               <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
               <span className="text-[10px] uppercase tracking-[0.8em] text-white/20 font-black">Core Technical Stack</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-light font-serif text-white/40 tracking-tighter uppercase italic">
              The Digital <span className="text-white">Foundation.</span>
            </h3>
          </motion.div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 w-full">
            {techPills.map((pill, i) => (
              <TechNode key={i} pill={pill} playHover={playHover} playClick={playClick} isDesktop={isDesktop} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

