'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa';
import { useEffect } from 'react';
import { lockScroll, unlockScroll } from '@/utils/scrollLock';

interface LeadershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const leadershipRoles = [
  "Former Senior Patrol Leader of Bindubashini Govt. Boys' High School Scout Group",
  "Competitive Programming mentor of SUST Competitive Programming Community",
  "Current Coordinator & Trainer of SUST Competitive Programming Training Camp",
  "Coordinator of IUPC volunteers for SUST CSE Carnival 2024",
  "Former Assistant Organizing Secretary of Tangail Students' Association, SUST",
  "Competitive Programming Trainer at Sylhet International University"
];

export default function LeadershipModal({ isOpen, onClose }: LeadershipModalProps) {
  useEffect(() => {
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => unlockScroll();
  }, [isOpen]);

  if (!isOpen) return null;

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
          className="relative w-full max-w-3xl backdrop-blur-lg bg-slate-900/90 border border-slate-700/50 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-h-[80vh] overflow-hidden"
        >
          <div className="overflow-y-auto h-full max-h-[80vh] px-6 pb-6 pt-16 scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500">
            <h2 className="text-3xl font-bold mb-8 text-slate-100 flex items-center gap-3">
              <FaUsers className="w-8 h-8 text-rose-400" />
              Leadership Roles
            </h2>

            <div className="space-y-4">
              {leadershipRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-lg bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 shadow-lg hover:bg-slate-800/70 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-rose-400 mt-1">•</span>
                    <p className="text-slate-300">{role}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
