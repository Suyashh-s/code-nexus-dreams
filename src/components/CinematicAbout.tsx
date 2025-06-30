
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const achievements = [
    {
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      title: "Full Stack Expertise",
      description: "5+ years building scalable web applications with modern tech stacks"
    },
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      title: "Innovation Leader",
      description: "Founded multiple tech startups, shipped products used by 10K+ users"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      title: "Team Builder",
      description: "Led engineering teams and mentored developers across various projects"
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />,
      title: "Problem Solver",
      description: "Specialized in AI/ML solutions, computer vision, and business automation"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Floating Elements - Responsive */}
      <div className="floating-element top-6 sm:top-10 md:top-16 lg:top-20 left-2 sm:left-4 md:left-8 lg:left-10">
        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-xl" />
      </div>
      <div className="floating-element bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-20 right-2 sm:right-4 md:right-8 lg:right-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-xl" />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div variants={imageVariants} className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-left text-white mb-4 sm:mb-6 md:mb-8 lg:mb-12 leading-tight"
                variants={itemVariants}
              >
                Building the Future
              </motion.h2>
              
              <motion.p 
                className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                I'm a startup founder and full-stack engineer passionate about creating innovative solutions 
                that solve real-world problems. Currently building <span className="glow-text font-semibold">next-generation AI platforms</span> that 
                are redefining how businesses operate.
              </motion.p>

              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed"
                variants={itemVariants}
              >
                With expertise spanning from computer vision to business automation, I combine technical 
                excellence with entrepreneurial vision to create products that matter.
              </motion.p>
            </div>

            {/* Stats - Responsive Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
              variants={itemVariants}
            >
              <div className="cinematic-card p-3 sm:p-4 md:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold glow-text mb-1 sm:mb-2">10K+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400">Users Impacted</div>
              </div>
              <div className="cinematic-card p-3 sm:p-4 md:p-6 text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold glow-text mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-400">Products Shipped</div>
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
                className="cinematic-card p-3 sm:p-4 md:p-6 group hover:scale-105 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300 flex-shrink-0 pt-1">
                    {achievement.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2 leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
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
