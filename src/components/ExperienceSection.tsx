import { Building2, Calendar, Award } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="animate-fade-up">
      <div className="relative mb-8 p-8 rounded-xl bg-gradient-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon/20 via-transparent to-primary/10 pointer-events-none" />
        <div className="relative z-10">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Album</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Career Journey</h2>
          <p className="text-sm text-muted-foreground mt-2">Experience & Leadership</p>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-4 mb-8">
        <div className="p-6 rounded-xl bg-card border border-border hover-card-glow">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">AI-Powered Business Analytics Intern</h3>
              <p className="text-sm text-accent mt-0.5">National University of Singapore</p>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Jun 2025 – Jul 2025</span>
              </div>
              <ul className="mt-3 space-y-2 text-xs text-muted-foreground leading-relaxed">
                <li>• Built 3+ ML models improving decision-making accuracy by 25%</li>
                <li>• Created 5 interactive dashboards in Python & Power BI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership */}
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <Award className="w-5 h-5 text-primary" /> Leadership
      </h3>
      <div className="grid gap-3 md:grid-cols-2">
        {[
          { role: "Senior Executive", org: "KIIT Entrepreneurship Cell", detail: "Coordinated 5+ initiatives/semester", period: "Nov 2024 – Present" },
          { role: "PR Lead", org: "Hult Prize KIIT", detail: "Increased participation by 40%", period: "2026" },
          { role: "Marketing Executive", org: "KIIT MUN & E-Summit", detail: "2 conferences, 500+ attendees each", period: "2025" },
        ].map((item) => (
          <div key={item.role} className="p-4 rounded-xl bg-card border border-border hover-card-glow">
            <p className="text-sm font-semibold text-foreground">{item.role}</p>
            <p className="text-xs text-accent">{item.org}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{item.detail}</p>
            <p className="text-[10px] font-mono text-muted-foreground mt-1">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
