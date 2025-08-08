'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Experience = () => {
    const experiences = [
        {
            company: 'McKesson',
            position: 'CoverMyMeds Developer Intern',
            duration: 'June 2025 - Present',
            location: 'Columbus, OH',
            logo: '/img/mckesson.jpg',
            description: [
                'Working with the Software Engineering team on front-end development and contributing to projects through analysis, design, documentation, and build phases.',
                'Collaborating with cross functional teams including Product, IT Operations, and UX to enhance site reliability and automate environments.',
                'Gaining hands-on experience with modern technologies/tools such as Python, SQL, React, Docker, VS Code, and Git.',
                'Demonstrating strong planning, organizational, and communication skills by effectively explaining technical concepts to non-technical stakeholders.'
            ],
            technologies: ['Python', 'SQL', 'React', 'Docker', 'Git'],
            isUpcoming: false
        },
        {
            company: 'Georgia State University',
            position: 'Undergraduate Research Assistant',
            duration: 'June 2024 - December 2024',
            location: 'Atlanta, GA',
            logo: '/img/gsu.png',
            description: [
                'Collaborated with a team to develop Panther Insights, a web and mobile application for GSU students to review their computer science professors or find reviews for their potential future professors.',
                'Implemented full-stack development using modern web technologies and frameworks.',
                'Participated in agile development processes and code reviews.',
                'Contributed to user interface design and user experience optimization.'
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'React Native'],
            isUpcoming: false
        }
    ];

    return (
        <section id="experience" className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white dark:bg-slate-900/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Experience
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        My professional journey and the impact I&apos;ve made along the way
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.company}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Company Logo */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden shadow-md">
                                            <Image
                                                src={experience.logo}
                                                alt={`${experience.company} logo`}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-contain p-2"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                    {experience.position}
                                                    {experience.isUpcoming && (
                                                        <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                                                            Upcoming
                                                        </span>
                                                    )}
                                                </h3>
                                                <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                                                    {experience.company}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col md:items-end gap-2">
                                                <div className="flex items-center text-gray-600 dark:text-gray-300">
                                                    <Calendar className="w-4 h-4 mr-2" />
                                                    <span className="text-sm">{experience.duration}</span>
                                                </div>
                                                <div className="flex items-center text-gray-600 dark:text-gray-300">
                                                    <MapPin className="w-4 h-4 mr-2" />
                                                    <span className="text-sm">{experience.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="space-y-3 mb-6">
                                            {experience.description.map((item, itemIndex) => (
                                                <motion.li
                                                    key={itemIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: (index * 0.2) + (itemIndex * 0.1), duration: 0.6 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-start text-gray-600 dark:text-gray-300"
                                                >
                                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span>{item}</span>
                                                </motion.li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech, techIndex) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: (index * 0.2) + (techIndex * 0.05), duration: 0.4 }}
                                                    viewport={{ once: true }}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
