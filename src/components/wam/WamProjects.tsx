import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Linkedin, Terminal, Mail, ArrowUpRight, FolderOpen, Sparkles, Database, Cpu } from "lucide-react";
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

function ProjectItem({ id, title, role, desc, link, tags, bgGradient, index }: ProjectItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSoundSystem();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const springProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });

  const y = useTransform(springProgress, [0, 1], [-50, 50]);
  const scale = useTransform(springProgress, [0, 0.5, 1], [0.98, 1, 0.98]);
  const opacity = useTransform(springProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5 px-6 md:px-12 py-32"
    >
      {/* Immersive Cinematic Background */}
      <div className="absolute inset-0 z-0 bg-[#050208]">
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${bgGradient} blur-3xl md:blur-[160px] animate-pulse-luminous`} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.02]" />
      </div>

      {/* Massive Background Project Index */}
      <motion.div 
        style={{ y: useTransform(springProgress, [0, 1], [-100, 100]) }}
        className="absolute inset-0 flex items-center justify-center z-0 opacity-[0.02]"
      >
        <span className="text-[20vw] font-black font-serif italic text-white select-none">
          {index}
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1600px] w-full grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-32 items-center">
        
        {/* Project Typographic Block */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            <span className="text-3xl font-serif italic text-primary">{index}</span>
            <div className="h-[1px] w-24 bg-gradient-to-r from-primary/40 to-transparent" />
            <span className="text-[11px] uppercase tracking-[0.8em] text-white/30 font-black">Secure Data Entry</span>
          </motion.div>

          <motion.h2 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-light font-serif tracking-tighter leading-none text-white uppercase"
            style={{ y }}
          >
            {title}<span className="text-primary/20">.</span>
          </motion.h2>

          <div className="flex flex-wrap gap-5">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] tracking-[0.6em] font-black text-white/30 border border-white/5 px-10 py-4 rounded-full uppercase hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-700 cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Project Intelligence Module (Glass Card) */}
        <div 
          className="lg:col-span-5 flex flex-col gap-14 luminous-glass p-12 md:p-24 rounded-[5rem] group hover:bg-white/[0.04] transition-all duration-1000 border-white/5 hover:border-primary/20 shadow-2xl"
          onMouseEnter={playHover}
        >
          <div className="flex flex-col gap-10">
            <div className="flex justify-between items-center">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <h3 className="text-[10px] uppercase tracking-[0.8em] font-black text-primary drop-shadow-neon">
                    {role}
                  </h3>
               </div>
               <Sparkles className="w-5 h-5 text-white/10 group-hover:text-primary transition-all duration-700 group-hover:rotate-12" />
            </div>
            <p className="text-2xl md:text-3xl text-zinc-400 font-serif italic leading-relaxed font-light">
              "{desc}"
            </p>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHover}
            onClick={playClick}
            className="group/btn relative w-full py-10 bg-white text-black text-[12px] tracking-[0.8em] font-black uppercase text-center rounded-[2.5rem] overflow-hidden transition-all active:scale-95 shadow-xl"
          >
            <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-1000 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 flex items-center justify-center gap-8 group-hover/btn:text-white transition-colors duration-500">
              Access Intelligence <ExternalLink className="w-5 h-5" />
            </span>
          </a>
        </div>

      </div>
    </motion.div>
  );
}

export default function WamProjects() {
  const { playHover, playClick } = useSoundSystem();
  
  const projects = [
    {
      id: "lucy",
      index: "01",
      title: "LUCY AI",
      role: "Digital Twin | 2026",
      desc: "An AI-powered digital twin interface featuring voice-to-response interaction and vision support.",
      link: "https://github.com/PalakGautam-hub/LUCY-AI-Digital-Twin",
      tags: ["AI", "Digital Twin", "React"],
      bgGradient: "from-primary/20 via-transparent to-transparent",
    },
    {
      id: "lexora",
      index: "02",
      title: "LEXORA",
      role: "AI Engineering | 2026",
      desc: "Spearheaded an AI full-stack application using LLM APIs, slashing document review cycles by 60%.",
      link: "https://github.com/PalakGautam-hub/Lexora-AI",
      tags: ["Python", "LLMs", "NLP"],
      bgGradient: "from-secondary/20 via-transparent to-transparent",
    },
    {
      id: "traffic",
      index: "03",
      title: "TRAFFIC",
      role: "Simulation Architect | 2026",
      desc: "Optimized traffic signal synchronization via Python simulations, reducing commuter wait times by 30%.",
      link: "https://github.com/PalakGautam-hub/Traffic_Management",
      tags: ["Python", "Simulation", "System Design"],
      bgGradient: "from-indigo-500/20 via-transparent to-transparent",
    },
    {
      id: "snip",
      index: "04",
      title: "SNIP URL",
      role: "Microservice Engineer | 2026",
      desc: "Designed a scalable microservice architecture, achieving sub-100ms redirection latency for 50,000+ requests.",
      link: "https://github.com/PalakGautam-hub/Snip-URL-shortner",
      tags: ["Node", "REST API", "System Design"],
      bgGradient: "from-cyan-500/20 via-transparent to-transparent",
    },
  ];

  return (
    <section id="work" className="w-full bg-[#050208] border-t border-white/5">
      
      {/* Strategic Archive Header */}
      <div className="w-full py-48 md:py-80 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-16 border-b border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsla(var(--primary)/0.03)_0%,transparent_50%)] pointer-events-none" />
        
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

      <div className="flex flex-col">
        {projects.map((p) => (
          <ProjectItem key={p.id} {...p} />
        ))}
      </div>
      
      {/* Final Call to Intelligence */}
      <div className="w-full bg-[#050208] py-80 md:py-[40vh] flex flex-col items-center justify-center gap-32 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(var(--primary)/0.05)_0%,transparent_80%)] pointer-events-none" />

        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-7xl md:text-[8rem] lg:text-[12rem] font-light font-serif text-white tracking-tighter leading-[0.85] max-w-[2000px] relative z-10 uppercase"
        >
          Ready to decode <br className="hidden sm:block" />
          <span className="italic text-white/10">the next system?</span>
        </motion.h2>

        <div className="flex flex-col items-center gap-24 relative z-10 w-full">
          <motion.a 
            href="mailto:gautampalak77@gmail.com" 
            onMouseEnter={playHover}
            onClick={playClick}
            className="group relative px-24 py-10 border border-white/5 bg-white/[0.02] rounded-full overflow-hidden transition-all duration-700 hover:border-primary/40 hover:scale-105 shadow-2xl"
          >
             <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-1000 ease-[0.16,1,0.3,1]" />
             <span className="relative z-10 text-xl md:text-3xl font-serif italic text-white group-hover:text-white flex items-center gap-10 transition-colors duration-500">
                gautampalak77@gmail.com <ArrowUpRight className="w-8 h-8 group-hover:rotate-45 transition-transform duration-700" />
             </span>
          </motion.a>

          <div className="flex gap-10 md:gap-32 justify-center flex-wrap uppercase font-black tracking-[0.5em] md:tracking-[1em] text-[9px] md:text-[11px] text-white/70">
            <a href="https://github.com/PalakGautam-hub" target="_blank" onMouseEnter={playHover} className="hover:text-primary hover:scale-110 transition-all duration-700">GitHub</a>
            <a href="https://www.linkedin.com/in/palak-gautam-8805b0311" target="_blank" onMouseEnter={playHover} className="hover:text-primary hover:scale-110 transition-all duration-700">LinkedIn</a>
            <a href="https://leetcode.com/u/palakG05/" target="_blank" onMouseEnter={playHover} className="hover:text-primary hover:scale-110 transition-all duration-700">LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  );
}

