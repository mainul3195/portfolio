'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { SiCodeforces } from 'react-icons/si';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/mainu1.hasan',
    icon: FaFacebook,
    hoverColor: 'hover:text-blue-500'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mainul-hasan-58289a212/',
    icon: FaLinkedin,
    hoverColor: 'hover:text-blue-600'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/mainul3195',
    icon: FaGithub,
    hoverColor: 'hover:text-slate-400'
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/ammelid',
    icon: SiCodeforces,
    hoverColor: 'hover:text-blue-500'
  },
  {
    name: 'Email',
    url: 'mailto:mainulhasan20000@gmail.com',
    icon: HiMail,
    hoverColor: 'hover:text-red-400'
  }
];

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

        {/* Social Media Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold text-slate-200 mb-6">Also find me on these platforms</h2>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-slate-400 transition-colors ${link.hoverColor}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="w-8 h-8" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}