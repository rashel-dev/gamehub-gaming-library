import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {motion} from "framer-motion";

const BannerSlider = () => {
    const bannerImages = [
        {
            id: 1,
            src: "https://i.ibb.co.com/Z1gJCSN2/Baldurs-Gate.jpg",
            alt: "Baldur's Gate 3",
            title: "Baldur's Gate 3",
            subtitle: "A story-rich, party-based RPG set in the Dungeons & Dragons universe",
            category: "Role-Playing Game (RPG)",
            ratings: "4.9",
        },
        {
            id: 2,
            src: "https://i.ibb.co.com/xty8n2n8/GTAV.jpg",
            alt: "Grand Theft Auto V",
            title: "Grand Theft Auto V",
            subtitle: "An open-world action-adventure game set in the fictional state of San Andreas",
            category: "Action-Adventure",
            ratings: "4.8",
        },
        {
            id: 3,
            src: "https://i.ibb.co.com/LhQKFVyr/Witcher-3.jpg",
            alt: "The Witcher 3: Wild Hunt",
            title: "The Witcher 3: Wild Hunt",
            subtitle: "Play as monster slayer Geralt of Rivia in a dark fantasy open world",
            category: "Open-World RPG",
            ratings: "4.9",
        },
    ];

    return (
        <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    clickable: true,
                    bulletClass: "swiper-pagination-bullet bg-white/50",
                    bulletActiveClass: "swiper-pagination-bullet-active bg-primary",
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="h-full w-full"
            >
                {bannerImages.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="relative h-full w-full">
                            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image.src})` }}>
                                <div className="absolute inset-0 bg-black/40"></div>
                            </div>

                            <div className="relative z-10 h-full flex items-center justify-center text-center px-3 sm:px-4">
                                <div className="max-w-4xl mx-auto">
                                    <div className="mb-2 sm:mb-4">
                                        <span className="badge badge-primary text-xs sm:text-sm px-2 sm:px-3 py-1">{image.category}</span>
                                    </div>
                                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg leading-tight">{image.title}</h1>
                                    <p className="text-sm sm:text-xl md:text-2xl text-white/90 mb-4 sm:mb-6 drop-shadow-md px-2">{image.subtitle}</p>
                                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8">
                                        <div className="flex items-center gap-1 sm:gap-2">
                                            <div className="flex items-center gap-0.5">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <svg
                                                        key={star}
                                                        className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= parseFloat(image.ratings) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text-white font-semibold text-sm sm:text-base">{image.ratings}/5</span>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-sm sm:btn-lg text-white hover:btn-secondary transition-all duration-300">Play Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="swiper-button-prev absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 sm:w-12 sm:h-12 items-center justify-center transition-all duration-300 hidden sm:flex"></div>
            <div className="swiper-button-next absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white rounded-full w-8 h-8 sm:w-12 sm:h-12 items-center justify-center transition-all duration-300 hidden sm:flex"></div>

            <div className="swiper-pagination absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20"></div>
        </motion.section>
    );
};

export default BannerSlider;
