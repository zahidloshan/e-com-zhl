// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const slides = [
//     {
//         img: "https://images.unsplash.com/photo-1573497167481-d7e9b440c876?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDN8fGZyZWV0YWl0fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
//         text: "Big Sale - Up to 50% OFF",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1605684052879-5c8b0e379f7b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDd8fGZyZWV0YWl0fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
//         text: "Explore Our New Arrivals",
//     },
//     {
//         img: "https://images.unsplash.com/photo-1535677362305-59ba35b2808b?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg1MnwwfDF8c2VhcmNofDZ8fGZyZWV0YWl0fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1080",
//         text: "Get Free Shipping on Orders Above $100",
//     },
// ];

// const Hero = () => {
//     return (
//         <div className="relative ">
//             <Swiper
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 pagination={{ clickable: true }}
//                 navigation={true}
//                 modules={[Autoplay, Pagination, Navigation]}
//                 className="h-[400px] container mx-auto rounded-b-lg "
//             >
//                 {slides.map((slide, index) => (
//                     <SwiperSlide key={index} className="relative ">
//                         <img
//                             src={slide.img}
//                             alt={slide.text}
//                             className="w-full h-full object-cover "
//                         />
//                         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 ">
//                             <h2 className="text-white text-3xl font-bold">{slide.text}</h2>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Hero;

// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const slides = [
//     {
//         title: "ELEVATE YOUR DAILY STYLE",
//         description:
//             "Looking for high-quality leather wallets in Bangladesh? We offer premium leather wallets, including short wallets and long wallets at the best prices. Order now!",
//         img: "/slider/slider1.png",
//         buttonText: "Buy Now",
//         buttonLink: "/shop", // Change this to your actual shop page
//     },
//     {
//         title: "PREMIUM WALLETS",
//         description:
//             "Looking for high-quality leather wallets in Bangladesh? We offer premium leather wallets, including short wallets and long wallets at the best prices. Order now!",
//         img: "/slider/slider1.png",
//         buttonText: "Shop Now",
//         buttonLink: "/collections", // Change this to your collections page
//     },
//     {
//         title: "EXCLUSIVE DESIGNS",
//         description:
//             "Looking for high-quality leather wallets in Bangladesh? We offer premium leather wallets, including short wallets and long wallets at the best prices. Order now!",
//         img: "/slider/slider1.png",
//         buttonText: "Explore",
//         buttonLink: "/explore", // Change this to your explore page
//     },
// ];

// const Hero = () => {
//     return (
//         <div className="container mx-auto">
//             <Swiper
//                 spaceBetween={30}
//                 centeredSlides={true}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 pagination={{ clickable: true }}
//                 navigation={true}
//                 modules={[Autoplay, Pagination, Navigation]}
//             >
//                 {slides.map((slide, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="p-10 flex flex-col md:flex-row bg-white shadow-lg rounded-b-lg overflow-hidden">
//                             {/* Left Side - Text */}
//                             <div className="p-6 md:w-1/2 flex flex-col justify-center">
//                                 <h2 className="text-3xl font-bold mb-3">{slide.title}</h2>
//                                 <p className="text-gray-600 mb-4">{slide.description}</p>

//                                 {/* Clickable Button */}
//                                 <a
//                                     href={slide.buttonLink}
//                                     className="inline-block text-center bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
//                                 >
//                                     {slide.buttonText}
//                                 </a>
//                             </div>

//                             {/* Right Side - Image */}
//                             <div className="md:w-1/2">
//                                 <img
//                                     src={slide.img}
//                                     alt={slide.title}
//                                     className="w-full h-full object-cover"
//                                 />
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// };

// export default Hero;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        title: "ELEVATE YOUR DAILY STYLE",
        description:
            "Looking for high-quality leather wallets in Bangladesh? We offer premium leather wallets, including short wallets and long wallets at the best prices. Order now!",
        img: "/slider/slider1.png",
        buttonText: "Buy Now",
        buttonLink: "/shop",
    },
    {
        title: "PREMIUM WALLETS",
        description:
            "Looking for high-quality leather wallets in Bangladesh? We offer premium leather wallets, including short wallets and long wallets at the best prices. Order now!",
        img: "/slider/slider1.png",
        buttonText: "Shop Now",
        buttonLink: "/collections",
    },
    {
        title: "EXCLUSIVE DESIGNS",
        description:
            "Looking for high-quality leather wallets in Bangladesh? We offer premium leather wallets, including short wallets and long wallets at the best prices. Order now!",
        img: "/slider/slider1.png",
        buttonText: "Explore",
        buttonLink: "/explore",
    },
];

const Hero = () => {
    return (
        <div className="container mx-auto overflow-hidden">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="p-10 flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                            {/* Left Side - Text */}
                            <div className="p-6 md:w-1/2 flex flex-col justify-center">
                                <h2 className="text-3xl font-bold mb-3">{slide.title}</h2>
                                <p className="text-gray-600 mb-4">{slide.description}</p>

                                {/* Clickable Button (Next.js Link) */}
                                <Link
                                    href={slide.buttonLink}
                                    className="inline-block text-center bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
                                >
                                    {slide.buttonText}
                                </Link>
                            </div>

                            {/* Right Side - Optimized Image */}
                            <div className="md:w-1/2 relative h-[300px]">
                                <Image
                                    src={slide.img}
                                    alt={slide.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Hero;
