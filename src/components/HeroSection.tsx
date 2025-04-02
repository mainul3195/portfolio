"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

export default function HeroSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Sparkles Background */}
      <div
        className="absolute inset-0 w-full h-full opacity-90"
        style={{ zIndex: 0 }}
      >
        {/* Direct blur filter on sparkles container */}
        <div className="w-full h-full" style={{ filter: "blur(6px)" }}>
          <SparklesCore
            id="landing-sparkles"
            background="transparent"
            minSize={2.0}
            maxSize={4.0}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={0.2}
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl md:text-3xl text-slate-300 mb-2 animate-float"
          >
            Hi, I'm
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-blue-400"
          >
            Mainul Hasan
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-xl md:text-2xl text-slate-300 mb-8"
          >
            A Technology Enthusiast & Problem Solver
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              An ambitious dreamer daring to make a difference, a well-rounded
              leader seeking knowledge across disciplines, and a compassionate
              son motivated to ease his parents' sacrifices.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <motion.a
            href="/contact"
            className="relative overflow-hidden glass-effect px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Get in Touch</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              whileHover={{
                backgroundPosition: ["0% 50%", "100% 50%"],
                transition: { duration: 1, repeat: Infinity },
              }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
