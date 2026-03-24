import { Menu, X, Github, Linkedin, Terminal, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WamHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-[1100] px-4 md:px-12 py-4 md:py-6 flex justify-between items-center transition-all duration-500 ${scrolled ? 'backdrop-blur-2xl bg-black/40 border-b border-white/5' : ''} ${isOpen ? 'bg-transparent border-transparent' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        
        {/* Brand Identity - Premium Logo, Original Color (Size Fixed) */}
        <div className={`z-[60] flex items-center transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <a href="/" className="flex items-center gap-6 group">
            <div className="w-14 h-14 md:w-16 md:h-16 relative flex items-center justify-center p-2 rounded-2xl bg-transparent border border-transparent">
              <img 
                src="/logo_pg.png" 
                alt="PG Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-base md:text-xl font-serif tracking-[0.3em] font-black text-white hover:text-fuchsia-400 transition-colors uppercase leading-none">PALAK G.</span>
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.5em] text-white/30 font-bold mt-1">Data + Systems Engineer</span>
            </div>
          </a>
        </div>

        {/* Navigation - Centered and High-Impact */}
        <nav className={`hidden xl:flex absolute left-1/2 -translate-x-1/2 justify-center items-center gap-14 uppercase text-[10px] tracking-[0.5em] font-black font-sans text-white/40 transition-opacity ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <a href="#work" className="hover:text-white transition-all relative block py-2 hover:scale-105 active:scale-95">Work</a>
          <a href="#solutions" className="hover:text-white transition-all relative block py-2 hover:scale-105 active:scale-95">Expertise</a>
          <a href="#insights" className="hover:text-white transition-all relative block py-2 hover:scale-105 active:scale-95">Insights</a>
        </nav>

        {/* Interaction Hub Controls */}
        <div className="flex items-center gap-4 md:gap-8 z-[1100]">
          
          <button 
            onClick={() => setIsOpen(true)}
            className={`relative px-8 py-3 transition-all text-black text-[9px] font-black tracking-[0.4em] uppercase group/btn hidden sm:block ${isOpen ? 'opacity-0 pointer-events-none' : 'bg-fuchsia-400 hover:bg-white shadow-[0_4px_24px_rgba(232,121,249,0.2)]'}`}
          >
            <span className="relative z-10 flex items-center gap-3">Contact <span className="text-base leading-none group-hover/btn:translate-x-2 transition-transform">→</span></span>
          </button>

          <button 
            className={`p-3.5 rounded-full cursor-pointer transition-all z-[1200] border-2 shadow-2xl ${isOpen ? 'bg-white text-black border-white' : 'bg-white/5 text-white border-white/10 backdrop-blur-md hover:bg-white hover:text-black font-bold'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6 stroke-[3]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Intelligence Center Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-between py-24 px-10 overflow-hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 35, stiffness: 250 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cover bg-center opacity-5 pointer-events-none grayscale brightness-50 contrast-125" style={{ backgroundImage: "url('/palak_portrait.png')" }} />
            
            <nav className="flex flex-col items-center gap-8 w-full text-center mt-12 relative z-10">
              <a href="#work" onClick={() => setIsOpen(false)} className="text-4xl md:text-6xl font-serif italic text-white/30 hover:text-white transition-all">Work</a>
              <a href="#solutions" onClick={() => setIsOpen(false)} className="text-4xl md:text-6xl font-serif italic text-white/30 hover:text-white transition-all">Expertise</a>
              <a href="#insights" onClick={() => setIsOpen(false)} className="text-4xl md:text-6xl font-serif italic text-white/30 hover:text-white transition-all">Insights</a>
            </nav>

            <div className="flex flex-col items-center gap-12 w-full mb-10 relative z-10 bg-white/[0.03] backdrop-blur-3xl p-10 md:p-14 rounded-[2.5rem] border border-white/5 max-w-xl shadow-2xl">
              <div className="flex flex-col items-center gap-6">
                <span className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-black">Direct Communication</span>
                <a href="mailto:gautampalak77@gmail.com" className="text-xl md:text-2xl tracking-[0.05em] font-serif italic text-fuchsia-400 hover:text-white transition-colors">
                  gautampalak77@gmail.com
                </a>
              </div>
              
              <div className="flex gap-10 md:gap-16 flex-wrap justify-center">
                 <a href="https://github.com/PalakGautam-hub" target="_blank" className="flex flex-col items-center gap-4 group">
                   <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-fuchsia-400 group-hover:text-black transition-all">
                     <Github className="w-6 h-6" />
                   </div>
                   <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold group-hover:text-white">GitHub</span>
                 </a>
                 <a href="https://linkedin.com/in/palak-gautam77" target="_blank" className="flex flex-col items-center gap-4 group">
                   <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-fuchsia-400 group-hover:text-black transition-all">
                     <Linkedin className="w-6 h-6" />
                   </div>
                   <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold group-hover:text-white">LinkedIn</span>
                 </a>
                 <a href="https://leetcode.com/u/palak-gautam77" target="_blank" className="flex flex-col items-center gap-4 group">
                   <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-fuchsia-400 group-hover:text-black transition-all">
                     <Terminal className="w-6 h-6" />
                   </div>
                   <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold group-hover:text-white">LeetCode</span>
                 </a>
              </div>
            </div>
            
            <button onClick={() => setIsOpen(false)} className="text-[9px] uppercase tracking-[0.7em] text-white/5 hover:text-white mt-8 transition-colors">Close Command Center</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
