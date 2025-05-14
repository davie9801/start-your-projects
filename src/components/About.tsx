import React from 'react';
import { motion } from 'framer-motion';
import { useAnimatedSection, fadeInVariants, fadeUpVariants } from '../hooks/useAnimations';
import { stats, services } from '../data';
import { Award, Download } from 'lucide-react';
import Button from './Button';

const About: React.FC = () => {
  const [ref, controls] = useAnimatedSection();

  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
          className="mb-16 text-center"
        >
          <motion.span 
            className="text-sm text-primary-600 dark:text-primary-400 uppercase tracking-wider font-semibold"
            variants={fadeUpVariants}
          >
            About Me
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
            variants={fadeUpVariants}
          >
            Passionate About Delivering Results
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-secondary-500 mx-auto mb-8"
            variants={fadeUpVariants}
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Project Management Excellence - Team collaboration and planning" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-primary-100 dark:bg-primary-900/30 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With over 10 years of experience in project management across various industries, I specialize in leading cross-functional teams to deliver complex projects on time and within budget. My approach combines strategic thinking with meticulous execution to ensure every project exceeds expectations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm passionate about finding innovative solutions to challenging problems and creating environments where teams can thrive. Whether managing digital transformations, product launches, or infrastructure upgrades, I bring the same level of dedication and expertise to every project.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                href="#contact" 
                variant="primary"
              >
                Get In Touch
              </Button>
              <Button 
                href="#" 
                variant="outline"
                icon={<Download size={18} />}
              >
                Download Resume
              </Button>
            </div>

            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 mb-2">
              <Award size={20} />
              <span className="font-semibold">Certifications</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm">PMP (In Progress)</span>
              <span className="px-3 py-1 bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 rounded-full text-sm">CSM</span>
              <span className="px-3 py-1 bg-accent-50 dark:bg-accent-900/20 text-accent-700 dark:text-accent-300 rounded-full text-sm">CompTIA Project+</span>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <stat.icon size={28} className="text-primary-500 dark:text-primary-400" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold">What I Do</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              I offer comprehensive project management services to help organizations achieve their strategic objectives through effective planning and execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mb-4">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;