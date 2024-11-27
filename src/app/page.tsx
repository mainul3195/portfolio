'use client';
import React, { useState } from 'react';
import { FaTrophy, FaLaptopCode, FaBrain, FaChalkboardTeacher, FaPalette, FaTableTennis, 
         FaJava, FaReact, FaNode, FaDatabase, FaCode, FaHome, FaCodeBranch, FaGithub,
         FaHtml5, FaCss3Alt, FaJs, FaGraduationCap, FaMedal, FaServer, FaDesktop,
         FaMobileAlt, FaTools, FaUserGraduate } from 'react-icons/fa';
import { SiKaggle, SiPython, SiTensorflow, SiMongodb, SiExpress, SiCplusplus, 
         SiEspressif, SiCodeforces, SiLeetcode, SiJavascript, SiTypescript, SiTailwindcss,
         SiNextdotjs, SiSpringboot, SiPostgresql, SiMysql, SiFirebase, SiGit,
         SiVisualstudiocode, SiPostman } from 'react-icons/si';
import { TbBrandNextjs, TbBrandCpp } from 'react-icons/tb';
import { motion } from 'framer-motion';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: "Competitive Programming",
      description: "Active participant in competitive programming contests on platforms like Codeforces, LeetCode, and HackerRank. Solved 500+ algorithmic problems.",
      technologies: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
      icons: [SiCodeforces, SiLeetcode, TbBrandCpp, FaLaptopCode, FaBrain],
      type: "Algorithmic Problem Solving"
    },
    {
      title: "iShopNow",
      description: "A user-friendly e-commerce website built with the MERN stack, featuring modern design and full e-commerce functionality.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "TypeScript"],
      icons: [SiMongodb, SiExpress, FaReact, FaNode, FaCode, SiTypescript],
      type: "Full Stack"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js 13, TypeScript, and Tailwind CSS, featuring smooth animations and responsive design.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icons: [SiNextdotjs, SiTypescript, SiTailwindcss, FaReact],
      type: "Frontend Development"
    },
    {
      title: "Pigeonnier",
      description: "An Email Client Software using JavaFX that provides all Gmail website functionalities plus additional features.",
      technologies: ["Java", "JavaFX", "Spring Boot", "PostgreSQL"],
      icons: [FaJava, FaDesktop, SiSpringboot, SiPostgresql],
      type: "Desktop Application"
    },
    {
      title: "IOT-Based Home Control System",
      description: "A smart home control system using esp8266 and Blynk, enabling worldwide control of home appliances via internet.",
      technologies: ["ESP8266", "Blynk", "IoT", "C++"],
      icons: [SiEspressif, FaHome, FaMobileAlt, TbBrandCpp],
      type: "IoT Project"
    },
    {
      title: "Online Course Management System",
      description: "A web-based course management platform built with Java technologies and SQL database.",
      technologies: ["Java", "Spring Boot", "MySQL", "HTML/CSS"],
      icons: [FaJava, SiSpringboot, SiMysql, FaServer],
      type: "Web Application"
    }
  ];

  const achievements = [
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "CP Excellence",
      desc: "1000+ problems solved across platforms",
      color: "from-blue-400/20 to-blue-600/20"
    },
    {
      icon: <FaUserGraduate className="w-8 h-8" />,
      title: "Academic Excellence",
      desc: "CGPA 3.92/4.00",
      color: "from-purple-400/20 to-purple-600/20"
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: "President Scout",
      desc: "Highest national scouting award",
      color: "from-yellow-400/20 to-yellow-600/20"
    },
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: "Competitions",
      desc: "Multiple hackathon winner",
      color: "from-green-400/20 to-green-600/20"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending...' });

    try {
      // Add your form submission logic here
      // For now, just simulating a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="container mx-auto px-6 overflow-hidden dark:bg-gray-900">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 blur-3xl -z-10"></div>
          <motion.div 
            className="glass-effect rounded-2xl p-8 md:p-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Hi, I'm Mainul Hasan
            </h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Competitive Programmer | ML Enthusiast | Academic Excellence
            </motion.p>
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
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Grid */}
      <motion.section 
        className="py-16"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {/* Cards */}
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                variants={item}
                className="gradient-border p-6"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`rounded-xl p-4 bg-gradient-to-br ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4 text-white">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-20"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
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
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-16"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, items]) => (
              <motion.div
                key={category}
                className="backdrop-blur-lg bg-white/10 rounded-xl p-6 border border-white/10"
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
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center"
          >
            Get in Touch
          </motion.h2>

          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6 backdrop-blur-lg bg-white/10 rounded-xl p-8 border border-white/10"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>

            {status.message && (
              <div className={`text-sm ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                {status.message}
              </div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
}
