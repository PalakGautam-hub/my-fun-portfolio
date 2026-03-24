import { useState } from "react";
import { Home, FolderOpen, Briefcase, Code2, Award, Mail, Music2, Menu, X } from "lucide-react";

interface SidebarNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

const playlists = [
  { id: "projects", label: "🔥 My Greatest Hits" },
  { id: "skills", label: "💻 The Python & JS Mix" },
  { id: "experience", label: "🚀 Career Traversals" },
  { id: "certifications", label: "📜 Unlocked Achievements" },
  { id: "home", label: "📊 Data Analyst Vibes" },
];

const SidebarNav = ({ activeSection, onNavigate }: SidebarNavProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden w-10 h-10 rounded-lg bg-card flex items-center justify-center border border-border"
      >
        {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-background/80 z-30 md:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-[var(--sidebar-width)] bg-card border-r border-border
          flex flex-col transition-transform duration-300
          md:translate-x-0 md:static md:z-auto
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        style={{ paddingBottom: "var(--player-height)" }}
      >
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Music2 className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground tracking-tight">Palak.dev</span>
        </div>

        {/* Main Nav */}
        <nav className="px-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`nav-item w-full ${activeSection === item.id ? "active" : ""}`}
            >
              <item.icon className="w-5 h-5 shrink-0" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Playlists */}
        <div className="mt-6 px-6">
          <div className="border-t border-border pt-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono mb-3">
              Playlists
            </p>
            <div className="space-y-1">
              {playlists.map((pl) => (
                <button
                  key={pl.id}
                  onClick={() => handleNav(pl.id)}
                  className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 truncate"
                >
                  {pl.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto p-4 mx-3 mb-2 rounded-lg bg-secondary/50">
          <p className="text-xs font-semibold text-foreground">Open to Opportunities</p>
          <p className="text-[10px] text-muted-foreground mt-1">Full-stack developer seeking exciting roles</p>
        </div>
      </aside>
    </>
  );
};

export default SidebarNav;
