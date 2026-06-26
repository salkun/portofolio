import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "SURAT",
    description:
      "Sistem manajemen surat digital untuk instansi. Fitur pembuatan, pengarsipan, dan tracking surat masuk/keluar dengan role-based access control.",
    tech: ["PHP", "MySQL", "Bootstrap", "CRUD"],
    type: "Fullstack",
    github: "https://github.com/salkun/SURAT",
  },
  {
    title: "PENDATAAN",
    description:
      "Aplikasi web pendataan barang dengan fitur manajemen stok, laporan masuk/keluar, dan dashboard admin. Mendukung multi-user dengan autentikasi.",
    tech: ["PHP", "MySQL", "Bootstrap", "REST API"],
    type: "Fullstack",
    github: "https://github.com/salkun/PENDATAAN",
  },
  {
    title: "Perpus Fullday",
    description:
      "Sistem manajemen perpustakaan fullstack dengan Vue.js frontend. Fitur pencarian buku, peminjaman, pengembalian, dan denda otomatis.",
    tech: ["Vue.js", "PHP", "MySQL", "SPA"],
    type: "Fullstack",
    github: "https://github.com/salkun/perpus-fullday",
  },
  {
    title: "Web PMB",
    description:
      "Website Penerimaan Mahasiswa Baru (PMB) dengan Laravel & Blade. Fitur pendaftaran online, upload dokumen, dan tracking status pendaftaran.",
    tech: ["Laravel", "Blade", "MySQL", "Auth"],
    type: "Fullstack",
    github: "https://github.com/salkun/web-pmb",
  },
  {
    title: "Konseling App",
    description:
      "Aplikasi konseling berbasis web dengan JavaScript. Fitur penjadwalan konseling, catatan sesi, dan manajemen data siswa/konselor.",
    tech: ["JavaScript", "Node.js", "CSS", "REST API"],
    type: "Fullstack",
    github: "https://github.com/salkun/Konseling-App",
  },
  {
    title: "Face Mask Detection",
    description:
      "Sistem deteksi masker wajah menggunakan machine learning dengan Jupyter Notebook. Klasifikasi gambar real-time untuk monitoring protokol kesehatan.",
    tech: ["Python", "Jupyter", "ML", "Computer Vision"],
    type: "Machine Learning",
    github: "https://github.com/salkun/face-mask-detection",
  },
  {
    title: "IRIS Kotlin",
    description:
      "Implementasi klasifikasi dataset IRIS menggunakan Kotlin. Penerapan algoritma machine learning untuk klasifikasi spesies bunga iris.",
    tech: ["Kotlin", "ML", "Data Science", "Android"],
    type: "Mobile",
    github: "https://github.com/salkun/IRIS_KOTLIN_221351136",
  },
  {
    title: "Undangan Khitanan",
    description:
      "Website undangan digital dengan desain modern dan animasi interaktif. Fitur RSVP, countdown timer, galeri foto, dan musik background.",
    tech: ["HTML", "CSS", "JavaScript", "Animation"],
    type: "Frontend",
    github: "https://github.com/salkun/undangan-khitanan-nazwan",
  },
];

const categories = ["All", "Fullstack", "Machine Learning", "Frontend", "Mobile"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">
            // Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl">
            Kumpulan project yang pernah saya kerjakan, mulai dari fullstack web
            apps hingga machine learning.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-display text-xs px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeFilter === cat
                    ? "text-primary-foreground glow-amber"
                    : "bg-secondary text-secondary-foreground hover:border-primary/40 border border-transparent hover:bg-secondary/80"
                }`}
                style={
                  activeFilter === cat
                    ? { background: "var(--gradient-primary)" }
                    : undefined
                }
              >
                {cat === "All" && <Filter size={12} className="inline mr-1.5 -mt-0.5" />}
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="group flex flex-col h-full p-6 rounded-xl border border-border bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative overflow-hidden"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, hsl(32, 95%, 55%, 0.06), transparent 70%)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                        {project.type}
                      </span>
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`GitHub repo for ${project.title}`}
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`View ${project.title}`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((t) => (
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
            </AnimatePresence>
          </div>

          {/* View All on GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <a
              href="https://github.com/salkun?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display text-sm text-primary hover:text-foreground transition-colors group/link"
            >
              <Github size={16} />
              <span>
                View all 38 repositories on GitHub
              </span>
              <ExternalLink
                size={14}
                className="opacity-0 group-hover/link:opacity-100 transition-opacity -translate-x-1 group-hover/link:translate-x-0"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
