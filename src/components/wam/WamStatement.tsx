import { motion } from "framer-motion";
import { Database, ShieldCheck, Zap, ArrowRight, Activity, Terminal } from "lucide-react";
import { useSoundSystem } from "./SoundSystem";

export default function WamStatement() {
  const { playHover, playClick } = useSoundSystem();

  return (
    <section id="insights" className="w-full bg-[#050208] py-48 md:py-80 px-6 md:px-12 flex flex-col items-center justify-center border-y border-white/5 relative overflow-hidden">
      
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-32 lg:gap-48 items-start">
          
          {/* Main Narrative */}
          <motion.div 
            className="lg:col-span-7 xl:col-span-8 flex flex-col gap-12 md:gap-20"
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

          {/* Metrics Sidebar */}
          <motion.div 
            className="lg:col-span-4 flex flex-col gap-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {[
              { icon: Database, label: "Metric 01", value: "70%", desc: "Manual Workload Reduction" },
              { icon: ShieldCheck, label: "Metric 02", value: "90%", desc: "Report Precision Rate" },
              { icon: Zap, label: "Metric 03", value: "100ms", desc: "Service Response Latency" }
            ].map((metric, i) => (
              <div 
                key={i}
                onMouseEnter={playHover}
                className="bg-white/[0.08] backdrop-blur-xl md:backdrop-blur-3xl border border-white/20 p-10 md:p-12 rounded-[3rem] md:rounded-[3.5rem] flex flex-col gap-8 md:gap-10 group hover:border-primary/60 hover:bg-white/[0.12] transition-all duration-1000 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
              >
                 <div className="flex justify-between items-start">
                    <metric.icon className="w-10 h-10 text-primary opacity-20 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110" />
                    <span className="text-[9px] uppercase tracking-[0.8em] text-white/5 font-black">{metric.label}</span>
                 </div>
                 <div className="flex flex-col gap-3">
                    <span className="text-6xl font-sans font-black text-white group-hover:text-primary transition-colors duration-700">{metric.value}</span>
                    <span className="text-[11px] uppercase tracking-[0.4em] text-zinc-600 font-bold group-hover:text-zinc-400 transition-colors">{metric.desc}</span>
                 </div>
              </div>
            ))}
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
             <div className="absolute inset-0 bg-primary translate-y-full md:group-hover:translate-y-0 transition-transform duration-1000 ease-[0.16,1,0.3,1]" />
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

