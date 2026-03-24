import { motion } from "framer-motion";
import { Asterisk, Database, Code } from "lucide-react";

export default function WamStatement() {
  return (
    <section id="insights" className="w-full bg-black py-32 md:py-48 px-6 sm:px-12 flex flex-col items-center justify-center border-y border-white/5 relative overflow-hidden">
      
      {/* Background ambient glow - Floating & Animated */}
      <motion.div 
        className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-fuchsia-600/5 blur-[160px] rounded-full z-0"
        animate={{ 
          y: [-50, 50, -50], 
          x: [-30, 30, -30],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl w-full relative z-10 transition-all duration-1000">
        
        {/* Dynamic Branding Proposition with Icons */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-serif leading-[1.2] md:leading-[1.1] tracking-tight text-white mb-28 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          I am <span className="italic">deciphering</span> data, where 
          <Database className="inline-block align-baseline w-10 h-10 md:w-20 md:h-20 text-teal-400 stroke-[0.3] mx-3 md:mx-6 -mb-2 md:-mb-4 animate-pulse" /> 
          Logic meet <span className="italic font-normal">Expertise</span>, 
          infrastructure meets intuition, and
          <Code className="inline-block align-baseline w-10 h-10 md:w-20 md:h-20 text-white stroke-[0.3] mx-3 md:mx-6 -mb-2 md:-mb-4" /> 
          Complexity is <Asterisk className="inline-block align-baseline w-10 h-10 md:w-20 md:h-20 text-white/30 mx-3 md:mx-6 -mb-2 md:-mb-4 rotate-12" /> simplified into <span className="italic uppercase tracking-[0.2em] text-fuchsia-400 font-black">Intelligence</span>.
        </motion.h2>

        {/* Identity & Portrait Section - Premium Scrollytell feel */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-center md:items-start group/section">
          
          {/* Professional Portrait with Advanced Framer Motion Animations as requested */}
          <motion.div 
            className="w-full md:w-[40%] aspect-[4/5] relative overflow-hidden rounded-[2rem] border border-white/10 shadow-3xl bg-zinc-900"
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
            
            {/* The Image - Smooth zoom on section hover as well as inner hover */}
            <motion.img 
              src="/palak_portrait.png" 
              alt="Palak Gautam Portrait" 
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
            
            {/* Visual Accents */}
            <div className="absolute top-8 right-8 z-20">
               <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                 <span className="text-[10px] uppercase tracking-widest text-white/40 font-black rotate-90">STUDIO</span>
               </div>
            </div>

            <div className="absolute bottom-10 left-10 z-20">
               <motion.span 
                 className="text-[12px] tracking-[0.6em] uppercase text-white font-black block mb-2"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5 }}
               >
                 PALAK GAUTAM
               </motion.span>
               <motion.span 
                 className="text-[9px] tracking-[0.4em] uppercase text-fuchsia-400 block font-bold"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.7 }}
               >
                 Software Architect
               </motion.span>
            </div>
          </motion.div>

          <div className="md:w-[50%] flex flex-col gap-10">
            <motion.div 
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <h3 className="text-[11px] md:text-xs uppercase tracking-[0.6em] font-black text-white/30 flex items-center gap-4">
                <span className="w-12 h-[1.5px] bg-fuchsia-500/40"></span>
                The Analytical Mind
              </h3>
              <p className="text-xl md:text-3xl lg:text-4xl font-light text-white leading-[1.3] tracking-tight font-serif uppercase">
                I build <span className="text-fuchsia-400 italic">scalable systems</span> rooted in complex data landscapes.
              </p>
            </motion.div>

            <motion.p 
              className="text-base md:text-lg text-zinc-500 max-w-2xl leading-relaxed tracking-wide font-sans md:font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Specializing in the intersection of <span className="text-white">Machine Learning</span> and <span className="text-white">Enterprise Engineering</span>. I have transformed reporting workflows for multi-million dollar customer operation pipelines, converting manual chaos into real-time visibility.
            </motion.p>

            <div className="grid grid-cols-2 gap-12 mt-4">
               <div className="flex flex-col gap-3 group/item">
                  <span className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-black group-hover/item:text-teal-400 transition-colors">KPI Reductions</span>
                  <span className="text-sm text-white/70 font-serif italic border-l border-white/5 pl-4">70% Reporting Automation</span>
               </div>
               <div className="flex flex-col gap-3 group/item">
                  <span className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-black group-hover/item:text-fuchsia-400 transition-colors">Precision Code</span>
                  <span className="text-sm text-white/70 font-serif italic border-l border-white/5 pl-4">90% Test Coverage Strategy</span>
               </div>
            </div>

            <motion.a 
              href="#work" 
              className="group text-sm font-serif italic text-white hover:text-fuchsia-400 transition-all flex items-center gap-6 border-b border-white/10 pb-3 w-fit mt-12"
              whileHover={{ x: 10 }}
            >
              View Strategic Projects <span className="text-xs transition-transform group-hover:translate-x-3">→</span>
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}
