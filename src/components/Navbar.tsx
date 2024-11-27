'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaTrophy, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <FaHome />, href: '/' },
    { name: 'About Me', icon: <FaUser />, href: '/about' },
    { name: 'Contact', icon: <FaEnvelope />, href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 px-4 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className={`mx-auto transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/[0.02] shadow-[0_2px_8px_rgba(0,0,0,0.1)]' 
          : 'backdrop-blur-sm bg-transparent'
      } rounded-xl max-w-7xl border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.12)]`}>
        <div className="flex items-center justify-between px-4 py-2">
          {/* Logo/Name */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-semibold tracking-wide text-slate-100 cursor-pointer"
            >
              Mainul Hasan
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                    pathname === item.href 
                      ? 'text-slate-100' 
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-slate-100"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 px-4 border-t border-white/[0.05]"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05, x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center space-x-2 transition-colors cursor-pointer ${
                        pathname === item.href 
                          ? 'text-slate-100' 
                          : 'text-slate-300 hover:text-slate-100'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
