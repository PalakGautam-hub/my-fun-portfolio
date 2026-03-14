import { Award } from "lucide-react";

const certs = [
  { title: "AI-Powered Business Analytics", issuer: "National University of Singapore" },
  { title: "Python Programming", issuer: "MITx, MIT" },
  { title: "DSA using Java", issuer: "Apna College" },
  { title: "Quantitative Research Simulation", issuer: "JPMorgan Chase (Forage)" },
  { title: "Data Analytics Simulation", issuer: "Deloitte (Forage)" },
];

const CertificationsSection = () => {
  return (
    <section className="animate-fade-up">
      <div className="relative mb-8 p-8 rounded-xl bg-gradient-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-maroon/10 pointer-events-none" />
        <div className="relative z-10">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Discography</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Certifications</h2>
          <p className="text-sm text-muted-foreground mt-2">{certs.length} achievements unlocked</p>
        </div>
      </div>

      <div className="space-y-1">
        {certs.map((cert, i) => (
          <div key={cert.title} className="track-row group">
            <span className="w-8 text-center shrink-0">
              <Award className="w-4 h-4 text-primary mx-auto" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-foreground truncate">{cert.title}</p>
              <p className="text-xs text-muted-foreground truncate">{cert.issuer}</p>
            </div>
            <span className="pill-tag hidden sm:inline-block">Verified</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
