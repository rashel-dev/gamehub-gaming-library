import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";

const Games = () => {
    const [gamesData, setGamesData] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [selectedCategory, setSelectedCategory] = useState("all");

    // Load games data from JSON file
    useEffect(() => {
        document.title = "GameHub | Games";
        const loadGamesData = async () => {
            try {
                const response = await fetch("/games.json");
                const data = await response.json();
                setGamesData(data);
                setFilteredGames(data);
                setLoading(false);
            } catch (error) {
                console.error("Error loading games data:", error);
                setLoading(false);
            }
        };

        loadGamesData();
    }, []);

    // Get unique categories
    const categories = ["all", ...new Set(gamesData.map((game) => game.category))];

    // Format download count for display
    const formatDownloads = (downloads) => {
        if (downloads >= 1000000) {
            return `${(downloads / 1000000).toFixed(1)}M`;
        } else if (downloads >= 1000) {
            return `${(downloads / 1000).toFixed(0)}K`;
        }
        return downloads.toString();
    };

    // Filter and sort games
    useEffect(() => {
        let filtered = [...gamesData];

        // Apply search filter
        if (searchQuery) {
            filtered = filtered.filter(
                (game) =>
                    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    game.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    game.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    game.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Apply category filter
        if (selectedCategory !== "all") {
            filtered = filtered.filter((game) => game.category === selectedCategory);
        }

        // Apply sorting
        switch (sortBy) {
            case "downloads":
                filtered.sort((a, b) => b.downloads - a.downloads);
                break;
            case "rating":
                filtered.sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings));
                break;
            case "title":
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                // Keep original order
                break;
        }

        setFilteredGames(filtered);
    }, [searchQuery, sortBy, selectedCategory, gamesData]);

    // Show loading state
    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="min-h-screen bg-base-100">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-bold mb-4">
                        All Games
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg opacity-90 max-w-2xl mx-auto">
                        Discover our complete collection of {gamesData.length} amazing games
                    </motion.p>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-base-200 py-6 sticky top-0 z-30 shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search games by title, category, or developer..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="input input-bordered w-full pr-10 focus:outline-primary"
                                />
                                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                            {/* Category Filter */}
                            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="select select-bordered w-full sm:w-auto focus:outline-primary">
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category === "all" ? "All Categories" : category}
                                    </option>
                                ))}
                            </select>

                            {/* Sort By */}
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="select select-bordered w-full sm:w-auto focus:outline-primary">
                                <option value="default">Default Order</option>
                                <option value="downloads">Most Downloaded</option>
                                <option value="rating">Highest Rated</option>
                                <option value="title">A-Z</option>
                            </select>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-center lg:text-left">
                        <p className="text-sm text-gray-600">
                            Showing <span className="font-bold text-primary">{filteredGames.length}</span> of <span className="font-bold">{gamesData.length}</span> games
                            {searchQuery && <span className="ml-2">for &quot;{searchQuery}&quot;</span>}
                        </p>
                    </div>
                </div>
            </div>

            {/* Games Grid */}
            <div className="container mx-auto px-4 py-8">
                {filteredGames.length === 0 ? (
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                        <div className="text-6xl mb-4">🎮</div>
                        <h3 className="text-2xl font-bold mb-2">No games found</h3>
                        <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("all");
                                setSortBy("default");
                            }}
                            className="btn btn-primary"
                        >
                            Clear Filters
                        </button>
                    </motion.div>
                ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredGames.map((game, index) => (
                            <motion.div key={game.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                                <Link to={`/game/${game.id}`} className="group block">
                                    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                                        <figure className="relative overflow-hidden">
                                            <img src={game.coverPhoto} alt={game.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                                            <div className="absolute top-4 right-4">
                                                <div className="badge badge-primary text-white font-semibold">{game.ratings}/5</div>
                                            </div>
                                            {/* Download Badge */}
                                            <div className="absolute top-4 left-4">
                                                <div className="badge badge-secondary text-white font-semibold flex items-center gap-1">
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {formatDownloads(game.downloads)}
                                                </div>
                                            </div>
                                        </figure>

                                        <div className="card-body p-4">
                                            <div className="mb-2">
                                                <span className="badge badge-outline text-xs">{game.category}</span>
                                            </div>

                                            <h3 className="card-title text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{game.title}</h3>

                                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{game.description}</p>

                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center gap-1">
                                                    <div className="flex items-center gap-0.5">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <svg
                                                                key={star}
                                                                className={`w-3 h-3 ${star <= parseFloat(game.ratings) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-600">{game.ratings}</span>
                                                </div>

                                                <div className="text-xs text-gray-500 text-right truncate max-w-[100px]" title={game.developer}>
                                                    {game.developer}
                                                </div>
                                            </div>

                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary btn-sm w-full group-hover:btn-secondary transition-colors">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Games;
