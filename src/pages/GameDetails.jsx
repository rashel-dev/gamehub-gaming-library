import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import Loading from "../Components/Loading";
import { FaArrowLeft, FaDownload, FaRegStar, FaStar, FaStarHalfAlt, FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { toast, ToastContainer } from "react-toastify";
import { MdDelete, MdError } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";

const GameDetails = () => {
    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = () => {
        setIsDownloaded(true);
        toast.success("Game downloaded successfully!");
    };

    const handleUninstall = () => {
        setIsDownloaded(false);
        toast.success("Game uninstalled successfully!");
    };

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const response = await fetch("/games.json");
                const games = await response.json();
                const foundGame = games.find((g) => g.id === id);

                if (foundGame) {
                    setGame(foundGame);
                    document.title = `GameHub | ${foundGame.title}`;
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching game details:", error);
                setLoading(false);
            }
        };

        fetchGameDetails();
    }, [id]);

    if (loading) {
        return <Loading></Loading>;
    }

    if (!game) {
        return (
            <div className="min-h-screen bg-linear-to-br from-base-200 to-base-300 flex items-center justify-center">
                <div className="text-center p-8">
                    <div className="mb-8">
                        <MdError className="w-16 h-16 mx-auto text-error mb-4" />
                        <h1 className="text-5xl font-bold text-error mb-4">Game Not Found</h1>
                        <p className="text-xl text-base-content/70 mb-8">The game you're looking for doesn't exist or has been removed.</p>
                    </div>
                    <Link to="/games" className="btn btn-primary btn-lg">
                        <FaArrowLeft className="w-5 h-5 mr-2" />
                        Browse All Games
                    </Link>
                </div>
            </div>
        );
    }

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(parseFloat(rating));
        const hasHalfStar = parseFloat(rating) % 1 !== 0;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<FaStar key={i} className="w-5 h-5 text-yellow-400" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<FaStarHalfAlt key={i} className="w-5 h-5 text-yellow-400" />);
            } else {
                stars.push(<FaRegStar key={i} className="w-5 h-5 text-gray-300" />);
            }
        }
        return stars;
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-base-100 via-base-200 to-base-300">
            <ToastContainer></ToastContainer>
            {/* Hero Section*/}
            <div className="relative h-[40vh] md:h-[60vh] lg:h-[80vh] overflow-hidden">
                <div className="absolute inset-0">
                    <img src={game.coverPhoto} alt={game.title} className="w-full h-full object-cover transform scale-105 transition-transform duration-1000" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl mx-auto px-4">
                        <div className="mb-2 md:mb-4 lg:mb-6">
                            <span className="badge badge-primary badge-lg text-sm lg:text-lg px-6 py-3 mb-2 lg:mb-4">{game.category}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-2 md:mb-4 lg:mb-6 leading-tight">{game.title}</h1>

                        <div className="flex items-center justify-center gap-4 mb-4 lg:mb-6">
                            <div className="flex items-center gap-2">{renderStars(game.ratings)}</div>
                            <span className="text-sm md:text-xl lg:text-2xl font-bold">{game.ratings}/5</span>
                            <span className="text-sm md:text-xl opacity-80">by {game.developer}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {isDownloaded ? (
                                <button onClick={handleUninstall} className="btn btn-error btn-lg px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                                    <MdDelete />
                                    Uninstall Now
                                </button>
                            ) : (
                                <button onClick={handleDownload} className="btn btn-secondary btn-lg px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                                    <FaDownload />
                                    Download Now
                                </button>
                            )}
                            <button className="btn btn-outline btn-lg px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300">
                                <CiHeart />
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {/* Game Overview */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-8">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold mb-6">About {game.title}</h2>
                            <p className="text-lg leading-relaxed text-base-content/80">{game.description}</p>

                            <div className="divider"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-lg">
                                    <div className="p-3 bg-primary/10 rounded-lg">
                                        <BiSolidCategory className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Category</h3>
                                        <p className="text-base-content/70">{game.category}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-lg">
                                    <div className="p-3 bg-secondary/10 rounded-lg">
                                        <FaUser className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Developer</h3>
                                        <p className="text-base-content/70">{game.developer}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-lg">
                                    <div className="p-3 bg-accent/10 rounded-lg">
                                        <FaStar className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Rating</h3>
                                        <p className="text-base-content/70">{game.ratings}/5 Stars</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-base-200 rounded-lg">
                                    <div className="p-3 bg-info/10 rounded-lg">
                                        <FaDownload className="w-6 h-6 text-info" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Download</h3>
                                        <p className="text-base-content/70">Available Now</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
