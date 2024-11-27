'use client';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode } from 'react-icons/fa';

export default function CompetitiveProgrammingSection() {
  return (
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
              {[
                "Officially 15th at ICPC Dhaka Regional 2023",
                "Participated in 2023 ICPC Asia West Continent Final Contest",
                "6th in CoU-BRACNet Inter University Programming Contest 2023",
                "2nd Runner Up at Sylhet Bondhushova Programming Contest",
                "11th in SEC Junior Programming Contest",
                "21th in NCPC 2023",
                "Participated in SRBD Code Contest 2023 final round (Top 50)"
              ].map((achievement, index) => (
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
              {[
                "Solved more than 2500 problems in different online judges",
                "Participated in nine Inter University Programming Contests",
                "Participated in ICPC Dhaka Regional 2020, 2021, and 2023"
              ].map((exp, index) => (
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
  );
}
