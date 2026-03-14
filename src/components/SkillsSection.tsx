const skillCategories = [
  {
    title: "Languages",
    emoji: "🎸",
    skills: ["Python", "Java", "C", "JavaScript", "SQL"],
  },
  {
    title: "Front-end",
    emoji: "🎹",
    skills: ["HTML5", "CSS3", "React.js", "Responsive Design"],
  },
  {
    title: "Back-end",
    emoji: "🥁",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Databases",
    emoji: "🎻",
    skills: ["MongoDB", "MySQL", "NoSQL", "Database Design"],
  },
  {
    title: "AI / Data",
    emoji: "🎷",
    skills: ["Machine Learning", "Pandas", "NumPy", "Power BI", "Data Visualization"],
  },
  {
    title: "Tools & Concepts",
    emoji: "🎺",
    skills: ["Git", "GitHub", "Linux", "DSA", "OOP", "Agile", "CI/CD", "DBMS"],
  },
];

const SkillsSection = () => {
  return (
    <section className="animate-fade-up">
      <div className="relative mb-8 p-8 rounded-xl bg-gradient-card overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-transparent to-primary/10 pointer-events-none" />
        <div className="relative z-10">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">Collection</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Tech Stack</h2>
          <p className="text-sm text-muted-foreground mt-2">The instruments I play</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <div
            key={category.title}
            className="p-5 rounded-xl bg-card border border-border hover-card-glow"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">{category.emoji}</span>
              <h3 className="font-semibold text-foreground">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="pill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
