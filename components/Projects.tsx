import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Github, FolderOpen, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Web', 'Java', 'AI/ML'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-primary-600 rounded-full"></div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading transition-colors duration-300">
                Featured <span className="text-primary-600 dark:text-primary-500">Projects</span>
                </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                            activeCategory === cat
                            ? 'bg-primary-600 border-primary-600 text-white shadow-md shadow-primary-200 dark:shadow-none'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary-400 dark:hover:border-primary-600'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-lg transition-all duration-300 flex flex-col group animate-fade-in">
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative border-b border-slate-100 dark:border-slate-800">
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 
                 {/* Category Badge */}
                 <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm">
                    {project.category}
                 </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-400 transition-colors duration-300">
                    <FolderOpen size={20} />
                  </div>
                  <a href={project.link} className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {filteredProjects.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-400 dark:text-slate-500">
                  <Filter className="w-12 h-12 mx-auto mb-3 opacity-20" />
                  <p>No projects found in this category.</p>
              </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;