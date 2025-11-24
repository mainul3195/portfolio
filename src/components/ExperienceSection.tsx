"use client";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ExperienceSection() {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Experience
                    </h2>
                    <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                </motion.div>

                <div className="space-y-12">
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative border-l-2 border-slate-800 ml-3 md:ml-6 pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>

                            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 md:p-8 rounded-xl hover:border-blue-500/30 transition-all">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">
                                            {exp.company}
                                        </h3>
                                        <p className="text-blue-400 font-medium text-lg">
                                            {exp.role}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end gap-2">
                                        <span className="text-slate-400 font-medium bg-slate-800/50 px-3 py-1 rounded-full text-sm">
                                            {exp.duration}
                                        </span>
                                        {exp.website && (
                                            <a
                                                href={exp.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
                                            >
                                                Visit Company <FaExternalLinkAlt size={12} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-slate-300 mb-8">{exp.description}</p>

                                <div className="space-y-8">
                                    {exp.timeline.map((period, i) => (
                                        <div key={i} className="relative">
                                            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
                                                {period.title}
                                            </h4>
                                            <ul className="space-y-2 ml-4">
                                                {period.items.map((item, j) => (
                                                    <li key={j} className="flex items-start gap-3 text-slate-400">
                                                        <span className="text-blue-500 mt-1.5 text-xs">▹</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
