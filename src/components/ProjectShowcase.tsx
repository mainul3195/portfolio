"use client";
import { motion } from "framer-motion";
import { projectsData, hackathonsData } from "@/data/projects";
import { FaDesktop, FaGithub, FaCode } from "react-icons/fa";
import React from "react";

export default function ProjectShowcase() {
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
                        <FaDesktop className="text-orange-400 text-2xl" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Projects & Hackathons
                        </h2>
                    </div>
                    <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all h-full flex flex-col"
                        >
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">
                                            {project.type}
                                        </span>
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-400 hover:text-white transition-colors"
                                        >
                                            <FaGithub size={22} />
                                        </a>
                                    )}
                                </div>

                                <p className="text-slate-400 text-sm mb-6 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-1.5 text-xs text-slate-300 bg-slate-800/50 px-2 py-1 rounded"
                                        >
                                            <span className={tech.color}>
                                                {React.createElement(tech.icon)}
                                            </span>
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Hackathons Section */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <FaCode className="text-indigo-400" />
                        Hackathon Participations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hackathonsData.map((hackathon, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl flex items-start gap-4"
                            >
                                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                                    <FaCode size={20} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">
                                        {hackathon.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        {hackathon.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
