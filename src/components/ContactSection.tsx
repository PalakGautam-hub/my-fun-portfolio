import { Mail, Linkedin, Github, Globe } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "gautampalak77@gmail.com", href: "mailto:gautampalak77@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "View my code", href: "https://github.com" },
  { icon: Globe, label: "LeetCode", value: "Problem solving", href: "https://leetcode.com" },
];

const ContactSection = () => {
  return (
    <section className="animate-fade-up">
      <div className="relative mb-8 p-8 rounded-xl bg-gradient-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10 pointer-events-none" />
        <div className="relative z-10">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Encore</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Let's Connect</h2>
          <p className="text-sm text-muted-foreground mt-2">Available for full-time roles & collaborations</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover-card-glow group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <link.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{link.label}</p>
              <p className="text-xs text-muted-foreground">{link.value}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Languages */}
      <div className="mt-8 p-5 rounded-xl bg-card border border-border">
        <h3 className="font-semibold text-foreground mb-3">Languages I Speak</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { lang: "English", level: "Fluent", pct: 90 },
            { lang: "Hindi", level: "Native", pct: 100 },
            { lang: "Spanish", level: "Intermediate", pct: 50 },
            { lang: "German", level: "Beginner", pct: 20 },
          ].map((l) => (
            <div key={l.lang}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-foreground font-medium">{l.lang}</span>
                <span className="text-muted-foreground">{l.level}</span>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${l.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
