import { motion } from "framer-motion";
import { Database, ShieldCheck, Zap, ArrowRight, Activity, Terminal } from "lucide-react";
import { useSoundSystem } from "./SoundSystem";

export default function WamStatement() {
  const { playHover, playClick } = useSoundSystem();

  return (
    <section id="insights" className="w-full bg-[#050208] py-48 md:py-80 px-6 md:px-12 flex flex-col items-center justify-center border-y border-white/5 relative">
      
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-[1600px] w-full relative z-10">
        
        {/* Cinematic Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-40 md:mb-72">
          <motion.div 
            className="flex flex-col gap-10 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <h3 className="text-[11px] uppercase tracking-[1em] font-black text-primary/40">
                Identity Protocol [ 01 ]
              </h3>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light font-serif text-white tracking-tighter leading-none uppercase">
              Strategic <br/>
              <span className="italic text-white/20">Dossier.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-6 text-right items-end hidden lg:flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 2 }}
          >
            <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center relative">
               <div className="absolute inset-0 border border-primary/20 rounded-full animate-ping opacity-20" />
               <Activity className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.8em] text-white/10 font-black">Neural Monitoring</span>
          </motion.div>
        </div>

        {/* Narrative & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-24 lg:gap-16 items-start">
          
          {/* Main Narrative */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-12 md:gap-20"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-[1.3] tracking-tight font-serif">
              Analyst and Engineer with a background in Computer Science Engineering, <span className="italic text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">Palak Gautam</span> specializes in bridging the gap between <span className="text-white font-sans font-black">complex datasets</span> and <span className="text-white/30 italic">scalable software systems</span>.
            </p>
            
            <div className="flex flex-col md:flex-row gap-16 md:gap-32 border-t border-white/5 pt-16">
              <div className="flex flex-col gap-8 max-w-sm group">
                <span className="text-[11px] uppercase tracking-[0.4em] text-white/20 font-black group-hover:text-primary/40 transition-colors">Strategic Core</span>
                <p className="text-lg text-zinc-500 leading-relaxed tracking-wide font-light">
                  Expertise in end-to-end data pipelines, ensuring that every byte of information serves a strategic business purpose. Transforming manual workflows into <span className="text-white/40 italic">automated intelligence hubs.</span>
                </p>
              </div>
              <div className="flex flex-col gap-8 max-w-sm group">
                <span className="text-[11px] uppercase tracking-[0.4em] text-white/20 font-black group-hover:text-primary/40 transition-colors">Technical Ethos</span>
                <p className="text-lg text-zinc-500 leading-relaxed tracking-wide font-light">
                  Building with a focus on performance, security, and scalability. Utilizing modern stacks to deliver <span className="text-white/40 italic">sub-100ms latencies</span> and robust enterprise-grade architectures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Portrait Photo Module */}
          <motion.div 
            className="lg:col-span-5 flex flex-col items-center lg:items-end w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative group will-change-transform">
              {/* Elegant Luminous Halo */}
              <div className="absolute -inset-6 rounded-[3rem] md:rounded-[4rem] z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-1000 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, hsla(320,100%,60%,0.2), hsla(220,100%,60%,0.1) 40%, transparent 70%)' }}
              />

              {/* Photo Frame (Optimized for Dossier Sidebar) */}
              <div className="relative w-full max-w-[420px] aspect-[4/5.5] md:h-[620px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group shadow-2xl z-10 border border-white/10 bg-white/5 backdrop-blur-md">
                {/* Luminous Aura Effect */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                  <div className="absolute -inset-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
                </div>

                <img 
                  src="/palak_portrait.png" 
                  alt="Palak Gautam Portrait" 
                  className="w-full h-full object-cover object-[center_top] filter saturate-50 contrast-125 brightness-95 group-hover:saturate-100 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all [transition-duration:2000ms] ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#050208]/90 via-[#050208]/10 to-transparent pointer-events-none" />
                
                {/* Inner Premium Glass Border */}
                <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3.5rem] pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), inset 0 0 20px rgba(255,255,255,0.02)' }}
                />
              </div>

              {/* Decorative Tech Tag Overlay */}
              <div className="absolute -bottom-4 -left-4 z-30 bg-[#050208] border border-white/10 p-5 rounded-2xl hidden md:block backdrop-blur-xl group-hover:border-primary/40 transition-colors duration-700">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary animate-pulse" />
                  <span className="text-[9px] uppercase tracking-[0.6em] text-white/40 font-black">Archive.Verified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cinematic Call to Action */}
        <div className="mt-48 md:mt-80 flex flex-col items-center gap-16">
          <a 
            href="#work" 
            onMouseEnter={playHover}
            onClick={playClick}
            className="group relative px-8 sm:px-12 md:px-24 py-6 md:py-10 border border-white/5 bg-white/[0.02] overflow-hidden rounded-full transition-all duration-1000 md:hover:border-primary/40 md:hover:scale-105 shadow-2xl text-center"
          >
             <div className="absolute inset-0 bg-primary translate-y-full md:group-hover:translate-y-0 transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]" />
             <span className="relative z-10 text-[11px] uppercase tracking-[1em] font-black text-white md:group-hover:text-white flex items-center gap-8 transition-colors duration-500">
                Enter Strategic Archive <ArrowRight className="w-5 h-5 md:group-hover:translate-x-3 transition-transform duration-700" />
             </span>
          </a>
        </div>

      </div>

      {/* Floating Section Accents */}
      <div className="absolute bottom-0 left-0 p-24 opacity-5 pointer-events-none">
        <Terminal className="w-48 h-48 text-white animate-pulse" />
      </div>
    </section>
  );
}

