import { motion } from "framer-motion";
import { LineChart, Code2, BrainCircuit as Zap, Terminal, Database, Cpu, Search, Lock, Layers } from "lucide-react";
import { useSoundSystem } from "./SoundSystem";

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
      className="group relative bg-white/[0.01] border border-white/5 p-12 md:p-20 flex flex-col gap-12 hover:bg-white/[0.03] hover:border-primary/20 transition-all duration-1000 overflow-hidden rounded-[4rem] shadow-2xl"
    >
      {/* Background Decorative Layer */}
      <div className="absolute top-0 right-0 p-16 opacity-[0.02] group-hover:opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-1000 ease-out">
        <Icon className="w-64 h-64 text-white" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="w-20 h-20 rounded-[2.5rem] bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-700 shadow-xl">
            <Icon className="w-8 h-8 text-white/30 group-hover:text-primary transition-all duration-700" />
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
          <span key={tag} className="text-[10px] tracking-[0.4em] font-black text-white/20 border border-white/5 px-8 py-3 rounded-full uppercase group-hover:text-primary group-hover:border-primary/10 transition-all duration-700 bg-white/[0.01]">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Luminous Glow Accent */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
    </motion.div>
  );
}

export default function WamSolutions() {
  return (
    <section id="expertise" className="w-full bg-[#050208] py-48 md:py-80 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Luminous Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-primary/5 blur-[240px] rounded-full pointer-events-none" />

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

      </div>
    </section>
  );
}

