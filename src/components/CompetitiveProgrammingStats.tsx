"use client";
import { motion } from "framer-motion";
import { competitiveProgrammingData } from "@/data/competitiveProgramming";
import { FaLaptopCode, FaTrophy, FaCode, FaMedal } from "react-icons/fa";

export default function CompetitiveProgrammingStats() {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaLaptopCode className="text-blue-400 text-2xl" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Competitive Programming
                        </h2>
                    </div>
                    <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <FaCode className="text-blue-400 text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Overview</h3>
                        </div>
                        <ul className="space-y-4">
                            {competitiveProgrammingData.overview.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-300">
                                    <span className="text-blue-500 mt-1.5">▹</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Special Mentions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <FaTrophy className="text-blue-400 text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Achievements</h3>
                        </div>
                        <ul className="space-y-4">
                            {competitiveProgrammingData.specialMentions.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-300">
                                    <span className="text-blue-500 mt-1.5">▹</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Participations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition-all"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <FaMedal className="text-blue-400 text-xl" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Participations</h3>
                        </div>
                        <ul className="space-y-4">
                            {competitiveProgrammingData.participations.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-300">
                                    <span className="text-blue-500 mt-1.5">▹</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
