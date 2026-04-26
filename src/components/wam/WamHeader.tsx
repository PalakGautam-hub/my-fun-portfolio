import { Menu, X, Github, Linkedin, Terminal, Mail, ArrowRight, Activity, Shield, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useSoundSystem } from "./SoundSystem";

export default function WamHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isMuted, toggleMute, playHover, playClick } = useSoundSystem();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-[1100] px-6 md:px-16 py-5 md:py-12 flex justify-between items-center transition-all duration-[1000ms] ${scrolled ? 'backdrop-blur-lg md:backdrop-blur-3xl bg-black/40 border-b border-white/5 py-3 md:py-8 opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={scrolled ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        
        {/* Futuristic Brand Identity */}
        <div className="z-[60] flex items-center">
          <a 
            href="/" 
            className="flex items-center gap-4 md:gap-6 group"
            onMouseEnter={playHover}
            onClick={playClick}
          >
            <div className="w-9 h-9 md:w-14 md:h-14 relative flex items-center justify-center p-2 md:p-3 rounded-lg md:rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-700 shadow-[0_0_20px_rgba(240,10,180,0.05)]">
              <img 
                src="/logo_pg.png" 
                alt="PG Logo" 
                className="w-full h-full object-contain group-hover:drop-shadow-neon transition-all duration-700" 
              />
              <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] md:text-xl font-serif tracking-[0.2em] md:tracking-[0.4em] font-black text-white uppercase leading-none group-hover:text-primary transition-colors duration-700">PALAK GAUTAM</span>
              <div className="flex items-center gap-2 md:gap-3">
                 <span className="text-[4px] md:text-[7px] uppercase tracking-[0.3em] md:tracking-[0.6em] text-white/20 font-black">Archive v4.0</span>
                 <Activity className="w-1 h-1 md:w-2 md:h-2 text-primary opacity-40 animate-pulse" />
              </div>
            </div>
          </a>
        </div>

        {/* Action Protocol Controls */}
        <div className="flex items-center gap-6 md:gap-12 z-[1100]">
          
          <button
            onClick={() => { playClick(); toggleMute(); }}
            onMouseEnter={playHover}
            className="p-2.5 md:p-3 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors text-white/30 hover:text-white"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-primary" />}
          </button>

          <a 
            href="mailto:gautampalak77@gmail.com"
            onMouseEnter={playHover}
            onClick={playClick}
            className="hidden lg:flex items-center gap-5 text-[10px] uppercase font-black tracking-[0.6em] text-white/40 hover:text-white transition-all duration-500 group"
          >
            Communication Protocol <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform text-primary duration-700" />
          </a>

          <button 
            className={`p-4 md:p-6 rounded-full cursor-pointer transition-all duration-700 z-[1200] border shadow-2xl ${isOpen ? 'bg-white text-black border-white' : 'luminous-glass text-white border-white/10 hover:border-white/40'}`}
            onClick={() => { playClick(); setIsOpen(!isOpen); }}
            onMouseEnter={playHover}
          >
            {isOpen ? <X className="w-5 h-5 stroke-[3]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Futuristic Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-[#050208] z-[1000] flex flex-col items-center justify-center py-32 px-12 overflow-hidden"
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
              <span className="text-[25vw] font-black uppercase tracking-tighter italic text-white/20">NAVIGATION</span>
            </div>
            
            <nav className="flex flex-col items-center gap-6 md:gap-10 w-full text-center relative z-10">
              {[
                { name: 'Portfolio Archive', id: 'work', sub: 'Project Documentation' },
                { name: 'Core Capabilities', id: 'expertise', sub: 'Technical Skillset' },
                { name: 'Digital Identity', id: 'about', sub: 'Professional Dossier' },
                { name: 'Secure Protocol', id: 'contact', sub: 'Direct Communication' }
              ].map((item, i) => (
                <motion.a 
                  key={item.id}
                  href={`#${item.id}`}
                  onMouseEnter={playHover}
                  onClick={() => { playClick(); setIsOpen(false); }}
                  className="group flex flex-col items-center gap-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-[8px] md:text-[10px] uppercase tracking-[0.8em] text-primary group-hover:text-white transition-colors duration-500">{item.sub}</span>
                  <span className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white/60 group-hover:text-white transition-all duration-700 uppercase tracking-tighter group-hover:scale-105">
                    {item.name.split(' ')[0]} <span className="text-white/20 group-hover:text-white/40">{item.name.split(' ')[1]}</span>
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="flex gap-8 md:gap-32 justify-center flex-wrap uppercase font-black tracking-[0.4em] md:tracking-[0.8em] text-[8px] md:text-[10px] text-white/60 relative z-10 mt-24">
              <a href="https://github.com/PalakGautam-hub" target="_blank" onMouseEnter={playHover} className="hover:text-primary hover:scale-110 transition-all duration-700">GitHub</a>
              <a href="https://www.linkedin.com/in/palak-gautam-8805b0311" target="_blank" onMouseEnter={playHover} className="hover:text-primary hover:scale-110 transition-all duration-700">LinkedIn</a>
              <a href="https://leetcode.com/u/palakG05/" target="_blank" onMouseEnter={playHover} className="hover:text-primary hover:scale-110 transition-all duration-700">LeetCode</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

