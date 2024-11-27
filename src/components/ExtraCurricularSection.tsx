'use client';
import { motion } from 'framer-motion';
import { FaCampground, FaPalette, FaTableTennis, FaStar, FaMedal } from 'react-icons/fa';

const extraCurricular = {
  scouting: {
    title: "President Scout Award",
    description: "Received 'President Scout Award' from the honorable president of Bangladesh in 2016",
    icon: <FaCampground className="w-12 h-12 text-yellow-500" />
  },
  arts: {
    title: "Arts & Cultural Activities",
    description: "Multiple achievements in drawing competitions and cultural activities",
    icon: <FaPalette className="w-12 h-12 text-pink-500" />,
    achievements: [
      "District Champion at Secondary level Drawing Competition - Bangladesh Shisu Academy",
      "20+ achievements in School level drawing competitions",
      "Multiple achievements in Recitation, Hamd-Naat, Azan and Qira'at"
    ]
  },
  sports: {
    title: "Sports Activities",
    description: "Active participation and achievements in various sports",
    icon: <FaTableTennis className="w-12 h-12 text-green-500" />,
    categories: [
      {
        title: "Table Tennis",
        achievements: [
          "Selected for University Team 2024",
          "Champion at Table Tennis (Double) - SUST indoor games-2023",
          "Champion at SUST CSE Intra Department Table Tennis (Double)",
          "2nd Runner-Up at Open Table Tennis Competition (Single)"
        ]
      },
      {
        title: "Chess",
        achievements: [
          "Top 20 in District Chess Workshop"
        ]
      }
    ]
  }
};

export default function ExtraCurricularSection() {
  return (
    <section id="extracurricular" className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-slate-100"
        >
          Extra-Curricular Activities
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Scouting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-center gap-4 mb-4">
              {extraCurricular.scouting.icon}
              <h3 className="text-xl font-semibold text-yellow-400">Scouting</h3>
            </div>
            <p className="text-gray-300">{extraCurricular.scouting.description}</p>
          </motion.div>

          {/* Arts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-center gap-4 mb-4">
              {extraCurricular.arts.icon}
              <h3 className="text-xl font-semibold text-pink-400">Arts & Cultural Activities</h3>
            </div>
            <p className="text-gray-300">{extraCurricular.arts.description}</p>
            <ul className="space-y-2">
              {extraCurricular.arts.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-300">
                  <FaStar className="text-yellow-500 mt-1 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="backdrop-blur-lg bg-white/[0.02] border border-white/[0.05] rounded-xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-center gap-4 mb-4">
              {extraCurricular.sports.icon}
              <h3 className="text-xl font-semibold text-green-400">{extraCurricular.sports.title}</h3>
            </div>
            <p className="text-gray-300 mb-4">{extraCurricular.sports.description}</p>
            <div className="space-y-6">
              {extraCurricular.sports.categories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-lg font-medium text-green-300 mb-2">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <FaMedal className="text-yellow-500 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
