import React, { use, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEdit, FaUser, FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import userIcon from "../assets/userIcon.png";
import { useNavigate } from "react-router";

const MyProfile = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "GameHub | My Profile";
    }, []);

    return (
        <div className="min-h-screen bg-linear-to-br from-base-100 via-base-200 to-base-300">
            <ToastContainer />
            <div className="container mx-auto px-4 py-8">
                {/* Profile Header */}
                <div className="bg-base-100 rounded-2xl shadow-xl p-8 mb-8">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                        {/* Profile Picture */}
                        <div className="relative">
                            <img src={user?.photoURL || userIcon} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg" />
                        </div>

                        {/* User Info */}
                        <div className="flex-1 text-center lg:text-left">
                            <h1 className="text-4xl font-bold text-base-content mb-2">{user?.displayName || "Anonymous User"}</h1>
                            <p className="text-base-content/70 text-lg mb-4">
                                <FaEnvelope className="inline mr-2" />
                                {user?.email}
                            </p>
                            <p className="text-base-content/70 text-sm">
                                <FaCalendarAlt className="inline mr-2" />
                                Member since {user?.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : "Recently"}
                            </p>
                        </div>

                        {/* edit profile Buttons */}
                        <div className="flex gap-3">
                            <button onClick={() => navigate('/UpdateProfileForm')} className="btn btn-primary gap-2">
                                <FaEdit />
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
                {/* Profile Information*/}
                <div className="space-y-8">
                    <div className="bg-base-100 rounded-2xl shadow-xl p-6">
                        <h2 className="text-2xl font-bold text-base-content mb-6 flex items-center gap-2">
                            <FaUser className="text-primary" />
                            Profile Information
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                                <FaUser className="text-primary text-xl" />
                                <div>
                                    <p className="font-semibold text-base-content">Display Name</p>
                                    <p className="text-base-content/70">{user?.displayName || "Not set"}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                                <FaEnvelope className="text-primary text-xl" />
                                <div>
                                    <p className="font-semibold text-base-content">Email</p>
                                    <p className="text-base-content/70">{user?.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-lg">
                                <FaCalendarAlt className="text-primary text-xl" />
                                <div>
                                    <p className="font-semibold text-base-content">Account Created</p>
                                    <p className="text-base-content/70">
                                        {user?.metadata?.creationTime
                                            ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })
                                            : "Recently"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;