'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaGraduationCap, FaMedal } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    {
      title: 'Competitive Programming',
      icon: <FaCode className="text-4xl text-blue-500" />,
      items: [
        'Codeforces: Expert (1600+)',
        'Solved 500+ problems across different platforms',
        'Regular participant in programming contests'
      ]
    },
    {
      title: 'Academic Excellence',
      icon: <FaGraduationCap className="text-4xl text-green-500" />,
      items: [
        'CGPA: 3.92/4.00',
        'Department Position: 4th',
        'Merit Scholarship Recipient'
      ]
    },
    {
      title: 'Leadership & Activities',
      icon: <FaTrophy className="text-4xl text-yellow-500" />,
      items: [
        'Programming Club President',
        'Organized multiple coding competitions',
        'Mentored junior programmers'
      ]
    },
    {
      title: 'Extra-Curricular',
      icon: <FaMedal className="text-4xl text-purple-500" />,
      items: [
        'Winner of University Programming Contest',
        'Participant in ICPC Dhaka Regional',
        'Best Project Award in Software Exhibition'
      ]
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
          Achievements
        </motion.h1>
        
        <motion.p
          className="text-slate-400 text-center mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A collection of my notable accomplishments and milestones
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="backdrop-blur-lg bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
            >
              <div className="flex items-center space-x-4 mb-6">
                {achievement.icon}
                <h2 className="text-2xl font-bold text-slate-100">
                  {achievement.title}
                </h2>
              </div>
              <ul className="space-y-3">
                {achievement.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                    className="text-slate-300 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
