import { Play, ExternalLink, Github } from "lucide-react";

interface ProjectTrack {
  number: number;
  title: string;
  tech: string;
  description: string;
  duration: string;
  year: string;
}

const projects: ProjectTrack[] = [
  {
    number: 1,
    title: "Airbnb Clone",
    tech: "React.js • Node.js • Express • MongoDB",
    description: "Full stack accommodation booking app with JWT auth and role-based access. 15+ REST APIs, 90% test coverage.",
    duration: "3:42",
    year: "2026",
  },
  {
    number: 2,
    title: "Lexora AI",
    tech: "Python • LLM APIs • NLP • REST APIs",
    description: "AI document assistant using LLM APIs for contextual querying. Reduced review time by 60%.",
    duration: "2:58",
    year: "2026",
  },
  {
    number: 3,
    title: "URL Shortener",
    tech: "Node.js • MongoDB • System Design",
    description: "Scalable microservice with sub-100ms redirection for 10,000+ requests. Modular architecture.",
    duration: "4:15",
    year: "2026",
  },
  {
    number: 4,
    title: "Traffic Manager",
    tech: "Python • Simulation • Algorithms",
    description: "Optimized traffic signal timing via simulation, reducing average wait time by 30%.",
    duration: "3:30",
    year: "2025",
  },
];

const ProjectsSection = () => {
  return (
    <section className="animate-fade-up">
      {/* Header with gradient */}
      <div className="relative mb-8 p-8 rounded-xl bg-gradient-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none" />
        <div className="relative z-10">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Playlist</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Top Projects</h2>
          <p className="text-sm text-muted-foreground mt-2">{projects.length} tracks • Built with passion</p>
        </div>
      </div>

      {/* Track list header */}
      <div className="flex items-center gap-4 px-4 py-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground border-b border-border mb-2">
        <span className="w-8 text-center">#</span>
        <span className="flex-1">Title</span>
        <span className="hidden sm:block w-16 text-right">Year</span>
        <span className="w-14 text-right">⏱</span>
      </div>

      {/* Tracks */}
      <div className="space-y-1">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="track-row group"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <span className="w-8 text-center text-sm text-muted-foreground group-hover:hidden font-mono">
              {project.number}
            </span>
            <span className="w-8 text-center hidden group-hover:flex items-center justify-center">
              <Play className="w-4 h-4 text-primary" />
            </span>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{project.title}</p>
              <p className="text-xs text-muted-foreground truncate">{project.tech}</p>
            </div>

            <span className="hidden sm:block w-16 text-right text-xs text-muted-foreground font-mono">
              {project.year}
            </span>
            <span className="w-14 text-right text-xs text-muted-foreground font-mono">
              {project.duration}
            </span>
          </div>
        ))}
      </div>

      {/* Expanded descriptions */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="p-5 rounded-xl bg-card border border-border hover-card-glow">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-foreground">{project.title}</h3>
              <span className="pill-tag">{project.year}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{project.description}</p>
            <div className="flex gap-2 mt-3">
              <span className="text-[10px] font-mono text-accent">
                {project.tech}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
