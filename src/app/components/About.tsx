'use client';

import { motion } from 'framer-motion';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Code className="w-6 h-6" />,
            title: 'Full-Stack Development',
            description: 'Expert in both web and mobile application development using modern frameworks'
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: 'Problem Solver',
            description: 'Strong analytical thinking with experience in data structures and algorithms'
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: 'Research Experience',
            description: 'Active in university research projects and academic collaboration'
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'Performance Focused',
            description: 'Committed to writing efficient, scalable code and optimized user experiences'
        }
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Hello, I&apos;m <span className="font-semibold text-blue-600 dark:text-blue-400">Aneesh Pallapolu</span>—a
                            dedicated software developer with expertise in Python, JavaScript/TypeScript, React, SQL, and more.
                            I specialize in full-stack development, bringing ideas from concept to deployment with clean,
                            efficient code and user-centered design.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            My experience spans from building payment processing applications to developing professor review
                            platforms for university students. I excel in collaborative environments and have earned recognition
                            in competitive programming challenges, including a 2nd place finish at GSU&apos;s Technology Immersion Challenge.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Recently graduated with my BS in Computer Science from Georgia State University and currently gaining
                            industry experience through my ongoing internship at McKessen. I&apos;m passionate about leveraging technology
                            to create meaningful impact in people&apos;s lives.
                        </p>
                    </motion.div>

                    {/* Highlights Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={highlight.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                                    {highlight.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {highlight.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {highlight.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
