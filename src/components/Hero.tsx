import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Decorations */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary-100 dark:bg-secondary-900/20 rounded-full filter blur-3xl opacity-60"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-100 dark:bg-accent-900/20 rounded-full filter blur-3xl opacity-40"></div>
      
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="inline-block px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Certified Project Management Professional
          </motion.span>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Turning <span className="text-primary-600 dark:text-primary-400">vision</span> into <span className="text-secondary-600 dark:text-secondary-400">reality</span> through expert project management
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Navigating complex projects with strategic vision and flawless execution. Let's build something exceptional together.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button 
              href="#contact" 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Start a Project
            </Button>
            <Button 
              href="#portfolio" 
              variant="outline" 
              size="lg"
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl blur opacity-30 dark:opacity-40"></div>
            <img 
              src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Project Management Professional" 
              className="w-full h-auto object-cover rounded-2xl relative z-10"
            />
          </div>
          
          {/* Floating stats card */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-xl z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</span>
                <span className="text-2xl font-bold text-primary-700 dark:text-primary-400">50+</span>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-gray-700"></div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</span>
                <span className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">98%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={24} className="text-gray-500 dark:text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;