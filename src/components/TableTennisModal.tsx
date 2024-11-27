'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaTableTennis } from 'react-icons/fa';

interface TableTennisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TableTennisModal({
  isOpen,
  onClose
}: TableTennisModalProps) {
  if (!isOpen) return null;

  const achievements = [
    'Selected for University Team 2024',
    'Champion at Table Tennis (Double) - SUST indoor games-2023',
    'Champion at SUST CSE Intra Department Table Tennis (Double)',
    '2nd Runner-Up at Open Table Tennis Competition (Single)'
  ];

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
              <FaTableTennis className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
                Table Tennis Achievements
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-100 transition-colors"
            >
              <IoClose className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start text-slate-300"
                >
                  <span className="text-green-400 mr-2">•</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
