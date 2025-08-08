'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Trophy, Users } from 'lucide-react';

const Education = () => {
    const education = {
        institution: 'Georgia State University',
        degree: 'Bachelor of Science in Computer Science',
        specialization: 'BS/MS Dual Degree Program',
        expectedGraduation: '2025',
        gpa: '3.7',
        location: 'Atlanta, GA',
        activities: [
            'Undergraduate Research Assistant',
            'PantherWeb Club'
        ],
        achievements: [
            'Graduated with 3.7 GPA from BS/MS Dual Degree program',
            'Completed university research projects',
            'Active member of computer science student organizations'
        ],
        relevantCoursework: [
            'Data Structures & Algorithms',
            'Software Engineering',
            'Database Systems',
            'Web Development',
            'Mobile App Development',
            'Computer Networks',
            'Software Architecture',
            'Human-Computer Interaction'
        ]
    };

    return (
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Education
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        My academic journey and continuous learning path
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* University Logo/Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                                        <GraduationCap className="w-10 h-10" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                {education.degree}
                                            </h3>
                                            <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                                {education.institution}
                                            </h4>
                                            <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                                                {education.specialization}
                                            </p>
                                        </div>
                                        <div className="flex flex-col md:items-end gap-2 mt-4 md:mt-0">
                                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span className="text-sm">Graduated {education.expectedGraduation}</span>
                                            </div>
                                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                                                <Trophy className="w-4 h-4 mr-2" />
                                                <span className="text-sm">GPA: {education.gpa}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Activities */}
                                    <div className="mb-6">
                                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                                            <Users className="w-5 h-5 mr-2" />
                                            Activities & Involvement
                                        </h5>
                                        <div className="flex flex-wrap gap-2">
                                            {education.activities.map((activity, index) => (
                                                <motion.span
                                                    key={activity}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                                    viewport={{ once: true }}
                                                    className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium"
                                                >
                                                    {activity}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                            Key Achievements
                                        </h5>
                                        <ul className="space-y-2">
                                            {education.achievements.map((achievement, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-start text-gray-600 dark:text-gray-300"
                                                >
                                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span>{achievement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Relevant Coursework */}
                                    <div>
                                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                            Relevant Coursework
                                        </h5>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                            {education.relevantCoursework.map((course, index) => (
                                                <motion.span
                                                    key={course}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                                    viewport={{ once: true }}
                                                    className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-lg text-sm font-medium text-center"
                                                >
                                                    {course}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
