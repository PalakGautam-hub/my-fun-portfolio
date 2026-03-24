import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Linkedin, Terminal, Mail, ArrowUpRight } from "lucide-react";

interface ProjectItemProps {
  id: string;
  title: string;
  role: string;
  desc: string;
  link: string;
  tags: string[];
  bgGradient: string;
}

function ProjectItem({ id, title, role, desc, link, tags, bgGradient }: ProjectItemProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={ref} 
      className="group relative w-full h-[80vh] md:h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/10 cursor-pointer px-6"
      onMouseMove={handleMouseMove}
    >
      <div className={`absolute inset-0 z-0 bg-black overflow-hidden`}>
        <motion.div 
          style={{ 
            y,
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(240,10,180,0.1) 0%, transparent 40%)`
          }}
          className={`absolute inset-0 opacity-40 transition-opacity duration-1000 blur-[80px] pointer-events-none`} 
        />
        <motion.div 
          className={`absolute inset-0 opacity-10 bg-gradient-to-br ${bgGradient} blur-[120px]`} 
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-50 z-0 pointer-events-none mix-blend-overlay" />
      </div>

      <div className="relative z-10 text-center max-w-6xl w-full flex flex-col items-center gap-6 md:gap-8">
        <div className="flex gap-2 mb-2 flex-wrap justify-center">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] md:text-xs tracking-[0.2em] font-mono text-zinc-500 uppercase border border-white/5 px-3 py-1 rounded-full group-hover:text-white transition-all">
              {tag}
            </span>
          ))}
        </div>

        <motion.h2 
          className="text-[3.5rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] font-light font-serif tracking-tighter leading-[1] text-white select-none pointer-events-none flex flex-col items-center"
        >
          <span className="opacity-40 text-xs md:text-base tracking-[0.4em] font-sans uppercase font-medium mb-4 group-hover:text-fuchsia-400 group-hover:opacity-100 transition-colors">Specialized Intelligence</span>
          <span className="italic block group-hover:translate-x-4 transition-transform duration-1000 ease-[0.22, 1, 0.36, 1] text-white">
            {title}
          </span>
        </motion.h2>

        <div className="flex flex-col items-center gap-4 mt-8 bg-black/40 backdrop-blur-md px-6 py-4 border border-white/5 rounded-2xl group-hover:border-white/20 transition-all max-w-lg">
          <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-white/90">
            {role}
          </h3>
          <p className="text-[10px] md:text-xs text-zinc-500 italic font-serif tracking-widest leading-relaxed uppercase">
            {desc}
          </p>
        </div>

        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="group/btn relative px-8 py-3.5 bg-transparent border border-white/20 hover:border-white transition-all text-[9.5px] tracking-[0.4em] font-bold font-sans uppercase text-white hover:bg-white hover:text-black mt-8 flex items-center gap-3"
        >
          Explore Insight <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

export default function WamProjects() {
  const projects = [
    {
      id: "analytics",
      title: "Ops Dashboard",
      role: "Analytics Lead | 2026",
      desc: "Designed end-to-end dashboard tracking customer KPIs like retention and revenue risk, reducing manual reporting by 70%.",
      link: "https://github.com/PalakGautam-hub/Customer_operation_analytics",
      tags: ["Python", "Power BI", "Data Automation", "KPI Tracking"],
      bgGradient: "from-teal-500/20 via-transparent to-transparent",
    },
    {
      id: "traffic",
      title: "Smart Traffic",
      role: "Simulation Architect | 2026",
      desc: "Optimized traffic signal synchronization via Python simulations, reducing commuter wait times by 30%.",
      link: "https://github.com/PalakGautam-hub/Traffic_Management",
      tags: ["Python", "Simulation", "System Design"],
      bgGradient: "from-amber-600/20 via-transparent to-transparent",
    },
    {
      id: "snip",
      title: "Snip URL",
      role: "Microservice Engineer | 2026",
      desc: "Designed a scalable microservice architecture, achieving sub-100ms redirection latency for 50,000+ requests.",
      link: "https://github.com/PalakGautam-hub/Snip-URL-shortener",
      tags: ["Node", "REST API", "System Design"],
      bgGradient: "from-teal-600/20 via-transparent to-transparent",
    },
    {
      id: "airbnb",
      title: "Airbnb Clone",
      role: "Software Architect | 2026",
      desc: "Architected a high-performance booking app with JWT authentication achieving 90% unit test coverage.",
      link: "https://github.com/PalakGautam-hub/Airbnb-Clone",
      tags: ["React", "Express", "Node", "MongoDB"],
      bgGradient: "from-rose-500/20 via-transparent to-transparent",
    },
    {
      id: "lexora",
      title: "Lexora AI",
      role: "AI Engineering | 2026",
      desc: "Spearheaded an AI full-stack application using LLM APIs, slashing document review cycles by 60%.",
      link: "https://github.com/PalakGautam-hub/Lexora-AI",
      tags: ["Python", "LLMs", "NLP"],
      bgGradient: "from-indigo-600/20 via-transparent to-transparent",
    },
  ];

  return (
    <section id="work" className="w-full bg-black border-t border-white/10">
      
      <div className="w-full py-12 md:py-20 px-6 sm:px-10 flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-white/5 gap-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-light font-serif text-white tracking-tight uppercase">Strategic <span className="italic text-white/50">Intelligence.</span></h2>
        <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-zinc-600 uppercase font-bold">DECODING [ FY-2026 ]</span>
      </div>

      <div className="flex flex-col">
        {projects.map((p) => (
          <ProjectItem key={p.id} {...p} />
        ))}
      </div>
      
      <div className="w-full bg-black py-24 sm:py-48 flex flex-col items-center justify-center gap-12 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-fuchsia-500/5 via-transparent to-transparent opacity-50 blur-[100px] z-0" />

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light font-serif text-white tracking-tighter leading-tight max-w-4xl relative z-10">
          Ready to decode <br className="hidden sm:block" />
          <span className="italic text-white/40">the next system?</span>
        </h2>

        <div className="flex flex-col items-center gap-10 relative z-10 w-full">
          <div className="flex flex-col items-center gap-4 justify-center">
            <a href="mailto:gautampalak77@gmail.com" className="group text-lg sm:text-2xl font-serif italic text-white hover:text-fuchsia-400 transition-all border-b border-white/5 pb-2 flex items-center gap-4">
               <Mail className="w-5 h-5 opacity-40 group-hover:opacity-100" /> gautampalak77@gmail.com <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-10 md:gap-16 justify-center flex-wrap uppercase font-black tracking-[0.4em] text-[10px]">
            <a href="https://github.com/PalakGautam-hub" target="_blank" className="text-zinc-600 hover:text-white transition-colors flex items-center gap-3 group">
              <Github className="w-4 h-4 group-hover:text-fuchsia-400" /> GitHub
            </a>
            <a href="https://linkedin.com/in/palak-gautam77" target="_blank" className="text-zinc-600 hover:text-white transition-colors flex items-center gap-3 group">
              <Linkedin className="w-4 h-4 group-hover:text-fuchsia-400" /> LinkedIn
            </a>
            <a href="https://leetcode.com/u/palak-gautam77" target="_blank" className="text-zinc-600 hover:text-white transition-colors flex items-center gap-3 group">
              <Terminal className="w-4 h-4 group-hover:text-fuchsia-400" /> LeetCode
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
