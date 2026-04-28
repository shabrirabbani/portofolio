import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bayeu - POS Platform",
    category: "Website",
    description: "A real-time point-of-sale system for managing transactions, orders, and sales operations with speed and accuracy.",
    year: "2026",
    tags: ["Next.js", "Chakra UI", "Laravel", "PostgreSQL", "Zustand"],
    gradient: "from-blue-600/15 to-sky-500/10",
    preview: "Systems",
    href: "https://bayeu.my.id/",
  },
  {
    title: "Movie Ratt",
    category: "Website",
    description: "A website displaying the latest movie ratings, reviews, and audience scores to help users find trending movies.",
    year: "2024",
    tags: ["React", "Tailwind CSS", "TMDB API", "Axios","Redux"],
    gradient: "from-orange-500/15 to-red-500/10",
    preview: "Systems",
    href: "https://movieratt.netlify.app/",
  },
  {
    title: "Weather App",
    category: "Website",
    description: "A website that provides real-time weather updates, forecast and city-specific conditions",
    year: "2024",
    tags: ["React", "Tailwind CSS", "OpenWeather API", "Axios", "Redux"],
    gradient: "from-emerald-500/15 to-cyan-500/10",
    preview: "Systems",
    href: "https://wheaterweb.netlify.app/",
  },
];

export function SelectedWorks() {
  return (
    <section id="works" className="relative overflow-hidden py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--section-from)] via-[var(--section-via)] to-[var(--section-to)]" />
      <div
        className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')]"
        style={{ opacity: "var(--grain-opacity)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--cinematic-orange)]">Featured Projects</div>
              <h2 className="text-5xl text-[color:var(--hero-text)] lg:text-7xl">Selected Works</h2>
            </div>
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full border border-[color:var(--surface-border)] px-6 py-3 transition-all duration-300 hover:border-[var(--cinematic-orange)]/50"
            >
              <span className="text-[color:var(--body-text)]">View All Projects</span>
              <ExternalLink className="h-4 w-4 text-[color:var(--muted-text)] transition-colors group-hover:text-[var(--cinematic-orange)]" />
            </a>
          </div>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] p-8 backdrop-blur-sm transition-all duration-500 hover:border-[color:var(--surface-border-strong)] lg:p-12">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />

                <div className="relative z-10 grid items-center gap-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="text-sm uppercase tracking-wider text-[color:var(--subtle-text)]">{project.category}</span>
                      <span className="text-sm text-[var(--cinematic-gold)]">{project.year}</span>
                    </div>

                    <h3 className="mb-4 text-3xl text-[color:var(--hero-text)] transition-colors group-hover:text-[var(--cinematic-orange)] lg:text-5xl">
                      {project.title}
                    </h3>

                    <p className="mb-6 max-w-2xl text-lg leading-relaxed text-[color:var(--body-text)]">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-strong)] px-4 py-2 text-sm text-[color:var(--body-text)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end lg:col-span-5">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[color:var(--surface-border)] bg-gradient-to-br from-[color:var(--surface-strong)] to-[color:var(--surface-soft)]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full border border-[color:var(--surface-border)] px-6 py-3 text-sm uppercase tracking-[0.3em] text-[color:var(--subtle-text)]">
                          {project.preview}
                        </div>
                      </div>

                      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[color:var(--preview-overlay)] to-transparent pb-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <button className="flex translate-y-4 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                          <a href={project.href} target="_blank">View</a>
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-8 top-8 text-8xl font-light text-[color:var(--subtle-text)] transition-colors duration-500 group-hover:text-[color:var(--muted-text)]">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
