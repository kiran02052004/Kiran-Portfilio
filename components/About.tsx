import React from 'react';
import { PERSONAL_INFO } from '../data';
import { MapPin, Mail, Github, BookOpen, Camera, Plane, Code, Database, Terminal } from 'lucide-react';
import { Interest } from '../types';

const About: React.FC = () => {
  const interests: Interest[] = [
    { name: "Reading", icon: <BookOpen size={24} />, description: "Exploring new tech trends and sci-fi novels." },
    { name: "Photography", icon: <Camera size={24} />, description: "Capturing moments and landscapes." },
    { name: "Traveling", icon: <Plane size={24} />, description: "Experiencing new cultures and places." },
    { name: "Coding", icon: <Terminal size={24} />, description: "Building side projects and learning new stacks." },
  ];

  return (
    <section id="about" className="pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2 text-slate-400 dark:text-slate-500 font-medium">
             <Code size={20} />
             <span>Hello...</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 dark:text-white mb-6 transition-colors duration-300">
            I'm {PERSONAL_INFO.name}!
          </h1>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm md:text-base text-slate-600 dark:text-slate-400 transition-colors duration-300">
            <div className="flex items-center gap-2">
               <MapPin size={16} className="text-slate-400 dark:text-slate-500" />
               <span>{PERSONAL_INFO.location}</span>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-2">
               <Mail size={16} className="text-primary-600 dark:text-primary-500" />
               <a href={`mailto:${PERSONAL_INFO.email}`} className="text-primary-600 dark:text-primary-500 hover:underline">{PERSONAL_INFO.email}</a>
            </div>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-2">
               <Github size={16} className="text-primary-600 dark:text-primary-500" />
               <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-primary-600 dark:text-primary-500 hover:underline">{PERSONAL_INFO.githubHandle}</a>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-primary-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading transition-colors duration-300">
              A little bit <span className="text-slate-900 dark:text-white">about me...</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-colors duration-300">
            <div className="shrink-0">
               {/* Computer Icon / Illustration Style */}
               <div className="w-48 h-40 bg-slate-900 dark:bg-slate-800 rounded-lg p-2 relative mx-auto shadow-xl transition-colors duration-300">
                  <div className="w-full h-full border-2 border-slate-700 dark:border-slate-600 rounded bg-slate-800 dark:bg-slate-900 flex flex-col p-2 transition-colors duration-300">
                     <div className="flex gap-1 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     </div>
                     <div className="space-y-1.5 opacity-80">
                        <div className="h-1.5 w-2/3 bg-green-400 rounded-full"></div>
                        <div className="h-1.5 w-1/2 bg-green-600 rounded-full ml-4"></div>
                        <div className="h-1.5 w-3/4 bg-green-500 rounded-full ml-4"></div>
                        <div className="h-1.5 w-1/3 bg-green-400 rounded-full"></div>
                     </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-800 dark:bg-slate-700 rounded-b-lg transition-colors duration-300"></div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-2 bg-slate-900 dark:bg-slate-800 rounded-full transition-colors duration-300"></div>
               </div>
            </div>
            
            <div className="flex-1">
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 transition-colors duration-300">
                 {PERSONAL_INFO.aboutShort}
               </p>
               <p className="text-slate-800 dark:text-slate-100 font-medium transition-colors duration-300">
                 {PERSONAL_INFO.aboutClosing}
               </p>
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-primary-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading transition-colors duration-300">
              Personal <span className="text-primary-600 dark:text-primary-500">interests</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {interests.map((interest, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary-200 dark:hover:border-primary-900">
                   <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0 transition-colors duration-300">
                      {interest.icon}
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-900 dark:text-white transition-colors duration-300">{interest.name}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors duration-300">{interest.description}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;