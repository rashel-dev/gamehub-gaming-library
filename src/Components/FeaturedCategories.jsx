import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const FeaturedCategories = () => {
    const categories = [
        {
            id: 1,
            name: "Battle Royale",
            description: "Last player standing wins",
            icon: "🎯",
            gradient: "from-red-500 to-orange-500",
            gameCount: 45,
        },
        {
            id: 2,
            name: "RPG",
            description: "Epic adventures await",
            icon: "⚔️",
            gradient: "from-purple-500 to-pink-500",
            gameCount: 67,
        },
        {
            id: 3,
            name: "FPS",
            description: "Fast-paced shooting action",
            icon: "🎮",
            gradient: "from-blue-500 to-cyan-500",
            gameCount: 52,
        },
        {
            id: 4,
            name: "MOBA",
            description: "Strategic team battles",
            icon: "🏆",
            gradient: "from-green-500 to-emerald-500",
            gameCount: 28,
        },
        {
            id: 5,
            name: "Sandbox",
            description: "Build your own world",
            icon: "🏗️",
            gradient: "from-yellow-500 to-amber-500",
            gameCount: 34,
        },
        {
            id: 6,
            name: "Action-Adventure",
            description: "Thrilling open-world experiences",
            icon: "🗺️",
            gradient: "from-indigo-500 to-violet-500",
            gameCount: 41,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-16 bg-base-100">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Game Categories</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Find your favorite genre and discover new gaming experiences</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {categories.map((category) => (
                        <motion.div key={category.id} variants={itemVariants} whileHover={{ scale: 1.05 }} className="group cursor-pointer">
                            <Link to="/games" className="block">
                                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.gradient} p-6 h-48 shadow-lg hover:shadow-2xl transition-all duration-300`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>

                                    <div className="relative z-10 h-full flex flex-col justify-between text-white">
                                        <div>
                                            <div className="text-5xl mb-3">{category.icon}</div>
                                            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                                            <p className="text-white/90 text-sm">{category.description}</p>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">{category.gameCount} Games</span>
                                            <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: false }} className="text-center mt-12">
                    <Link to="/games" className="btn btn-primary btn-lg">
                        Browse All Categories
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedCategories;
