'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { education } from '@/data/education';
import React from 'react';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EducationModal({ isOpen, onClose }: EducationModalProps) {
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
          {/* Custom Scrollbar Container */}
          <div className="overflow-y-auto h-full max-h-[80vh] px-6 pb-6 pt-16 scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500">
            <h2 className="text-3xl font-bold mb-8 text-slate-100">Education</h2>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="backdrop-blur-lg bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 shadow-lg hover:bg-slate-800/70 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-slate-400">
                      {React.createElement(edu.icon)}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-slate-100">{edu.institution}</h3>
                      <p className="text-slate-300 font-medium">{edu.degree}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-400">
                        <span>{edu.duration}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                      </div>
                      {edu.achievements && (
                        <ul className="mt-4 space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300">
                              <span className="text-slate-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
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
