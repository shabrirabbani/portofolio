import { Contact } from "./components/Contact";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { SelectedWorks } from "./components/SelectedWorks";
import { TechStack } from "./components/TechStack";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <SelectedWorks />
      <ExperienceTimeline />
      <TechStack />
      <Contact />
    </div>
  );
}
