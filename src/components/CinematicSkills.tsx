
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
        ease: [0.25, 0.1, 0.25, 1]
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
    <section id="skills" className="section-container relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-element top-20 right-20">
          <div className="w-64 h-64 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-full blur-3xl" />
        </div>
        <div className="floating-element bottom-20 left-20">
          <div className="w-48 h-48 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 rounded-full blur-2xl" />
        </div>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="section-title mb-6">Technical Arsenal</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mastering cutting-edge technologies to build scalable, innovative solutions 
            that drive business growth and user engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="cinematic-card p-8"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 glow-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
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
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: [0.25, 0.1, 0.25, 1]
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

        {/* Floating Tech Icons */}
        <div className="mt-16 relative">
          <motion.div 
            className="flex flex-wrap justify-center gap-8 opacity-30"
            variants={itemVariants}
          >
            {['⚛️', '🔷', '🐍', '🧠', '🐳', '☁️', '🎨', '⚙️'].map((icon, index) => (
              <motion.div
                key={index}
                className="text-6xl hover:scale-125 transition-transform duration-300 cursor-pointer"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1]
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
