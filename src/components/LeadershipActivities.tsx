"use client";
import { motion } from "framer-motion";
import { leadershipData } from "@/data/leadership";
import { FaUsers } from "react-icons/fa";
import React from "react";

export default function LeadershipActivities() {
    return (
        <section className="py-20 bg-slate-900/30">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <FaUsers className="text-rose-400 text-2xl" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Leadership & Activities
                        </h2>
                    </div>
                    <div className="h-1 w-20 bg-rose-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {leadershipData.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-rose-500/30 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 bg-slate-800 rounded-lg ${category.color}`}>
                                    {React.createElement(category.icon, { size: 20 })}
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    {category.category}
                                </h3>
                            </div>

                            <ul className="space-y-4">
                                {category.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-300">
                                        <span className={`mt-1.5 text-xs ${category.color}`}>●</span>
                                        <span className="text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
