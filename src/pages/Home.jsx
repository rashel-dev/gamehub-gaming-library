import React, { useEffect } from "react";
import BannerSlider from "../Components/BannerSlider";
import PopularGames from "../Components/PopularGames";
import Newsletter from "../Components/Newsletter";
import FeaturedCategories from "../Components/FeaturedCategories";
import TopDevelopers from "../Components/TopDevelopers";
import CommunityStats from "../Components/CommunityStats";
import { motion } from "motion/react";

const gamesData = [
    {
        id: "1",
        title: "Player Unknowns Battle Ground: PUBG",
        coverPhoto: "https://i.ibb.co.com/HfT2qSyg/PUBG.jpg",
        category: "Battle Royale",
        downloadLink: "https://www.pubgmobile.com/en-US/home.shtml",
        description: "PUBG Mobile is a fast-paced battle royale game where players fight for survival, strategy, and victory on dynamic maps.",
        ratings: "4.5",
        developer: "Krafton",
    },
    {
        id: "2",
        title: "Genshin Impact",
        coverPhoto: "https://i.ibb.co.com/gZtdg6LQ/Genshin-Impact.jpg",
        category: "Action RPG",
        downloadLink: "https://genshin.hoyoverse.com/en/",
        description: "An open-world action RPG that takes place in the fantasy world of Teyvat, where players can explore a massive world and engage in elemental combat.",
        ratings: "4.7",
        developer: "miHoYo",
    },
    {
        id: "3",
        title: "Call of Duty",
        coverPhoto: "https://i.ibb.co.com/S1x9Dxf/Call-of-Duty.webp",
        category: "FPS",
        downloadLink: "https://www.callofduty.com/mobile",
        description: "Experience the legendary Call of Duty action with classic multiplayer maps and modes, plus a 100-player Battle Royale.",
        ratings: "4.6",
        developer: "TiMi Studio Group",
    },
    {
        id: "4",
        title: "Fortnite",
        coverPhoto: "https://i.ibb.co.com/XfL6TX9C/Fortnite.jpg",
        category: "Battle Royale",
        downloadLink: "https://www.fortnite.com/",
        description: "The ultimate build-and-battle experience where you can drop onto a massive island and compete to be the last one standing.",
        ratings: "4.3",
        developer: "Epic Games",
    },
    {
        id: "5",
        title: "Minecraft",
        coverPhoto: "https://i.ibb.co.com/Sh3pHsV/Minecraft.webp",
        category: "Sandbox",
        downloadLink: "https://www.minecraft.net/en-us",
        description: "A game where players can explore blocky, procedurally generated 3D worlds and discover and extract raw materials, craft tools and items, and build structures.",
        ratings: "4.6",
        developer: "Mojang Studios",
    },
    {
        id: "6",
        title: "League of Legends: Wild Rift",
        coverPhoto: "https://i.ibb.co.com/JjMFFRg6/League-of-Legends-Wild-Rift.png",
        category: "MOBA",
        downloadLink: "https://wildrift.leagueoflegends.com/en-us/",
        description: "A 5v5 MOBA designed for mobile, bringing the strategic depth of League of Legends to a new platform.",
        ratings: "4.4",
        developer: "Riot Games",
    },
    {
        id: "15",
        title: "Grand Theft Auto V (GTA V)",
        coverPhoto: "https://i.ibb.co.com/xty8n2n8/GTAV.jpg",
        category: "Action-Adventure",
        downloadLink: "https://www.rockstargames.com/gta-v",
        description: "An open-world action-adventure game set in the fictional state of San Andreas, featuring a massive map and both single-player and online components.",
        ratings: "4.8",
        developer: "Rockstar North",
    },
    {
        id: "16",
        title: "The Witcher 3: Wild Hunt",
        coverPhoto: "https://i.ibb.co.com/LhQKFVyr/Witcher-3.jpg",
        category: "Open-World RPG",
        downloadLink: "https://www.thewitcher.com/en/witcher3",
        description: "Play as monster slayer Geralt of Rivia in a dark fantasy open world, tracking down a child of prophecy in this acclaimed RPG.",
        ratings: "4.9",
        developer: "CD Projekt Red",
    },
    {
        id: "18",
        title: "Baldur's Gate 3",
        coverPhoto: "https://i.ibb.co.com/Z1gJCSN2/Baldurs-Gate.jpg",
        category: "Role-Playing Game (RPG)",
        downloadLink: "https://larian.com/games/baldurs-gate-3",
        description: "A story-rich, party-based RPG set in the Dungeons & Dragons universe, featuring deep tactical combat and player choice.",
        ratings: "4.9",
        developer: "Larian Studios",
    },
];

const Home = () => {
    useEffect(() => {
        document.title = "GameHub | Home";
    }, []);

    return (
        <div>
            <BannerSlider></BannerSlider>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
                className="container mx-auto px-4 py-8"
            >
                <h2 className="text-3xl font-bold text-center mb-8">Welcome to Game Hub</h2>
                <p className="text-center text-gray-600 max-w-2xl mx-auto">Discover amazing games, connect with fellow gamers, and join the ultimate gaming community.</p>
            </motion.div>

            <PopularGames gamesData={gamesData}></PopularGames>
            <FeaturedCategories></FeaturedCategories>
            <TopDevelopers></TopDevelopers>
            <CommunityStats></CommunityStats>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;
