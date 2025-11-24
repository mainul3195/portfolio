"use client";
import { motion } from "framer-motion";
import { researchData } from "@/data/research";
import { FaFlask } from "react-icons/fa";

export default function ResearchInterests() {
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
                        <FaFlask className="text-cyan-400 text-2xl" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Research Interests
                        </h2>
                    </div>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {researchData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all ${item.items ? "md:col-span-2" : ""
                                }`}
                        >
                            <h3 className="text-xl font-bold text-cyan-300 mb-3">
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="text-slate-300 leading-relaxed">
                                    {item.description}
                                </p>
                            )}
                            {item.items && (
                                <ul className="space-y-3 mt-2">
                                    {item.items.map((subItem, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <span className="text-cyan-500 mt-1.5">▹</span>
                                            <span>{subItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
