import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Loading from "../Components/Loading";

const Games = () => {
    const [gamesData, setGamesData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load games data from JSON file
    useEffect(() => {
        document.title = "GameHub | Games";
        const loadGamesData = async () => {
            try {
                const response = await fetch("/games.json");
                const data = await response.json();
                setGamesData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error loading games data:", error);
                setLoading(false);
            }
        };

        loadGamesData();
    }, []);

    // Show loading state
    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="min-h-screen bg-base-100">
            {/* Header Section */}
            <div className="bg-primary text-primary-content py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">All Games</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">Discover our complete collection of games. Browse through all available games.</p>
                </div>
            </div>

            {/* Games Grid */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {gamesData.map((game) => (
                        <Link key={game.id} to={`/game/${game.id}`} className="group">
                            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <figure className="relative overflow-hidden">
                                    <img src={game.coverPhoto} alt={game.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="absolute top-4 right-4">
                                        <div className="badge badge-primary text-white font-semibold">{game.ratings}/5</div>
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

                                        <div className="text-xs text-gray-500 text-right">{game.developer}</div>
                                    </div>

                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary btn-sm">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Games;
