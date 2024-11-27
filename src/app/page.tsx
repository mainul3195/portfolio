'use client';
import React, { useState } from 'react';
import { FaTrophy, FaLaptopCode, FaBrain, FaChalkboardTeacher, FaPalette, FaTableTennis, 
         FaJava, FaReact, FaNode, FaDatabase, FaCode, FaHome, FaCodeBranch, FaGithub,
         FaHtml5, FaCss3Alt, FaJs, FaGraduationCap, FaMedal, FaServer, FaDesktop,
         FaMobileAlt, FaTools, FaUserGraduate, FaHandsHelping, FaStar, FaGamepad,
         FaAward, FaCampground, FaUsers } from 'react-icons/fa';
import { SiKaggle, SiPython, SiTensorflow, SiMongodb, SiExpress, SiCplusplus, 
         SiEspressif, SiCodeforces, SiLeetcode, SiJavascript, SiTypescript, SiTailwindcss,
         SiNextdotjs, SiSpringboot, SiPostgresql, SiMysql, SiFirebase, SiGit,
         SiVisualstudiocode, SiPostman } from 'react-icons/si';
import { TbBrandNextjs, TbBrandCpp } from 'react-icons/tb';
import { motion } from 'framer-motion';
import EducationModal from '@/components/EducationModal';
import ContactForm from '@/components/ContactForm';
import CompetitiveProgrammingModal from '@/components/CompetitiveProgrammingModal';
import TableTennisModal from '@/components/TableTennisModal';
import ProjectsModal from '@/components/ProjectsModal';
import LeadershipModal from '@/components/LeadershipModal';
import PresidentScoutModal from '@/components/PresidentScoutModal';
import { RiProjector2Fill } from 'react-icons/ri';

// Initialize EmailJS
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

// Log environment variables (remove in production)
console.log('EmailJS Config:', {
  publicKey: PUBLIC_KEY ? 'Set' : 'Not Set',
  serviceId: SERVICE_ID ? 'Set' : 'Not Set',
  templateId: TEMPLATE_ID ? 'Set' : 'Not Set',
});

