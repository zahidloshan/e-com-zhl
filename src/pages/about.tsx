"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css";

const About = () => {
    return (
        <div className="px-2 py-2 bg-gray-100 min-h-screen">
            <div className="container mx-auto overflow-hidden">
                <Navbar />

                {/* Header Section */}
                <header className="bg-black text-white py-12 text-center rounded-b-lg">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="text-xl mt-4">Your trusted source for premium accessories</p>
                </header>

                {/* Mission Section */}
                <section className="py-16 px-4 sm:px-12 text-center rounded-b-lg">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        At <strong>[Brand Name]</strong>, we believe that accessories are more than
                        just embellishments&#39;; they are a reflection of your unique style.
                    </p>
                </section>

                {/* Values Section */}
                <section className="bg-white py-16 px-4 sm:px-12 text-center rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
                        {[
                            {
                                title: "Quality",
                                description:
                                    "We pride ourselves on providing accessories made from the finest materials, ensuring that every piece is durable, stylish, and built to last.",
                            },
                            {
                                title: "Sustainability",
                                description:
                                    "We are committed to sustainability. We strive to make eco-friendly choices in our production process, using materials and methods that have minimal environmental impact.",
                            },
                            {
                                title: "Customer Focus",
                                description:
                                    "Our customers are at the heart of everything we do. We aim to provide exceptional service and a seamless shopping experience, from browsing to delivery.",
                            },
                        ].map((value, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {value.title}
                                </h3>
                                <p className="mt-4 text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-16 px-4 sm:px-12 text-center bg-gray-50 rounded-b-lg">
                    <h2 className="text-3xl font-semibold text-gray-800">Meet the Team</h2>
                    <div className="flex flex-wrap justify-center items-center gap-12 mt-8">
                        {["J", "A", "S"].map((initial, index) => (
                            <div
                                key={index}
                                className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-gray-800"
                            >
                                {initial}
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Our team consists of passionate designers, creators, and customer service
                        professionals dedicated to offering the best accessories for our customers.
                        Each person brings unique expertise to ensure we provide the best possible
                        services and products.
                    </p>
                </section>

                {/* Contact Section */}
                <section className="py-16 px-4 sm:px-12 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Have questions or inquiries? Feel free to reach out to us at any time. We're
                        here to help and ensure your experience with us is as smooth as possible.
                    </p>
                    <button className="mt-8 bg-black hover:bg-gray-800 text-white py-2 px-6 rounded-lg transition-all">
                        Get in Touch
                    </button>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default About;
