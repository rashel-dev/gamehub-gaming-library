import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Games from "../pages/Games";
import GameDetails from "../pages/GameDetails";
import ErrorPage from "../pages/ErrorPage";
import Register from "../pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import MyProfile from "../pages/MyProfile";
import Favourite from "../pages/Favourite";
import UpdateProfileForm from "../pages/UpdateProfileForm";
import AboutUs from "../pages/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/games",
                element: <Games></Games>,
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                        <MyProfile></MyProfile>
                    </PrivateRoute>
                ),
            },
            {
                path: "/game/:id",
                element: (
                    <PrivateRoute>
                        <GameDetails></GameDetails>
                    </PrivateRoute>
                ),
            },
            {
                path: "/favourite",
                element: (
                    <PrivateRoute>
                        <Favourite></Favourite>
                    </PrivateRoute>
                ),
            },
            {
                path: "/UpdateProfileForm",
                element: (
                    <PrivateRoute>
                        <UpdateProfileForm></UpdateProfileForm>
                    </PrivateRoute>
                ),
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>,
            },
        ],
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
    {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;
