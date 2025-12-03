import { Navigate, NavLink, useNavigate } from "react-router";
import logoImg from "../assets/Gamehub logo2.png";
import { RiMenu2Fill } from "react-icons/ri";
import { AuthContext } from "../context/AuthContext";
import { use } from "react";
import { toast, ToastContainer } from "react-toastify";
import userIcon from "../assets/userIcon.png";

const Header = () => {
    const navigate = useNavigate();

    const { user, logOutUser } = use(AuthContext);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success("LogOut Successfully");
                setTimeout(() => {
                    navigate("/login");
                }, 1000);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className="hover:text-primary">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/games" className="hover:text-primary">
                    Games
                </NavLink>
            </li>
            <li>
                <NavLink to="/about-us" className="hover:text-primary">
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink to="/support" className="hover:text-primary font-semibold">
                    Support
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/downloaded-games" className="hover:text-primary">
                        Downloaded Games
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm sm:px-4 md:px-8 sticky top-0 z-50">
                {/* Left side - Logo */}
                <ToastContainer />
                <div className="navbar-start">
                    {/* Mobile Dropdown */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                        <RiMenu2Fill />
                        </div>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-100 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            {user ? (
                                <div>
                                <button onClick={handleLogOut} className="btn btn-outline mt-2">
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <li>
                                    <NavLink to="/login" className="btn btn-outline mt-2">
                                            Login
                                        </NavLink>
                                    </li>
                                    <li>
                                    <NavLink to="/register" className="btn btn-primary text-white mt-2">
                                            Register
                                        </NavLink>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </div>

                    {/* Logo */}

                <div onClick={() => navigate("/")} className="btn btn-ghost text-xl flex items-center gap-2">
                        <img className="w-10 rounded" src={logoImg} alt="Nexus Play Logo" />
                    <span className="font-bold tracking-wide text-primary">Game Hub</span>
                    </div>
                </div>

                {/*NavLinks and Buttons for desktop */}
                <div className="navbar-end lg:hidden cursor-pointer">
                {user && <img onClick={() => navigate("/my-profile")} className="w-10 h-10 rounded-full" src={`${user ? user.photoURL : userIcon}`} alt="" />}
                </div>
                <div className="navbar-end hidden lg:flex items-center gap-4">
                    <ul className="menu menu-horizontal px-1 font-medium">{navLinks}</ul>
                    {user ? (
                        <div className="flex items-center gap-4">
                        <img onClick={() => navigate("/my-profile")} className="w-10 h-10 rounded-full cursor-pointer" src={`${user ? user.photoURL : userIcon}`} alt="" />
                        <button onClick={handleLogOut} className="btn btn-outline mt-2">
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="space-x-4">
                        <NavLink to="/login" className="btn btn-outline">
                                Login
                            </NavLink>
                        <NavLink to="/register" className="btn btn-primary text-white">
                                Register
                            </NavLink>
                        </div>
                    )}
            </div>
        </div>
    );
};

export default Header;
