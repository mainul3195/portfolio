'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaCode, FaJava, FaDesktop, 
         FaHome, FaMobileAlt, FaServer, FaBrain, FaGamepad } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiSpringboot, SiPostgresql, 
         SiMysql, SiEspressif } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

export default function Projects() {
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
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-slate-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h1>
        
        <motion.p
          className="text-slate-400 text-center mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A showcase of my recent development projects and applications
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
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
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-100">
                      {project.title}
                    </h2>
                    <span className="text-sm text-slate-400">{project.type}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-slate-400 hover:text-slate-100 transition-colors"
                      >
                        <FaGithub className="text-xl" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-slate-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <span className="text-xl">{tech.icon}</span>
                      <span className="text-sm text-slate-400">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
