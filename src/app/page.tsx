'use client';
import React, { useState } from 'react';
import { FaTrophy, FaLaptopCode, FaBrain, FaChalkboardTeacher, FaPalette, FaTableTennis, 
         FaJava, FaReact, FaNode, FaDatabase, FaCode, FaHome, FaCodeBranch, FaGithub,
         FaHtml5, FaCss3Alt, FaJs, FaGraduationCap, FaMedal, FaServer, FaDesktop,
         FaMobileAlt, FaTools, FaUserGraduate, FaHandsHelping, FaStar, FaGamepad,
         FaAward, FaCampground } from 'react-icons/fa';
import { SiKaggle, SiPython, SiTensorflow, SiMongodb, SiExpress, SiCplusplus, 
         SiEspressif, SiCodeforces, SiLeetcode, SiJavascript, SiTypescript, SiTailwindcss,
         SiNextdotjs, SiSpringboot, SiPostgresql, SiMysql, SiFirebase, SiGit,
         SiVisualstudiocode, SiPostman } from 'react-icons/si';
import { TbBrandNextjs, TbBrandCpp } from 'react-icons/tb';
import { motion } from 'framer-motion';
import EducationModal from '@/components/EducationModal';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your public key

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
  });

  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);

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

  const achievements = [
    {
      icon: <FaLaptopCode className="w-8 h-8" />,
      title: "CP Excellence",
      desc: "2500+ problems solved across platforms",
      color: "from-blue-400/20 to-blue-600/20"
    },
    {
      icon: <FaUserGraduate className="w-8 h-8" />,
      title: "Academic Excellence",
      desc: "CGPA 3.97/4.00",
      color: "from-purple-400/20 to-purple-600/20"
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "President Scout",
      desc: "Awarded by President of Bangladesh",
      color: "from-yellow-400/20 to-yellow-600/20"
    },
    {
      icon: <FaMedal className="w-8 h-8" />,
      title: "Table Tennis",
      desc: "University Team Player 2024",
      color: "from-green-400/20 to-green-600/20"
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
    arts: [
      "District Champion at Secondary level Drawing Competition - Bangladesh Shisu Academy",
      "20+ achievements in School level drawing competitions",
      "Multiple achievements in Recitation, Hamd-Naat, Azan and Qira'at"
    ],
    sports: [
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'info', message: 'Sending...' });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  };

  return (
    <div className="container mx-auto px-6 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center py-20">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-slate-400/20 opacity-10 blur-3xl -z-10"></div>
          <motion.div 
            className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
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
      </section>

      {/* Achievements Grid */}
      <section id="achievements" className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => {
                  if (achievement.title === "Academic Excellence") {
                    setIsEducationModalOpen(true);
                  }
                }}
                style={{ cursor: achievement.title === "Academic Excellence" ? "pointer" : "default" }}
              >
                <div className="flex flex-col items-center text-center">
                  {achievement.icon}
                  <h3 className="text-xl font-semibold mt-4">{achievement.title}</h3>
                  <p className="text-gray-400 mt-2">{achievement.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership & Activities Section */}
      <section id="leadership" className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12 text-slate-100"
          >
            Leadership & Activities
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {leadershipActivities.leadership.map((item, index) => (
                <div key={index} className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                  <h3 className="text-xl font-semibold text-purple-300">{item.title}</h3>
                  <p className="text-yellow-400 mt-1">{item.role}</p>
                  <p className="text-gray-400 mt-2">{item.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Voluntary Activities</h3>
              <ul className="space-y-3">
                {leadershipActivities.voluntary.map((activity, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <FaHandsHelping className="text-green-500" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
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
                <FaPalette className="w-12 h-12 text-purple-500" />
                <h3 className="text-xl font-semibold text-purple-300">Arts & Culture</h3>
              </div>
              <ul className="space-y-2">
                {extraCurricular.arts.map((achievement, index) => (
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
                <FaTableTennis className="w-12 h-12 text-green-500" />
                <h3 className="text-xl font-semibold text-green-300">Sports</h3>
              </div>
              {extraCurricular.sports.map((sport, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-lg font-medium text-blue-300 mb-2">{sport.title}</h4>
                  <ul className="space-y-2">
                    {sport.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <FaMedal className="text-yellow-500 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6 backdrop-blur-lg bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 shadow-lg shadow-blue-500/20"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Education Modal */}
      <EducationModal 
        isOpen={isEducationModalOpen} 
        onClose={() => setIsEducationModalOpen(false)} 
      />
    </div>
  );
}
