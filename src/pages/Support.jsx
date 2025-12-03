import { toast } from "react-toastify";

const Support = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Ticket submitted successfully!");
        e.target.reset();
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="max-w-md w-full bg-base-100 shadow-xl rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center text-primary mb-6">Support Center</h1>
                <p className="text-gray-600 text-center mb-8">Need help? We are here for you.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your Name" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your Email" className="input input-bordered w-full" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered w-full h-24" placeholder="Describe your issue" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary w-full">
                        Submit Ticket
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                        Or email us at{" "}
                        <a href="mailto:support@gamehub.com" className="link link-primary">
                            support@gamehub.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Support;
