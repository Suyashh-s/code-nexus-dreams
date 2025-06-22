
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
        ease: [0.25, 0.4, 0.55, 1.4]
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
        ease: [0.25, 0.4, 0.55, 1.4]
      }
    }
  };

  const achievements = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Expertise",
      description: "5+ years building scalable web applications with modern tech stacks"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation Leader",
      description: "Founded multiple tech startups, shipped products used by 10K+ users"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Builder",
      description: "Led engineering teams and mentored developers across various projects"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Specialized in AI/ML solutions, computer vision, and business automation"
    }
  ];

  return (
    <section id="about" className="section-container relative">
      {/* Floating Elements */}
      <div className="floating-element top-20 left-10">
        <div className="w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-full blur-xl" />
      </div>
      <div className="floating-element bottom-20 right-10">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-xl" />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div variants={imageVariants} className="space-y-8">
            <div className="space-y-6">
              <motion.h2 
                className="section-title text-left"
                variants={itemVariants}
              >
                Building the Future
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                I'm a startup founder and full-stack engineer passionate about creating innovative solutions 
                that solve real-world problems. Currently building <span className="glow-text font-semibold">next-generation AI platforms</span> that 
                are redefining how businesses operate.
              </motion.p>

              <motion.p 
                className="text-lg text-gray-400 leading-relaxed"
                variants={itemVariants}
              >
                With expertise spanning from computer vision to business automation, I combine technical 
                excellence with entrepreneurial vision to create products that matter.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              <div className="cinematic-card p-6 text-center">
                <div className="text-3xl font-bold glow-text mb-2">10K+</div>
                <div className="text-gray-400">Users Impacted</div>
              </div>
              <div className="cinematic-card p-6 text-center">
                <div className="text-3xl font-bold glow-text mb-2">5+</div>
                <div className="text-gray-400">Products Shipped</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="cinematic-card p-6 group hover:scale-105 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 group-hover:text-purple-400 transition-colors duration-300">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
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
