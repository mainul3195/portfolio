'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaCode, FaJava, FaDesktop, 
         FaHome, FaMobileAlt, FaServer, FaBrain, FaGamepad, FaCss3Alt, FaHtml5, FaKey } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiMysql, SiEspressif } from 'react-icons/si';
import { TbDatabase } from 'react-icons/tb';

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
      tech: [
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'JavaFX', icon: <FaDesktop className="text-blue-400" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'Persistence', icon: <TbDatabase className="text-yellow-400" /> },
        { name: 'SHA256', icon: <FaKey className="text-green-400" /> }
      ],
      type: "Desktop Application"
    },
    {
      title: "IOT-Based Home Control System",
      description: "Using the esp8266 microcontroller and the facilities of Blynk, we made a system to control all home appliances from any part of the world over the internet.",
      tech: [
        { name: 'ESP8266', icon: <SiEspressif className="text-red-500" /> },
        { name: 'Blynk', icon: <FaHome className="text-blue-400" /> },
        { name: 'IoT', icon: <FaMobileAlt className="text-green-500" /> }
      ],
      type: "IoT Project"
    },
    {
      title: "Online Course Management System",
      description: "A web project using Servlet, JSP for the backend, SQL for managing the Database, and HTML, and CSS for the front end.",
      tech: [
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'Servlet/JSP', icon: <FaServer className="text-gray-400" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> }
      ],
      type: "Web Application"
    },
    {
      title: "Interactive Tic-Tac-Toe",
      description: "A learning project for language C where a player can interactively play the game with a computer.",
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
          <div className="p-6 overflow-y-auto max-h-[80vh]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-slate-100">Projects</h2>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-100 transition-colors"
              >
                <IoClose className="w-6 h-6" />
              </button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="backdrop-blur-lg bg-slate-800/50 border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-100 mb-1">
                        {project.title}
                      </h3>
                      <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">
                        {project.type}
                      </span>
                    </div>
                  
                  </div>

                  <p className="text-slate-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-1 text-sm text-slate-300"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        {tech.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
