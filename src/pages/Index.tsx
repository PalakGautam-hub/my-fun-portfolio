import WamHeader from "@/components/wam/WamHeader";
import WamHero from "@/components/wam/WamHero";
import WamStatement from "@/components/wam/WamStatement";
import WamSolutions from "@/components/wam/WamSolutions";
import WamProjects from "@/components/wam/WamProjects";
import WamCursor from "@/components/wam/WamCursor";

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500 selection:text-white font-sans overflow-x-hidden">
      {/* 
        To replicate the WAM Aesthetic exactly: 
        Deep black background, geometric minimalism, white crisp text.
      */}
      
      {/* Custom WAM Interactive Cursor */}
      <WamCursor />

      {/* Fixed Sticky Header with vibrant Contact Button */}
      <WamHeader />

      <main className="relative flex flex-col items-center w-full">
        {/* WAM Global Exact Clone: Hero Section (Floating Dark 3D style Avatar + Giant Logo) */}
        <WamHero />

        {/* WAM Exact Clone: Interactive Statement with geometric icons & italics */}
        <WamStatement />

        {/* WAM Exact Clone: Solutions (01, 02, 03 layout) */}
        <WamSolutions />

        {/* WAM Exact Clone: Giant full width visual case studies for Projects */}
        <WamProjects />
        
      </main>
      
      {/* Minimal WAM Footer */}
      <footer className="w-full py-12 px-8 flex justify-between items-center text-xs tracking-widest text-zinc-500 uppercase">
        <p>© Copyright - PALAK 2026</p>
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
}
