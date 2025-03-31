"use client";
import { usePathname, useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { useEffect, useState, useRef } from "react";

export default function FloatingContactButton() {
  const pathname = usePathname();
  const router = useRouter();
  const controls = useAnimation();
  const textControls = useAnimation();
  const [isExpanded, setIsExpanded] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to contract the button
  const contractButton = () => {
    // First hide the text
    textControls.start("contracted").then(() => {
      // Then contract the button after text is hidden
      controls.start("contracted");
    });
    setIsExpanded(false);
  };

  // Function to expand the button
  const expandButton = () => {
    // First expand the button
    controls.start("expanded").then(() => {
      // Then show the text after button is expanded
      textControls.start("expanded");
    });
    setIsExpanded(true);
  };

  // Initial contraction timer
  useEffect(() => {
    const timer = setTimeout(() => {
      contractButton();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Reset timer when expanded
  useEffect(() => {
    if (isExpanded) {
      // Clear any existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Set new timer to contract after 5 seconds of being expanded
      timerRef.current = setTimeout(() => {
        contractButton();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isExpanded]);

  const handleClick = () => {
    // If contracted, just expand and don't redirect
    if (!isExpanded) {
      expandButton();
    } else {
      // Navigate directly using router
      router.push("/contact");
    }
  };

  const buttonVariants = {
    expanded: {
      width: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      },
    },
    contracted: {
      width: "48px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.6,
      },
    },
  };

  const textVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      display: "block",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    contracted: {
      opacity: 0,
      x: 100,
      transitionEnd: {
        display: "none",
      },
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const iconVariants = {
    expanded: {
      marginRight: "8px",
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
    contracted: {
      marginRight: "0px",
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Don't render anything on the contact page
  if (pathname === "/contact") return null;

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.button
        className={`group flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-colors duration-300 overflow-hidden ${
          !isExpanded ? "floating-btn" : ""
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        variants={buttonVariants}
        initial="expanded"
        animate={controls}
        onClick={handleClick}
        style={{
          paddingRight: isExpanded ? "1.5rem" : "0",
          paddingLeft: isExpanded ? "1.5rem" : "0",
          height: "48px",
          width: isExpanded ? "auto" : "48px",
          aspectRatio: !isExpanded ? "1 / 1" : "auto",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          className={`flex items-center justify-center flex-shrink-0 ${
            !isExpanded ? "absolute inset-0 m-auto" : ""
          }`}
          variants={iconVariants}
          animate={controls}
          initial="expanded"
          style={{
            position: !isExpanded ? "absolute" : "relative",
            left: !isExpanded ? "50%" : "auto",
            transform: !isExpanded ? "translateX(-50%)" : "none",
          }}
        >
          <HiMail className="w-5 h-5" />
        </motion.div>

        {isExpanded && (
          <motion.span
            className="font-medium whitespace-nowrap ml-1"
            variants={textVariants}
            initial="expanded"
            animate={textControls}
          >
            Want to send me a message?
          </motion.span>
        )}
      </motion.button>
    </motion.div>
  );
}
