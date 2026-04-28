import { motion } from "motion/react";

const technologies = {
  Languages: ["TypeScript", "Javascript", "PHP", "Python", "SQL"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Motion", "GraphQL"],
  Backend: ["Node.js", "RestAPI", "PostgreSQL", "Redis", "Nest.js", "Laravel"],
  Infrastructure: ["Docker", "AWS", "CI/CD", "GitHub Actions", "Nginx"],
  Tools: ["Git", "Figma", "Jira", "Analytics"],
  "AI Tools": ["Claude code", "OpenAI", "Codex", "Gemini", "Z AI"],
};

export function TechStack() {
  return (
    <section id="stack" className="relative overflow-hidden py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--section-from)] via-[var(--section-via)] to-[var(--section-to)]" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[var(--cinematic-gold)] opacity-[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--cinematic-orange)]">Expertise</div>
          <h2 className="mb-6 text-5xl text-[color:var(--hero-text)] lg:text-7xl">Tech Stack</h2>
          <p className="mx-auto max-w-2xl text-xl text-[color:var(--body-text)]">
            Modern tools and technologies I leverage to build exceptional products
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(technologies).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative h-full rounded-2xl border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] p-8 backdrop-blur-sm transition-all duration-500 hover:border-[color:var(--surface-border-strong)]">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-2xl bg-gradient-to-br from-[var(--cinematic-orange)]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10">
                  <h3 className="mb-6 text-xl uppercase tracking-wider text-[var(--cinematic-gold)]">{category}</h3>

                  <div className="flex flex-wrap gap-3">
                    {techs.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.4 }}
                        className="rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-strong)] px-4 py-2 text-sm text-[color:var(--body-text)] transition-all duration-300 hover:border-[var(--cinematic-orange)]/30 hover:bg-[var(--cinematic-glow)]"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-[color:var(--subtle-text)]">
            Always learning and exploring new technologies to stay at the cutting edge
          </p>
        </motion.div>
      </div>
    </section>
  );
}
