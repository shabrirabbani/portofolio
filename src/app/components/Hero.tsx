import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "next-themes";

const lightNetOptions = {
  backgroundColor: 0xf1e7da,
  color: 0xb88972,
  lineColors: 0xd2b7a2,
  points: 8,
  maxDistance: 16,
  spacing: 18,
};

const darkNetOptions = {
  backgroundColor: 0x0e1624,
  color: 0x6f88b3,
  lineColors: 0xd90429,
  points: 9,
  maxDistance: 17,
  spacing: 20,
};

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const effectRef = useRef<{ destroy?: () => void; resize?: () => void } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !vantaRef.current) {
      return;
    }

    let cancelled = false;

    const setupVanta = async () => {
      const [{ default: NET }, THREE] = await Promise.all([
        import("vanta/dist/vanta.net.min"),
        import("three"),
      ]);

      if (cancelled || !vantaRef.current) {
        return;
      }

      effectRef.current?.destroy?.();

      const themeOptions = resolvedTheme === "dark" ? darkNetOptions : lightNetOptions;

      effectRef.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 300,
        scale: 1,
        scaleMobile: 1,
        showDots: true,
        ...themeOptions,
      });
    };

    void setupVanta();

    const handleResize = () => {
      effectRef.current?.resize?.();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelled = true;
      window.removeEventListener("resize", handleResize);
      effectRef.current?.destroy?.();
      effectRef.current = null;
    };
  }, [mounted, resolvedTheme]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center justify-center overflow-hidden px-6 pt-24 lg:px-12"
    >
      <div
        ref={vantaRef}
        className="absolute inset-0 opacity-55 transition-opacity duration-500"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--page-hero-from)]/74 via-[var(--page-hero-via)]/58 to-[var(--page-hero-to)]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_42%),radial-gradient(circle_at_bottom,rgba(59,83,119,0.12),transparent_38%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_36%),radial-gradient(circle_at_bottom,rgba(59,83,119,0.2),transparent_42%)]" />
      <div
        className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuNSIvPjwvc3ZnPg==')]"
        style={{ opacity: "var(--grain-opacity)" }}
      />
      <div className="absolute -left-1/4 top-1/4 h-[800px] w-[800px] rounded-full bg-[var(--cinematic-orange)] opacity-[0.08] blur-[120px]" />
      <div className="absolute -right-1/4 bottom-1/4 h-[600px] w-[600px] rounded-full bg-[var(--cinematic-blue)] opacity-[0.12] blur-[100px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl items-center justify-center">
        <div className="relative w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-x-4 top-1/2 -z-10 hidden h-[28rem] -translate-y-1/2 rounded-[3rem] border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)]/55 blur-3xl md:block"
          />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 inline-flex rounded-full border border-[var(--cinematic-orange)]/30 bg-[var(--cinematic-glow)] px-4 py-2 backdrop-blur-sm"
            >
              <span className="text-sm uppercase tracking-wider text-[var(--cinematic-orange)]">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="mb-6 max-w-4xl text-6xl leading-[0.95] tracking-wider lg:text-8xl">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block text-[color:var(--hero-text)]"
              >
                Crafting
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block bg-gradient-to-r from-[var(--cinematic-orange)] to-[var(--cinematic-gold)] bg-clip-text text-transparent"
              >
                Digital
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="block text-[color:var(--hero-text)]"
              >
                Experiences
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mb-12 max-w-2xl text-xl leading-relaxed text-[color:var(--body-text)]"
            >
              Hi there! I&apos;m Shabri, a Software Engineer specializing in scalable systems, elegant interfaces, and transformative user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col items-center gap-6 sm:flex-row sm:flex-wrap sm:justify-center"
            >
              <a
                href="#works"
                className="group relative overflow-hidden rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] px-8 py-4 backdrop-blur-sm transition-all duration-500 hover:border-[var(--cinematic-orange)]/50"
              >
                <span className="relative z-10 flex items-center gap-2 text-[color:var(--hero-text)]">
                  View My Work
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-[var(--cinematic-orange)]/0 to-[var(--cinematic-orange)]/20 transition-transform duration-500 group-hover:translate-x-0" />
              </a>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://github.com/shabrirabbani"
                  className="rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] p-3 backdrop-blur-sm transition-all duration-300 hover:border-[var(--cinematic-orange)]/50 hover:bg-[var(--cinematic-glow)]"
                >
                  <Github className="h-5 w-5 text-[color:var(--body-text)]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-shabri-rabbani-46aa2a206/"
                  className="rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] p-3 backdrop-blur-sm transition-all duration-300 hover:border-[var(--cinematic-orange)]/50 hover:bg-[var(--cinematic-glow)]"
                >
                  <Linkedin className="h-5 w-5 text-[color:var(--body-text)]" />
                </a>
                <a
                  href="mailto:mohammedshabrii@gmail.com"
                  className="rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] p-3 backdrop-blur-sm transition-all duration-300 hover:border-[var(--cinematic-orange)]/50 hover:bg-[var(--cinematic-glow)]"
                >
                  <Mail className="h-5 w-5 text-[color:var(--body-text)]" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
