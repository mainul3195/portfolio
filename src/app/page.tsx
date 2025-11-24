"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import EducationTimeline from "@/components/EducationTimeline";
import ExperienceSection from "@/components/ExperienceSection";
import ResearchInterests from "@/components/ResearchInterests";
import CompetitiveProgrammingStats from "@/components/CompetitiveProgrammingStats";
import ProjectShowcase from "@/components/ProjectShowcase";
import LeadershipActivities from "@/components/LeadershipActivities";
import OtherAchievements from "@/components/OtherAchievements";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 overflow-hidden min-h-screen relative"
    >
      <HeroSection />

      <div className="space-y-12 md:space-y-24">
        <EducationTimeline />
        <ExperienceSection />
        <ResearchInterests />
        <CompetitiveProgrammingStats />
        <ProjectShowcase />
        <LeadershipActivities />
        <OtherAchievements />
      </div>

      {/* Background Beams with Collision */}
      <div className="w-full -mx-6 mt-20">
        <BackgroundBeamsWithCollision className="h-[35rem]">
          <div className="text-center max-w-xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to Connect?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Get in touch to discuss potential collaborations or just to say
              hello!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </motion.div>
  );
}
