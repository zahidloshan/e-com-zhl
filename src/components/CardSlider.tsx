"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const slides = [
    {
        title: "ELEVATE YOUR DAILY STYLE",
        description:
            "Looking for high-quality leather wallets in Bangladesh? We offer premium leather wallets, including short wallets and long wallets at the best prices. Order now!",
        img: "https://images.unsplash.com/photo-1573497167481-d7e9b440c876?auto=format&fit=crop&w=600&q=80",
        buttonText: "Buy Now",
    },
    {
        title: "PREMIUM LEATHER WALLETS",
        description:
            "Our handcrafted leather wallets are designed for elegance and durability. Shop our collection now!",
        img: "https://images.unsplash.com/photo-1605684052879-5c8b0e379f7b?auto=format&fit=crop&w=600&q=80",
        buttonText: "Shop Now",
    },
];

const CardSlider = () => {
    return (
        <div className="container mx-auto p-6">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full max-w-4xl"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Left Side - Text */}
                            <div className="p-6 md:w-1/2 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-3">{slide.title}</h2>
                                <p className="text-gray-600 mb-4">{slide.description}</p>
                                <button className="bg-black text-white px-5 py-2 rounded-lg">
                                    {slide.buttonText}
                                </button>
                            </div>

                            {/* Right Side - Image */}
                            <div className="md:w-1/2">
                                <Image
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;
