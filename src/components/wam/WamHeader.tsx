import { Menu, X, Github, Linkedin, Terminal, Mail, ArrowRight, Activity, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WamHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-[1100] px-4 md:px-16 py-6 md:py-12 flex justify-between items-center transition-all duration-1000 ${scrolled ? 'md:backdrop-blur-3xl bg-black/60 border-b border-white/5 py-3 md:py-8' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Futuristic Brand Identity */}
        <div className="z-[60] flex items-center">
          <a href="/" className="flex items-center gap-6 group">
            <div className="w-14 h-14 relative flex items-center justify-center p-3 rounded-2xl bg-primary/10 border border-primary/20 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-700 shadow-[0_0_20px_rgba(240,10,180,0.15)]">
              <img 
                src="/logo_pg.png" 
                alt="PG Logo" 
                className="w-full h-full object-contain filter hue-rotate-[280deg] brightness-125 group-hover:drop-shadow-neon transition-all" 
              />
              <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm md:text-xl font-serif tracking-[0.4em] font-black text-white uppercase leading-none group-hover:text-primary transition-colors">PALAK GAUTAM</span>
              <div className="flex items-center gap-2 md:gap-3">
                 <span className="text-[6px] md:text-[7px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/20 font-black">Archive v4.0</span>
                 <Activity className="w-1.5 h-1.5 md:w-2 md:h-2 text-primary opacity-40" />
              </div>
            </div>
          </a>
        </div>

        {/* Action Protocol Controls */}
        <div className="flex items-center gap-10 md:gap-16 z-[1100]">
          
          <a 
            href="mailto:gautampalak77@gmail.com"
            className="hidden lg:flex items-center gap-5 text-[10px] uppercase font-black tracking-[0.6em] text-white/40 hover:text-white transition-all group"
          >
            Communication Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform text-primary" />
          </a>

          <button 
            className={`p-5 md:p-6 rounded-full cursor-pointer transition-all z-[1200] border border-white/10 shadow-2xl ${isOpen ? 'bg-white text-black border-white' : 'luminous-glass text-white hover:bg-white hover:text-black hover:border-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 stroke-[3]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Futuristic Menu Overlay (Intelligence Hub) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#050208] z-[1000] flex flex-col items-center justify-center py-32 px-12 overflow-hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsla(var(--primary)/0.05)_0%,transparent_70%)] pointer-events-none" />
            
            <nav className="flex flex-col items-center gap-8 md:gap-12 w-full text-center relative z-10">
              {[
                { name: 'Archive', id: 'work' },
                { name: 'Capabilities', id: 'expertise' },
                { name: 'Intelligence', id: 'about' },
                { name: 'Connection', id: 'contact' }
              ].map((item, i) => (
                <motion.a 
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-white/10 hover:text-white transition-all uppercase tracking-tighter"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>

            <div className="flex gap-6 md:gap-32 justify-center flex-wrap uppercase font-black tracking-[0.4em] md:tracking-[0.8em] text-[8px] md:text-[10px] text-white/20 relative z-10 mt-20">
              <a href="https://github.com/PalakGautam-hub" target="_blank" className="hover:text-primary hover:scale-110 transition-all duration-500">GitHub</a>
              <a href="https://www.linkedin.com/in/palak-gautam-8805b0311" target="_blank" className="hover:text-primary hover:scale-110 transition-all duration-500">LinkedIn</a>
              <a href="https://leetcode.com/u/palakG05/" target="_blank" className="hover:text-primary hover:scale-110 transition-all duration-500">LeetCode</a>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
