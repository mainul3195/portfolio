'use client';
import { motion } from 'framer-motion';
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

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Links */}
          <motion.p
            className="text-slate-300 text-lg font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Also find me on these platforms
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
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
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <motion.h3 
              className="text-slate-200 text-lg font-semibold mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Contact
            </motion.h3>
            <motion.div 
              className="text-slate-400 space-y-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p>mainulhasan20000@gmail.com</p>
              <p>Sylhet, Bangladesh</p>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div 
            className="text-slate-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {new Date().getFullYear()} Mainul Hasan. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
