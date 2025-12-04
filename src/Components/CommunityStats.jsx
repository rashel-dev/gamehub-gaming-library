import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const CommunityStats = () => {
    const stats = [
        {
            id: 1,
            value: "2.5M+",
            label: "Active Players",
            icon: "👥",
            color: "from-blue-500 to-cyan-500",
        },
        {
            id: 2,
            value: "500+",
            label: "Games Available",
            icon: "🎮",
            color: "from-purple-500 to-pink-500",
        },
        {
            id: 3,
            value: "1M+",
            label: "Downloads",
            icon: "📥",
            color: "from-green-500 to-emerald-500",
        },
        {
            id: 4,
            value: "4.8/5",
            label: "Average Rating",
            icon: "⭐",
            color: "from-yellow-500 to-orange-500",
        },
    ];

    const features = [
        {
            id: 1,
            title: "Cross-Platform Gaming",
            description: "Play your favorite games on any device, anywhere",
            icon: "🌐",
        },
        {
            id: 2,
            title: "Cloud Saves",
            description: "Never lose your progress with automatic cloud backup",
            icon: "☁️",
        },
        {
            id: 3,
            title: "Community Forums",
            description: "Connect with players, share tips, and make friends",
            icon: "💬",
        },
        {
            id: 4,
            title: "Regular Updates",
            description: "New games and features added every week",
            icon: "🔄",
        },
    ];

    const counterVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-16 bg-base-100 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Stats Section */}
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Gaming Community</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Be part of the fastest-growing gaming platform with millions of players worldwide</p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            variants={counterVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="group"
                        >
                            <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>

                                <div className="relative z-10">
                                    <div className="text-5xl mb-3">{stat.icon}</div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-white/90 text-sm font-medium">{stat.label}</div>
                                </div>

                                {/* Decorative element */}
                                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Features Section */}
                <div className="bg-base-200 rounded-3xl p-8 md:p-12">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="text-2xl md:text-3xl font-bold text-center mb-10"
                    >
                        Why Choose GameHub?
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                variants={featureVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="flex items-start gap-4 bg-base-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }} className="mt-10 text-center">
                        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                            <h4 className="text-2xl font-bold mb-3">Ready to Start Your Gaming Journey?</h4>
                            <p className="mb-6 text-white/90">Create your free account and get instant access to hundreds of games</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/register" className="btn btn-lg bg-white text-primary hover:bg-gray-100 border-none">
                                    Sign Up Now
                                </Link>
                                <Link to="/games" className="btn btn-lg btn-outline border-white text-white hover:bg-white hover:text-primary">
                                    Browse Games
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CommunityStats;
