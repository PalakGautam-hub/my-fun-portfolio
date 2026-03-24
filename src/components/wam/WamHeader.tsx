import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WamHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-[1100] px-4 md:px-10 py-4 md:py-6 flex justify-between items-center transition-all duration-300 ${isOpen ? 'bg-transparent' : 'mix-blend-difference'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        
        {/* Brand logo PG */}
        <div className={`z-[60] flex items-center gap-3 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
          <a href="/" className="group flex items-center gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden rounded-lg bg-white/5 md:bg-transparent">
              <img 
                src="/logo_pg.png" 
                alt="PG Logo" 
                className="w-full h-full object-contain p-1 invert grayscale group-hover:grayscale-0 group-hover:invert-0 transition-all duration-500" 
              />
            </div>
            <span className="hidden sm:block text-sm md:text-base font-serif tracking-[0.3em] font-black text-white hover:text-fuchsia-400 transition-colors uppercase leading-none">PALAK G.</span>
          </a>
        </div>

        {/* Main Navigation - Desktop */}
        <nav className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 justify-center items-center gap-12 uppercase text-[10px] tracking-[0.4em] font-black font-sans text-white/50 transition-opacity ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <a href="#work" className="hover:text-white transition-all hover:translate-y-[-2px] relative block group">
            Work
            <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-white transition-all group-hover:w-full" />
          </a>
          <a href="#solutions" className="hover:text-white transition-all hover:translate-y-[-2px] relative block group">
            Expertise
            <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-white transition-all group-hover:w-full" />
          </a>
          <a href="#insights" className="hover:text-white transition-all hover:translate-y-[-2px] relative block group">
            Insights
            <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-white transition-all group-hover:w-full" />
          </a>
        </nav>

        {/* Interaction Stack */}
        <div className="flex items-center gap-4 md:gap-8 z-[1100]">
          
          {/* Contact Me now OPENS the drawer/menu as requested */}
          <button 
            onClick={() => setIsOpen(true)}
            className={`relative px-6 py-3 transition-all text-black text-[9px] font-bold tracking-[0.3em] uppercase group/btn hidden sm:block ${isOpen ? 'opacity-0 pointer-events-none' : 'bg-fuchsia-400 hover:bg-fuchsia-300'}`}
          >
            <span className="relative z-10 flex items-center gap-3 font-black">Contact Me <span className="text-base leading-none group-hover/btn:translate-x-1.5 transition-transform">→</span></span>
          </button>

          {/* Toggle Button - Swaps between Menu and X */}
          <button 
            className={`p-3 rounded-full cursor-pointer transition-all z-[1200] ${isOpen ? 'bg-white text-black hover:bg-fuchsia-400 hover:scale-110' : 'bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5 stroke-[3]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Sidebar Overlay / Contact Center */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-black z-[1000] flex flex-col items-center justify-between py-24 px-10"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 35, stiffness: 300 }}
          >
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-fuchsia-500/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Navigation links */}
            <nav className="flex flex-col items-center gap-8 w-full text-center mt-10">
              <a 
                href="#work" 
                onClick={() => setIsOpen(false)} 
                className="text-5xl font-serif italic text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-2"
              >
                Work.
              </a>
              <a 
                href="#solutions" 
                onClick={() => setIsOpen(false)} 
                className="text-5xl font-serif italic text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-2"
              >
                Expertise.
              </a>
              <a 
                href="#insights" 
                onClick={() => setIsOpen(false)} 
                className="text-5xl font-serif italic text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white/20 pb-2"
              >
                Insights.
              </a>
            </nav>

            {/* Comprehensive Contact Section inside the menu */}
            <div className="flex flex-col items-center gap-12 w-full mb-10 relative z-10">
              <div className="flex flex-col items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-black mb-2">Get in touch</span>
                <a href="mailto:gautampalak77@gmail.com" className="text-xl md:text-2xl tracking-[0.1em] font-serif italic text-fuchsia-400 hover:text-white transition-colors uppercase">
                  gautampalak77@gmail.com
                </a>
                <a href="tel:+917633904564" className="text-sm tracking-[0.4em] text-white/40 font-mono">
                  +91 7633904564
                </a>
              </div>
              
              <div className="flex gap-16">
                 <a href="https://github.com/PalakGautam-hub" target="_blank" className="text-[11px] uppercase tracking-[0.4em] font-bold text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
                   GIT
                 </a>
                 <a href="https://linkedin.com/in/palak-gautam77" target="_blank" className="text-[11px] uppercase tracking-[0.4em] font-bold text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
                   LINKEDIN
                 </a>
              </div>
            </div>
            
            {/* Minimal Close Prompt at the bottom */}
            <button 
              onClick={() => setIsOpen(false)}
              className="text-[9px] uppercase tracking-[0.6em] text-white/10 hover:text-white transition-colors mt-12"
            >
              Close Menu [Esc]
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
