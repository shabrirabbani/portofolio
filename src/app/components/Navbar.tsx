import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

const links = [
  { href: "#home", label: "Home" },
  { href: "#works", label: "Works" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (currentScrollY <= 24) {
        setHidden(false);
      } else if (scrollDelta > 8) {
        setHidden(true);
      } else if (scrollDelta < -8) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <motion.header
      animate={{
        y: hidden ? "-110%" : "0%",
        opacity: hidden ? 0.88 : 1,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--nav-border)] backdrop-blur-md"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center px-6 py-4 md:grid-cols-3 lg:px-12">
        <div />

        <nav className="hidden justify-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold text-[color:var(--nav-text-muted)] transition-colors hover:text-[color:var(--nav-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface-soft)] text-[color:var(--nav-text)] transition-colors hover:border-[var(--cinematic-orange)]/40 hover:text-[var(--cinematic-orange)]"
          >
            {isDark ? <SunMedium className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
