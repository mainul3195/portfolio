'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaCode, FaJava, FaDesktop, FaMobileAlt, FaHome, FaServer, FaBrain, FaGamepad, FaCss3Alt, FaHtml5, FaKey } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiEspressif, SiMysql } from 'react-icons/si';
import { TbDatabase } from 'react-icons/tb';

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

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-slate-100"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group backdrop-blur-lg bg-slate-900/50 border border-slate-800/50 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                  <div className="text-6xl">
                    {project.tech[0].icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-slate-100">
                    {project.title}
                  </h2>
                  <span className="inline-block px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 mt-2">
                    {project.type}
                  </span>
                </div>

                <p className="text-slate-400 mb-6 text-sm">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
