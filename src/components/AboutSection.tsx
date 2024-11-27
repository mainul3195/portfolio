'use client';
import { motion } from 'framer-motion';
import { FaMicrophone, FaCode, FaUsers, FaChalkboardTeacher, FaBiking, FaPlane, FaLaptopCode } from 'react-icons/fa';
import { FaLaptop, FaGamepad, FaBook, FaCamera, FaMusic } from 'react-icons/fa';
import { TbMath } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';

const interests = [
  {
    icon: <FaMicrophone className="w-6 h-6 text-blue-400" />,
    title: "Public Speaking",
    description: "Passionate about sharing ideas and knowledge"
  },
  {
    icon: <FaCode className="w-6 h-6 text-purple-400" />,
    title: "Problem-Solving",
    description: "Love tackling complex challenges and finding solutions"
  },
  {
    icon: <FaUsers className="w-6 h-6 text-green-400" />,
    title: "Teamwork",
    description: "Thrive in collaborative environments"
  },
  {
    icon: <FaChalkboardTeacher className="w-6 h-6 text-cyan-400" />,
    title: "Teaching & Mentoring",
    description: "Enjoy helping others learn and grow"
  },
  {
    icon: <FaBiking className="w-6 h-6 text-rose-400" />,
    title: "Cycling",
    description: "Why not a morning ride?"
  },
  {
    icon: <FaPlane className="w-6 h-6 text-yellow-400" />,
    title: "Traveling",
    description: "Love exploring new places and cultures"
  },
  {
    icon: <FaLaptopCode className="w-6 h-6 text-blue-400" />,
    title: "Learning new technology",
    description: "Always eager to explore emerging technologies"
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-slate-100 text-center"
        >
          About Me
        </motion.h2>

        {/* Interests & Passions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-slate-200">Interests & Passions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group backdrop-blur-lg bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                    {interest.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-200 mb-2">{interest.title}</h4>
                    <p className="text-slate-400">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-xl blur opacity-75" />
          <div className="relative backdrop-blur-lg bg-slate-900/90 border border-slate-800/50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-blue-500/50 rounded-full" />
              <h3 className="text-2xl font-bold text-slate-200">My Journey</h3>
              <div className="h-1 flex-grow bg-blue-500/50 rounded-full" />
            </div>
            
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-sm text-slate-400 italic mb-4">This is a booring paragraph, you should skip!</p>
              
              <p>
                Because of my fathers's job, I moved around to different places in my childhood. But during my school years, I finally settled in Tangail. I finished high school at Bindubasini Govt Boys' High School, and then luck had me leave my family behind to move to Dhaka for Notre Dame College.
              </p>

              <p>
                From my school days, I was always curious about technology. I was fascinated by how things worked around me. In college, I discovered programming and found it to be a lot of fun. After a particular silly incident, I decided to dive into programming. With my limited knowledge, I realized that Computer Science and Engineering (CSE) was the perfect blend of technology and programming. So, I set my sights on CSE.
              </p>

              <p>
                After many ups and downs, I ended up in Sylhet, a peaceful city, a city of greenery, leaving the hustle and bustle of Dhaka behind, to study CSE at SUST. I don't know if I'll be able to keep up with the pace, but I'm willing to give it a shot. The rest is in the hands of Almighty Allah.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
