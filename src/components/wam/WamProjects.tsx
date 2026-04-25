import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Linkedin, Terminal, Mail, ArrowUpRight, FolderOpen, Sparkles, Database, Cpu } from "lucide-react";

interface ProjectItemProps {
  id: string;
  title: string;
  role: string;
  desc: string;
  link: string;
  tags: string[];
  bgGradient: string;
  index: string;
}

function ProjectItem({ id, title, role, desc, link, tags, bgGradient, index }: ProjectItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5 px-6 md:px-12 py-32"
    >
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-[#050208]">
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${bgGradient} blur-[140px] animate-pulse-luminous`} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.03]" />
      </div>

      {/* Massive Background Project Index */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-150, 150]) }}
        className="absolute inset-0 flex items-center justify-center z-0 opacity-[0.03]"
      >
        <span className="text-[15vw] font-black font-serif italic text-white select-none">
          {index}
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-center">
        
        {/* Project Typographic Block */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <span className="text-2xl font-serif italic text-primary">{index}</span>
            <div className="h-[1px] w-24 bg-white/10" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 font-black">Strategic Archive</span>
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-light font-serif tracking-tighter leading-none text-white uppercase"
            style={{ y }}
          >
            {title}<span className="text-primary/40">.</span>
          </motion.h2>

          <div className="flex flex-wrap gap-4">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.4em] font-mono text-white/30 border border-white/10 px-8 py-3 rounded-full uppercase hover:text-primary hover:border-primary/40 transition-all duration-500">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Intelligence Module (Glass Card) */}
        <div className="lg:col-span-5 flex flex-col gap-12 luminous-glass p-12 md:p-20 rounded-[4rem] group hover:bg-white/[0.05] transition-all duration-1000">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center">
               <h3 className="text-xs uppercase tracking-[0.6em] font-black text-primary drop-shadow-neon">
                 {role}
               </h3>
               <Sparkles className="w-6 h-6 text-white/20 group-hover:text-primary transition-colors" />
            </div>
            <p className="text-xl md:text-2xl text-zinc-400 font-serif italic leading-relaxed font-light">
              "{desc}"
            </p>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative w-full py-8 bg-white text-black text-[11px] tracking-[0.6em] font-black uppercase text-center rounded-[2rem] overflow-hidden transition-transform active:scale-95"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700" />
            <span className="relative z-10 flex items-center justify-center gap-6 group-hover/btn:text-white transition-colors">
              Explore Intelligence <ExternalLink className="w-5 h-5" />
            </span>
          </a>
        </div>

      </div>
    </motion.div>
  );
}

export default function WamProjects() {
  const projects = [
    {
      id: "lucy",
      index: "01",
      title: "LUCY AI",
      role: "Digital Twin | 2026",
      desc: "An AI-powered digital twin interface featuring voice-to-response interaction and vision support.",
      link: "https://github.com/PalakGautam-hub/LUCY-AI-Digital-Twin",
      tags: ["AI", "Digital Twin", "React"],
      bgGradient: "from-primary/30 via-transparent to-transparent",
    },
    {
      id: "lexora",
      index: "02",
      title: "LEXORA",
      role: "AI Engineering | 2026",
      desc: "Spearheaded an AI full-stack application using LLM APIs, slashing document review cycles by 60%.",
      link: "https://github.com/PalakGautam-hub/Lexora-AI",
      tags: ["Python", "LLMs", "NLP"],
      bgGradient: "from-secondary/30 via-transparent to-transparent",
    },
    {
      id: "traffic",
      index: "03",
      title: "TRAFFIC",
      role: "Simulation Architect | 2026",
      desc: "Optimized traffic signal synchronization via Python simulations, reducing commuter wait times by 30%.",
      link: "https://github.com/PalakGautam-hub/Traffic_Management",
      tags: ["Python", "Simulation", "System Design"],
      bgGradient: "from-indigo-500/30 via-transparent to-transparent",
    },
    {
      id: "snip",
      index: "04",
      title: "SNIP URL",
      role: "Microservice Engineer | 2026",
      desc: "Designed a scalable microservice architecture, achieving sub-100ms redirection latency for 50,000+ requests.",
      link: "https://github.com/PalakGautam-hub/Snip-URL-shortner",
      tags: ["Node", "REST API", "System Design"],
      bgGradient: "from-cyan-500/30 via-transparent to-transparent",
    },
  ];

  return (
    <section id="work" className="w-full bg-[#050208] border-t border-white/5">
      
      {/* Strategic Archive Header */}
      <div className="w-full py-40 md:py-64 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-b border-white/5">
        <div className="flex flex-col gap-8">
          <h3 className="text-[10px] uppercase tracking-[1em] text-primary font-black">Strategic Archive [ 03 ]</h3>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-light font-serif text-white tracking-tighter leading-none uppercase">
            Intelligence <br/>
            <span className="italic text-white/40">Portfolio.</span>
          </h2>
        </div>
        <div className="flex flex-col items-end gap-6">
          <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group hover:border-primary transition-all duration-500">
            <FolderOpen className="w-8 h-8 text-white/30 group-hover:text-primary" />
          </div>
          <span className="text-[10px] tracking-[0.6em] text-zinc-600 uppercase font-black">Decoding [ FY-2026 ]</span>
        </div>
      </div>

      <div className="flex flex-col">
        {projects.map((p) => (
          <ProjectItem key={p.id} {...p} />
        ))}
      </div>
      
      {/* Final Call to Intelligence */}
      <div className="w-full bg-[#050208] py-64 md:py-[30vh] flex flex-col items-center justify-center gap-24 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(var(--primary)/0.08)_0%,transparent_70%)] pointer-events-none" />

        <h2 className="text-3xl sm:text-6xl md:text-[6rem] lg:text-[8rem] font-light font-serif text-white tracking-tighter leading-tight max-w-[1800px] relative z-10 uppercase">
          Ready to decode <br className="hidden sm:block" />
          <span className="italic text-white/20">the next system?</span>
        </h2>

        <div className="flex flex-col items-center gap-20 relative z-10 w-full">
          <a href="mailto:gautampalak77@gmail.com" className="group relative px-20 py-8 border border-white/10 rounded-full overflow-hidden transition-all hover:border-primary/50">
             <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
             <span className="relative z-10 text-lg md:text-2xl font-serif italic text-white group-hover:text-white flex items-center gap-8">
                gautampalak77@gmail.com <ArrowUpRight className="w-7 h-7" />
             </span>
          </a>

          <div className="flex gap-16 md:gap-32 justify-center flex-wrap uppercase font-black tracking-[0.8em] text-[10px] text-white/20">
            <a href="https://github.com/PalakGautam-hub" target="_blank" className="hover:text-primary hover:scale-110 transition-all duration-500">GitHub</a>
            <a href="https://www.linkedin.com/in/palak-gautam-8805b0311" target="_blank" className="hover:text-primary hover:scale-110 transition-all duration-500">LinkedIn</a>
            <a href="https://leetcode.com/u/palakG05/" target="_blank" className="hover:text-primary hover:scale-110 transition-all duration-500">LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  );
}
