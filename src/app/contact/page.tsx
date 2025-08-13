"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { Boxes } from "@/components/ui/background-boxes";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Sparkles Background */}
      <div
        className="absolute inset-0 w-full h-full opacity-40 backdrop-blur-[1px]"
        style={{ zIndex: 0 }}
      >
        <SparklesCore
          id="contact-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.4}
        />
      </div>

      {/* Background Boxes */}
      <div className="absolute inset-0 w-full h-full z-1 opacity-50">
        <Boxes />
      </div>

      <div className="max-w-3xl w-full mx-auto px-6 relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-slate-100 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Me
        </motion.h1>

        <motion.p
          className="text-slate-400 text-center mb-12 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Have a question or want to work together? Feel free to reach out!
        </motion.p>

        <ContactForm />
      </div>
    </div>
  );
}
