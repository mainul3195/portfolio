'use client';
import { motion } from 'framer-motion';
import { FaUsers, FaHandHoldingHeart, FaUserTie, FaLaptopCode, FaHospital, FaFlag } from 'react-icons/fa';
import { ModalType } from '@/types';

interface LeadershipSectionProps {
  onOpenModal: (modalType: ModalType) => void;
}

export default function LeadershipSection({ onOpenModal }: LeadershipSectionProps) {
  const activities = [
    {
      icon: <FaFlag />,
      title: "Scout Leadership",
      description: "Former Senior Patrol Leader of Bindubashini Govt. Boys' High School Scout Group",
      color: "from-blue-500/5 to-blue-600/10",
      borderColor: "border-blue-500/10",
      iconColor: "text-blue-400"
    },
    {
      icon: <FaLaptopCode />,
      title: "CP Mentorship",
      description: "Competitive Programming mentor of SUST Competitive Programming Community",
      color: "from-purple-500/5 to-purple-600/10",
      borderColor: "border-purple-500/10",
      iconColor: "text-purple-400"
    },
    {
      icon: <FaUserTie />,
      title: "Training Coordinator",
      description: "Former Coordinator & Trainer of SUST Competitive Programming Training Camp",
      color: "from-emerald-500/5 to-emerald-600/10",
      borderColor: "border-emerald-500/10",
      iconColor: "text-emerald-400"
    },
    {
      icon: <FaUsers />,
      title: "Event Coordination",
      description: "Coordinator of IUPC volunteers for SUST CSE Carnival 2024",
      color: "from-rose-500/5 to-rose-600/10",
      borderColor: "border-rose-500/10",
      iconColor: "text-rose-400"
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Student Organization",
      description: "Former Assistant Organizing Secretary of Tangail Students' Association, SUST",
      color: "from-amber-500/5 to-amber-600/10",
      borderColor: "border-amber-500/10",
      iconColor: "text-amber-400"
    },
    {
      icon: <FaLaptopCode />,
      title: "University Training",
      description: "Competitive Programming Trainer at Sylhet International University",
      color: "from-indigo-500/5 to-indigo-600/10",
      borderColor: "border-indigo-500/10",
      iconColor: "text-indigo-400"
    },
    {
      icon: <FaHospital />,
      title: "Community Service",
      description: "Participation in Free Medical Camps",
      color: "from-cyan-500/5 to-cyan-600/10",
      borderColor: "border-cyan-500/10",
      iconColor: "text-cyan-400"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
            Leadership & Voluntary Activities
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of leadership roles and community service activities that have shaped my professional growth and commitment to giving back.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`relative group backdrop-blur-lg bg-gradient-to-br ${activity.color} 
                border ${activity.borderColor} rounded-xl p-6 
                shadow-[0_8px_32px_rgba(0,0,0,0.12)] 
                hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                transition-all duration-300`}
            >
              {/* Glass overlay effect */}
              <div className="absolute inset-0 rounded-xl bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`${activity.iconColor} text-3xl mb-4 transform transition-transform group-hover:scale-110 duration-300`}>
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">
                  {activity.title}
                </h3>
                <p className="text-slate-300">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
