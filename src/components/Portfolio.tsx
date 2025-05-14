import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAnimatedSection, fadeInVariants, fadeUpVariants } from '../hooks/useAnimations';
import { projects } from '../data';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [ref, controls] = useAnimatedSection();
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="portfolio" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="mb-16 text-center"
        >
          <motion.span 
            variants={fadeUpVariants}
            className="text-sm text-primary-600 dark:text-primary-400 uppercase tracking-wider font-semibold"
          >
            Case Studies
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={fadeUpVariants}
            className="w-20 h-1 bg-secondary-500 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-gray-200">{selectedProject.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`cursor-pointer p-6 rounded-xl transition-all duration-300 ${
                  selectedProject.id === project.id
                    ? 'bg-primary-50 dark:bg-primary-900/20 border-2 border-primary-500'
                    : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {project.metrics.map((metric, i) => (
                    <li 
                      key={i}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                    >
                      <ExternalLink size={16} className="mr-2 text-primary-500" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;