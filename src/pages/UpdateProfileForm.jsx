import React, { useState, use, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSave, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router";

const UpdateProfileForm = () => {
    const { user, updateUser } = use(AuthContext);
    const [editForm, setEditForm] = useState({
        displayName: user?.displayName || "",
        photoURL: user?.photoURL || "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "GameHub | Update Profile";
    }, []);

    const handleSave = async () => {
        try {
            await updateUser({
                displayName: editForm.displayName,
                photoURL: editForm.photoURL,
            });
            toast.success("Profile updated successfully!");
            navigate("/my-profile");
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error("Failed to update profile. Please try again.");
        }
    };

    const handleCancel = () => {
        navigate("/my-profile");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center">
            <ToastContainer />
            <div className="w-full max-w-md p-8 space-y-6 bg-base-200 rounded-2xl shadow-xl">
                <h1 className="text-3xl font-bold text-center text-base-content">Update Profile</h1>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Display Name</span>
                    </label>
                    <input
                        type="text"
                        name="displayName"
                        value={editForm.displayName}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        placeholder="Enter your display name"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Profile Picture URL</span>
                    </label>
                    <input
                        type="url"
                        name="photoURL"
                        value={editForm.photoURL}
                        onChange={handleInputChange}
                        className="input input-bordered w-full"
                        placeholder="Enter profile picture URL"
                    />
                </div>
                <div className="flex gap-2 justify-center">
                    <button onClick={handleSave} className="btn btn-success gap-2">
                        <FaSave />
                        Save
                    </button>
                    <button onClick={handleCancel} className="btn btn-outline gap-2">
                        <FaTimes />
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfileForm;
