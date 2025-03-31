"use client";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUserGraduate,
  FaTableTennis,
  FaDesktop,
  FaUsers,
  FaAward,
  FaFlask,
  FaPalette,
  FaCode,
} from "react-icons/fa";
import { ModalType } from "@/types";
import AchievementCard from "./AchievementCard";

interface AchievementsSectionProps {
  onOpenModal: (modalType: ModalType) => void;
}

const achievements = [
  {
    icon: <FaLaptopCode className="w-10 h-10 text-blue-300/80" />,
    title: "Competitive Programming",
    modalType: "competitive-programming" as ModalType,
    color: "bg-blue-500/5",
    glow: "group-hover:bg-blue-400/20",
  },
  {
    icon: <FaUserGraduate className="w-10 h-10 text-green-300/80" />,
    title: "Education",
    modalType: "education" as ModalType,
    color: "bg-green-500/5",
    glow: "group-hover:bg-green-400/20",
  },
  {
    icon: <FaTableTennis className="w-10 h-10 text-purple-300/80" />,
    title: "Table Tennis",
    modalType: "table-tennis" as ModalType,
    color: "bg-purple-500/5",
    glow: "group-hover:bg-purple-400/20",
  },
  {
    icon: <FaDesktop className="w-10 h-10 text-orange-300/80" />,
    title: "Projects",
    modalType: "projects" as ModalType,
    color: "bg-orange-500/5",
    glow: "group-hover:bg-orange-400/20",
  },
  {
    icon: <FaUsers className="w-10 h-10 text-red-300/80" />,
    title: "Leadership",
    modalType: "leadership" as ModalType,
    color: "bg-red-500/5",
    glow: "group-hover:bg-red-400/20",
  },
  {
    icon: <FaAward className="w-10 h-10 text-yellow-300/80" />,
    title: "President Scout",
    modalType: "president-scout" as ModalType,
    color: "bg-yellow-500/5",
    glow: "group-hover:bg-yellow-400/20",
  },
  {
    icon: <FaFlask className="w-10 h-10 text-cyan-300/80" />,
    title: "Research Interests",
    modalType: "research" as ModalType,
    color: "bg-cyan-500/5",
    glow: "group-hover:bg-cyan-400/20",
  },
  {
    icon: <FaPalette className="w-10 h-10 text-rose-300/80" />,
    title: "High School Fun",
    modalType: "high-school" as ModalType,
    color: "bg-rose-500/5",
    glow: "group-hover:bg-rose-400/20",
  },
  {
    icon: <FaCode className="w-10 h-10 text-indigo-300/80" />,
    title: "Hackathons",
    modalType: "hackathons" as ModalType,
    color: "bg-indigo-500/5",
    glow: "group-hover:bg-indigo-400/20",
  },
];

export default function AchievementsSection({
  onOpenModal,
}: AchievementsSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="achievements" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white/90 mb-3">
            Explore My Journey
          </h2>
          <p className="text-slate-400/80">
            Click on any card to learn more about each aspect
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          <AchievementCard
            icon={<FaFlask className="w-10 h-10 text-purple-300/80" />}
            title="Research Interests"
            modalType="research"
            color="bg-purple-500/5"
            glow="group-hover:bg-purple-400/20"
            onOpenModal={onOpenModal}
          />
          <AchievementCard
            icon={<FaLaptopCode className="w-10 h-10 text-blue-300/80" />}
            title="Competitive Programming"
            modalType="competitive-programming"
            color="bg-blue-500/5"
            glow="group-hover:bg-blue-400/20"
            onOpenModal={onOpenModal}
          />
          <AchievementCard
            icon={<FaUserGraduate className="w-10 h-10 text-green-300/80" />}
            title="Education"
            modalType="education"
            color="bg-green-500/5"
            glow="group-hover:bg-green-400/20"
            onOpenModal={onOpenModal}
          />
          <AchievementCard
            icon={<FaUsers className="w-10 h-10 text-red-300/80" />}
            title="Leadership"
            modalType="leadership"
            color="bg-red-500/5"
            glow="group-hover:bg-red-400/20"
            onOpenModal={onOpenModal}
          />
          <AchievementCard
            icon={<FaDesktop className="w-10 h-10 text-orange-300/80" />}
            title="Projects"
            modalType="projects"
            color="bg-orange-500/5"
            glow="group-hover:bg-orange-400/20"
            onOpenModal={onOpenModal}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[calc(80%)] mx-auto">
          <AchievementCard
            icon={<FaAward className="w-10 h-10 text-yellow-300/80" />}
            title="President Scout"
            modalType="president-scout"
            color="bg-yellow-500/5"
            glow="group-hover:bg-yellow-400/20"
            onOpenModal={onOpenModal}
          />
          <AchievementCard
            icon={<FaTableTennis className="w-10 h-10 text-purple-300/80" />}
            title="Table Tennis"
            modalType="table-tennis"
            color="bg-purple-500/5"
            glow="group-hover:bg-purple-400/20"
            onOpenModal={onOpenModal}
          />
          <AchievementCard
            icon={<FaCode className="w-10 h-10 text-indigo-300/80" />}
            title="Hackathons"
            modalType="hackathons"
            color="bg-indigo-500/5"
            glow="group-hover:bg-indigo-400/20"
            onOpenModal={onOpenModal}
          />
          <AchievementCard
            icon={<FaPalette className="w-10 h-10 text-rose-300/80" />}
            title="High School Fun"
            modalType="high-school"
            color="bg-rose-500/5"
            glow="group-hover:bg-rose-400/20"
            onOpenModal={onOpenModal}
          />
        </div>
      </div>
    </section>
  );
}
