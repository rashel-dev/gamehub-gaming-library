import React, { useState, useEffect, use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Header from "../Components/Header";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { resetPassword } = use(AuthContext);

    useEffect(() => {
        document.title = "GameHub | Forgot Password";
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await resetPassword(email);
            toast.success("Password reset email sent! Check your inbox and spam folder.");
            setEmail("");

            setTimeout(() => {
                window.open("https://mail.google.com", "_blank");
            }, 1500); 
        } catch (error) {
            console.error("Password reset error:", error);

            if (error.code === "auth/user-not-found") {
                toast.error("No account found with this email address.");
            } else if (error.code === "auth/invalid-email") {
                toast.error("Please enter a valid email address.");
            } else if (error.code === "auth/too-many-requests") {
                toast.error("Too many requests. Please try again later.");
            } else {
                toast.error("Failed to send reset email. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-base-100 via-base-200 to-base-300">
            <Header />
            <ToastContainer />

            <div className="flex justify-center min-h-screen items-center px-4">
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <div className="card-body p-8">
                        {/* Header */}
                        <div className="text-center mb-6">
                            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                <FaEnvelope className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-base-content">Forgot Password?</h2>
                            <p className="text-base-content/70 mt-2">Don't worry! Enter your email address and we'll send you instructions to reset your password.</p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleResetPassword} className="space-y-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email Address</span>
                                </label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="input input-bordered w-full" required />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" disabled={isLoading || !email} className="btn btn-primary w-full">
                                {isLoading ? (
                                    <>
                                        <span className="loading loading-spinner loading-sm"></span>
                                        Sending Instructions...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className="w-4 h-4" />
                                        Send Reset Instructions
                                    </>
                                )}
                            </button>
                        </form>

                        <div className="divider">OR</div>

                        <button onClick={() => navigate("/login")} className="btn btn-outline w-full">
                            <FaArrowLeft className="w-4 h-4" />
                            Back to Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
