import { motion } from "framer-motion";

const skills = [
  { name: "Laravel", level: 90, category: "backend" },
  { name: "PHP", level: 85, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "REST API", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "Git", level: 75, category: "tools" },
  { name: "JavaScript", level: 45, category: "frontend" },
  { name: "HTML/CSS", level: 60, category: "frontend" },
  { name: "Blade Template", level: 80, category: "frontend" },
  { name: "Livewire", level: 65, category: "backend" },
  { name: "Docker", level: 50, category: "tools" },
  { name: "Linux Server", level: 60, category: "tools" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">// Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="text-gradient">Stack</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-all group"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-display text-sm font-semibold text-foreground">{skill.name}</span>
                  <span className="font-display text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-primary)" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
