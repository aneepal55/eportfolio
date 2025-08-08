'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // You can integrate with a contact form service here
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: 'Email',
            value: 'yaagnik.p@gmail.com',
            link: 'mailto:yaagnik.p@gmail.com',
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            label: 'Phone',
            value: '470-389-5015',
            link: 'tel:4703895015',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            label: 'Location',
            value: 'Atlanta, GA',
            link: '#',
            color: 'from-blue-500 to-purple-500'
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="w-6 h-6" />,
            label: 'GitHub',
            username: '@aneepal55',
            link: 'https://github.com/aneepal55',
            color: 'hover:bg-gray-800'
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: 'LinkedIn',
            username: 'aneeshpallapolu',
            link: 'https://www.linkedin.com/in/aneeshpallapolu',
            color: 'hover:bg-blue-600'
        }
    ];

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                        Feel free to reach out!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Let&apos;s Connect
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Whether you&apos;re looking to hire, collaborate on a project, or just want to say hello,
                                I&apos;d love to hear from you. I typically respond within 24 hours.
                            </p>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <motion.a
                                    key={contact.label}
                                    href={contact.link}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                                        {contact.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {contact.label}
                                        </div>
                                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {contact.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Follow Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className={`flex items-center px-4 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 ${social.color} hover:text-white group`}
                                    >
                                        <span className="group-hover:scale-110 transition-transform duration-300">
                                            {social.icon}
                                        </span>
                                        <div className="ml-3">
                                            <div className="text-sm font-medium">{social.label}</div>
                                            <div className="text-xs opacity-75">{social.username}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <MessageCircle className="w-6 h-6 mr-3 text-blue-600" />
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                                    placeholder="Tell me about your project or just say hello!"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-300">
                        © 2025 Aneesh Pallapolu. Built with Next.js, TypeScript, and Tailwind CSS.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
