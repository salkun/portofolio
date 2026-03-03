import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer",
    company: "PT. Digital Nusantara",
    period: "2024 — Sekarang",
    description:
      "Mengembangkan dan maintain RESTful API untuk platform SaaS. Implementasi queue jobs, caching strategy dengan Redis, dan optimasi query database untuk performa tinggi.",
    tech: ["Laravel", "Redis", "MySQL", "Docker"],
  },
  {
    role: "Junior Fullstack Developer",
    company: "Startup Kreatif Indonesia",
    period: "2023 — 2024",
    description:
      "Membangun fitur CRUD, dashboard admin, dan integrasi payment gateway. Kolaborasi dengan tim frontend menggunakan Blade template dan Livewire.",
    tech: ["Laravel", "Livewire", "PostgreSQL", "Midtrans"],
  },
  {
    role: "Web Developer Intern",
    company: "CV. Teknologi Maju",
    period: "2022 — 2023",
    description:
      "Belajar dan mengimplementasikan dasar-dasar Laravel, migration, Eloquent ORM, serta membangun modul inventory sederhana.",
    tech: ["Laravel", "MySQL", "Bootstrap", "Git"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">
            // Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Work <span className="text-gradient">Journey</span>
          </h2>

          <div className="relative max-w-3xl">
            {/* Timeline line */}
            <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-border" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role + exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="relative pl-8 md:pl-10 group"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-2 border-primary bg-background flex items-center justify-center group-hover:glow-amber transition-all">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary" />
                  </div>

                  <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                        <Briefcase size={14} className="text-primary" />
                        {exp.role}
                      </h3>
                      <span className="font-display text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                    </div>

                    <p className="font-display text-sm text-primary/80 mb-3">{exp.company}</p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-display text-[10px] px-2 py-1 rounded bg-secondary text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
