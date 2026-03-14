import { motion, type MotionValue, useMotionValue, useTransform } from "framer-motion";
import React, { useState } from "react";

interface ProjectCardProps {
  index: number;
  title: string;
  label: string;
  description: string;
  tags: string[];
  constraintsRef: React.RefObject<HTMLDivElement>;
  initialX: number;
  initialY: number;
  width?: number;
  height?: number;
}

const springConfig = { type: "spring" as const, stiffness: 300, damping: 30, mass: 1 };

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  title,
  label,
  description,
  tags,
  constraintsRef,
  initialX,
  initialY,
  width = 340,
  height = 280,
}) => {
  const [zIndex, setZIndex] = useState(index);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const shadowBlur = useTransform<number, string>(
    [x, y] as MotionValue<number>[],
    ([latestX, latestY]: number[]) => {
      const dist = Math.sqrt(latestX * latestX + latestY * latestY);
      const blur = Math.min(32 + dist * 0.1, 64);
      return `0 ${blur / 2}px ${blur}px 0 rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.1)`;
    }
  );

  return (
    <motion.div
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.15}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      initial={{ opacity: 0, scale: 0.8, x: initialX, y: initialY }}
      animate={{ opacity: 1, scale: 1, x: initialX, y: initialY }}
      transition={{ ...springConfig, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, rotate: 1 }}
      whileTap={{ scale: 0.97, cursor: "grabbing" }}
      onDragStart={() => setZIndex(50)}
      onDragEnd={() => setZIndex(index + 10)}
      style={{ x, y, zIndex, boxShadow: shadowBlur, width, height }}
      className="absolute glass-surface rounded-[24px] p-6 cursor-grab active:cursor-grabbing will-change-transform flex flex-col justify-between select-none"
    >
      <div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          {label}
        </span>
        <h2 className="font-display text-2xl font-bold mt-2 tracking-display leading-display text-foreground">
          {title}
        </h2>
        <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
      <div className="flex gap-2 flex-wrap mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] uppercase tracking-[0.15em] font-mono px-2 py-1 rounded-md bg-secondary text-muted-foreground border border-border"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
