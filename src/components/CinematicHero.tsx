
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '../assets/aa.jpg';

const CinematicHero: React.FC = () => {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const subtitle = "Startup Founder | Full Stack Engineer | Tech Strategist";
    const cursor = cursorRef.current;
    
    if (cursor) {
      let i = 0;
      cursor.textContent = '';
      
      const typeWriter = () => {
        if (i < subtitle.length) {
          cursor.textContent += subtitle.charAt(i);
          i++;
          setTimeout(typeWriter, 80);
        }
      };
      
      setTimeout(typeWriter, 1500);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 px-3 sm:px-4 md:px-6">
      {/* Animated particles - Responsive */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-cyan-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Floating geometric shapes - Responsive */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 md:left-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-cyan-400/20 rounded-full animate-pulse" />
      <div className="absolute bottom-24 sm:bottom-32 right-8 sm:right-16 md:right-32 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 rounded-2xl animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/2 right-4 sm:right-10 md:right-20 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-purple-400/30 rotate-45 animate-spin" style={{ animationDuration: '8s' }} />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8 sm:mb-12"
          variants={itemVariants}
        >
          <div className="relative inline-block mb-6 sm:mb-8">
            <motion.div
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-400/20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={profileImage} 
                alt="Suyash Sawant" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight px-2"
            variants={itemVariants}
          >
            Suyash Sawant
          </motion.h1>
        </motion.div>
        
        <motion.div
          className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 min-h-[60px] sm:min-h-[80px] px-2"
          variants={itemVariants}
        >
          <span ref={cursorRef} className="border-r-2 border-cyan-400 animate-pulse"></span>
          <motion.div
            className="font-medium text-cyan-400 mt-4 sm:mt-6 text-xs sm:text-sm md:text-base lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
          >
            Building the future through code, design, and ambition.
          </motion.div>
        </motion.div>
        
        <motion.div
          className="w-20 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mb-8 sm:mb-12 md:mb-16"
          variants={itemVariants}
        />
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 px-2"
          variants={itemVariants}
        >
          <motion.a 
            href="#contact" 
            className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-full px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 group text-sm sm:text-base min-h-[44px] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Let's Connect</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ 
                scale: [1, 1.05, 1],
                transition: { duration: 0.6, repeat: Infinity }
              }}
            />
          </motion.a>
          <motion.a 
            href="#projects" 
            className="border border-cyan-400/30 text-cyan-400 px-6 sm:px-8 py-3 sm:py-4 font-medium rounded-full hover:bg-cyan-400/10 transition-colors backdrop-blur-sm text-sm sm:text-base min-h-[44px] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>
        
        <motion.div
          className="flex justify-center gap-4 sm:gap-6 md:gap-8 px-2"
          variants={containerVariants}
        >
          {[
            { href: "https://github.com/Suyashh-s", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/suyash-sawant-9a3898317/", icon: Linkedin, label: "LinkedIn" },
            { href: "#contact", icon: Mail, label: "Email" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('#') ? '_self' : '_blank'}
              rel={social.href.startsWith('#') ? '' : 'noopener noreferrer'}
              className="p-3 sm:p-4 border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-colors group backdrop-blur-sm hover:bg-cyan-400/5 min-h-[44px] min-w-[44px] flex items-center justify-center"
              variants={socialVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
            >
              <social.icon size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-cyan-400/70" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicHero;
