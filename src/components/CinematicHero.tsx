
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import profileImage from '../assets/aa.jpg';

const CinematicHero: React.FC = () => {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const subtitle = "Street Coder | Full Stack Hustler | Digital Kingpin";
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
        duration: 0.8
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black px-3 sm:px-4 md:px-6">
      {/* GTA-style neon grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff00" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Neon light effects */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>
      <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60"></div>
      <div className="absolute right-0 top-0 w-2 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent opacity-60"></div>

      {/* Floating neon particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['#00ff00', '#ff00ff', '#00ffff', '#ffff00'][Math.floor(Math.random() * 4)],
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            boxShadow: `0 0 10px currentColor`
          }}
        />
      ))}

      {/* Geometric neon shapes */}
      <div className="absolute top-16 sm:top-20 left-4 sm:left-10 md:left-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 border-green-400 rounded-full animate-pulse" style={{boxShadow: '0 0 20px #00ff00'}} />
      <div className="absolute bottom-24 sm:bottom-32 right-8 sm:right-16 md:right-32 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg animate-bounce border border-purple-400" style={{ animationDuration: '3s', boxShadow: '0 0 15px #ff00ff' }} />
      <div className="absolute top-1/2 right-4 sm:right-10 md:right-20 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-2 border-cyan-400 rotate-45 animate-spin" style={{ animationDuration: '8s', boxShadow: '0 0 15px #00ffff' }} />

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
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-green-400 shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              style={{boxShadow: '0 0 30px #00ff00, inset 0 0 30px rgba(0,255,0,0.1)'}}
            >
              <img 
                src={profileImage} 
                alt="Suyash Sawant" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-green-400/20 via-purple-500/20 to-cyan-400/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            />
          </div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight px-2"
            variants={itemVariants}
            style={{
              background: 'linear-gradient(45deg, #00ff00, #ff00ff, #00ffff, #ffff00)',
              backgroundSize: '400% 400%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientShift 3s ease infinite',
              textShadow: '0 0 30px rgba(0,255,0,0.5)'
            }}
          >
            SUYASH SAWANT
          </motion.h1>
        </motion.div>
        
        <motion.div
          className="text-sm sm:text-base md:text-xl lg:text-2xl text-green-300 mb-8 sm:mb-12 min-h-[60px] sm:min-h-[80px] px-2 font-mono"
          variants={itemVariants}
        >
          <span ref={cursorRef} className="border-r-2 border-green-400 animate-pulse" style={{textShadow: '0 0 10px #00ff00'}}></span>
          <motion.div
            className="font-medium text-purple-400 mt-4 sm:mt-6 text-xs sm:text-sm md:text-base lg:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            style={{textShadow: '0 0 10px #ff00ff'}}
          >
            Running the digital streets, one line of code at a time.
          </motion.div>
        </motion.div>
        
        <motion.div
          className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-green-400 via-purple-500 to-cyan-400 mx-auto mb-8 sm:mb-12 md:mb-16 rounded-full"
          variants={itemVariants}
          style={{boxShadow: '0 0 20px rgba(0,255,0,0.5)'}}
        />
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 px-2"
          variants={itemVariants}
        >
          <motion.a 
            href="#contact" 
            className="relative overflow-hidden bg-gradient-to-r from-green-500 to-purple-600 text-black font-bold rounded-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 group text-sm sm:text-base min-h-[44px] flex items-center justify-center border-2 border-green-400 font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              textShadow: '0 0 10px rgba(0,0,0,0.8)',
              boxShadow: '0 0 20px rgba(0,255,0,0.5), inset 0 0 20px rgba(0,255,0,0.1)'
            }}
          >
            <span className="relative z-10">CONNECT NOW</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ 
                scale: [1, 1.05, 1],
                transition: { duration: 0.6, repeat: Infinity }
              }}
            />
          </motion.a>
          <motion.a 
            href="#projects" 
            className="border-2 border-purple-400 text-purple-400 px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-lg hover:bg-purple-400/10 transition-colors backdrop-blur-sm text-sm sm:text-base min-h-[44px] flex items-center justify-center font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              textShadow: '0 0 10px #ff00ff',
              boxShadow: '0 0 20px rgba(255,0,255,0.3)'
            }}
          >
            VIEW PORTFOLIO
          </motion.a>
        </motion.div>
        
        <motion.div
          className="flex justify-center gap-4 sm:gap-6 md:gap-8 px-2"
          variants={containerVariants}
        >
          {[
            { href: "https://github.com/Suyashh-s", icon: Github, label: "GitHub", color: "#00ff00" },
            { href: "https://www.linkedin.com/in/suyash-sawant-9a3898317/", icon: Linkedin, label: "LinkedIn", color: "#00ffff" },
            { href: "#contact", icon: Mail, label: "Email", color: "#ff00ff" }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('#') ? '_self' : '_blank'}
              rel={social.href.startsWith('#') ? '' : 'noopener noreferrer'}
              className="p-3 sm:p-4 border-2 rounded-xl transition-all duration-300 group backdrop-blur-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
              variants={socialVariants}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              aria-label={social.label}
              style={{
                borderColor: social.color,
                boxShadow: `0 0 15px ${social.color}30`
              }}
            >
              <social.icon 
                size={20} 
                className="transition-colors" 
                style={{
                  color: social.color,
                  filter: `drop-shadow(0 0 5px ${social.color})`
                }}
              />
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
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-green-400" style={{filter: 'drop-shadow(0 0 10px #00ff00)'}} />
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default CinematicHero;
