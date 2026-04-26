import { useState, useEffect } from "react";
import WamHeader from "@/components/wam/WamHeader";
import WamHero from "@/components/wam/WamHero";
import WamStatement from "@/components/wam/WamStatement";
import WamTechStack from "@/components/wam/WamTechStack";
import WamSolutions from "@/components/wam/WamSolutions";
import WamProjects from "@/components/wam/WamProjects";
import WamCursor from "@/components/wam/WamCursor";
import WamPreloader from "@/components/wam/WamPreloader";
import SmoothScroll from "@/components/wam/SmoothScroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Index() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#050208] text-white selection:bg-primary selection:text-white font-sans overflow-x-hidden cinematic-grain">
      <AnimatePresence mode="wait">
        {loading ? (
          <WamPreloader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <SmoothScroll key="content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Global Futuristic Technical Grid */}
              <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.05] hidden md:block"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                  backgroundSize: '80px 80px'
                }}
              />

              {/* Global Atmospheric CRT Scan-lines - Benchmark Polish */}
              <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] hidden md:block"
                style={{
                  background: `repeating-linear-gradient(to bottom, transparent, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px)`,
                }}
              />

              {/* Global Luminous Depth Layers */}
              <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-3xl md:blur-[160px] rounded-full animate-pulse-luminous" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-3xl md:blur-[160px] rounded-full animate-pulse-luminous" style={{ animationDelay: '3s' }} />
              </div>

              {/* Custom High-Precision Cursor (Desktop/Laptop Only) */}
              <div className="hidden lg:block">
                <WamCursor />
              </div>

              {/* Protocol Navigation Bar */}
              <WamHeader />

              <main className="relative flex flex-col items-center w-full">
                <WamHero />

                <div className="w-full relative">
                  <WamStatement />
                  <WamTechStack />
                  <WamSolutions />
                  <WamProjects />
                </div>
              </main>

              {/* Minimal Futuristic Footer */}
              <footer className="w-full py-16 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 bg-[#050208] relative z-10">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white font-black">PALAK GAUTAM</span>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-white/20">System Protocol Archive © 2026</p>
                </div>
                <div className="flex gap-8 md:gap-12 text-[8px] uppercase tracking-[0.4em] font-black text-white/20">
                  <span className="hover:text-primary transition-colors cursor-pointer">Security Protocol</span>
                  <span className="hover:text-primary transition-colors cursor-pointer">Intelligence Access</span>
                  <span className="hover:text-primary transition-colors cursor-pointer">Data Integrity</span>
                </div>
              </footer>
            </motion.div>
          </SmoothScroll>
        )}
      </AnimatePresence>
    </div>
  );
}

