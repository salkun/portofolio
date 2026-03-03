import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-display text-primary text-sm tracking-widest uppercase mb-2">// Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="font-body text-muted-foreground mb-10">
            Tertarik untuk berkolaborasi atau punya project? Jangan ragu untuk menghubungi saya.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
              { icon: Github, label: "GitHub", href: "https://github.com" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 p-4 rounded-lg border border-border hover:border-primary/40 bg-background transition-all group"
              >
                <item.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-display text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Quick message form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 text-left"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <textarea
              placeholder="Pesan..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-lg font-display text-sm font-semibold text-primary-foreground transition-all hover:scale-105 glow-amber flex items-center justify-center gap-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Send size={16} />
              Kirim Pesan
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
