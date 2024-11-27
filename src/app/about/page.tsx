'use client';

import { motion } from 'framer-motion';

const interests = [
  'Public Speaking',
  'Problem-Solving',
  'Teamwork',
  'Teaching & Mentoring',
  'Cycling',
  'Traveling',
  'Learning new technology'
];

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-100">
            About Me
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            An ambitious dreamer daring to make a difference, a well-rounded leader seeking knowledge across disciplines, and a compassionate son motivated to ease his parents' sacrifices.
          </p>
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/30 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/30"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-slate-100 text-center">
            Interests & Passions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-colors"
              >
                <p className="text-center text-slate-300 font-medium">
                  {interest}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
