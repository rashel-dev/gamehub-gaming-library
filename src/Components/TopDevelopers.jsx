import React from "react";
import { motion } from "framer-motion";

const TopDevelopers = () => {
    const developers = [
        {
            id: 1,
            name: "Rockstar North",
            logo: "🎮",
            games: ["GTA V", "Red Dead Redemption 2"],
            totalGames: 15,
            rating: 4.8,
            color: "bg-gradient-to-br from-slate-700 to-slate-900",
        },
        {
            id: 2,
            name: "CD Projekt Red",
            logo: "🐺",
            games: ["The Witcher 3", "Cyberpunk 2077"],
            totalGames: 8,
            rating: 4.7,
            color: "bg-gradient-to-br from-red-600 to-red-800",
        },
        {
            id: 3,
            name: "Larian Studios",
            logo: "🎲",
            games: ["Baldur's Gate 3", "Divinity: Original Sin 2"],
            totalGames: 12,
            rating: 4.9,
            color: "bg-gradient-to-br from-purple-600 to-purple-900",
        },
        {
            id: 4,
            name: "Epic Games",
            logo: "⚡",
            games: ["Fortnite", "Unreal Tournament"],
            totalGames: 20,
            rating: 4.5,
            color: "bg-gradient-to-br from-blue-600 to-blue-900",
        },
        {
            id: 5,
            name: "Riot Games",
            logo: "⚔️",
            games: ["League of Legends", "Valorant"],
            totalGames: 6,
            rating: 4.6,
            color: "bg-gradient-to-br from-orange-600 to-red-700",
        },
        {
            id: 6,
            name: "miHoYo",
            logo: "✨",
            games: ["Genshin Impact", "Honkai: Star Rail"],
            totalGames: 10,
            rating: 4.7,
            color: "bg-gradient-to-br from-pink-500 to-purple-700",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-16 bg-gradient-to-b from-base-200 to-base-100">
            <div className="container mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }} className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Game Developers</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Meet the creative minds behind your favorite games</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {developers.map((developer) => (
                        <motion.div key={developer.id} variants={cardVariants} whileHover={{ y: -10 }} className="group">
                            <div className={`${developer.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                                {/* Decorative background elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

                                <div className="relative z-10">
                                    {/* Logo */}
                                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{developer.logo}</div>

                                    {/* Developer Name */}
                                    <h3 className="text-2xl font-bold text-white mb-3">{developer.name}</h3>

                                    {/* Popular Games */}
                                    <div className="mb-4">
                                        <p className="text-white/70 text-sm mb-2">Popular Games:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {developer.games.map((game, index) => (
                                                <span key={index} className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                                                    {game}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span className="text-white font-bold">{developer.rating}/5</span>
                                        </div>
                                        <div className="text-white/80 text-sm">{developer.totalGames} Games</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }} className="mt-12 text-center">
                    <div className="bg-base-200 rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-3">Want to see your studio here?</h3>
                        <p className="text-gray-600 mb-6">Join our platform and showcase your games to millions of players worldwide</p>
                        <button className="btn btn-primary btn-lg">Partner With Us</button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TopDevelopers;
