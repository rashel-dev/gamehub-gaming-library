import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";
import logoImg from "../assets/Gamehub logo2.png";


const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <img className="w-10 rounded" src={logoImg} alt="Nexus Play Logo" />
                            </div>
                            <span className="text-xl font-bold text-primary">Game Hub</span>
                        </div>
                        <p className="text-sm text-base-content/70 max-w-xs">Your ultimate destination for discovering, rating, and sharing amazing games. Join our community of passionate gamers.</p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/mohammad-rashel-2197322b2/" className="text-base-content/60 hover:text-primary transition-colors">
                                <FaLinkedin className="h-8 w-8"></FaLinkedin>
                            </a>
                            <a href="#" className="text-base-content/60 hover:text-primary transition-colors">
                                <FaTwitter className="h-8 w-8"></FaTwitter>
                            </a>
                            <a href="https://www.facebook.com/mohammadrashel.mohammodrashel" className="text-base-content/60 hover:text-primary transition-colors">
                                <FaFacebook className="h-8 w-8"></FaFacebook>
                            </a>
                            <a href="#" className="text-base-content/60 hover:text-primary transition-colors">
                                <FaInstagram className="h-8 w-8"></FaInstagram>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/games" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    All Games
                                </Link>
                            </li>
                            <li>
                                <Link to="/trending" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Trending Games
                                </Link>
                            </li>
                            <li>
                                <Link to="/categories" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Categories
                                </Link>
                            </li>
                            <li>
                                <Link to="/reviews" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Reviews
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Game Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Action & Adventure
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    RPG & Strategy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Sports & Racing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Puzzle & Indie
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Multiplayer
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-sm text-base-content/70 hover:text-primary transition-colors">
                                    Community Guidelines
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-base-300 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-base-content/60">© 2024 Game Hub. All rights reserved.</p>
                        <div className="flex items-center gap-4 text-sm text-base-content/60 flex-col md:flex-row">
                            <span>Made with ❤️ for gamers</span>
                            <div className="flex items-center gap-1">
                                <span>Made by</span>
                                <span className="font-semibold text-primary">Mohammad Rashel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
