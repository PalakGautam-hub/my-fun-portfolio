import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const characters = ["P", "A", "L", "A", "K"];
const fonts = [
  "font-serif italic", 
  "font-sans font-black uppercase", 
  "font-serif font-light", 
  "font-sans italic font-bold",
  "font-mono font-black"
];

export default function WamHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % characters.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden pt-20 px-6 sm:px-10">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,121,249,0.02)_0%,transparent_60%)] pointer-events-none" />
      
      {/* Narrative Tagline - Ensuring legibility on iPhone */}
      <motion.div 
        className="absolute top-1/4 sm:top-1/3 text-center w-full z-10 px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <span className="text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.6em] sm:tracking-[0.8em] font-sans font-black text-white/40 leading-relaxed block max-w-[280px] sm:max-w-none mx-auto">
          Analyzing the logic. Engineering the insight.
        </span>
      </motion.div>

      {/* Morphing Brand Character - Scaled down for mobile devices */}
      <div className="relative flex items-center justify-center w-full h-[30vh] md:h-[50vh] z-0">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`${characters[index]}-${index}`}
            className={`text-[12rem] sm:text-[18rem] md:text-[25rem] lg:text-[28rem] text-white leading-none select-none ${fonts[index % fonts.length]}`}
            initial={{ opacity: 0, scale: 0.8, y: 20, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: -20, rotate: 5 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {characters[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Primary Narrative Links - Mobile Optimized */}
      <motion.div 
        className="absolute bottom-16 sm:bottom-20 flex flex-col sm:flex-row gap-6 sm:gap-14 items-center z-10 w-full justify-center px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex gap-8 sm:gap-12 flex-wrap justify-center">
          <a href="#work" className="group text-sm font-serif italic text-white hover:text-fuchsia-400 transition-all flex items-center gap-4 border-b border-white/10 pb-2">
            Explore Work <span className="text-xs transition-transform group-hover:translate-x-1.5 group-hover:-translate-y-1">→</span>
          </a>
          <a href="#insights" className="group text-sm font-serif italic text-white/40 hover:text-teal-400 transition-all flex items-center gap-4 border-b border-white/10 pb-2">
            About Core <span className="text-xs">→</span>
          </a>
        </div>
        
        <span className="hidden lg:block text-[9px] uppercase tracking-[0.4em] text-white/10 font-black">
          [ DECODING INTELLIGENCE ]
        </span>
      </motion.div>

      {/* Dynamic Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-t from-white to-transparent" />
      </motion.div>

    </section>
  );
}
