
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, BookOpen, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ThreeDBookVisionVault: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof visionProjects[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const visionProjects = [
    {
      id: 1,
      title: "Object Recognition System",
      description: "Real-time object detection and classification from video streams using YOLO and OpenCV",
      video: "/videos/vision1.mp4",
      github: "#",
      demo: "#",
      tags: ["YOLO", "Object Detection", "OpenCV", "Python"],
      chapter: "Chapter I"
    },
    {
      id: 2,
      title: "Facial Expression Analyzer",
      description: "Emotion recognition from facial expressions using deep learning and computer vision",
      video: "/videos/vision2.mp4",
      github: "#",
      tags: ["OpenCV", "Deep Learning", "CNN", "TensorFlow"],
      chapter: "Chapter II"
    },
    {
      id: 3,
      title: "Clothes Detection",
      description: "Advanced clothing detection and classification system for fashion analytics",
      video: "/videos/clothesdetection.mp4",
      github: "#",
      demo: "#",
      tags: ["Computer Vision", "Classification", "JavaScript"],
      chapter: "Chapter III"
    },
    {
      id: 4,
      title: "Document Scanner",
      description: "Intelligent document scanning with automatic text extraction and processing",
      video: "/videos/vision4.mp4",
      github: "#",
      tags: ["OCR", "OpenCV", "Image Processing"],
      chapter: "Chapter IV"
    }
  ];

  // Organize projects into spreads (2 projects per spread)
  const spreads = [];
  for (let i = 0; i < visionProjects.length; i += 2) {
    spreads.push(visionProjects.slice(i, i + 2));
  }

  useEffect(() => {
    // Ensure all videos in current spread play continuously
    const currentSpreadProjects = spreads[currentSpread];
    currentSpreadProjects.forEach((_, index) => {
      const videoIndex = currentSpread * 2 + index;
      const video = videoRefs.current[videoIndex];
      if (video) {
        video.play().catch(console.error);
      }
    });
  }, [currentSpread]);

  const handleProjectClick = (project: typeof visionProjects[0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const nextSpread = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentSpread((prev) => (prev + 1) % spreads.length);
      setIsFlipping(false);
    }, 300);
  };

  const prevSpread = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentSpread((prev) => (prev - 1 + spreads.length) % spreads.length);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <section id="vision-vault" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-black relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-32 w-80 h-80 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-32 left-32 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-2xl transform -rotate-45" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Eye className="text-blue-400" size={48} />
            <h2 className="text-5xl md:text-7xl font-bold text-white glow-text">
              Vision Vault
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-gray-300 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A 3D chronicle of computer vision innovations and AI breakthroughs
          </motion.p>
        </div>

        {/* 3D Open Book Container */}
        <div className="relative perspective-[2000px] max-w-6xl mx-auto">
          {/* Book Base Shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-blue-900/30 rounded-3xl transform translate-y-12 scale-110 blur-3xl" />
          
          {/* 3D Open Book */}
          <motion.div 
            className="relative preserve-3d"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'rotateX(8deg) rotateY(0deg)'
            }}
            animate={{
              rotateX: [8, 6, 8],
              rotateY: [0, 2, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Open Book */}
            <motion.div 
              className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
              style={{
                boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
              }}
              animate={{
                rotateY: isFlipping ? [0, -10, 0] : 0
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Book Spine (Center) */}
              <div className="absolute left-1/2 top-0 bottom-0 w-6 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 transform -translate-x-3 z-10 shadow-lg">
                <div className="w-full h-full bg-gradient-to-r from-gray-500/30 to-transparent" />
                <div className="absolute inset-y-0 left-1 w-1 bg-gradient-to-b from-blue-400/70 to-purple-400/70" />
              </div>

              {/* Page Spread */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSpread}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]"
                >
                  {spreads[currentSpread].map((project, pageIndex) => (
                    <motion.div
                      key={project.id}
                      className={`p-12 ${pageIndex === 0 ? 'border-r-2 border-gray-300' : ''} cursor-pointer group bg-gradient-to-br ${
                        pageIndex === 0 ? 'from-gray-50 to-white' : 'from-white to-gray-50'
                      }`}
                      onClick={() => handleProjectClick(project)}
                      whileHover={{ 
                        scale: 1.02,
                        rotateY: pageIndex === 0 ? 2 : -2,
                        z: 10
                      }}
                      transition={{ duration: 0.3 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Page Header */}
                      <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="text-blue-600" size={20} />
                        <span className="text-blue-600 font-serif text-sm font-medium">
                          {project.chapter}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-3xl font-bold text-gray-800 mb-6 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      {/* Video Preview */}
                      <div className="relative mb-6 bg-gray-200 rounded-xl overflow-hidden border-2 border-gray-300 shadow-lg">
                        <div className="aspect-video relative">
                          <video
                            ref={(el) => (videoRefs.current[currentSpread * 2 + pageIndex] = el)}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            autoPlay
                            muted
                            loop
                            playsInline
                            src={project.video}
                          >
                            <source src={project.video} type="video/mp4" />
                          </video>
                          
                          {/* Video Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Play Button */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                              <Play size={24} className="text-white" />
                            </div>
                          </div>

                          {/* Corner Indicator */}
                          <div className="absolute bottom-2 right-2 p-1 bg-black/50 backdrop-blur-sm rounded">
                            <Play size={12} className="text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs border border-blue-200 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          className="flex items-center gap-2 text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={14} />
                          <span>Code</span>
                        </a>

                        {project.demo && (
                          <a
                            href={project.demo}
                            className="flex items-center gap-2 text-xs text-gray-600 hover:text-blue-600 transition-colors font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={14} />
                            <span>Demo</span>
                          </a>
                        )}
                      </div>

                      {/* Page Corner Effect */}
                      <div className="absolute bottom-4 right-4 w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-gray-300 group-hover:border-b-blue-300 transition-colors" />
                      
                      {/* 3D Page Glow */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-20">
                <motion.button
                  onClick={prevSpread}
                  disabled={isFlipping || currentSpread === 0}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft size={16} className="inline mr-1" />
                  Previous
                </motion.button>
                
                <span className="text-gray-700 font-serif text-sm bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg shadow">
                  Pages {currentSpread * 2 + 1}-{Math.min(currentSpread * 2 + 2, visionProjects.length)}
                </span>
                
                <motion.button
                  onClick={nextSpread}
                  disabled={isFlipping || currentSpread === spreads.length - 1}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next
                  <ChevronRight size={16} className="inline ml-1" />
                </motion.button>
              </div>

              {/* Page Indicators */}
              <div className="absolute bottom-6 right-6 flex gap-1 z-20">
                {spreads.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSpread(index)}
                    className={`w-3 h-3 rounded-full transition-all shadow-sm ${
                      index === currentSpread 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-gray-400 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Modal */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-4xl w-[90vw] bg-black border border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="mt-4">
              <div className="aspect-video overflow-hidden rounded-lg mb-6 bg-gray-900 border border-gray-700">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  src={selectedProject.video}
                >
                  <source src={selectedProject.video} type="video/mp4" />
                </video>
              </div>

              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-sm border border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  View Code
                </a>

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ThreeDBookVisionVault;
