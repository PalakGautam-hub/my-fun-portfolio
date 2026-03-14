import { useState } from "react";
import SidebarNav from "@/components/SidebarNav";
import PlayerBar from "@/components/PlayerBar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const sections: Record<string, React.ReactNode> = {
  home: <HeroSection />,
  projects: <ProjectsSection />,
  skills: <SkillsSection />,
  experience: <ExperienceSection />,
  certifications: <CertificationsSection />,
  contact: <ContactSection />,
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <SidebarNav activeSection={activeSection} onNavigate={setActiveSection} />

      {/* Main content */}
      <main
        className="flex-1 overflow-y-auto px-3 py-4 sm:p-4 md:p-8 pt-14 md:pt-8"
        style={{ paddingBottom: "calc(var(--player-height) + 1.5rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          {sections[activeSection] || <HeroSection />}
        </div>
      </main>

      <PlayerBar />
    </div>
  );
};

export default Index;
