
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Users, Target } from 'lucide-react';

const CinematicAbout: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const achievements = [
    {
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      title: "Code Architect",
      description: "5+ years building bulletproof systems that never go down",
      color: "#00ff00"
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      title: "Digital Kingpin",
      description: "Founded multiple tech empires, conquered 10K+ users",
      color: "#ff00ff"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      title: "Crew Leader",
      description: "Built and led elite dev teams across the digital underworld",
      color: "#00ffff"
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      title: "Tech Hustler",
      description: "AI/ML specialist running automated heists on business problems",
      color: "#ffff00"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Neon grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff00" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>
      </div>

      {/* Neon light strips */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60" style={{boxShadow: '0 0 20px #ff00ff'}}></div>
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60" style={{boxShadow: '0 0 20px #00ff00'}}></div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-left mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-tight font-mono"
                variants={itemVariants}
                style={{
                  background: 'linear-gradient(45deg, #00ff00, #ff00ff)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(0,255,0,0.5)'
                }}
              >
                RUNNING THE DIGITAL STREETS
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-green-300 leading-relaxed font-mono"
                variants={itemVariants}
                style={{textShadow: '0 0 10px rgba(0,255,0,0.3)'}}
              >
                Street-smart developer and startup founder who codes like a boss and builds like a legend. 
                Currently running <span className="text-purple-400 font-bold" style={{textShadow: '0 0 10px #ff00ff'}}>next-gen AI operations</span> that 
                dominate the digital game.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base md:text-lg text-cyan-400 leading-relaxed font-mono"
                variants={itemVariants}
                style={{textShadow: '0 0 10px rgba(0,255,255,0.3)'}}
              >
                From computer vision to business automation, I combine raw technical power 
                with street-smart hustle to create products that rule the digital underworld.
              </motion.p>
            </div>

            {/* Stats - Responsive Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
              variants={itemVariants}
            >
              <div className="bg-black/60 border-2 border-green-400 p-3 sm:p-4 md:p-6 text-center rounded-lg backdrop-blur-sm" style={{boxShadow: '0 0 20px rgba(0,255,0,0.3)'}}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-1 sm:mb-2 font-mono" style={{textShadow: '0 0 15px #00ff00'}}>10K+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-mono">Users Conquered</div>
              </div>
              <div className="bg-black/60 border-2 border-purple-400 p-3 sm:p-4 md:p-6 text-center rounded-lg backdrop-blur-sm" style={{boxShadow: '0 0 20px rgba(255,0,255,0.3)'}}>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1 sm:mb-2 font-mono" style={{textShadow: '0 0 15px #ff00ff'}}>5+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400 font-mono">Products Launched</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements Grid - Responsive */}
          <motion.div 
            className="space-y-3 sm:space-y-4 md:space-y-6 order-1 lg:order-2"
            variants={itemVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-black/80 border-2 p-3 sm:p-4 md:p-6 group hover:scale-105 transition-all duration-300 rounded-lg backdrop-blur-sm"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                style={{
                  borderColor: achievement.color,
                  boxShadow: `0 0 20px ${achievement.color}30`
                }}
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div 
                    className="transition-colors duration-300 flex-shrink-0 pt-1"
                    style={{
                      color: achievement.color,
                      filter: `drop-shadow(0 0 10px ${achievement.color})`
                    }}
                  >
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 leading-tight font-mono"
                      style={{
                        color: achievement.color,
                        textShadow: `0 0 10px ${achievement.color}`
                      }}
                    >
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed font-mono">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CinematicAbout;
