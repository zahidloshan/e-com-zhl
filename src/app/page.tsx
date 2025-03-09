import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CardSlider from "@/components/CardSlider";
import Products from "@/components/Products";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className=" px-6 py-2 bg-gray-100">
            <Navbar />
            <Hero />
            {/* <CardSlider /> */}
            <Products />
            <Footer />
        </div>
    );
}
