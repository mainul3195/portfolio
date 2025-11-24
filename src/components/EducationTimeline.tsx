"use client";
import { motion } from "framer-motion";
import { education } from "@/data/education";
import React from "react";

export default function EducationTimeline() {
    return (
        <section className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Education
                    </h2>
                    <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-900"></div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-xl hover:border-indigo-500/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                    <div className="p-3 bg-slate-800 rounded-lg text-indigo-400">
                                        {React.createElement(edu.icon, { size: 24 })}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">
                                            {edu.institution}
                                        </h3>
                                        <p className="text-indigo-400 font-medium">{edu.degree}</p>
                                    </div>
                                    <div className="md:ml-auto text-slate-400 text-sm font-medium bg-slate-800/50 px-3 py-1 rounded-full w-fit">
                                        {edu.duration}
                                    </div>
                                </div>

                                <div className="text-slate-400 mb-4 flex items-center gap-2 text-sm">
                                    <span>📍 {edu.location}</span>
                                </div>

                                {edu.achievements && (
                                    <ul className="space-y-2">
                                        {edu.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2 text-slate-300 text-sm md:text-base">
                                                <span className="text-indigo-500 mt-1.5">•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
