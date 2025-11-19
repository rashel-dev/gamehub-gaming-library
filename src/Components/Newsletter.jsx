import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (!email) {
            toast.error("Please enter your email address!");
            return;
        }
        toast.success("Thank you for subscribing!");
        setEmail("");
    };

    return (
        <motion.section
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="py-16 bg-primary text-primary-content"
        >
            <ToastContainer />
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Game Hub</h2>
                    <p className="text-lg mb-8 opacity-90">Get the latest gaming news, exclusive offers, and updates on new releases delivered straight to your inbox.</p>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered w-full lg:w-auto lg:flex-1 bg-white text-gray-900 placeholder-gray-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleSubscribe} className="btn btn-secondary text-white hover:btn-accent transition-all duration-300">Subscribe</button>
                    </div>

                    <p className="text-sm mt-4 opacity-75">Join over 10,000 gamers who already receive our newsletter. No spam, unsubscribe anytime.</p>

                    <div className="flex justify-center items-center gap-6 mt-8">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">Weekly Gaming News</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">Exclusive Offers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">New Releases</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Newsletter;
