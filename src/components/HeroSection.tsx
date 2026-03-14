import { MapPin, GraduationCap, Briefcase, Hash } from "lucide-react";
import palakPhoto from "@/assets/palak-photo.jpeg";

const HeroSection = () => {
  return (
    <section className="animate-fade-up">
      {/* Hero banner */}
      <div className="relative rounded-xl overflow-hidden mb-6 md:mb-8">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/10 to-background pointer-events-none" />
        <div className="relative z-10 p-5 pt-10 md:p-12 pb-20 md:pb-24">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 md:gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 shadow-2xl ring-2 ring-primary/40">
              <img
                src={palakPhoto}
                alt="Palak Gautam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">Profile</p>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight">
                Palak Gautam
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mt-2 max-w-xl leading-relaxed">
                Full-Stack Developer & CS Undergrad building scalable web applications with a love for clean code and impactful software.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6 md:mb-8">
        {[
          { label: "CGPA", value: "8.61", sub: "KIIT University" },
          { label: "Projects", value: "4+", sub: "Full Stack" },
          { label: "Intern", value: "NUS", sub: "Singapore" },
          { label: "Languages", value: "4", sub: "Spoken" },
        ].map((stat) => (
          <div key={stat.label} className="p-3 md:p-4 rounded-xl bg-card border border-border text-center hover-card-glow">
            <p className="text-xl md:text-2xl font-bold text-gradient-rose">{stat.value}</p>
            <p className="text-[10px] sm:text-xs font-semibold text-foreground mt-1">{stat.label}</p>
            <p className="text-[9px] sm:text-[10px] text-muted-foreground">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick info */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {[
          { icon: MapPin, text: "Bhubaneswar, India" },
          { icon: GraduationCap, text: "B.Tech CS • 2023–2027" },
          { icon: Hash, text: "Roll No: 23052982" },
          { icon: Briefcase, text: "Open to Opportunities" },
        ].map((item) => (
          <div key={item.text} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border text-xs sm:text-sm">
            <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
            <span className="text-foreground">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
