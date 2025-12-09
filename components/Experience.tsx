import React from 'react';
import { EXPERIENCE } from '../data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-primary-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading transition-colors duration-300">
              Work <span className="text-primary-600 dark:text-primary-500">Experience</span>
            </h2>
        </div>

        <div className="space-y-8 relative">
           {/* Vertical Line */}
           <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 hidden sm:block transition-colors duration-300"></div>

           {EXPERIENCE.map((exp, index) => (
             <div key={index} className="relative sm:pl-12 group">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-primary-500 z-10 hidden sm:flex items-center justify-center transition-colors duration-300">
                   <div className="w-3 h-3 bg-primary-500 rounded-full group-hover:scale-125 transition-transform"></div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
                   <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                         <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">{exp.role}</h3>
                         <p className="text-lg text-primary-600 dark:text-primary-400 font-medium transition-colors duration-300">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2 sm:mt-0">
                         <span className="text-sm font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 whitespace-nowrap transition-colors duration-300">
                            {exp.period}
                         </span>
                      </div>
                   </div>
                   
                   <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                         <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0"></span>
                            {item}
                         </li>
                      ))}
                   </ul>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;