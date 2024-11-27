'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';

export default function FloatingContactButton() {
  const pathname = usePathname();

  // Don't show the button on the contact page
  if (pathname === '/contact') return null;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }}
    >
      <Link href="/contact">
        <motion.button
          className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <HiMail className="w-5 h-5" />
          <span className="font-medium">Want to send me a message?</span>
        </motion.button>
      </Link>
    </motion.div>
  );
}
