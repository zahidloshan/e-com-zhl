import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../app/globals.css";

const Contact = () => {
    return (
        <div className="px-2 py-2 bg-gray-100">
             <Navbar />
            <div className="container mx-auto overflow-hidden">
               

                {/* Header Section */}
                <header className="bg-black text-white py-12 text-center rounded-b-lg">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="text-xl mt-4">
                        We’re here to help and answer any question you might have
                    </p>
                </header>

                {/* Contact Info Section */}
                <section className="py-16 px-4 sm:px-12 text-center bg-white rounded-lg mt-8">
                    <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Whether you have a question about our products, pricing, need a demo, or
                        anything else—our team is ready to answer all your questions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 text-left">
                        {/* Contact Form */}
                        <form className="bg-gray-100 p-8 rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                                    placeholder="Type your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition"
                            >
                                Send Message
                            </button>
                        </form>

                        {/* Contact Details */}
                        <div className="flex flex-col justify-center space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                                <p className="text-gray-600">support@yourbrand.com</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                                <p className="text-gray-600">
                                    123 Accessory Street, Fashion City, NY 10001, USA
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 px-4 sm:px-12 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Stay Connected</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Follow us on social media to stay updated on our latest collections,
                        promotions, and news.
                    </p>
                    <button className="mt-8 bg-black text-white py-2 px-6 rounded-lg">
                        Follow Us
                    </button>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default Contact;
