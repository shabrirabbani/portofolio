import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Markindo Rekateknik",
    role: "Software Engineer",
    period: "07/2025 - Present",
    location: "Jakarta, Indonesia",
    description: "Solo engineer building and shipping 6 internal apps — from IoT integrations to CRM — while owning the entire production infrastructure.",
    achievements: [
      "Built IoT app connected directly to industrial machinery",
      "Delivered fleet management, sales tracking, and CRM systems",
      "Self-managed VPS from scratch — Docker, Nginx, firewall, security",
    ],
  },
  {
    company: "Hukumonline",
    role: "Software Engineer",
    period: "07/2024 - 01/2025",
    location: "Remote",
    description: "Collaborating with the team to building responsive user interfaces and optimizing performance for seamless user experiences.",
    achievements: [
      "Contributed to the development and completion of the Hukumonline Membership Website and Hukumonline.com",
      "Succesfully completed 80+ assigned tasks, including frontend development, UI/UX optimization, and API integration with GraphQL.",
    ],
  },
  {
    company: "Bahasakita",
    role: "Software Engineer Intern",
    period: "03/2024 - 06/2024",
    location: "Jakarta, Indonesia",
    description: "Design and develop stethosoul.id website. Building admin dashboard for managing the Bahasakita.id for internal purposes",
    achievements: [
      "Design and developed two landing page for Stethosoul.id and Bahasakita.id",
      "Developed integrated admin panel for bahasakita internal purposes",
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <section id="experience" className="relative overflow-hidden py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-[var(--section-from)]" />
      <div className="absolute left-1/2 top-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cinematic-blue)] opacity-[0.06] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--cinematic-orange)]">Career Journey</div>
          <h2 className="mb-6 text-5xl text-[color:var(--hero-text)] lg:text-7xl">Experience</h2>
          <p className="mx-auto max-w-2xl text-xl text-[color:var(--body-text)]">
            Building impactful products at world-class engineering organizations
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-gradient-to-b from-transparent via-[color:var(--line-color)] to-transparent lg:left-1/2 lg:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative mb-16 lg:mb-24 ${index % 2 === 0 ? "lg:pl-0 lg:pr-[50%]" : "lg:pl-[50%] lg:pr-0 lg:text-right"}`}
            >
              <div className={`absolute top-8 hidden lg:block ${index % 2 === 0 ? "lg:right-[-17px]" : "lg:left-[-17px]"}`}>
                <div className="relative">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--cinematic-orange)]">
                    <Briefcase className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute inset-0 animate-ping rounded-full bg-[var(--cinematic-orange)] opacity-20" />
                </div>
              </div>

              <div className={`relative ${index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"}`}>
                <div className="group relative rounded-2xl border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] p-8 backdrop-blur-sm transition-all duration-500 hover:border-[var(--cinematic-orange)]/30">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--cinematic-orange)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="mb-1 text-2xl text-[color:var(--hero-text)] lg:text-3xl">{exp.company}</h3>
                        <div className="text-lg text-[var(--cinematic-gold)]">{exp.role}</div>
                      </div>
                      <div className={index % 2 === 0 ? "lg:text-right" : "lg:text-left"}>
                        <div className="text-[color:var(--body-text)]">{exp.period}</div>
                        <div className="text-sm text-[color:var(--subtle-text)]">{exp.location}</div>
                      </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-[color:var(--body-text)]">{exp.description}</p>

                    <ul className="space-y-3">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3 text-[color:var(--body-text)]">
                          <span className="mt-1.5 text-xs text-[var(--cinematic-orange)]">+</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
