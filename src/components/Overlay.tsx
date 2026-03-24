import { motion, MotionValue, useTransform } from "framer-motion";
import { Asterisk, CircleDashed } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 20% visible, fades out by 30%
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.25], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [0, -100]);

  // Section 2: Fades in at 25%, peaks at 40%, fades out by 55%
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.25, 0.55], [-50, 0]);

  // Section 3: Fades in at 55%, peaks at 70%, fades out by 85%
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.55, 0.85], [50, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center overflow-hidden font-serif">
      
      {/* Top Right "Contact Us" WAM-style Button */}
      <div className="absolute top-6 right-6 md:top-12 md:right-12 pointer-events-auto mix-blend-difference z-50">
        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-teal-400/20 to-purple-500/20 border border-white/20 hover:border-white transition-all text-xs tracking-[0.2em] font-mono text-white group hover:from-teal-400 hover:to-purple-500 hover:text-white">
          CONTACT ME <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* 0% Center */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        {/* Animated Figure / Floating Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            y: [0, -10, 0] // Floating animation
          }}
          transition={{ 
            scale: { duration: 1, ease: "easeOut" },
            opacity: { duration: 1 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }}
          className="relative mb-8 group cursor-pointer pointer-events-auto"
        >
          {/* Spotify-style glowing vibe ring */}
          <div className="absolute -inset-2 md:-inset-3 rounded-full bg-gradient-to-tr from-teal-400 via-indigo-500 to-purple-600 opacity-50 blur-lg group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 animate-[spin_6s_linear_infinite]" />
          
          {/* Core Avatar */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full border-[3px] border-white/20 p-1 bg-black/40 backdrop-blur-md overflow-hidden z-10">
            <img 
              src="/animated_avatar.png" 
              alt="Palak Gautam" 
              className="w-full h-full rounded-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-110 bg-black/50"
              style={{ objectPosition: "center 20%" }} 
            />
          </div>
        </motion.div>

        <h1 className="text-6xl md:text-[9rem] font-light text-white tracking-tighter mix-blend-difference drop-shadow-2xl leading-none">
          Palak <span className="italic font-normal">Gautam.</span>
        </h1>
        <p className="text-sm md:text-xl text-teal-200 mt-6 tracking-[0.3em] uppercase font-mono mix-blend-difference">
          <span className="opacity-60">I am the</span> hybrid <span className="italic text-white">Data Analyst</span>
        </p>
      </motion.div>

      {/* 30% Left */}
      <motion.div 
        style={{ opacity: opacity2, x: x2 }}
        className="absolute inset-0 flex flex-col items-start justify-center text-left px-8 md:px-24"
      >
        <h2 className="text-5xl md:text-8xl font-light text-white/95 max-w-4xl leading-[1.1] mix-blend-difference drop-shadow-2xl">
          Uncovering <span className="italic">Insights</span> <Asterisk className="inline-block align-middle w-10 h-10 md:w-16 md:h-16 text-teal-400 stroke-[1] animate-[spin_12s_linear_infinite]" /> Crafting <span className="italic">Experiences.</span>
        </h2>
      </motion.div>

      {/* 60% Right */}
      <motion.div 
        style={{ opacity: opacity3, x: x3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24"
      >
        <h2 className="text-5xl md:text-8xl font-light text-white/95 max-w-4xl leading-[1.1] mix-blend-difference drop-shadow-2xl text-right">
          Bridging the gap between <CircleDashed className="inline-block align-middle w-10 h-10 md:w-16 md:h-16 text-purple-400 stroke-[1] animate-[spin_10s_linear_infinite]" /> <br/>
          <span className="italic">Data</span> and Design.
        </h2>
      </motion.div>

    </div>
  );
}
