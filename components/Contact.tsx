import React from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 mb-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-8 bg-primary-600 rounded-full"></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading transition-colors duration-300">
              Get in <span className="text-primary-600 dark:text-primary-500">Touch</span>
            </h2>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col md:flex-row transition-colors duration-300">
            <div className="p-8 md:p-10 bg-slate-900 dark:bg-black text-white md:w-2/5 flex flex-col justify-between transition-colors duration-300">
                <div>
                    <h3 className="text-2xl font-bold font-heading mb-4">Let's Talk</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-8">
                        I'm currently available for internships and full-time positions. Drop a message!
                    </p>
                    
                    <div className="space-y-4">
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10">
                            <Mail size={18} />
                            <span className="text-sm">{PERSONAL_INFO.email}</span>
                        </a>
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10">
                            <Linkedin size={18} />
                            <span className="text-sm">LinkedIn Profile</span>
                        </a>
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10">
                            <Github size={18} />
                            <span className="text-sm">GitHub Profile</span>
                        </a>
                    </div>
                </div>
                
                <div className="mt-8 text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} Kiran Patil
                </div>
            </div>

            <div className="p-8 md:p-10 flex-1 bg-white dark:bg-slate-900 transition-colors duration-300">
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                            <input type="text" id="name" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-900 dark:text-white transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                            <input type="email" id="email" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-900 dark:text-white transition-colors" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                        <input type="text" id="subject" className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-900 dark:text-white transition-colors" placeholder="Project Inquiry" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                        <textarea id="message" rows={4} className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2.5 text-sm focus:border-primary-500 focus:ring-primary-500 focus:bg-white dark:focus:bg-slate-900 dark:text-white transition-colors" placeholder="How can I help you?"></textarea>
                    </div>
                    <button type="submit" className="w-full inline-flex justify-center items-center py-3 px-6 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;