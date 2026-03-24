import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Overlay from "./Overlay";

export default function ScrollyCanvas({ scrollContainerRef }: { scrollContainerRef?: React.RefObject<HTMLElement> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Use either the window or a specific scroll container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    ...(scrollContainerRef ? { container: scrollContainerRef } : {}),
  });

  const frameCount = 89;
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [useFallback, setUseFallback] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedImages: HTMLImageElement[] = [];
    let errorCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to '0001', '0002', etc. (if they are 4 digits, or '01', '02' depending on sequence)
      // Assuming 4 digits based on common practice, or just pure numbers `1.webp`
      // The prompt says "WebP frames named sequentially"
      const frameStr = i.toString().padStart(4, "0");
      img.src = `/sequence/${frameStr}.webp`;
      
      img.onload = () => {
        loadedImages[i] = img;
      };
      
      img.onerror = () => {
        errorCount++;
        if (errorCount > 5) {
          setUseFallback(true);
        }
      };
    }
    setImages(loadedImages);
  }, []);

  // Frame rendering logix
  useEffect(() => {
    return frameIndex.on("change", (latestVal) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      const index = Math.floor(latestVal);
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (!useFallback && images[index]) {
        // Draw image keeping aspect ratio
        const img = images[index];
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      } else if (useFallback) {
        // Fallback: Creative Developer / Data Analyst Abstract visual
        drawFallbackVisual(ctx, canvas.width, canvas.height, latestVal, frameCount);
      }
    });
  }, [frameIndex, images, useFallback]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Trigger a re-draw manually by poking the motion value if possible
        // but it will redraw on next scroll.
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black text-white">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <Overlay scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

// Fallback visual specifically for Data Analyst / Creative Developer roles
function drawFallbackVisual(ctx: CanvasRenderingContext2D, width: number, height: number, progress: number, maxFrames: number) {
  const cx = width / 2;
  const cy = height / 2;
  const t = progress / maxFrames; // 0 to 1

  ctx.fillStyle = "#0A0A0A";
  ctx.fillRect(0, 0, width, height);

  // Draw data nodes connecting
  const numNodes = 50;
  const nodes = [];
  
  // Create nodes based on some math seeded by progress 't'
  for (let i = 0; i < numNodes; i++) {
    const angle = (i * Math.PI * 2) / numNodes + t * Math.PI * 2;
    const radius = 100 + (Math.sin(i * 3 + t * 10) * 150) * Math.sin(t * Math.PI);
    
    const x = cx + Math.cos(angle) * radius * (1 + t);
    const y = cy + Math.sin(angle) * radius * (1 + t);
    nodes.push({ x, y });
  }

  // Draw lines
  ctx.strokeStyle = "rgba(45, 212, 191, 0.2)"; // Teal/Data color
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (dist < 150 + t * 100) {
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
      }
    }
  }
  ctx.stroke();

  // Draw nodes
  for (let i = 0; i < nodes.length; i++) {
    ctx.fillStyle = `rgba(45, 212, 191, ${0.5 + Math.random() * 0.5})`;
    ctx.beginPath();
    ctx.arc(nodes[i].x, nodes[i].y, 3 + Math.sin(t * 20 + i) * 2, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Overlay generic texture text if far along
  if (t > 0.1) {
    ctx.fillStyle = `rgba(255, 255, 255, ${Math.sin(t * Math.PI) * 0.1})`;
    ctx.font = "800 20vw Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("DATA", cx, cy - 50);
    ctx.font = "800 15vw Inter, sans-serif";
    ctx.fillText("ANALYST", cx, cy + 100);
  }
}
