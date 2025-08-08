'use client';

import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Zap, Target, Code } from 'lucide-react';
import Image from 'next/image';

const Activities = () => {
    const activities = [
        {
            title: 'AI ATL Hackathon',
            year: '2024',
            description: 'Participated in an intensive hackathon focused on AI innovations. Collaborated with developers to create AI-powered solutions within tight deadlines.',
            icon: <Zap className="w-6 h-6" />,
            logo: '/img/aiatl.png',
            color: 'from-purple-500 to-pink-500',
            achievements: [
                'Developed AI-powered application in 48 hours',
                'Collaborated with multidisciplinary team',
                'Presented solution to industry judges',
                'Gained experience with cutting-edge AI tools'
            ],
            skills: ['Artificial Intelligence', 'Team Collaboration', 'Rapid Prototyping', 'Public Speaking']
        },
        {
            title: 'Hackalytics Hackathon',
            year: '2025',
            description: 'Engaged in a competitive environment to develop creative data-driven solutions. Focused on analytics and data visualization challenges.',
            icon: <Target className="w-6 h-6" />,
            logo: '/img/hackalytics.png',
            color: 'from-blue-500 to-cyan-500',
            achievements: [
                'Created innovative data visualization dashboard',
                'Implemented real-time analytics features',
                'Worked with large datasets efficiently',
                'Delivered comprehensive presentation'
            ],
            skills: ['Data Analytics', 'Data Visualization', 'Python', 'React', 'Problem Solving']
        },
        {
            title: 'GSU Technology Immersion Challenge',
            year: '2024',
            description: 'Collaborated with peers to tackle cybersecurity problems. Achieved 2nd place recognition for innovative security solution.',
            icon: <Trophy className="w-6 h-6" />,
            logo: '/img/gsu.png',
            color: 'from-green-500 to-emerald-500',
            achievements: [
                '🏆 2nd Place Winner',
                'Developed cybersecurity solution',
                'Led team technical implementation',
                'Presented to university panel'
            ],
            skills: ['Cybersecurity', 'Leadership', 'Network Security', 'Team Management']
        }
    ];

    const hackathonStats = [
        { label: 'Hackathons Participated', value: '3+', icon: <Code className="w-5 h-5" /> },
        { label: 'Awards Won', value: '1', icon: <Trophy className="w-5 h-5" /> },
        { label: 'Projects Built', value: '5+', icon: <Target className="w-5 h-5" /> },
        { label: 'Teams Collaborated', value: '10+', icon: <Users className="w-5 h-5" /> }
    ];

    return (
        <section id="activities" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Activities & Competitions
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Competitive programming and hackathon achievements that demonstrate my ability to innovate under pressure
                    </p>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {hackathonStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-3">
                                {stat.icon}
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Activities Grid */}
                <div className="space-y-8">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-8">
                                <div className="flex flex-col lg:flex-row gap-6">
                                    {/* Activity Icon and Info */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-white dark:bg-slate-700 rounded-xl flex items-center justify-center shadow-lg mb-4 overflow-hidden">
                                            <Image
                                                src={activity.logo}
                                                alt={`${activity.title} logo`}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-contain p-2"
                                            />
                                        </div>
                                        <div className="text-center lg:text-left">
                                            <div className="flex items-center justify-center lg:justify-start text-gray-500 dark:text-gray-400 text-sm">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {activity.year}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                            {activity.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                            {activity.description}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Achievements */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-2">
                                                    {activity.achievements.map((achievement, achievementIndex) => (
                                                        <motion.li
                                                            key={achievementIndex}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: (index * 0.2) + (achievementIndex * 0.1), duration: 0.6 }}
                                                            viewport={{ once: true }}
                                                            className="flex items-start text-gray-600 dark:text-gray-300"
                                                        >
                                                            <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                            <span>{achievement}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Skills Gained */}
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                    Skills Developed
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {activity.skills.map((skill, skillIndex) => (
                                                        <motion.span
                                                            key={skill}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: (index * 0.2) + (skillIndex * 0.05), duration: 0.4 }}
                                                            viewport={{ once: true }}
                                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready for New Challenges
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                            I&apos;m always excited about opportunities to solve complex problems and work with talented teams.
                            Let&apos;s build something amazing together.
                        </p>
                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <Users className="w-5 h-5 mr-2" />
                            Let&apos;s Collaborate
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Activities;
