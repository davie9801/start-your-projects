import React from 'react';
import { motion } from 'framer-motion';
import { useAnimatedSection, fadeInVariants, fadeUpVariants } from '../hooks/useAnimations';
import { skills } from '../data';

const Skills: React.FC = () => {
  const [ref, controls] = useAnimatedSection();

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-800">
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
            Professional Skills
          </motion.span>
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold mt-2 mb-4"
          >
            Project Management Expertise
          </motion.h2>
          <motion.div 
            variants={fadeUpVariants}
            className="w-20 h-1 bg-secondary-500 mx-auto mb-8"
          ></motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-primary-500 dark:bg-primary-400 rounded-full"
                ></motion.div>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;