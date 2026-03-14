import { useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Linear Clone",
    label: "Project 01",
    description: "A pixel-perfect recreation of Linear's issue tracker with real-time sync and keyboard-first navigation.",
    tags: ["React", "TypeScript", "WebSocket"],
  },
  {
    title: "3D Configurator",
    label: "Project 02",
    description: "Interactive product configurator with real-time 3D rendering and physics-based material simulation.",
    tags: ["Three.js", "WebGL", "GLSL"],
  },
  {
    title: "Motion System",
    label: "Project 03",
    description: "A spring-based animation framework built for 120Hz displays. Zero-jank, GPU-accelerated.",
    tags: ["Framer Motion", "Performance"],
  },
  {
    title: "Design Tokens",
    label: "Project 04",
    description: "Automated design-to-code pipeline syncing Figma tokens to a multi-platform component library.",
    tags: ["Figma API", "CI/CD", "Tokens"],
  },
  {
    title: "AI Dashboard",
    label: "Project 05",
    description: "Real-time analytics dashboard with ML-powered anomaly detection and natural language querying.",
    tags: ["Python", "React", "D3"],
  },
];

// Spread cards across the viewport
const getPositions = () => [
  { x: 60, y: 80 },
  { x: 440, y: 40 },
  { x: 140, y: 400 },
  { x: 520, y: 320 },
  { x: 820, y: 120 },
];

const Index = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const positions = getPositions();

  return (
    <div
      ref={constraintsRef}
      className="relative w-screen h-screen bg-background overflow-hidden"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Accent glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

      {/* Hero text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="absolute bottom-12 left-12 z-0 pointer-events-none select-none max-w-xl"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-display leading-display text-foreground">
          I build digital toys
          <br />
          <span className="text-primary">that solve serious</span>
          <br />
          problems.
        </h1>
        <p className="mt-6 font-mono text-xs text-muted-foreground tracking-wide">
          Drag the cards. Fling them around. This is the portfolio.
        </p>
      </motion.div>

      {/* Status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-6 right-8 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground select-none pointer-events-none z-10"
      >
        <span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
          Available for work
        </span>
        <span className="tabular-nums">2026</span>
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute top-6 left-8 font-display text-sm font-bold tracking-display text-foreground select-none pointer-events-none z-10"
      >
        Portfolio
      </motion.div>

      {/* Project Cards */}
      {projects.map((project, i) => (
        <ProjectCard
          key={project.title}
          index={i}
          title={project.title}
          label={project.label}
          description={project.description}
          tags={project.tags}
          constraintsRef={constraintsRef as React.RefObject<HTMLDivElement>}
          initialX={positions[i].x}
          initialY={positions[i].y}
        />
      ))}
    </div>
  );
};

export default Index;
