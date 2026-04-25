import { motion } from "framer-motion";
import { LineChart, Code2, BrainCircuit, Terminal, Database, Cpu, Search, Lock, Zap, Layers } from "lucide-react";

interface ExpertiseCardProps {
  title: string;
  desc: string;
  icon: any;
  tags: string[];
  id: string;
}

function ExpertiseCard({ title, desc, icon: Icon, tags, id }: ExpertiseCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative futuristic-card p-10 md:p-16 flex flex-col gap-10 hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-700 overflow-hidden"
    >
      {/* Background Decorative Layer */}
      <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000">
        <Icon className="w-48 h-48 text-white" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
            <Icon className="w-7 h-7 text-white/50 group-hover:text-primary transition-colors" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-black">Archive {id}</span>
        </div>
        <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-primary transition-colors" />
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        <h3 className="text-3xl md:text-4xl font-light font-serif text-white tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-700">
          {title} <span className="italic text-white/30">Intelligence.</span>
        </h3>
        <p className="text-sm md:text-base text-zinc-500 max-w-lg leading-relaxed tracking-wide font-light">
          {desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-3 relative z-10 mt-4">
        {tags.map((tag) => (
          <span key={tag} className="text-[9px] md:text-[10px] tracking-[0.3em] font-mono text-white/20 border border-white/5 px-5 py-2 rounded-full uppercase group-hover:text-primary group-hover:border-primary/20 transition-all">
            {tag}
          </span>
        ))}
      </div>
      
      {/* Luminous Glow Accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export default function WamSolutions() {
  return (
    <section id="expertise" className="w-full bg-[#050208] py-40 md:py-64 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Luminous Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-secondary/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-32 md:mb-56">
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.8em] text-primary/60 font-black mb-2">Capabilities Archive [ 02 ]</h3>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light font-serif text-white tracking-tighter leading-none uppercase">
              Strategic <br/>
              <span className="italic text-white/40">Capabilities.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-zinc-500 max-w-sm text-sm md:text-base leading-relaxed tracking-wide font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
          >
            Leveraging a dual background in engineering and analytics to build high-performance systems that drive measurable impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
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
            icon={BrainCircuit}
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

// Missing import from prev edits
const BrainCircuit = ({ className }: { className?: string }) => <Zap className={className} />;
