import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="container mx-auto bg-black text-white py-16 rounded-lg">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info Section */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-100">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-100">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    Support
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-100">Follow Us</h4>
                        <div className="flex space-x-6 text-gray-400">
                            <a href="/" className="hover:text-white transition-colors">
                                <i className="fab fa-facebook-f text-2xl"></i>
                            </a>
                            <a href="/" className="hover:text-white transition-colors">
                                <i className="fab fa-twitter text-2xl"></i>
                            </a>
                            <a href="/" className="hover:text-white transition-colors">
                                <i className="fab fa-instagram text-2xl"></i>
                            </a>
                            <a href="/" className="hover:text-white transition-colors">
                                <i className="fab fa-linkedin-in text-2xl"></i>
                            </a>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-gray-100">
                            Subscribe to Our Newsletter
                        </h4>
                        <p className="text-gray-400 text-sm">
                            Stay updated with our latest news, offers, and updates.
                        </p>
                        <form className="flex flex-col space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 rounded-md bg-white text-black hover:bg-gray-100 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
