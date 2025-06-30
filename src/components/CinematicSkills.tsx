
import React from 'react';
import { motion } from 'framer-motion';

const CinematicSkills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "STREET CODE",
      skills: [
        { name: "React", level: 95, icon: "⚛️", color: "#00ff00" },
        { name: "TypeScript", level: 90, icon: "🔷", color: "#ff00ff" },
        { name: "Next.js", level: 88, icon: "▲", color: "#00ffff" },
        { name: "Tailwind", level: 92, icon: "🎨", color: "#ffff00" }
      ],
      borderColor: "#00ff00"
    },
    {
      title: "SERVER HUSTLE",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢", color: "#00ff00" },
        { name: "Python", level: 85, icon: "🐍", color: "#ff00ff" },
        { name: "PostgreSQL", level: 80, icon: "🐘", color: "#00ffff" },
        { name: "MongoDB", level: 82, icon: "🍃", color: "#ffff00" }
      ],
      borderColor: "#ff00ff"
    },
    {
      title: "AI OPERATIONS",
      skills: [
        { name: "TensorFlow", level: 85, icon: "🧠", color: "#00ff00" },
        { name: "OpenCV", level: 88, icon: "👁️", color: "#ff00ff" },
        { name: "YOLO", level: 90, icon: "🎯", color: "#00ffff" },
        { name: "NLP", level: 80, icon: "📝", color: "#ffff00" }
      ],
      borderColor: "#00ffff"
    },
    {
      title: "TECH ARSENAL",
      skills: [
        { name: "Docker", level: 85, icon: "🐳", color: "#00ff00" },
        { name: "AWS", level: 80, icon: "☁️", color: "#ff00ff" },
        { name: "Git", level: 95, icon: "📚", color: "#00ffff" },
        { name: "CI/CD", level: 82, icon: "⚙️", color: "#ffff00" }
      ],
      borderColor: "#ffff00"
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Neon circuit background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="circuit" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 60 0 L 60 60 L 0 60 Z M 30 0 L 30 60 M 0 30 L 60 30" fill="none" stroke="#00ff00" strokeWidth="1"/>
              <circle cx="30" cy="30" r="3" fill="#ff00ff"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Neon corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-green-400" style={{boxShadow: '0 0 20px #00ff00'}}></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-r-4 border-t-4 border-purple-400" style={{boxShadow: '0 0 20px #ff00ff'}}></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-4 border-b-4 border-cyan-400" style={{boxShadow: '0 0 20px #00ffff'}}></div>
      <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-yellow-400" style={{boxShadow: '0 0 20px #ffff00'}}></div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight font-mono"
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
            TECH ARSENAL
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-300 max-w-2xl mx-auto px-2 leading-relaxed font-mono" style={{textShadow: '0 0 10px rgba(0,255,0,0.3)'}}>
            Elite weapons and tools used to dominate the digital battlefield 
            and build unstoppable tech empires.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-black/80 border-2 p-4 sm:p-6 md:p-8 backdrop-blur-sm rounded-lg"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              style={{
                borderColor: category.borderColor,
                boxShadow: `0 0 30px ${category.borderColor}30`
              }}
            >
              <h3 
                className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 font-mono"
                style={{
                  color: category.borderColor,
                  textShadow: `0 0 15px ${category.borderColor}`
                }}
              >
                {category.title}
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span 
                          className="text-lg sm:text-xl md:text-2xl"
                          style={{filter: `drop-shadow(0 0 10px ${skill.color})`}}
                        >
                          {skill.icon}
                        </span>
                        <span 
                          className="font-bold text-sm sm:text-base font-mono"
                          style={{
                            color: skill.color,
                            textShadow: `0 0 10px ${skill.color}`
                          }}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span 
                        className="font-bold text-sm sm:text-base font-mono"
                        style={{
                          color: skill.color,
                          textShadow: `0 0 10px ${skill.color}`
                        }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-800/50 rounded-full h-2 sm:h-3 overflow-hidden border border-gray-700">
                      <motion.div
                        className="h-full rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1
                        }}
                        viewport={{ once: true }}
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                          boxShadow: `0 0 20px ${skill.color}60`
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="mt-12 sm:mt-16 relative">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 opacity-60"
            variants={itemVariants}
          >
            {['⚛️', '🔷', '🐍', '🧠', '🐳', '☁️', '🎨', '⚙️'].map((icon, index) => (
              <motion.div
                key={index}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:scale-125 transition-transform duration-300 cursor-pointer"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  delay: index * 0.2,
                  repeat: Infinity
                }}
                whileHover={{
                  scale: 1.2,
                  filter: "brightness(1.5) drop-shadow(0 0 20px currentColor)"
                }}
                style={{
                  filter: `drop-shadow(0 0 10px ${['#00ff00', '#ff00ff', '#00ffff', '#ffff00'][index % 4]})`
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
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

export default CinematicSkills;
