'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            title: 'Certified Entry-Level Python Programmer',
            issuer: 'Python Institute',
            date: '2024',
            description: 'Fundamental Python programming concepts, syntax, and basic programming techniques.',
            skills: ['Python Basics', 'Data Types', 'Control Structures', 'Functions'],
            icon: '🐍',
            color: 'from-yellow-500 to-orange-500',
            verificationLink: '#'
        },
        {
            title: 'Certified Associate in Python Programmer',
            issuer: 'Python Institute',
            date: '2024',
            description: 'Advanced Python programming concepts including OOP, modules, packages, and error handling.',
            skills: ['Object-Oriented Programming', 'Modules & Packages', 'Exception Handling', 'File Operations'],
            icon: '🐍',
            color: 'from-blue-500 to-purple-500',
            verificationLink: '#'
        },
        {
            title: 'Salesforce AI Associate',
            issuer: 'Salesforce',
            date: '2024',
            description: 'Understanding of AI concepts and their application in Salesforce ecosystem.',
            skills: ['AI Fundamentals', 'Salesforce Platform', 'Machine Learning', 'Data Analysis'],
            icon: '☁️',
            color: 'from-blue-600 to-cyan-500',
            verificationLink: '#'
        }
    ];

    return (
        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Certifications
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Professional certifications that validate my expertise and commitment to continuous learning
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            {/* Header with Icon */}
                            <div className={`h-32 bg-gradient-to-br ${cert.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10"></div>
                                <div className="relative h-full flex items-center justify-center">
                                    <div className="text-6xl opacity-80">
                                        {cert.icon}
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                        <Award className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                        {cert.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-blue-600 dark:text-blue-400 font-semibold">
                                            {cert.issuer}
                                        </span>
                                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {cert.date}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* Skills */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        Key Skills:
                                    </h4>
                                    <div className="flex flex-wrap gap-1">
                                        {cert.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: (index * 0.2) + (skillIndex * 0.05), duration: 0.4 }}
                                                viewport={{ once: true }}
                                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                {/* Verification Link */}
                                <a
                                    href={cert.verificationLink}
                                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
                                >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    View Credential
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Future Learning Goals */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Continuous Learning Journey
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            I&apos;m committed to staying current with the latest technologies and best practices in software development.
                            Currently pursuing additional certifications in cloud computing and advanced JavaScript frameworks.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['AWS Cloud Practitioner', 'React Advanced Patterns', 'TypeScript Deep Dive', 'Docker & Kubernetes'].map((future, index) => (
                                <span
                                    key={future}
                                    className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                                >
                                    {future} (In Progress)
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
