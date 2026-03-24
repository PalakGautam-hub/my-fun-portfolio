import { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon, LineChart, Code2, BrainCircuit, Terminal, Shapes, Layers, Database, Monitor, Cpu } from "lucide-react";

interface SolutionItemProps {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  tags: string[];
}

function SolutionItem({ id, title, desc, icon: Icon, tags }: SolutionItemProps) {
  return (
    <motion.div 
      className="group relative border-b border-white/5 py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-20 transition-all duration-700 cursor-pointer px-6 md:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      <div className="relative z-10 md:w-1/6 flex justify-start items-start">
        <span className="text-xl md:text-2xl font-serif italic text-white/10 group-hover:text-fuchsia-400 transition-all duration-500">
          {id}
        </span>
      </div>

      <div className="relative z-10 md:w-3/5 flex flex-col items-start gap-4">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-light font-serif text-white tracking-tighter leading-none group-hover:translate-x-1 transition-transform duration-700">
          {title} <span className="italic block mt-1 text-white/20 group-hover:text-white/40">Expertise.</span>
        </h3>
        <p className="text-[10px] md:text-xs text-zinc-500 mt-4 md:mt-8 max-w-lg tracking-[0.2em] leading-relaxed uppercase">
          {desc}
        </p>
      </div>

      <div className="relative z-10 md:w-2/5 flex flex-wrap justify-end gap-2 items-end">
        {tags.map((tag) => (
          <span key={tag} className="text-[8px] md:text-[9.5px] tracking-[0.2em] font-mono text-zinc-600 border border-white/5 px-3 py-1.5 rounded-full uppercase hover:text-white hover:border-white/20 transition-all">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function WamSolutions() {
  const skillCategories = [
    { title: "Languages", tech: ["Python", "Java", "C", "JavaScript (ES6+)", "SQL"], icon: Terminal },
    { title: "Core & Data", tech: ["Power BI", "Pandas", "NumPy", "ML", "Statistics"], icon: Database },
    { title: "Development", tech: ["React.js", "Node.js", "Express", "REST APIs", "Tailwind CSS"], icon: Code2 },
    { title: "Systems", tech: ["Git", "Docker", "Linux", "VS Code", "Postman", "JWT"], icon: Cpu }
  ];

  return (
    <section id="solutions" className="w-full bg-black py-20 px-6 sm:px-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h2 className="text-[10px] md:text-xs text-zinc-600 uppercase tracking-[0.5em] font-medium mb-10 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-white/20"></span> Tech Stack & Core Skills
          </h2>
          
          {/* Enhanced Skill Grid like WAM high-performance cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             {skillCategories.map((cat) => (
               <div key={cat.title} className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                  <cat.icon className="w-6 h-6 text-fuchsia-400/60 mb-8 group-hover:scale-110 transition-transform" />
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50 mb-6">{cat.title}</h4>
                  <div className="flex flex-wrap gap-y-3 gap-x-1">
                    {cat.tech.map((t) => (
                      <span key={t} className="text-[10px] md:text-xs font-serif italic text-white/90 after:content-['/'] after:mx-2 after:text-white/10 last:after:content-['']">{t}</span>
                    ))}
                  </div>
               </div>
             ))}
          </div>
        </div>

        <div className="flex flex-col">
          <SolutionItem 
            id="01" 
            title="Customer Analytics" 
            desc="Developing end-to-end dashboards tracking KPIs such as retention, revenue risk, and SLA compliance."
            icon={LineChart}
            tags={["Power BI", "Data Automation", "Python", "KPI Dashboards"]}
          />
          <SolutionItem 
            id="02" 
            title="Software Architecture" 
            desc="Building responsive frontend interfaces and robust backend APIs with full-stack expertise."
            icon={Code2}
            tags={["React", "Node", "REST APIs", "System Design"]}
          />
          <SolutionItem 
            id="03" 
            title="Intelligence Systems" 
            desc="Leveraging machine learning and NLP to drive document automation and business efficiency."
            icon={BrainCircuit}
            tags={["NLP", "LLMs", "Machine Learning", "Innovation"]}
          />
        </div>
      </div>
    </section>
  );
}
