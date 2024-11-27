'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaLaptopCode } from 'react-icons/fa';

interface CompetitiveProgrammingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompetitiveProgrammingModal({
  isOpen,
  onClose
}: CompetitiveProgrammingModalProps) {
  if (!isOpen) return null;

  const achievements = {
    general: [
      'Solved more than 2500 problems in different online judges.',
      'Participated in nine Inter University Programming Contests (RUET, SUST(2), AUST, CUET, SEC, CoU, BUET)',
      'Participated in ICPC Dhaka Regional 2020, 2021, and 2023',
      'Participated in 2023 ICPC Asia West Continent Final Contest',
      'Participated in National Collegiate Programming Contest 2023',
      'Participated in SRBD Code Contest 2023 final round (Top 50)'
    ],
    special: [
      '6th in CoU-BRACNet Inter University Programming Contest 2023',
      '2nd Runner Up at Sylhet Bondhushova Programming Contest hosted by Leading University',
      'Officially 15th at ICPC Dhaka Regional 2023',
      '11th in SEC Junior Programming Contest',
      '21th in NCPC 2023'
    ]
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-900 border border-slate-800 rounded-xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <FaLaptopCode className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
                Competitive Programming
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-slate-200 mb-4">
                Achievements & Participations
              </h3>
              <ul className="space-y-3">
                {achievements.general.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start text-slate-300"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-slate-200 mb-4">
                Special Mention
              </h3>
              <ul className="space-y-3">
                {achievements.special.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start text-slate-300"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
