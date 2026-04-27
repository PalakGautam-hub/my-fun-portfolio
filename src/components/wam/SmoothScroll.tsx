import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      // Initialize Lenis
      const lenis = new Lenis({
        duration: 1.0, // Set to 1 sec as requested
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1.0, // Increased speed from 0.7
        touchMultiplier: 2,
        infinite: false,
      });

      lenisRef.current = lenis;

      // Robust RAF loop
      const raf = (time: number) => {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      };

      rafRef.current = requestAnimationFrame(raf);

      // Handle hash navigation after initialization
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            lenis.scrollTo(element, { offset: 0, duration: 2 });
          }, 500);
        }
      }
    } catch (e) {
      console.warn("Lenis failed to initialize.", e);
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return <>{children}</>;
}
