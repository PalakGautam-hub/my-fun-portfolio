import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="animate-fade-up">
      {/* Hero banner */}
      <div className="relative rounded-xl overflow-hidden mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-background pointer-events-none" />
        <div className="relative z-10 p-8 md:p-12 pb-24">
          <div className="flex items-end gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl md:text-5xl font-bold text-primary-foreground shrink-0 shadow-2xl">
              PG
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Profile</p>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Palak Gautam
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-xl leading-relaxed">
                Full-Stack Developer & CS Undergrad building scalable web applications with a love for clean code and impactful software.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {[
          { label: "CGPA", value: "8.61", sub: "KIIT University" },
          { label: "Projects", value: "4+", sub: "Full Stack" },
          { label: "Intern", value: "NUS", sub: "Singapore" },
          { label: "Languages", value: "4", sub: "Spoken" },
        ].map((stat) => (
          <div key={stat.label} className="p-4 rounded-xl bg-card border border-border text-center hover-card-glow">
            <p className="text-2xl font-bold text-gradient-rose">{stat.value}</p>
            <p className="text-xs font-semibold text-foreground mt-1">{stat.label}</p>
            <p className="text-[10px] text-muted-foreground">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick info */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-foreground">Bhubaneswar, India</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
          <GraduationCap className="w-4 h-4 text-primary" />
          <span className="text-foreground">B.Tech CS • 2023–2027</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm">
          <Briefcase className="w-4 h-4 text-primary" />
          <span className="text-foreground">Open to Opportunities</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
