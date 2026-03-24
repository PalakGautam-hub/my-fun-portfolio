import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fonts = [
  "font-serif italic font-light", 
  "font-sans font-black uppercase tracking-tighter", 
  "font-serif font-black", 
  "font-sans italic font-bold tracking-widest",
  "font-mono font-black"
];

export default function WamHero() {
  const [fontIndex, setFontIndex] = useState(0);

  // High-end font morphing for the full name "PALAK"
  useEffect(() => {
    const timer = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden pt-20 px-6 sm:px-10 lg:px-20">
      
      {/* Background Ambience - Subtle pulsing glow */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,121,249,0.03)_0%,transparent_60%)] pointer-events-none"
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      {/* Universal Narrative Tagline - Legible from iPhone to Desktop Ultra-wide */}
      <motion.div 
        className="absolute top-1/4 sm:top-[30%] text-center w-full z-10 px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <span className="text-[9px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.5em] sm:tracking-[0.8em] font-sans font-black text-white/40 block max-w-[280px] sm:max-w-none mx-auto leading-relaxed">
          Analyzing the logic. Engineering the insight.
        </span>
      </motion.div>

      {/* Main Morphing Name - Dynamically Scaling for All Devices (Laptop, Tab, Phone) */}
      <div className="relative flex items-center justify-center w-full h-[40vh] md:h-[60vh] z-0 px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`palak-morph-${fontIndex}`}
            className={`text-6xl sm:text-8xl md:text-[14rem] lg:text-[18rem] xl:text-[22rem] text-white leading-none select-none text-center ${fonts[fontIndex]}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -20 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            PALAK
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Strategic Primary Navigation - Thumb-reachable and Desktop-elegant */}
      <motion.div 
        className="absolute bottom-16 sm:bottom-24 flex flex-col sm:flex-row gap-8 sm:gap-20 items-center z-10 w-full justify-center px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex gap-8 sm:gap-16 flex-wrap justify-center border-t border-white/5 pt-8 sm:pt-0 sm:border-t-0">
          <a href="#work" className="group text-sm sm:text-base font-serif italic text-white hover:text-fuchsia-400 transition-all flex items-center gap-4">
            Strategic Work <span className="text-xs transition-transform group-hover:translate-x-2 group-hover:-translate-y-1">→</span>
          </a>
          <a href="#insights" className="group text-sm sm:text-base font-serif italic text-white/40 hover:text-teal-400 transition-all flex items-center gap-4">
            The Core Value <span className="text-xs transition-transform group-hover:rotate-45">→</span>
          </a>
        </div>
        
        <div className="hidden lg:flex flex-col items-start border-l border-white/10 pl-10 gap-2">
           <span className="text-[9px] uppercase tracking-[0.6em] text-white/10 font-black">STAY CONNECTED</span>
           <div className="flex gap-8">
              <a href="https://github.com/PalakGautam-hub" target="_blank" className="text-[10px] text-white/20 hover:text-white transition-colors">GH</a>
              <a href="https://linkedin.com/in/palak-gautam77" target="_blank" className="text-[10px] text-white/20 hover:text-white transition-colors">LI</a>
              <a href="https://leetcode.com/u/palak-gautam77" target="_blank" className="text-[10px] text-white/20 hover:text-white transition-colors">LC</a>
           </div>
        </div>
      </motion.div>

      {/* Narrative Progress Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-10 hover:opacity-50 transition-opacity hidden sm:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[8px] uppercase tracking-[1em] text-white font-black rotate-90 mb-4 whitespace-nowrap">SCROLL TO ANALYZE</span>
        <div className="w-[1.5px] h-16 bg-gradient-to-t from-fuchsia-500 to-transparent" />
      </motion.div>

    </section>
  );
}
