import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function WamCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Tight spring for the dot
  const dotX = useSpring(mouseX, { damping: 50, stiffness: 500, mass: 0.2 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 500, mass: 0.2 });

  // Lazy spring for the ring
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 });

  // Even lazier for the comet trail
  const trailX = useSpring(mouseX, { damping: 60, stiffness: 120, mass: 1 });
  const trailY = useSpring(mouseY, { damping: 60, stiffness: 120, mass: 1 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse/trackpad)
    const mq = window.matchMedia("(pointer: fine)");
    setIsDesktop(mq.matches);
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive =
        el.closest("a, button, [role='button'], input, select, textarea") !== null ||
        window.getComputedStyle(el).cursor === "pointer";
      setIsHovering(isInteractive);
    };

    const onDown = () => setIsClicking(true);
    const onUp   = () => setIsClicking(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">

      {/* Comet trail — slowest */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 rounded-full bg-primary/20 blur-[3px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isClicking ? 0.5 : 1,
        }}
      />

      {/* Outer morphing ring */}
      <motion.div
        className="absolute top-0 left-0 rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width:  isHovering ? 56 : 40,
          height: isHovering ? 56 : 40,
          borderColor: isHovering
            ? "hsla(320,100%,60%,0.7)"
            : "rgba(255,255,255,0.15)",
          boxShadow: isHovering
            ? "0 0 20px hsla(320,100%,60%,0.25)"
            : "none",
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150 }}
      />

      {/* Primary precision dot */}
      <motion.div
        className="absolute top-0 left-0 rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width:  isHovering ? 6 : 6,
          height: isHovering ? 6 : 6,
          boxShadow: "0 0 12px hsla(320,100%,60%,0.9)",
          scale: isClicking ? 0.6 : isHovering ? 1.4 : 1,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 500 }}
      />

    </div>
  );
}
