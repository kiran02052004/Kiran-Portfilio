import React from 'react';
import { User, GraduationCap, Wrench, Briefcase, Folder, MessageSquare, Moon, Sun, Monitor } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  theme: string;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection, theme, toggleTheme }) => {
  const menuItems = [
    { id: 'about', label: 'About me', icon: <User size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Wrench size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Folder size={20} /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare size={20} /> },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <div className="w-64 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between shrink-0 hidden md:flex z-50 transition-colors duration-300">
      {/* Profile Header */}
      <div className="p-6 text-center">
        <div className="relative inline-block mb-4 mt-2">
          {/* Increased size from w-24 h-24 to w-32 h-32 */}
          <div className="w-32 h-32 rounded-2xl overflow-hidden mx-auto border-4 border-white dark:border-slate-800 shadow-lg transition-colors duration-300">
             <img 
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-0 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-slate-800 transition-colors duration-300"></div>
        </div>
        <h2 className="text-xl font-bold font-heading text-slate-800 dark:text-white flex items-center justify-center gap-2 transition-colors duration-300">
           <Monitor size={20} className="text-slate-800 dark:text-white" />
           {PERSONAL_INFO.name}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300">{PERSONAL_INFO.title}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 overflow-y-auto custom-scrollbar">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-primary-600 text-white shadow-md shadow-primary-200 dark:shadow-none'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Controls */}
      <div className="p-4 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="flex justify-between items-center text-slate-400 dark:text-slate-500">
           <button className="flex items-center gap-1 hover:text-slate-600 dark:hover:text-slate-300">
             <span className="text-xl">🇺🇸</span>
             <span className="text-xs font-bold">▼</span>
           </button>
           
           <button 
             onClick={toggleTheme}
             className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
             title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
           >
             {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
           </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;