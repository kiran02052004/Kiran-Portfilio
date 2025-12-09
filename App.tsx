import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import { Menu, Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);
  
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Reset scroll position when section changes
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'about': return <About />;
      case 'education': return <Education />;
      case 'skills': return <Skills />;
      case 'experience': return <Experience />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="flex h-screen bg-white dark:bg-slate-950 overflow-hidden font-sans transition-colors duration-300">
      {/* Sidebar for Desktop */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-20">
            <span className="font-bold text-lg text-slate-900 dark:text-white">Kiran<span className="text-primary-600">Patil</span></span>
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme} 
                className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600 dark:text-slate-400">
                  <Menu size={24} />
              </button>
            </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
             <div className="md:hidden absolute top-[60px] left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl z-30 p-4 flex flex-col gap-2 animate-fade-in">
                {['about', 'education', 'skills', 'experience', 'projects', 'contact'].map(item => (
                    <button 
                        key={item}
                        onClick={() => {
                            setActiveSection(item);
                            setIsMobileMenuOpen(false);
                        }}
                        className={`text-left px-4 py-3 rounded-lg capitalize font-medium transition-colors ${
                          activeSection === item
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                        }`}
                    >
                        {item}
                    </button>
                ))}
             </div>
        )}

        {/* Scrollable Content */}
        <main 
          ref={mainRef}
          className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-slate-950 relative scroll-smooth transition-colors duration-300"
        >
           <div className="w-full max-w-5xl mx-auto min-h-full animate-fade-in">
             {renderContent()}
           </div>
        </main>
      </div>
    </div>
  );
};

export default App;