export default function Home() {
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [isCompetitiveProgrammingModalOpen, setIsCompetitiveProgrammingModalOpen] = useState(false);
  const [isTableTennisModalOpen, setIsTableTennisModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false);
  const [isLeadershipModalOpen, setIsLeadershipModalOpen] = useState(false);
  const [isPresidentScoutModalOpen, setIsPresidentScoutModalOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const achievements = [
    {
      icon: <FaLaptopCode className="w-10 h-10 text-blue-400/90" />,
      title: "Competitive Programming",
      color: "from-blue-500/5 to-blue-600/5",
      glow: "shadow-[0_0_10px_rgba(59,130,246,0.15)]"
    },
    {
      icon: <FaUserGraduate className="w-10 h-10 text-purple-400/90" />,
      title: "Academic Excellence",
      color: "from-purple-500/5 to-purple-600/5",
      glow: "shadow-[0_0_10px_rgba(168,85,247,0.15)]"
    },
    {
      icon: <FaTableTennis className="w-10 h-10 text-green-400/90" />,
      title: "Table Tennis",
      color: "from-green-500/5 to-green-600/5",
      glow: "shadow-[0_0_10px_rgba(34,197,94,0.15)]"
    },
    {
      icon: <FaDesktop className="w-10 h-10 text-cyan-400/90" />,
      title: "Projects",
      color: "from-cyan-500/5 to-cyan-600/5",
      glow: "shadow-[0_0_10px_rgba(34,211,238,0.15)]"
    },
    {
      icon: <FaUsers className="w-10 h-10 text-rose-400/90" />,
      title: "Leadership",
      color: "from-rose-500/5 to-rose-600/5",
      glow: "shadow-[0_0_10px_rgba(244,63,94,0.15)]"
    }
  ];

  const leadershipActivities = {
    leadership: [
      {
        title: "SUST CP Community",
        role: "Competitive Programming Mentor",
        description: "Current Coordinator & Trainer of SUST Competitive Programming Training Camp"
      },
      {
        title: "SUST CSE Carnival 2024",
        role: "IUPC Volunteer Coordinator",
        description: "Coordinating volunteers for Inter University Programming Contest"
      },
      {
        title: "Scout Leadership",
        role: "Senior Patrol Leader",
        description: "Former SPL of Bindubashini Govt. Boys' High School Scout Group"
      },
      {
        title: "Student Association",
        role: "Assistant Organizing Secretary",
        description: "Former Assistant Organizing Secretary of Tangail Students' Association, SUST"
      }
    ],
    voluntary: [
      "Participation in Free Medical Camps",
      "Organizing programming workshops",
      "Mentoring junior programmers"
    ]
  };

  const extraCurricular = {
    scouting: {
      title: "President Scout Award",
      description: "Received 'President Scout Award' from the honorable president of Bangladesh in 2016",
      icon: <FaCampground className="w-12 h-12 text-yellow-500" />
    },
    arts: {
      title: "Arts & Cultural Activities",
      description: "Multiple achievements in drawing competitions and cultural activities",
      icon: <FaPalette className="w-12 h-12 text-pink-500" />,
      achievements: [
        "District Champion at Secondary level Drawing Competition - Bangladesh Shisu Academy",
        "20+ achievements in School level drawing competitions",
        "Multiple achievements in Recitation, Hamd-Naat, Azan and Qira'at"
      ]
    },
    sports: {
      title: "Sports Activities",
      description: "Active participation and achievements in various sports",
      icon: <FaTableTennis className="w-12 h-12 text-green-500" />,
      categories: [
        {
          title: "Table Tennis",
          achievements: [
            "Selected for University Team 2024",
            "Champion at Table Tennis (Double) - SUST indoor games-2023",
            "Champion at SUST CSE Intra Department Table Tennis (Double)",
            "2nd Runner-Up at Open Table Tennis Competition (Single)"
          ]
        },
        {
          title: "Chess",
          achievements: [
            "Top 20 in District Chess Workshop"
          ]
        }
      ]
    }
  };

  const competitiveProgramming = {
    achievements: [
      "Officially 15th at ICPC Dhaka Regional 2023",
      "Participated in 2023 ICPC Asia West Continent Final Contest",
      "6th in CoU-BRACNet Inter University Programming Contest 2023",
      "2nd Runner Up at Sylhet Bondhushova Programming Contest",
      "11th in SEC Junior Programming Contest",
      "21th in NCPC 2023",
      "Participated in SRBD Code Contest 2023 final round (Top 50)"
    ],
    experience: [
      "Solved more than 2500 problems in different online judges",
      "Participated in nine Inter University Programming Contests",
      "Participated in ICPC Dhaka Regional 2020, 2021, and 2023"
    ]
  };

  const projects = [
    {
      title: "iShopNow",
      description: "A user-friendly e-commerce website using MERN stack: MongoDB for database, Express for server-side framework, React for client-side framework, and Node.js for backend.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "TypeScript"],
      icons: [SiMongodb, SiExpress, FaReact, FaNode, FaCode, SiTypescript],
      type: "Full Stack"
    },
    {
      title: "Pigeonnier",
      description: "An Email Client Software using JavaFX that gives all the facilities of the Gmail website as well as some extra features.",
      technologies: ["Java", "JavaFX", "Spring Boot", "PostgreSQL"],
      icons: [FaJava, FaDesktop, SiSpringboot, SiPostgresql],
      type: "Desktop Application"
    },
    {
      title: "IOT-Based Home Control System",
      description: "Using the esp8266 microcontroller and the facilities of Blynk, we made a system to control all home appliances from any part of the world over the internet.",
      technologies: ["ESP8266", "Blynk", "IoT", "C++"],
      icons: [SiEspressif, FaHome, FaMobileAlt, TbBrandCpp],
      type: "IoT Project"
    },
    {
      title: "Online Course Management System",
      description: "A web project using Servlet, JSP for the backend, SQL for managing the Database, and HTML, and CSS for the front end.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
      icons: [FaJava, SiSpringboot, SiMysql, FaServer],
      type: "Web Application"
    },
    {
      title: "Interactive Tic-Tac-Toe",
      description: "A learning project for language C where a player can interactively play the game with a computer.",
      technologies: ["C", "Algorithms", "Game Development"],
      icons: [FaCode, FaBrain, FaGamepad],
      type: "Console Application"
    }
  ];

  const skillCategories = {
    "Programming Languages": [
      { name: "C++", icon: TbBrandCpp },
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython }
    ],
    "Web Technologies": [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: FaNode },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind", icon: SiTailwindcss }
    ],
    "Databases & Tools": [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Postman", icon: SiPostman }
    ]
  };

  return (
    <div className="container mx-auto px-6 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-2">
              Hi, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-100 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Mainul Hasan
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Software Engineer & Problem Solver
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                An ambitious dreamer daring to make a difference, a well-rounded leader seeking knowledge across disciplines, and a compassionate son motivated to ease his parents' sacrifices.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="flex justify-center space-x-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/contact"
              className="glass-effect px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Cards Grid */}
      <section id="achievements" className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3">Explore My Journey</h2>
            <p className="text-slate-400">Click on any card to learn more about each aspect</p>
          </div>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-b ${achievement.color} border border-slate-800/50 p-4 cursor-pointer ${achievement.glow} hover:border-slate-700/50`}
                onClick={() => {
                  if (achievement.title === "Academic Excellence") {
                    setIsEducationModalOpen(true);
                  } else if (achievement.title === "Competitive Programming") {
                    setIsCompetitiveProgrammingModalOpen(true);
                  } else if (achievement.title === "Table Tennis") {
                    setIsTableTennisModalOpen(true);
                  } else if (achievement.title === "Projects") {
                    setIsProjectsModalOpen(true);
                  } else if (achievement.title === "Leadership") {
                    setIsLeadershipModalOpen(true);
                  }
                }}
              >
                {/* Hover Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <div className="absolute bottom-2 left-0 right-0 text-center">
                    <p className="text-xs text-white/90 font-medium">Click to view details</p>
                  </div>
                </motion.div>

                <div className="flex flex-col items-center justify-center space-y-3 py-2">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    {achievement.icon}
                  </motion.div>
                  <motion.h3 
                    className="text-lg font-semibold text-slate-200 text-center group-hover:text-white transition-colors duration-200"
                  >
                    {achievement.title === "Competitive Programming" 
                      ? "CP Excellence" 
                      : achievement.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership & Activities Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              Leadership & Activities
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore my journey through various leadership roles and community engagements
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Leadership Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-r from-rose-500/10 to-rose-600/10 border border-slate-700/50 p-6 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
              onClick={() => setIsLeadershipModalOpen(true)}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl text-rose-400"
                >
                  <FaUsers />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                    Leadership Experience
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                    Leading and organizing various academic and community initiatives
                  </p>
                  <motion.p 
                    className="text-rose-400 mt-3 flex items-center gap-2 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    View Details <span className="text-lg">→</span>
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* President Scout Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-slate-700/50 p-6 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
              onClick={() => setIsPresidentScoutModalOpen(true)}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl text-purple-400"
                >
                  <FaMedal />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                    President Scout
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                    Highest recognition in Bangladesh Scouts
                  </p>
                  <motion.p 
                    className="text-purple-400 mt-3 flex items-center gap-2 text-sm"
                    whileHover={{ x: 5 }}
                  >
                    View Details <span className="text-lg">→</span>
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* CP Mentorship Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-slate-700/50 p-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl text-amber-400"
                >
                  <FaStar />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                    CP Mentorship
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                    Mentoring and training students in competitive programming
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Event Management Card */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-r from-green-500/10 to-green-600/10 border border-slate-700/50 p-6 shadow-[0_0_15px_rgba(34,197,94,0.15)]"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl text-green-400"
                >
                  <FaAward />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                    Event Coordination
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                    Managing and coordinating major university events
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      </section>

      {/* Extra-Curricular Section */}
      <section id="extracurricular" className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-slate-100"
          >
            Extra-Curricular Activities
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Scouting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-4 mb-4">
                {extraCurricular.scouting.icon}
                <h3 className="text-xl font-semibold text-yellow-400">Scouting</h3>
              </div>
              <p className="text-gray-300">{extraCurricular.scouting.description}</p>
            </motion.div>

            {/* Arts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-4 mb-4">
                {extraCurricular.arts.icon}
                <h3 className="text-xl font-semibold text-pink-400">Arts & Cultural Activities</h3>
              </div>
              <p className="text-gray-300">{extraCurricular.arts.description}</p>
              <ul className="space-y-2">
                {extraCurricular.arts.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <FaStar className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Sports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center gap-4 mb-4">
                {extraCurricular.sports.icon}
                <h3 className="text-xl font-semibold text-green-400">{extraCurricular.sports.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{extraCurricular.sports.description}</p>
              <div className="space-y-6">
                {extraCurricular.sports.categories.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium text-green-300 mb-2">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <FaMedal className="text-yellow-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Competitive Programming Section */}
      <section id="competitiveprogramming" className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-slate-100"
          >
            Competitive Programming
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Notable Achievements</h3>
              <ul className="space-y-2">
                {competitiveProgramming.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <FaTrophy className="text-yellow-500" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Experience</h3>
              <ul className="space-y-2">
                {competitiveProgramming.experience.map((exp, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <FaCode className="text-blue-500" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-slate-100"
          >
            Projects
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 hover:bg-white/15 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  {project.type}
                </span>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 text-2xl text-gray-400">
                  {project.icons.map((Icon, iconIndex) => (
                    <Icon
                      key={iconIndex}
                      className="hover:text-white transition-colors duration-200"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-slate-100"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, items]) => (
              <motion.div
                key={category}
                className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-purple-300">{category}</h3>
                <div className="space-y-3">
                  {items.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 text-gray-300">
                        <Icon className="text-2xl" />
                        <span>{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-100 text-center"
          >
            Get in Touch
          </motion.h2>
          
          <motion.p
            className="text-slate-400 text-center mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Feel free to reach out for collaborations, opportunities, or just a friendly chat.
          </motion.p>

          <ContactForm />
        </div>
      </section>

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
      <ProjectsModal
        isOpen={isProjectsModalOpen}
        onClose={() => setIsProjectsModalOpen(false)}
      />
      <LeadershipModal
        isOpen={isLeadershipModalOpen}
        onClose={() => setIsLeadershipModalOpen(false)}
      />
      <PresidentScoutModal
        isOpen={isPresidentScoutModalOpen}
        onClose={() => setIsPresidentScoutModalOpen(false)}
      />
    </div>
  );
}
