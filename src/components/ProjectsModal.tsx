'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaCode, FaJava, FaDesktop, 
         FaHome, FaMobileAlt, FaServer, FaBrain, FaGamepad } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiSpringboot, SiPostgresql, 
         SiMysql, SiEspressif } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectsModal({
  isOpen,
  onClose
}: ProjectsModalProps) {
  if (!isOpen) return null;

  const projects = [
    {
      title: "iShopNow",
      description: "A user-friendly e-commerce website using MERN stack: MongoDB for database, Express for server-side framework, React for client-side framework, and Node.js for backend.",
      github: 'https://github.com/mainul3195/ishopnow',
      tech: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'Express', icon: <SiExpress className="text-white" /> },
        { name: 'React', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Node.js', icon: <FaNode className="text-green-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> }
      ],
      type: "Full Stack"
    },
    {
      title: "Pigeonnier",
      description: "An Email Client Software using JavaFX that gives all the facilities of the Gmail website as well as some extra features.",
      github: 'https://github.com/mainul3195/pigeonnier',
      tech: [
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'JavaFX', icon: <FaDesktop className="text-blue-400" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-400" /> }
      ],
      type: "Desktop Application"
    },
    {
      title: "IOT-Based Home Control System",
      description: "Using the esp8266 microcontroller and the facilities of Blynk, we made a system to control all home appliances from any part of the world over the internet.",
      github: 'https://github.com/mainul3195/iot-home',
      tech: [
        { name: 'ESP8266', icon: <SiEspressif className="text-red-500" /> },
        { name: 'Blynk', icon: <FaHome className="text-blue-400" /> },
        { name: 'IoT', icon: <FaMobileAlt className="text-green-500" /> },
        { name: 'C++', icon: <TbBrandCpp className="text-blue-400" /> }
      ],
      type: "IoT Project"
    },
    {
      title: "Online Course Management System",
      description: "A web project using Servlet, JSP for the backend, SQL for managing the Database, and HTML, and CSS for the front end.",
      github: 'https://github.com/mainul3195/course-management',
      tech: [
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
        { name: 'Server', icon: <FaServer className="text-gray-400" /> }
      ],
      type: "Web Application"
    },
    {
      title: "Interactive Tic-Tac-Toe",
      description: "A learning project for language C where a player can interactively play the game with a computer.",
      github: 'https://github.com/mainul3195/tic-tac-toe',
      tech: [
        { name: 'C', icon: <FaCode className="text-gray-400" /> },
        { name: 'Algorithms', icon: <FaBrain className="text-purple-400" /> },
        { name: 'Game Dev', icon: <FaGamepad className="text-green-400" /> }
      ],
      type: "Console Application"
    }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl backdrop-blur-lg bg-slate-900/90 border border-slate-700/50 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-h-[80vh] overflow-hidden"
        >
          {/* Custom Scrollbar Container */}
          <div className="overflow-y-auto h-full max-h-[80vh] px-6 pb-6 pt-16 scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
            >
              <IoClose size={24} />
            </button>

            <h2 className="text-3xl font-bold mb-8 text-slate-100 flex items-center gap-3">
              <FaDesktop className="w-8 h-8 text-cyan-400" />
              Featured Projects
            </h2>

            <div className="space-y-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-lg bg-slate-800/50 rounded-lg p-6 border border-slate-700/50 hover:bg-slate-800/70 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100">
                        {project.title}
                      </h3>
                      <span className="text-sm text-slate-400">{project.type}</span>
                    </div>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-100 transition-colors"
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2"
                      >
                        <span className="text-xl">{tech.icon}</span>
                        <span className="text-sm text-slate-400">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
