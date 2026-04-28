import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-[var(--section-from)]" />
      <div className="absolute bottom-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[var(--cinematic-orange)] opacity-[0.08] blur-[150px]" />
      <div
        className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')]"
        style={{ opacity: "var(--grain-opacity)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--cinematic-orange)]">Get In Touch</div>
            <h2 className="mb-8 text-5xl leading-tight text-[color:var(--hero-text)] lg:text-7xl">
              Let's Create
              <br />
              <span className="bg-gradient-to-r from-[var(--cinematic-orange)] to-[var(--cinematic-gold)] bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>

            <p className="mb-12 text-xl leading-relaxed text-[color:var(--body-text)]">
              I'm always interested in hearing about new projects, opportunities, and collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)]">
                  <Mail className="h-5 w-5 text-[var(--cinematic-orange)]" />
                </div>
                <div>
                  <div className="mb-1 text-sm text-[color:var(--subtle-text)]">Email</div>
                  <a href="mailto:mohammedshabrii@gmail.com" className="text-[color:var(--hero-text)] transition-colors hover:text-[var(--cinematic-orange)]">
                    mohammedshabrii@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)]">
                  <MapPin className="h-5 w-5 text-[var(--cinematic-orange)]" />
                </div>
                <div>
                  <div className="mb-1 text-sm text-[color:var(--subtle-text)]">Location</div>
                  <div className="text-[color:var(--hero-text)]">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] p-8 backdrop-blur-sm lg:p-12">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--cinematic-orange)]/5 to-transparent" />

              <div className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-[color:var(--muted-text)]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-xl border border-[color:var(--surface-border)] bg-[color:var(--surface-strong)] px-6 py-4 text-[color:var(--hero-text)] placeholder:text-[color:var(--subtle-text)] transition-colors focus:border-[var(--cinematic-orange)]/50 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-[color:var(--muted-text)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-xl border border-[color:var(--surface-border)] bg-[color:var(--surface-strong)] px-6 py-4 text-[color:var(--hero-text)] placeholder:text-[color:var(--subtle-text)] transition-colors focus:border-[var(--cinematic-orange)]/50 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-[color:var(--muted-text)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full resize-none rounded-xl border border-[color:var(--surface-border)] bg-[color:var(--surface-strong)] px-6 py-4 text-[color:var(--hero-text)] placeholder:text-[color:var(--subtle-text)] transition-colors focus:border-[var(--cinematic-orange)]/50 focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[var(--cinematic-orange)] to-[var(--cinematic-gold)] px-8 py-4 transition-all duration-500 hover:shadow-[0_0_30px_rgba(217,115,79,0.3)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                    Send Message
                    <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-[color:var(--footer-border)] pt-12 md:flex-row"
        >
          <div className="text-sm text-[color:var(--subtle-text)]">(c) 2026. Crafted with passion.</div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-[color:var(--subtle-text)] transition-colors hover:text-[var(--cinematic-orange)]">
              GitHub
            </a>
            <a href="#" className="text-sm text-[color:var(--subtle-text)] transition-colors hover:text-[var(--cinematic-orange)]">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
