'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaCode, FaJava, FaDesktop, FaMobileAlt, FaHome, FaServer, FaBrain, FaGamepad } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiSpringboot, SiPostgresql, SiEspressif, SiMysql } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

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

export default function ProjectsSection() {
  return (
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
              <h3 className="text-xl font-semibold mb-2 text-slate-100">{project.title}</h3>
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
              
              <div className="flex gap-3">
                {project.icons.map((Icon, iconIndex) => (
                  <Icon key={iconIndex} className="w-6 h-6 text-gray-400 hover:text-gray-300 transition-colors" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
