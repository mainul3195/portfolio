"use client";
import { motion } from "framer-motion";
import { presidentScoutData } from "@/data/presidentScout";
import { tableTennisData } from "@/data/tableTennis";
import { highSchoolData } from "@/data/highSchool";
import { FaAward, FaTableTennis, FaPalette } from "react-icons/fa";

export default function OtherAchievements() {
    return (
        <section className="py-20 bg-slate-900/30">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Beyond Coding
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Exploring other passions and achievements that shape who I am.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* President Scout */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-yellow-500/30 transition-all text-center group"
                    >
                        <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <FaAward className="text-yellow-400 text-3xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            {presidentScoutData.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed">
                            {presidentScoutData.description}
                        </p>
                    </motion.div>

                    {/* Table Tennis */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-purple-500/30 transition-all text-center group"
                    >
                        <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <FaTableTennis className="text-purple-400 text-3xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            {tableTennisData.title}
                        </h3>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            {tableTennisData.achievements.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* High School */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-rose-500/30 transition-all text-center group"
                    >
                        <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <FaPalette className="text-rose-400 text-3xl" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            {highSchoolData.title}
                        </h3>
                        <p className="text-slate-400 mb-4 text-sm">
                            {highSchoolData.description}
                        </p>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            {highSchoolData.activities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
