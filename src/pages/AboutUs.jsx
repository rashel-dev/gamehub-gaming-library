import React from "react";
import { useNavigate } from "react-router";

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-extrabold text-primary sm:text-5xl sm:tracking-tight lg:text-6xl">About Game Hub</h1>
                    <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">Your ultimate destination for discovering, reviewing, and sharing the best games in the universe.</p>
                </div>

                {/* Mission Section */}
                <div className="bg-base-100 rounded-lg shadow-xl overflow-hidden mb-12">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                At Game Hub, we believe that gaming is more than just a hobby; it's a way to connect, explore, and experience new worlds. Our mission is to build a community where
                                gamers can find their next favorite title, share their honest opinions, and connect with like-minded individuals.
                            </p>
                            <p className="text-lg text-gray-600">
                                Whether you're a casual player or a hardcore enthusiast, Game Hub provides the tools you need to track your gaming journey and discover hidden gems.
                            </p>
                        </div>
                        <div className="relative h-64 lg:h-auto bg-primary/10 flex items-center justify-center">
                            {/* Placeholder for an image or illustration */}
                            <div className="text-9xl">🎮</div>
                        </div>
                    </div>
                </div>

                {/* Team Section (Optional but good for About Us) */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-xl font-semibold mb-2">Extensive Library</h3>
                            <p className="text-gray-600">Access a vast collection of games across all genres and platforms.</p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                            <div className="text-4xl mb-4">⭐</div>
                            <h3 className="text-xl font-semibold mb-2">Honest Reviews</h3>
                            <p className="text-gray-600">Read and write unbiased reviews to help the community make informed choices.</p>
                        </div>
                        {/* Feature 3 */}
                        <div className="bg-base-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                            <div className="text-4xl mb-4">🌍</div>
                            <h3 className="text-xl font-semibold mb-2">Global Community</h3>
                            <p className="text-gray-600">Connect with gamers from around the world and share your passion.</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-primary rounded-lg shadow-xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Join the Adventure?</h2>
                    <p className="text-lg mb-8 opacity-90">Start exploring our game library today and become a part of our growing community.</p>
                    <button onClick={() => navigate("/games")} className="btn btn-secondary btn-lg text-white font-bold px-8">
                        Explore Games
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
