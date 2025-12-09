import React from 'react';
import { SKILLS } from '../data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-primary-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading transition-colors duration-300">
              Technical <span className="text-primary-600 dark:text-primary-500">Skills</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-6 hover:border-primary-200 dark:hover:border-primary-900 transition-colors duration-300">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
                <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span 
                    key={skillIdx} 
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-100 dark:hover:border-primary-800 transition-all cursor-default"
                  >
                   {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;