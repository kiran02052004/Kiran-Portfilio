import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data';
import { Calendar, MapPin, Award, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1 h-8 bg-primary-600 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-heading transition-colors duration-300">
            My <span className="text-primary-600 dark:text-primary-500">Education</span>
          </h2>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 mb-12">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-md transition-all duration-300"
            >
              {/* Rectangle Image */}
              <div className="w-32 h-24 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 shadow-sm">
                {edu.image ? (
                  <img
                    src={edu.image}
                    alt={`${edu.institution} image`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-primary-600 dark:text-primary-400 text-xl font-bold">
                    {edu.institution.charAt(0)}
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1">
                
                {/* Institution + Score */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
                    {edu.institution}
                  </h3>

                  <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-md mt-2 sm:mt-0 transition-colors duration-300">
                    {edu.score}
                  </span>
                </div>

                {/* Degree */}
                <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-3 transition-colors duration-300">
                  {edu.degree}
                </p>

                {/* Period + Location */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Certificate Preview */}
                {edu.certificate && (
                  <div className="mt-4">
                    <a
                      href={edu.certificate}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3 hover:opacity-90 transition-all"
                    >
                      <img
                        src={edu.certificate}
                        alt="certificate"
                        className="w-24 h-24 object-cover rounded-lg border border-slate-200 dark:border-slate-700"
                      />
                      <span className="text-primary-600 dark:text-primary-400 font-medium">
                        View Certificate
                      </span>
                    </a>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-6">
            <Award className="text-primary-600 dark:text-primary-400" size={24} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors duration-300">
              Certifications
            </h3>
          </div>

          <div className="grid gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <a
                key={idx}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View certification: ${cert.title}`}
                className="flex items-start gap-3 bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:border-primary-500 hover:shadow-md hover:-translate-y-1 hover:bg-slate-50 dark:hover:bg-slate-800/80 group cursor-pointer"
              >
                <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 shrink-0 group-hover:bg-primary-600 transition-colors"></div>

                <div className="flex-1">
                  <p className="text-slate-700 dark:text-slate-300 font-medium text-sm transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                    {cert.title}
                  </p>
                </div>

                <ExternalLink size={16} className="text-slate-400 group-hover:text-primary-500 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;