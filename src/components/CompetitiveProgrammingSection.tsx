'use client';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaMedal } from 'react-icons/fa';

export default function CompetitiveProgrammingSection() {
  return (
    <section id="competitiveprogramming" className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-slate-100"
        >
          Competitive Programming
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400 flex items-center gap-2">
              <FaCode className="text-blue-500" />
              Overview
            </h3>
            <ul className="space-y-2">
              {[
                "Solved more than 2500 problems in different online judges",
                "Expert (max 1815) in Codeforces"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Participations */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
              <FaTrophy className="text-purple-500" />
              Participations
            </h3>
            <ul className="space-y-2">
              {[
                "Fourteen Inter University Programming Contests",
                "ICPC Dhaka Regional 2020, 2021, and 2023",
                "2023 ICPC Asia West Continent Final Contest",
                "National Collegiate Programming Contest 2023",
                "SRBD Code Contest 2023 final round (Top 50)"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Special Mention */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-400 flex items-center gap-2">
              <FaMedal className="text-orange-500" />
              Special Mention
            </h3>
            <ul className="space-y-2">
              {[
                "6th in CoU-BRACNet Inter University Programming Contest 2023",
                "2nd Runner Up at Sylhet Bondhushova Programming Contest hosted by Leading University",
                "Officially 15th at ICPC Dhaka Regional 2023",
                "11th in SEC Junior Programming Contest",
                "7th at DUET IUPC 2025"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
