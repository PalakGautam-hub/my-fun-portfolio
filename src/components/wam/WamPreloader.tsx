import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function WamPreloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 1000);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: "blur(20px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-[#050208] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient Particle Background */}
          <div className="absolute inset-0 z-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 - 50 + "%", 
                  y: Math.random() * 100 - 50 + "%", 
                  opacity: 0 
                }}
                animate={{ 
                  y: [null, "-100%"], 
                  opacity: [0, 0.2, 0] 
                }}
                transition={{ 
                  duration: Math.random() * 5 + 5, 
                  repeat: Infinity, 
                  ease: "linear",
                  delay: Math.random() * 5
                }}
                className="absolute w-1 h-20 bg-primary/20 blur-sm rounded-full"
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center">
            {/* The Brand Mark (Orb) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-32 h-32 mb-12"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full animate-pulse" />
              
              {/* The Orb Body */}
              <div className="absolute inset-0 bg-black rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                
                {/* Glowing Eyes/Lines */}
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                  <motion.div 
                    animate={{ height: [12, 24, 12] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 bg-secondary shadow-[0_0_10px_rgba(var(--secondary),0.8)] rounded-full" 
                  />
                  <motion.div 
                    animate={{ height: [24, 12, 24] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1.5 bg-secondary shadow-[0_0_10px_rgba(var(--secondary),0.8)] rounded-full" 
                  />
                </div>
              </div>

              {/* Orbital Ring */}
              <svg className="absolute inset-[-20%] w-[140%] h-[140%] animate-[spin_8s_linear_infinite]">
                <circle 
                  cx="50%" cy="50%" r="48%" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.05)" 
                  strokeWidth="1" 
                  strokeDasharray="4 8"
                />
              </svg>
            </motion.div>

            {/* Loading Text */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.8em] font-black text-white/40">Initializing</span>
                <span className="text-[10px] font-mono text-primary">{Math.round(progress)}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Cinematic Text Reveal */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-8"
            >
              <h1 className="text-[12px] uppercase tracking-[1em] font-light text-white/20 text-center">
                Palak Gautam <br/>
                <span className="text-[8px] tracking-[0.5em] opacity-50">Systems Protocol Archive</span>
              </h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
