'use client';

import { FaJava, FaReact, FaNode, FaDatabase, FaCode, FaHome, FaTrophy, FaCodeBranch } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus, SiEspressif, SiCodeforces, SiLeetcode } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Competitive Programming",
    description: "Active participant in competitive programming contests on platforms like Codeforces, LeetCode, and HackerRank. Solved 500+ algorithmic problems.",
    technologies: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
    icons: [SiCodeforces, SiLeetcode, SiCplusplus, FaTrophy],
    type: "Algorithmic Problem Solving"
  },
  {
    title: "iShopNow",
    description: "A user-friendly e-commerce website built with the MERN stack, featuring modern design and full e-commerce functionality.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    icons: [SiMongodb, SiExpress, FaReact, FaNode],
    type: "Full Stack"
  },
  {
    title: "Pigeonnier",
    description: "An Email Client Software using JavaFX that provides all Gmail website functionalities plus additional features.",
    technologies: ["Java", "JavaFX", "Email APIs"],
    icons: [FaJava, FaCode, FaCode],
    type: "Desktop Application"
  },
  {
    title: "IOT-Based Home Control System",
    description: "A smart home control system using esp8266 and Blynk, enabling worldwide control of home appliances via internet.",
    technologies: ["ESP8266", "Blynk", "IoT"],
    icons: [SiEspressif, FaHome],
    type: "IoT Project"
  },
  {
    title: "Online Course Management System",
    description: "A web-based course management platform built with Java technologies and SQL database.",
    technologies: ["Servlet", "JSP", "SQL", "HTML/CSS"],
    icons: [FaJava, FaDatabase, FaCode],
    type: "Web Application"
  },
  {
    title: "Interactive Tic-Tac-Toe",
    description: "An interactive command-line game implemented in C featuring player vs computer gameplay.",
    technologies: ["C", "Algorithms"],
    icons: [SiCplusplus, FaCode],
    type: "Console Application"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#140a28] to-[#1a1a2f] text-white py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        >
          Projects
        </motion.h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-lg bg-white/10 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 border border-white/10"
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
    </div>
  );
}
