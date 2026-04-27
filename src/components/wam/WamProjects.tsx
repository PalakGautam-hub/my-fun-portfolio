import { motion } from "framer-motion";
import { useRef } from "react";
import { Github, FolderOpen, Sparkles, ArrowUpRight } from "lucide-react";
import { useSoundSystem } from "./SoundSystem";

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

function ProjectCard({ title, role, desc, link, tags, bgGradient, index }: ProjectItemProps) {
  const { playHover, playClick } = useSoundSystem();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={playHover}
      className="group relative flex flex-col gap-8 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-primary/40 transition-all duration-700 shadow-2xl overflow-hidden"
    >
      {/* Dynamic Background Glow */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${bgGradient} blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000`} />
      
      <div className="flex justify-between items-start relative z-10">
        <div className="flex flex-col gap-1">
          <span className="text-primary font-serif italic text-2xl">{index}</span>
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-black">{role}</span>
        </div>
        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/40 transition-all duration-700">
          <Github className="w-5 h-5 text-white/20 group-hover:text-primary transition-colors" />
        </div>
      </div>

      <div className="flex flex-col gap-4 relative z-10">
        <h3 className="text-3xl md:text-4xl font-light font-serif text-white tracking-tighter uppercase leading-none group-hover:translate-x-2 transition-transform duration-700">
          {title}<span className="text-primary/20">.</span>
        </h3>
        <p className="text-sm md:text-base text-zinc-500 font-light leading-relaxed tracking-wide h-20 overflow-hidden line-clamp-3">
          {desc}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 relative z-10">
        {tags.map((tag) => (
          <span key={tag} className="text-[8px] tracking-[0.2em] font-black text-white/10 border border-white/5 px-4 py-2 rounded-full uppercase group-hover:text-primary/40 transition-colors">
            {tag}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={playClick}
        className="mt-4 group/btn relative w-full py-5 bg-white text-black text-[10px] tracking-[0.4em] font-black uppercase text-center rounded-2xl overflow-hidden transition-all active:scale-95 shadow-xl"
      >
        <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700" />
        <span className="relative z-10 flex items-center justify-center gap-4 group-hover/btn:text-white transition-colors duration-500">
          Access Repository <Github className="w-4 h-4" />
        </span>
      </a>
    </motion.div>
  );
}

export default function WamProjects() {
  const { playHover, playClick } = useSoundSystem();
  
  const projects = [
    {
      id: "lexora",
      index: "01",
      title: "LEXORA AI",
      role: "AI Engineering | 2026",
      desc: "Spearheaded an AI full-stack application using LLM APIs, slashing document review cycles by 60%.",
      link: "https://github.com/PalakGautam-hub/Lexora-AI",
      tags: ["Python", "LLMs", "NLP"],
      bgGradient: "from-secondary/20 to-transparent",
    },
    {
      id: "lucy",
      index: "02",
      title: "LUCY AI",
      role: "Digital Twin | 2026",
      desc: "An AI-powered digital twin interface featuring voice-to-response interaction and vision support.",
      link: "https://github.com/PalakGautam-hub/LUCY-AI-Digital-Twin",
      tags: ["AI", "Digital Twin", "React"],
      bgGradient: "from-primary/20 to-transparent",
    },
    {
      id: "traffic",
      index: "03",
      title: "TRAFFIC",
      role: "Simulation Architect | 2026",
      desc: "Optimized traffic signal synchronization via Python simulations, reducing commuter wait times by 30%.",
      link: "https://github.com/PalakGautam-hub/Traffic_Management",
      tags: ["Python", "Simulation", "System Design"],
      bgGradient: "from-indigo-500/20 to-transparent",
    },
  ];

  return (
    <section id="work" className="w-full bg-[#050208] border-t border-white/5 py-48 md:py-80 px-6 md:px-12 lg:px-24">
      
      {/* Strategic Archive Header */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-32 md:mb-56">
        <div className="flex flex-col gap-10 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="flex items-center gap-4"
          >
            <div className="w-2 h-2 rounded-full bg-primary" />
            <h3 className="text-[11px] uppercase tracking-[1.2em] text-primary font-black">Strategic Archive [ 04 ]</h3>
          </motion.div>
          <h2 className="text-5xl sm:text-7xl md:text-9xl font-light font-serif text-white tracking-tighter leading-none uppercase">
            Intelligence <br/>
            <span className="italic text-white/20">Portfolio.</span>
          </h2>
        </div>
        <div className="flex flex-col items-end gap-8 relative z-10">
          <motion.div 
            whileHover={{ scale: 1.1, borderColor: "rgba(var(--primary),0.5)" }}
            onMouseEnter={playHover}
            onClick={playClick}
            className="w-24 h-24 rounded-[2.5rem] bg-white/[0.02] border border-white/10 flex items-center justify-center group cursor-pointer transition-all duration-700 shadow-2xl"
          >
            <FolderOpen className="w-10 h-10 text-white/20 group-hover:text-primary transition-all duration-700" />
          </motion.div>
          <span className="text-[11px] tracking-[0.8em] text-zinc-700 uppercase font-black">Decoding [ PROTOCOL.2026 ]</span>
        </div>
      </div>

      {/* Grid Alignment */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
      
      {/* Final Call to Intelligence */}
      <section id="contact" className="w-full mt-64 py-32 md:py-48 flex flex-col items-center border-t border-white/5 relative overflow-hidden rounded-[4rem] bg-white/[0.01]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(var(--primary)/0.05)_0%,transparent_80%)] pointer-events-none" />

        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light font-serif text-white tracking-tighter leading-[0.85] max-w-[2000px] relative z-10 uppercase text-center"
        >
          Ready to decode <br className="hidden sm:block" />
          <span className="italic text-white/10">the next system?</span>
        </motion.h2>

        <div className="max-w-[1200px] w-full flex flex-col items-center justify-center relative z-10 px-6 md:px-12 mt-24 gap-16">
          <motion.a 
            href="mailto:gautampalak77@gmail.com" 
            onMouseEnter={playHover}
            onClick={playClick}
            className="group relative w-full max-w-4xl px-8 md:px-16 py-8 md:py-10 border border-white/5 bg-white/[0.02] rounded-full overflow-hidden transition-all duration-700 hover:border-primary/40 hover:scale-105 shadow-2xl"
          >
             <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]" />
             <span className="relative z-10 text-xl md:text-2xl font-serif italic text-white group-hover:text-white flex items-center justify-between transition-colors duration-500">
                gautampalak77@gmail.com <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-700" />
             </span>
          </motion.a>

          <div className="flex gap-6 md:gap-16 justify-center flex-wrap uppercase font-black tracking-[0.4em] text-[9px] md:text-[11px] text-white/40">
            <a href="https://github.com/PalakGautam-hub" target="_blank" onMouseEnter={playHover} className="hover:text-primary transition-all duration-700">GitHub</a>
            <a href="https://www.linkedin.com/in/palak-gautam-8805b0311" target="_blank" onMouseEnter={playHover} className="hover:text-primary transition-all duration-700">LinkedIn</a>
            <a href="https://leetcode.com/u/palakG05/" target="_blank" onMouseEnter={playHover} className="hover:text-primary transition-all duration-700">LeetCode</a>
          </div>
        </div>
      </section>
    </section>
  );
}

