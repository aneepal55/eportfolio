'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Globe, Star } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: 'Effipay',
            description: 'A modern payment processing application with seamless user experience and secure transaction handling. Built with cutting-edge technologies for optimal performance.',
            image: '/img/effipay.png',
            technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API'],
            features: [
                'Secure payment processing',
                'Real-time transaction tracking',
                'User-friendly dashboard',
                'Mobile-responsive design'
            ],
            links: {
                demo: '#',
                github: '#'
            },
            type: 'Web Application',
            status: 'Completed'
        },
        {
            title: 'PantherInsights',
            description: 'A comprehensive web and mobile application for GSU students to review computer science professors and find detailed reviews for future course planning.',
            image: '/img/pantherinsights.png',
            technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'Express.js'],
            features: [
                'Professor review system',
                'Advanced search functionality',
                'Cross-platform compatibility',
                'Real-time data synchronization'
            ],
            links: {
                demo: '#',
                github: '#'
            },
            type: 'Full-Stack Application',
            status: 'Research Project'
        },
        {
            title: 'Kavi Media Landing Website',
            description: 'A stunning, responsive landing page for a media company featuring modern design principles, smooth animations, and optimized performance.',
            image: '/img/kavi.png',
            technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            features: [
                'Modern responsive design',
                'Smooth animations',
                'SEO optimized',
                'Fast loading performance'
            ],
            links: {
                demo: '#',
                github: '#'
            },
            type: 'Website',
            status: 'Completed'
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Here are some of my recent projects that showcase my skills and creativity
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} screenshot`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <span className="px-2 py-1 bg-white/90 dark:bg-slate-800/90 text-xs font-medium text-blue-600 dark:text-blue-400 rounded-full backdrop-blur-sm">
                                        {project.type}
                                    </span>
                                    <span className="px-2 py-1 bg-green-100/90 dark:bg-green-900/50 text-xs font-medium text-green-800 dark:text-green-400 rounded-full backdrop-blur-sm">
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Features */}
                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        Key Features:
                                    </h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                                                <Star className="w-3 h-3 mr-2 text-yellow-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.links.demo}
                                        className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-medium"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Demo
                                    </a>
                                    <a
                                        href={project.links.github}
                                        className="flex-1 inline-flex items-center justify-center px-3 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-200 text-sm font-medium"
                                    >
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View More Projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/aneepal55"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 font-medium"
                    >
                        <Github className="w-5 h-5 mr-2" />
                        View More Projects on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
