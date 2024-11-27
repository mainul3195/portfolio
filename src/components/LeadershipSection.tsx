'use client';
import { motion } from 'framer-motion';
import { FaUsers, FaMedal, FaStar, FaAward } from 'react-icons/fa';
import { ModalType } from '@/types';

interface LeadershipSectionProps {
  onOpenModal: (modalType: ModalType) => void;
}

export default function LeadershipSection({ onOpenModal }: LeadershipSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Leadership & Activities
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore my journey through various leadership roles and community engagements
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Leadership Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-r from-rose-500/10 to-rose-600/10 border border-slate-700/50 p-6 shadow-[0_0_15px_rgba(244,63,94,0.15)]"
            onClick={() => onOpenModal('leadership')}
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl text-rose-400"
              >
                <FaUsers />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                  Leadership Experience
                </h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                  Leading and organizing various academic and community initiatives
                </p>
                <motion.p 
                  className="text-rose-400 mt-3 flex items-center gap-2 text-sm"
                  whileHover={{ x: 5 }}
                >
                  View Details <span className="text-lg">→</span>
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* President Scout Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-slate-700/50 p-6 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
            onClick={() => onOpenModal('president-scout')}
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl text-purple-400"
              >
                <FaMedal />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                  President Scout
                </h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                  Highest recognition in Bangladesh Scouts
                </p>
                <motion.p 
                  className="text-purple-400 mt-3 flex items-center gap-2 text-sm"
                  whileHover={{ x: 5 }}
                >
                  View Details <span className="text-lg">→</span>
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* CP Mentorship Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-r from-amber-500/10 to-amber-600/10 border border-slate-700/50 p-6 shadow-[0_0_15px_rgba(245,158,11,0.15)]"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl text-amber-400"
              >
                <FaStar />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                  CP Mentorship
                </h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                  Mentoring and training students in competitive programming
                </p>
              </div>
            </div>
          </motion.div>

          {/* Event Management Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-r from-green-500/10 to-green-600/10 border border-slate-700/50 p-6 shadow-[0_0_15px_rgba(34,197,94,0.15)]"
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl text-green-400"
              >
                <FaAward />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2 group-hover:text-white transition-colors">
                  Event Coordination
                </h3>
                <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                  Managing and coordinating major university events
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
    </section>
  );
}
