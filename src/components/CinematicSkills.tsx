
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "Next.js", level: 88, icon: "▲" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MongoDB", level: 82, icon: "🍃" }
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "TensorFlow", level: 85, icon: "🧠" },
        { name: "OpenCV", level: 88, icon: "👁️" },
        { name: "YOLO", level: 90, icon: "🎯" },
        { name: "NLP", level: 80, icon: "📝" }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "AWS", level: 80, icon: "☁️" },
        { name: "Git", level: 95, icon: "📚" },
        { name: "CI/CD", level: 82, icon: "⚙️" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element top-16 sm:top-20 right-4 sm:right-10 md:right-20">
          <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-full blur-3xl" />
        </div>
        <div className="floating-element bottom-16 sm:bottom-20 left-4 sm:left-10 md:left-20">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-2xl" />
        </div>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center mb-12 sm:mb-16" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Technical Arsenal
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2 leading-relaxed">
            Mastering cutting-edge technologies to build scalable, innovative solutions 
            that drive business growth and user engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="cinematic-card p-4 sm:p-6 md:p-8"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4 sm:mb-6 glow-text">
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
                        <span className="text-lg sm:text-xl md:text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 font-semibold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700/50 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Icons - Responsive */}
        <div className="mt-12 sm:mt-16 relative">
          <motion.div 
            className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 opacity-30"
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
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                whileHover={{
                  scale: 1.2,
                  filter: "brightness(1.5)"
                }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CinematicSkills;
