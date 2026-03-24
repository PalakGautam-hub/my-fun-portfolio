import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fonts = [
  "font-serif italic", 
  "font-sans font-black uppercase", 
  "font-serif font-black", 
  "font-sans italic font-bold",
  "font-mono font-black"
];

const WaveLetter = ({ char, index }: { char: string, index: number }) => {
  const [fontIdx, setFontIdx] = useState(0);

  useEffect(() => {
    // Individual letters morph at random intervals for that "WAM" organic-tech feel
    const randomDelay = Math.random() * 2000;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setFontIdx((prev) => (prev + 1) % fonts.length);
      }, 2000 + Math.random() * 1000);
      return () => clearInterval(interval);
    }, randomDelay);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.span
      className={`inline-block transition-all duration-700 ${fonts[fontIdx]} text-white`}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {char}
    </motion.span>
  );
};

export default function WamHero() {
  const name = "PALAK";

  return (
    <section className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden pt-20 px-6 sm:px-10 lg:px-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,121,249,0.02)_0%,transparent_70%)] pointer-events-none" />
      
      {/* Narrative Tagline */}
      <motion.div 
        className="absolute top-1/4 sm:top-[30%] text-center w-full z-10 px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <span className="text-[10px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.6em] sm:tracking-[0.8em] font-sans font-black text-white/40 block max-w-[300px] sm:max-w-none mx-auto leading-relaxed">
          Analyzing the logic. Engineering the insight.
        </span>
      </motion.div>

      {/* Main Morphing Name - WAM-STYLE (Per-Character Morphing) */}
      <div className="relative flex items-center justify-center w-full h-[30vh] md:h-[50vh] z-0 px-4">
        <h1 className="text-6xl sm:text-8xl md:text-[12rem] lg:text-[15rem] xl:text-[18rem] leading-none select-none text-center flex items-center justify-center gap-0">
          {name.split("").map((char, i) => (
            <WaveLetter key={i} char={char} index={i} />
          ))}
        </h1>
      </div>

      {/* Narrative Links */}
      <motion.div 
        className="absolute bottom-16 sm:bottom-24 flex flex-col sm:flex-row gap-8 sm:gap-20 items-center z-10 w-full justify-center px-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex gap-8 sm:gap-16 flex-wrap justify-center items-center">
          <a href="#work" className="group text-sm sm:text-base font-serif italic text-white hover:text-fuchsia-400 transition-all flex items-center gap-4 border-b border-white/5 pb-2">
            Strategic Work <span className="text-xs transition-transform group-hover:translate-x-2">→</span>
          </a>
          <a href="#insights" className="group text-sm sm:text-base font-serif italic text-white/40 hover:text-white transition-all flex items-center gap-4 border-b border-white/5 pb-2">
            The Core Value <span className="text-xs">→</span>
          </a>
        </div>
        
        <div className="flex flex-col items-center sm:items-start sm:border-l border-white/10 sm:pl-10 gap-2">
           <span className="text-[9px] uppercase tracking-[0.6em] text-white/10 font-black">STAY CONNECTED</span>
           <div className="flex gap-8">
              <a href="https://github.com/PalakGautam-hub" target="_blank" className="text-[10px] uppercase font-black tracking-widest text-white/20 hover:text-white transition-colors">GH</a>
              <a href="https://linkedin.com/in/palak-gautam77" target="_blank" className="text-[10px] uppercase font-black tracking-widest text-white/20 hover:text-white transition-colors">LI</a>
              <a href="https://leetcode.com/u/palak-gautam77" target="_blank" className="text-[10px] uppercase font-black tracking-widest text-white/20 hover:text-white transition-colors">LC</a>
           </div>
        </div>
      </motion.div>

      {/* Narrative Progress Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-10 hover:opacity-50 transition-opacity hidden sm:flex"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[1.5px] h-16 bg-gradient-to-t from-fuchsia-500/50 to-transparent" />
      </motion.div>

    </section>
  );
}
