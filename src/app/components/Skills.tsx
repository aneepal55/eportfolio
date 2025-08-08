'use client';

import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: [
                { name: 'Python', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'JavaScript', level: 90 },
                { name: 'PHP', level: 75 },
                { name: 'HTML/CSS', level: 95 },
                { name: 'C#', level: 70 },
                { name: 'Java', level: 80 },
                { name: 'MySQL', level: 85 }
            ],
            color: 'from-blue-600 to-blue-800'
        },
        {
            title: 'Frameworks',
            skills: [
                { name: 'React', level: 90 },
                { name: 'Node.js', level: 85 },
                { name: 'Flask', level: 80 },
                { name: 'Express.js', level: 85 },
                { name: 'React Native', level: 80 },
                { name: 'Expo', level: 75 },
                { name: 'Next.js', level: 85 }
            ],
            color: 'from-purple-600 to-purple-800'
        },
        {
            title: 'Developer Tools',
            skills: [
                { name: 'Git', level: 90 },
                { name: 'GitHub', level: 90 },
                { name: 'VS Code', level: 95 },
                { name: 'Visual Studio', level: 80 },
                { name: 'Jupyter Notebooks', level: 85 },
                { name: 'Mongoose', level: 75 },
                { name: 'Firebase', level: 80 },
                { name: 'Figma', level: 70 },
                { name: 'Clerk', level: 75 }
            ],
            color: 'from-green-600 to-green-800'
        },
        {
            title: 'Libraries',
            skills: [
                { name: 'pandas', level: 85 },
                { name: 'NumPy', level: 80 },
                { name: 'Matplotlib', level: 75 },
                { name: 'Tkinter', level: 70 },
                { name: 'axios', level: 85 },
                { name: 'jwt', level: 80 }
            ],
            color: 'from-orange-600 to-orange-800'
        }
    ];

    return (
        <section id="skills" className="py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Technical Skills
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <h3 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                {category.title}
                            </h3>
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="space-y-2"
                                    >
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3, duration: 1, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                                className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
