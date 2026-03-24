import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fonts = [
  "'Cormorant Garamond', serif",
  "'Outfit', sans-serif",
  "'JetBrains Mono', monospace",
  "serif",
  "sans-serif",
  "cursive",
  "monospace"
];

function MorphingLetter({ letter, delay }: { letter: string; delay: number }) {
  const [fontIndex, setFontIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setFontIndex(Math.floor(Math.random() * fonts.length));
      }, 120);

      setTimeout(() => {
        clearInterval(interval);
        interval = setInterval(() => {
          setFontIndex(Math.floor(Math.random() * fonts.length));
        }, 300);
      }, 1200);

      setTimeout(() => {
        clearInterval(interval);
        setIsAnimating(false);
        setFontIndex(0);
      }, 2500);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [delay]);

  return (
    <motion.span
      key={`${fontIndex}-${isAnimating}`}
      className={`inline-block cursor-default hover:text-fuchsia-400 transition-colors duration-300 ${isAnimating ? 'opacity-80' : 'opacity-100'}`}
      style={{ fontFamily: fonts[fontIndex] }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -5, scale: 1.05 }}
    >
      {letter}
    </motion.span>
  );
}

export default function WamHero() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex flex-col items-center justify-center overflow-hidden bg-black select-none px-6">
      
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-500/10 via-transparent to-transparent opacity-50 blur-[100px] z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-fuchsia-500/10 via-transparent to-transparent opacity-40 blur-[150px] z-0" />

      {/* Center Subtitle */}
      <div className="relative z-20 text-center mb-10 md:mb-16">
        <motion.p 
          className="text-white/40 text-[9px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.8em] font-medium leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Analyzing the logic. <span className="text-white/60">Engineering the insight.</span>
        </motion.p>
      </div>

      {/* Scaled Responsive PALAK Morphing */}
      <div className="relative z-10 flex items-center justify-center w-full max-w-7xl mx-auto mt-4">
        <h1 
          className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[11rem] xl:text-[13rem] font-bold text-white tracking-tighter leading-none select-none flex items-center gap-1 md:gap-4 flex-wrap justify-center overflow-visible"
        >
          <MorphingLetter letter="P" delay={0.1} />
          <MorphingLetter letter="A" delay={0.2} />
          <MorphingLetter letter="L" delay={0.3} />
          <MorphingLetter letter="A" delay={0.4} />
          <MorphingLetter letter="K" delay={0.5} />
        </h1>
      </div>

      {/* Hero Tagline */}
      <div className="relative z-10 mt-10 md:mt-16 text-center max-w-2xl">
        <motion.p 
          className="text-white/20 text-sm md:text-xl font-serif italic tracking-tight leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          I decipher complex systems to uncover <br className="hidden md:block" /> 
          <span className="text-white hover:text-fuchsia-400 transition-colors duration-500 italic">meaningful intelligence.</span>
        </motion.p>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
      >
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-white/20">Scroll</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-white/40 to-transparent transform scale-y-100 origin-top overflow-hidden">
             <motion.div 
              className="w-full h-full bg-fuchsia-500"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
             />
          </div>
        </div>
      </motion.div>
      
    </section>
  );
}
