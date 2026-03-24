import React from "react";
import ScrollyCanvas from "./ScrollyCanvas";
import ScrollyProjects from "./ScrollyProjects";

interface ScrollyHomeProps {
  scrollContainerRef: React.RefObject<HTMLElement>;
}

export default function ScrollyHome({ scrollContainerRef }: ScrollyHomeProps) {
  return (
    <div className="w-full bg-black">
      {/* 500vh sticky scroll area */}
      <ScrollyCanvas scrollContainerRef={scrollContainerRef} />
      
      {/* Content that appears after scrolling */}
      <ScrollyProjects />
      
      {/* Footer spacer for smooth exit */}
      <div className="h-32 bg-background flex flex-col items-center justify-center text-muted-foreground">
        <p className="text-sm font-mono tracking-widest uppercase">Keep exploring.</p>
      </div>
    </div>
  );
}
