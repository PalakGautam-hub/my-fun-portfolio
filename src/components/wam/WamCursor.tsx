import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useSoundSystem } from "./SoundSystem";

export default function WamCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { playHover } = useSoundSystem();

  const springConfig = { damping: 40, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsMobileDevice(true);
      return;
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        if (!isHovering) {
          playHover();
          setIsHovering(true);
        }
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isHovering, playHover]);

  if (isMobileDevice) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden hidden md:block">
      {/* Primary High-Precision Pointer */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_hsla(var(--primary)/0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Outer Atmospheric Aura */}
      <motion.div
        className="absolute top-0 left-0 w-12 h-12 border border-white/10 rounded-full"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2 : 1,
          borderColor: isHovering ? "hsla(var(--primary) / 0.5)" : "rgba(255, 255, 255, 0.1)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      />

      {/* Kinetic Trailing Node */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-1 bg-white/20 rounded-full"
        style={{
          x: useSpring(mouseX, { damping: 50, stiffness: 150 }),
          y: useSpring(mouseY, { damping: 50, stiffness: 150 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}

