'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { ModalType } from '@/types';

interface AchievementCardProps {
  icon: ReactNode;
  title: string;
  modalType: ModalType;
  color: string;
  glow: string;
  onOpenModal: (modalType: ModalType) => void;
}

export default function AchievementCard({
  icon,
  title,
  modalType,
  color,
  glow,
  onOpenModal
}: AchievementCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
      }}
      animate={{ 
        y: [0, -10, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      whileHover={{ 
        scale: 1.05,
        y: -15,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={`group relative overflow-hidden rounded-xl backdrop-blur-[2px] ${color} border border-white/10 p-3 sm:p-4 cursor-pointer transition-all duration-300 ${glow} hover:border-white/20 shadow-lg hover:shadow-xl`}
      onClick={() => onOpenModal(modalType)}
    >
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 pointer-events-none" />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center gap-2 sm:gap-4"
        initial={{ y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        {/* Icon */}
        <div className="w-8 h-8 sm:w-10 sm:h-10">
          {icon}
        </div>
        
        {/* Title */}
        <h3 className="text-sm sm:text-base font-medium text-white/90 text-center">
          {title}
        </h3>
      </motion.div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-2 left-0 right-0 text-center">
          <p className="text-xs text-white/70 font-medium">Click to learn more</p>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
        <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm" />
      </div>
    </motion.div>
  );
}
