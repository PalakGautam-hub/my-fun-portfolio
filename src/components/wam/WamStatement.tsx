import { motion } from "framer-motion";
import { Database, ShieldCheck, Zap, ArrowRight, Activity, Terminal } from "lucide-react";

export default function WamStatement() {
  return (
    <section id="insights" className="w-full bg-black py-40 md:py-64 px-6 md:px-12 flex flex-col items-center justify-center border-y border-white/5 relative overflow-hidden">
      
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none" />
      
      <div className="max-w-[1600px] w-full relative z-10">
        
        {/* Cinematic Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32 md:mb-56">
          <motion.div 
            className="flex flex-col gap-6 max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.8em] font-black text-fuchsia-500/60 mb-2">
              Identity Protocol [ 01 ]
            </h3>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-light font-serif text-white tracking-tighter leading-none uppercase">
              Strategic <br/>
              <span className="italic text-white/40">Dossier.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex flex-col gap-4 text-right items-end hidden md:flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
              <Activity className="w-6 h-6 text-fuchsia-400" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.5em] text-white/20">Active Insight Mode</span>
          </motion.div>
        </div>

        {/* Narrative & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-32 items-start">
          
          {/* Main Narrative - Huge Typography */}
          <motion.div 
            className="lg:col-span-8 flex flex-col gap-10 md:gap-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 leading-[1.4] tracking-tight font-serif">
              Analyst and Engineer with a background in Computer Science Engineering, <span className="italic text-fuchsia-400">Palak Gautam</span> specializes in bridging the gap between <span className="text-white font-sans font-bold">complex datasets</span> and <span className="text-white/40 italic">scalable software systems</span>.
            </p>
            
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 border-t border-white/5 pt-12">
              <div className="flex flex-col gap-6 max-w-sm">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black">Strategic Core</span>
                <p className="text-base text-zinc-500 leading-relaxed tracking-wide">
                  Expertise in end-to-end data pipelines, ensuring that every byte of information serves a strategic business purpose. Transforming manual workflows into automated intelligence hubs.
                </p>
              </div>
              <div className="flex flex-col gap-6 max-w-sm">
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-black">Technical Ethos</span>
                <p className="text-base text-zinc-500 leading-relaxed tracking-wide">
                  Building with a focus on performance, security, and scalability. Utilizing modern stacks to deliver sub-100ms latencies and robust enterprise-grade architectures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Metrics Sidebar - Modular Bento Style */}
          <motion.div 
            className="lg:col-span-4 flex flex-col gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-10 rounded-[2.5rem] flex flex-col gap-8 group hover:border-fuchsia-500/20 transition-all">
               <div className="flex justify-between items-start">
                  <Database className="w-8 h-8 text-fuchsia-400 opacity-50" />
                  <span className="text-[8px] uppercase tracking-widest text-white/10 font-black">Metric 01</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-5xl font-sans font-black text-white">70%</span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Manual Workload Reduction</span>
               </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-10 rounded-[2.5rem] flex flex-col gap-8 group hover:border-fuchsia-500/20 transition-all">
               <div className="flex justify-between items-start">
                  <ShieldCheck className="w-8 h-8 text-fuchsia-400 opacity-50" />
                  <span className="text-[8px] uppercase tracking-widest text-white/10 font-black">Metric 02</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-5xl font-sans font-black text-white">90%</span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Report Precision Rate</span>
               </div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-10 rounded-[2.5rem] flex flex-col gap-8 group hover:border-fuchsia-500/20 transition-all">
               <div className="flex justify-between items-start">
                  <Zap className="w-8 h-8 text-fuchsia-400 opacity-50" />
                  <span className="text-[8px] uppercase tracking-widest text-white/10 font-black">Metric 03</span>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-5xl font-sans font-black text-white">100ms</span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">Service Response Latency</span>
               </div>
            </div>
          </motion.div>
        </div>
        {/* Cinematic Call to Action */}
        <div className="mt-40 md:mt-56 flex flex-col items-center gap-12">
          <a href="#work" className="group relative px-20 py-8 border border-white/10 overflow-hidden rounded-full transition-all hover:border-white">
             <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
             <span className="relative z-10 text-xs uppercase tracking-[0.8em] font-black text-white group-hover:text-black flex items-center gap-4">
                Enter Strategic Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
             </span>
          </a>
        </div>

      </div>

      {/* Floating Section Accents */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Terminal className="w-32 h-32 text-white" />
      </div>
    </section>
  );
}
