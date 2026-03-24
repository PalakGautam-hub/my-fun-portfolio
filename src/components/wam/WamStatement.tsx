import { motion } from "framer-motion";
import { Asterisk, Database, Code } from "lucide-react";

export default function WamStatement() {
  return (
    <section id="insights" className="w-full bg-black py-20 md:py-32 px-6 sm:px-10 flex flex-col items-center justify-center border-y border-white/5 relative overflow-hidden">
      
      {/* Background abstract element floating */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-80 h-80 bg-fuchsia-600/5 blur-[120px] rounded-full z-0"
        animate={{ y: [-30, 30, -30], x: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl w-full relative z-10">
        
        {/* Branding Statement */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-serif leading-[1.3] md:leading-[1.1] tracking-tight text-white mb-20 text-center md:text-left">
          I am <span className="italic">deciphering</span> data, where 
          <Database className="inline-block align-baseline w-8 h-8 md:w-16 md:h-16 text-teal-400 stroke-[0.4] mx-2 md:mx-4 -mb-1 md:-mb-2" /> 
          Logic meet <span className="italic font-normal">Expertise</span>, 
          infrastructure meets intuition, and
          <Code className="inline-block align-baseline w-8 h-8 md:w-16 md:h-16 text-white stroke-[0.4] mx-2 md:mx-4 -mb-1 md:-mb-2" /> 
          Complexity is <Asterisk className="inline-block align-baseline w-8 h-8 md:w-16 md:h-16 text-white/40 animate-pulse mx-2 md:mx-4 -mb-1 md:-mb-2" /> simplified into <span className="italic uppercase tracking-widest text-fuchsia-400">Intelligence</span>.
        </h2>

        {/* Profile & Identity with Image and Portrait */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start mt-10 md:mt-20">
          
          {/* Professional Portrait in a high-end frame */}
          <motion.div 
            className="w-full md:w-[35%] aspect-[3/4] relative overflow-hidden group shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-0 border-[0.5px] border-white/10 group-hover:border-fuchsia-400/40 transition-colors z-20 pointer-events-none" />
            
            <img 
              src="/palak_portrait.png" 
              alt="Palak Gautam Portrait" 
              className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
            
            <div className="absolute bottom-6 left-6 z-20 overflow-hidden">
               <span className="text-[10px] tracking-[0.5em] uppercase text-white font-bold block mb-1">Palak Gautam</span>
               <span className="text-[8px] tracking-[0.3em] uppercase text-fuchsia-400 block opacity-0 group-hover:opacity-100 transition-opacity">Technical Mindset</span>
            </div>
          </motion.div>

          <div className="md:w-[60%] flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium text-white/40 flex items-center gap-3">
                <span className="w-2 h-[1px] bg-white/20"></span>
                The Identity
              </h3>
              <p className="text-xl md:text-3xl font-light text-white/90 leading-[1.3] tracking-tight">
                I am a results-oriented <span className="text-white italic">Software Engineer & Data Architect.</span> Expert in Python, Java, and SQL with a proven track record.
              </p>
            </div>

            <p className="text-sm md:text-base text-zinc-500 max-w-2xl leading-relaxed tracking-wide font-sans">
              Expert in machine learning and analytics, I've designed end-to-end dashboards tracking KPIs such as retention and revenue risk, slashing manual reporting effort by 70%. I bridge the gap between complex engineering systems and high-impact data solutions.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-4">
               <div className="flex flex-col gap-2">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-white/20 font-bold">Focus</span>
                  <span className="text-xs text-white/60 font-serif italic">Scalable Architecture</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-[8px] uppercase tracking-[0.4em] text-white/20 font-bold">Approach</span>
                  <span className="text-xs text-white/60 font-serif italic">Data Driven Intelligence</span>
               </div>
            </div>

            <a href="#work" className="group text-sm font-serif italic text-white hover:text-fuchsia-400 transition-all flex items-center gap-4 border-b border-white/5 pb-2 w-fit mt-10">
              Explore Projects <span className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
