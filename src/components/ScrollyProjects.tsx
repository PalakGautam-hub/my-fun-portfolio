import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Airbnb Clone",
    role: "Full-Stack Web App / 2024",
    desc: "Architected a high-performance booking web app with JWT authentication. Developed 15+ robust REST APIs achieving 90% unit test coverage.",
    tags: ["React", "Node", "MongoDB", "JWT"],
    link: "https://github.com/PalakGautam-hub/Airbnb-Clone"
  },
  {
    id: 2,
    title: "Lexora AI Document Assistant",
    role: "AI Web Application / 2024",
    desc: "Spearheaded an AI full-stack application using LLM APIs, slashing document review cycles by 60%.",
    tags: ["Python", "LLMs", "NLP"],
    link: "https://github.com/PalakGautam-hub/Lexora-AI"
  },
  {
    id: 3,
    title: "Snip Distributed URL Shortener",
    role: "Microservice / 2024",
    desc: "Designed a scalable microservice architecture, achieving sub-100ms redirection latency for 50,000+ requests.",
    tags: ["Node", "REST API", "System Design"],
    link: "https://github.com/PalakGautam-hub/Snip-URL-shortener"
  },
  {
    id: 4,
    title: "Traffic Management System",
    role: "Simulation / 2023",
    desc: "Optimized traffic signal synchronization via Python simulations, reducing commuter wait times by 30%.",
    tags: ["Python", "Simulation", "Algorithms"],
    link: "https://github.com/PalakGautam-hub/Traffic_Management"
  },
  {
    id: 5,
    title: "Customer Ops Analytics Dashboard",
    role: "Data Analyst / 2026",
    desc: "End-to-end dashboard tracking customer KPIs. Automated reporting pipelines reducing manual effort by 70%. Enabled real-time visibility.",
    tags: ["Python", "Power BI", "Data Analytics"],
  },
];

export default function ScrollyProjects() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize a subtle 'pop' tick sound natively
  useEffect(() => {
    // A clean, minimal drop/pop sound from Google's sound library
    const audio = new Audio("https://actions.google.com/sounds/v1/water/water_drop.ogg");
    audio.volume = 0.3;
    audioRef.current = audio;
  }, []);

  const playHoverSound = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {
        // Ignore autoplay policies block if the user hasn't interacted with page yet
      });
    }
  }, []);

  return (
    <section className="relative z-20 bg-background/95 text-foreground py-32 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-6xl md:text-[7rem] font-light leading-none tracking-tighter mb-4 font-serif text-white">
            Selected <span className="italic text-teal-300">Work.</span>
          </h2>
          <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-2xl tracking-wide">
            A showcase of my recent explorations across <span className="text-white">data analysis</span> and <span className="text-white">interactive development</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              onMouseEnter={playHoverSound}
              onClick={() => proj.link && window.open(proj.link, "_blank")}
              className="group relative p-8 rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 hover:border-teal-500/50 transition-all duration-300 cursor-pointer"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-indigo-500/0 group-hover:from-teal-500/20 group-hover:to-indigo-500/20 transition-all duration-500 rounded-3xl z-0" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <p className="text-teal-400 font-mono text-xs mb-3 font-semibold uppercase tracking-widest">{proj.role}</p>
                  <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-sm">
                    {proj.desc}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/10 dark:bg-white/5 text-foreground/90 backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
