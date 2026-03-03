import { motion } from "framer-motion";
import { Code2, Server, Database } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">// About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Backend-Focused <span className="text-gradient">Developer</span>
          </h2>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-10"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
              <img
                src={profileImg}
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Saya adalah seorang Junior Backend Developer dengan fokus utama pada 
                <span className="text-foreground font-medium"> Laravel ecosystem</span>. 
                Berpengalaman membangun RESTful APIs, database design, dan server-side architecture.
              </p>
              <p>
                Memiliki pemahaman solid tentang PHP dan framework Laravel, mulai dari 
                Eloquent ORM, Middleware, Queue Jobs, hingga Laravel Sanctum untuk authentication. 
                Sedikit pengalaman di JavaScript untuk kebutuhan frontend interaktif.
              </p>
              <p>
                Selalu antusias belajar teknologi baru dan berkontribusi dalam tim untuk 
                membangun solusi digital yang efisien dan maintainable.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Server, title: "Backend Development", desc: "Laravel, PHP, REST API, Authentication" },
                { icon: Database, title: "Database Design", desc: "MySQL, PostgreSQL, Eloquent ORM, Migration" },
                { icon: Code2, title: "Frontend Basic", desc: "HTML, CSS, JavaScript, Blade Template" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <item.icon className="text-primary mt-1 shrink-0" size={20} />
                    <div>
                      <h3 className="font-display text-sm font-semibold text-foreground">{item.title}</h3>
                      <p className="font-body text-xs text-muted-foreground mt-1">{item.desc}</p>
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

export default AboutSection;
