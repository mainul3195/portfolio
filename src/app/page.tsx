"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ModalType } from "@/types";
import EducationModal from "@/components/EducationModal";
import CompetitiveProgrammingModal from "@/components/CompetitiveProgrammingModal";
import TableTennisModal from "@/components/TableTennisModal";
import LeadershipModal from "@/components/LeadershipModal";
import PresidentScoutModal from "@/components/PresidentScoutModal";
import ResearchModal from "@/components/ResearchModal";
import HighSchoolModal from "@/components/HighSchoolModal";
import ProjectsModal from "@/components/ProjectsModal";
import HackathonsModal from "@/components/HackathonsModal";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import LeadershipSection from "@/components/LeadershipSection";
import CompetitiveProgrammingSection from "@/components/CompetitiveProgrammingSection";
import ProjectsSection from "@/components/ProjectsSection";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

// Initialize EmailJS
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";

// Log environment variables (remove in production)
console.log("EmailJS Config:", {
  publicKey: PUBLIC_KEY ? "Set" : "Not Set",
  serviceId: SERVICE_ID ? "Set" : "Not Set",
  templateId: TEMPLATE_ID ? "Set" : "Not Set",
});

export default function Home() {
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [
    isCompetitiveProgrammingModalOpen,
    setIsCompetitiveProgrammingModalOpen,
  ] = useState(false);
  const [isTableTennisModalOpen, setIsTableTennisModalOpen] = useState(false);
  const [isLeadershipModalOpen, setIsLeadershipModalOpen] = useState(false);
  const [isPresidentScoutModalOpen, setIsPresidentScoutModalOpen] =
    useState(false);
  const [isResearchModalOpen, setIsResearchModalOpen] = useState(false);
  const [isHighSchoolModalOpen, setIsHighSchoolModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isHackathonsModalOpen, setIsHackathonsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType | null>(null);

  const handleModalOpen = (modalType: ModalType) => {
    switch (modalType) {
      case "education":
        setIsEducationModalOpen(true);
        break;
      case "competitive-programming":
        setIsCompetitiveProgrammingModalOpen(true);
        break;
      case "table-tennis":
        setIsTableTennisModalOpen(true);
        break;
      case "leadership":
        setIsLeadershipModalOpen(true);
        break;
      case "president-scout":
        setIsPresidentScoutModalOpen(true);
        break;
      case "research":
        setIsResearchModalOpen(true);
        break;
      case "high-school":
        setIsHighSchoolModalOpen(true);
        break;
      case "projects":
        setIsProjectsModalOpen(true);
        break;
      case "hackathons":
        setIsHackathonsModalOpen(true);
        break;
    }
    setModalType(modalType);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 overflow-hidden min-h-screen relative"
    >
      <HeroSection />
      <AchievementsSection onOpenModal={handleModalOpen} />
      <CompetitiveProgrammingSection />
      <ProjectsSection />
      <LeadershipSection onOpenModal={handleModalOpen} />

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

      {/* Modals */}
      <EducationModal
        isOpen={isEducationModalOpen}
        onClose={() => setIsEducationModalOpen(false)}
      />
      <CompetitiveProgrammingModal
        isOpen={isCompetitiveProgrammingModalOpen}
        onClose={() => setIsCompetitiveProgrammingModalOpen(false)}
      />
      <TableTennisModal
        isOpen={isTableTennisModalOpen}
        onClose={() => setIsTableTennisModalOpen(false)}
      />
      <LeadershipModal
        isOpen={isLeadershipModalOpen}
        onClose={() => setIsLeadershipModalOpen(false)}
      />
      <PresidentScoutModal
        isOpen={isPresidentScoutModalOpen}
        onClose={() => setIsPresidentScoutModalOpen(false)}
      />
      <ResearchModal
        isOpen={isResearchModalOpen}
        onClose={() => setIsResearchModalOpen(false)}
      />
      <HighSchoolModal
        isOpen={isHighSchoolModalOpen}
        onClose={() => setIsHighSchoolModalOpen(false)}
      />
      <ProjectsModal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
      />
      <HackathonsModal
        isOpen={isHackathonsModalOpen}
        onClose={() => setIsHackathonsModalOpen(false)}
      />
    </motion.div>
  );
}
