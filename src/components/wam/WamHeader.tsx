import { Menu, X, Github, Linkedin, Terminal, Mail } from "lucide-react";
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
        className={`fixed top-0 left-0 w-full z-[1100] px-6 md:px-12 py-4 md:py-8 flex justify-between items-center transition-all duration-500 ${scrolled ? 'md:backdrop-blur-xl bg-black/95 md:bg-black/60 border-b border-white/5' : ''} ${isOpen ? 'bg-transparent border-transparent' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        
        {/* Responsive Brand Identity - Dynamically scaled for iPhone */}
        <div className={`z-[60] flex items-center transition-opacity duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <a href="/" className="flex items-center gap-3 md:gap-6">
            <div className="w-10 h-10 md:w-16 md:h-16 relative flex items-center justify-center p-1.5 md:p-2 rounded-xl bg-white/5 border border-white/10 md:bg-transparent md:border-transparent">
              <img 
                src="/logo_pg.png" 
                alt="PG Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-base md:text-2xl font-serif tracking-[0.2em] md:tracking-[0.4em] font-black text-white uppercase leading-none">PALAK G.</span>
              <span className="text-[6px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-white/40 font-bold mt-0.5 whitespace-nowrap">Analyst + Engineer</span>
            </div>
          </a>
        </div>

        {/* Action Controls - Scaled for Mobile Tap Targets */}
        <div className="flex items-center gap-3 md:gap-10 z-[1100]">
          
          <button 
            onClick={() => setIsOpen(true)}
            className={`relative px-6 md:px-10 py-3 md:py-4 transition-all text-black text-[9px] font-black tracking-[0.4em] uppercase group/btn hidden lg:block ${isOpen ? 'opacity-0 pointer-events-none' : 'bg-fuchsia-400 hover:bg-white shadow-[0_8px_30px_rgba(232,121,249,0.2)]'}`}
          >
            <span className="relative z-10 flex items-center gap-3">Contact <span className="text-xl leading-none group-hover/btn:translate-x-2 transition-transform">→</span></span>
          </button>

          <button 
            className={`p-3 md:p-4 rounded-full cursor-pointer transition-all z-[1200] border border-white/20 shadow-2xl ${isOpen ? 'bg-white text-black border-white' : 'bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5 md:w-7 md:h-7 stroke-[3]" /> : <Menu className="w-5 h-5 md:w-7 md:h-7" />}
          </button>
        </div>
      </motion.header>

      {/* Intelligence Hub Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-between py-24 px-8 overflow-hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 35, stiffness: 250 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(232,121,249,0.03)_0%,transparent_70%)] pointer-events-none" />
            
            <nav className="flex flex-col items-center gap-6 md:gap-10 w-full text-center mt-8 relative z-10">
              <a href="#work" onClick={() => setIsOpen(false)} className="text-4xl md:text-7xl font-serif italic text-white/20 hover:text-white transition-all">Work</a>
              <a href="#solutions" onClick={() => setIsOpen(false)} className="text-4xl md:text-7xl font-serif italic text-white/20 hover:text-white transition-all">Expertise</a>
              <a href="#insights" onClick={() => setIsOpen(false)} className="text-4xl md:text-7xl font-serif italic text-white/20 hover:text-white transition-all">Insights</a>
            </nav>

            <div className="flex flex-col items-center gap-10 w-full mb-8 relative z-10 bg-white/[0.02] backdrop-blur-lg md:backdrop-blur-3xl p-8 md:p-16 rounded-[2.5rem] border border-white/5 max-w-2xl">
              <div className="flex flex-col items-center gap-4 text-center">
                <span className="text-[9px] uppercase tracking-[0.6em] text-white/20 font-black mb-1">Direct Communication</span>
                <a href="mailto:gautampalak77@gmail.com" className="text-lg md:text-3xl tracking-wide font-serif italic text-fuchsia-400 hover:text-white transition-colors">
                  gautampalak77@gmail.com
                </a>
              </div>
              
              <div className="flex gap-8 md:gap-20 flex-wrap justify-center">
                 <a href="https://github.com/PalakGautam-hub" target="_blank" className="flex flex-col items-center gap-3 group">
                   <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-fuchsia-400 group-hover:text-black transition-all">
                     <Github className="w-5 h-5" />
                   </div>
                   <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">GitHub</span>
                 </a>
                 <a href="https://www.linkedin.com/in/palak-gautam-8805b0311" target="_blank" className="flex flex-col items-center gap-3 group">
                   <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-fuchsia-400 group-hover:text-black transition-all">
                     <Linkedin className="w-5 h-5" />
                   </div>
                   <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">LinkedIn</span>
                 </a>
                 <a href="https://leetcode.com/u/palakG05/" target="_blank" className="flex flex-col items-center gap-3 group">
                   <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-fuchsia-400 group-hover:text-black transition-all">
                     <Terminal className="w-5 h-5" />
                   </div>
                   <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-black">LeetCode</span>
                 </a>
              </div>
            </div>
            
            <button onClick={() => setIsOpen(false)} className="text-[8px] uppercase tracking-[0.6em] text-white/5 hover:text-white mt-4">Close Connection</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
