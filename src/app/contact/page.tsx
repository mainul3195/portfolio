'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-3xl w-full mx-auto px-6">
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