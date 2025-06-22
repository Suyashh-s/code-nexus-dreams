
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, BookOpen, Eye, Play } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const BookDesignVisionVault: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof visionProjects[0] | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentSpread, setCurrentSpread] = useState(0);

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

  const handleProjectClick = (project: typeof visionProjects[0]) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const nextSpread = () => {
    setCurrentSpread((prev) => (prev + 1) % spreads.length);
  };

  const prevSpread = () => {
    setCurrentSpread((prev) => (prev - 1 + spreads.length) % spreads.length);
  };

  return (
    <section id="vision-vault" className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        {/* Book Title */}
        <div className="text-center mb-16">
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Eye className="text-blue-600" size={48} />
            <h2 className="text-5xl md:text-7xl font-serif text-slate-800">
              Vision Vault
            </h2>
          </motion.div>
          <motion.p 
            className="text-xl text-slate-600 font-light italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A chronicle of computer vision innovations
          </motion.p>
        </div>

        {/* Open Book Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Book Shadow */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 to-blue-400/20 rounded-3xl transform translate-y-4 blur-lg" />
          
          {/* Open Book */}
          <motion.div 
            className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Book Spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-gradient-to-b from-slate-700 to-slate-800 transform -translate-x-2 z-10">
              <div className="w-full h-full bg-gradient-to-r from-slate-600/50 to-transparent" />
            </div>

            {/* Page Spread */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSpread}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]"
              >
                {spreads[currentSpread].map((project, pageIndex) => (
                  <motion.div
                    key={project.id}
                    className={`p-12 ${pageIndex === 0 ? 'border-r border-slate-200' : ''} cursor-pointer group`}
                    onClick={() => handleProjectClick(project)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Page Header */}
                    <div className="flex items-center gap-3 mb-8">
                      <BookOpen className="text-slate-500" size={20} />
                      <span className="text-slate-500 font-serif text-sm">{project.chapter}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-3xl font-serif text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Video Preview */}
                    <div className="relative mb-6 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                      <div className="aspect-video relative">
                        <video
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          autoPlay
                          muted
                          loop
                          playsInline
                          src={project.video}
                        >
                          <source src={project.video} type="video/mp4" />
                        </video>
                        
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                            <Play size={24} className="text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-slate-100 text-slate-600 rounded-md text-xs border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors"
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
                          className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={14} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>

                    {/* Page Corner */}
                    <div className="absolute bottom-4 right-4 w-0 h-0 border-l-8 border-l-transparent border-b-8 border-b-slate-200 group-hover:border-b-blue-200 transition-colors" />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <motion.button
                onClick={prevSpread}
                className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={currentSpread === 0}
              >
                Previous
              </motion.button>
              
              <span className="text-slate-600 font-serif text-sm">
                Pages {currentSpread * 2 + 1}-{Math.min(currentSpread * 2 + 2, visionProjects.length)}
              </span>
              
              <motion.button
                onClick={nextSpread}
                className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={currentSpread === spreads.length - 1}
              >
                Next
              </motion.button>
            </div>

            {/* Page Indicators */}
            <div className="absolute bottom-6 right-6 flex gap-1">
              {spreads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSpread(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSpread ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-4xl w-[90vw] bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-slate-800">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedProject && (
            <div className="mt-4">
              <div className="aspect-video overflow-hidden rounded-lg mb-6 bg-slate-100">
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

              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                  View Code
                </a>

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-slate-800 text-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition-colors"
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

export default BookDesignVisionVault;
