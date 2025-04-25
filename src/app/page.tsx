import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Footer from "@/components/Footer";
import About from "@/pages/about";

export default function Home() {
    return (
        <div className=" px-2 py-2 bg-gray-100">
            <Navbar />
            <Hero />

            <Products />
            <Footer />
        </div>
    );
}
