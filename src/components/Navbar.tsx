"use client";

import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="container mx-auto bg-white rounded-t-lg">
            <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
                {/* Logo */}
                <Link href="/">
                    <Image src="/logo1.png" alt="Logo" width={50} height={30} />
                </Link>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        href="/"
                        className="relative group hover:text-black-600 transition-all duration-300"
                    >
                        Home
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                    </Link>
                    <Link
                        href="/shop"
                        className="relative group hover:text-black-600 transition-all duration-300"
                    >
                        Shop
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                    </Link>

                    <Link
                        href="/about"
                        className="relative group hover:text-black-600 transition-all duration-300"
                    >
                        About
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                    </Link>
                    <Link
                        href="/contact"
                        className="relative group hover:text-black-600 transition-all duration-300"
                    >
                        Contact
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                    </Link>
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-5">
                    <Link href="/cart">
                        <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-black-600" />
                    </Link>
                    <Link href="/account">
                        <User className="w-6 h-6 cursor-pointer hover:text-black-600" />
                    </Link>
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md py-4">
                    <nav className="flex flex-col items-center gap-4">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="relative group hover:text-black-600 transition-all duration-300"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                        </Link>
                        <Link
                            href="/shop"
                            onClick={() => setIsOpen(false)}
                            className="relative group hover:text-black-600 transition-all duration-300"
                        >
                            Shop
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsOpen(false)}
                            className="relative group hover:text-black-600 transition-all duration-300"
                        >
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="relative group hover:text-black-600 transition-all duration-300"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-focus:w-full group-active:w-full"></span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
