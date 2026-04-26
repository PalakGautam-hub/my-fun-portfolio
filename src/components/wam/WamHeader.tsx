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

        </div>
      </motion.header>
    </>
    </>
  );
}

