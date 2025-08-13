"use client";

import AboutSection from "@/components/AboutSection";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function About() {
  return (
    <div className="min-h-screen relative">
      {/* Background Beams Effect */}
      <BackgroundBeams className="opacity-50" />

      {/* Main Content */}
      <div className="relative z-10">
        <AboutSection />
      </div>
    </div>
  );
}
