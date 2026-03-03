import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce API",
    description: "RESTful API untuk platform e-commerce dengan fitur cart, payment gateway integration, dan inventory management. Dibangun dengan Laravel Sanctum auth.",
    tech: ["Laravel", "MySQL", "REST API", "Sanctum"],
    type: "Backend",
  },
  {
    title: "Sistem Manajemen Inventaris",
    description: "Aplikasi web fullstack untuk tracking inventory warehouse. Fitur CRUD, reporting PDF, dan role-based access control.",
    tech: ["Laravel", "Blade", "MySQL", "RBAC"],
    type: "Fullstack",
  },
  {
    title: "Blog CMS",
    description: "Content Management System dengan fitur artikel, kategori, komentar, dan dashboard admin. SEO-friendly URLs dan image optimization.",
    tech: ["Laravel", "Livewire", "PostgreSQL"],
    type: "Fullstack",
  },
  {
    title: "Task Management API",
    description: "Microservice untuk task/project management dengan fitur real-time notification, assignment, dan deadline tracking.",
    tech: ["Laravel", "Queue Jobs", "REST API", "Redis"],
    type: "Backend",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">// Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">Work</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-display text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.type}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Github size={16} className="text-muted-foreground hover:text-foreground cursor-pointer" />
                    <ExternalLink size={16} className="text-muted-foreground hover:text-foreground cursor-pointer" />
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-foreground mb-2">{project.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-display text-[10px] px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
