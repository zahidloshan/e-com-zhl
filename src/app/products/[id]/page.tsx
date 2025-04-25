// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { useParams } from "next/navigation";
// import { FaWhatsapp, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// type Product = {
//     id: number;
//     title: string;
//     description: string;
//     price: number;
//     discountPercentage: number;
//     rating: number;
//     stock: number;
//     brand: string;
//     category: string;
//     thumbnail: string;
//     images: string[];
// };

// const ProductDetails = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState<Product | null>(null);
//     const [quantity, setQuantity] = useState(1);
//     const [selectedImage, setSelectedImage] = useState<string | null>(null);

//     useEffect(() => {
//         if (id) {
//             fetch(`https://dummyjson.com/products/${id}`)
//                 .then((res) => res.json())
//                 .then((data) => setProduct(data));
//         }
//     }, [id]);

//     return (
//         <div className="px-2 py-2 bg-gray-100">
//             <div className="container mx-auto overflow-hidden">
//                 <Navbar />
//                 <header className="bg-black text-white py-12 text-center rounded-b-lg">
//                     <h1 className="text-4xl font-bold">Product Details</h1>
//                     <p className="text-xl mt-4">Your trusted source for premium accessories</p>
//                 </header>
//                 <div className="container mx-auto px-4 py-10">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                         {/* Image Section */}
//                         <div>
//                             {product ? (
//                                 <>
//                                     <div className="border rounded-xl p-4 flex justify-center items-center">
//                                         <Image
//                                             src={selectedImage ?? product.thumbnail}
//                                             alt={product.title}
//                                             width={400}
//                                             height={400}
//                                             className="object-contain rounded-xl"
//                                         />
//                                     </div>

//                                     <div className="flex space-x-4 mt-4 justify-center">
//                                         {product.images.map((img, i) => (
//                                             <Image
//                                                 key={i}
//                                                 src={img}
//                                                 alt={`Thumbnail ${i + 1}`}
//                                                 width={60}
//                                                 height={60}
//                                                 className={`cursor-pointer border-2 rounded-lg ${
//                                                     selectedImage === img
//                                                         ? "border-black-500"
//                                                         : "border-transparent"
//                                                 }`}
//                                                 onClick={() => setSelectedImage(img)}
//                                             />
//                                         ))}
//                                     </div>
//                                 </>
//                             ) : (
//                                 <div className="flex justify-center items-center h-64">
//                                     <div className="w-10 h-10 border-4 border-black-400 border-t-transparent rounded-full animate-spin"></div>
//                                 </div>
//                             )}
//                         </div>

//                         {/* Details Section */}
//                         <div>
//                             {product ? (
//                                 <>
//                                     <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
//                                     <p className="text-gray-700 mb-1">
//                                         <strong>Brand:</strong> {product.brand}
//                                     </p>
//                                     <p className="text-gray-700 mb-3">
//                                         <strong>Category:</strong> {product.category}
//                                     </p>

//                                     <div className="flex items-center space-x-4 mb-4">
//                                         <span className="text-2xl font-bold text-black-600">
//                                             ৳ {product.price}
//                                         </span>
//                                         <span className="line-through text-gray-400">
//                                             ৳{" "}
//                                             {(
//                                                 product.price /
//                                                 (1 - product.discountPercentage / 100)
//                                             ).toFixed(0)}
//                                         </span>
//                                         <span className="bg-black-500  text-sm font-medium px-2 py-1 rounded">
//                                             {product.discountPercentage}% OFF
//                                         </span>
//                                     </div>

//                                     <div className="mb-4">
//                                         <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
//                                             <FaWhatsapp /> Message on WhatsApp
//                                         </button>
//                                     </div>

//                                     <div className="flex items-center gap-3 mb-5">
//                                         <label className="text-gray-700 font-semibold">
//                                             Quantity:
//                                         </label>
//                                         <div className="flex items-center border rounded overflow-hidden">
//                                             <button
//                                                 onClick={() =>
//                                                     setQuantity((q) => Math.max(1, q - 1))
//                                                 }
//                                                 className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
//                                             >
//                                                 <FaMinus />
//                                             </button>
//                                             <span className="px-4">{quantity}</span>
//                                             <button
//                                                 onClick={() => setQuantity((q) => q + 1)}
//                                                 className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
//                                             >
//                                                 <FaPlus />
//                                             </button>
//                                         </div>
//                                     </div>

//                                     <div className="flex flex-col sm:flex-row gap-4 mb-6">
//                                         <button className="w-full sm:w-1/2 bg-black hover:bg-gray-800 text-white text-sm py-3 rounded-full flex items-center justify-center gap-2 transition-all">
//                                             <FaShoppingCart /> Buy Now
//                                         </button>

//                                         <button className="w-full sm:w-1/2 border border-black hover:bg-gray-100 text-black text-sm font-semibold py-3 rounded-full transition-all">
//                                             Add to Cart
//                                         </button>
//                                     </div>

//                                     <hr className="my-4" />

//                                     <div>
//                                         <h2 className="text-xl font-semibold mb-2">Description</h2>
//                                         <p className="text-gray-600">{product.description}</p>
//                                     </div>
//                                 </>
//                             ) : (
//                                 <div className="flex justify-center items-center h-64">
//                                     <div className="w-10 h-10 border-4 border-black-400 border-t-transparent rounded-full animate-spin"></div>
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default ProductDetails;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaWhatsapp, FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

const ProductDetails = () => {
    const params = useParams();
    const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            fetch(`https://dummyjson.com/products/${id}`)
                .then((res) => res.json())
                .then((data) => setProduct(data));
        }
    }, [id]);

    return (
        <div className="px-2 py-2 bg-gray-100">
            <div className="container mx-auto overflow-hidden">
                <Navbar />
                <header className="bg-black text-white py-12 text-center rounded-b-lg">
                    <h1 className="text-4xl font-bold">Product Details</h1>
                    <p className="text-xl mt-4">Your trusted source for premium accessories</p>
                </header>
                <div className="container mx-auto px-4 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Image Section */}
                        <div>
                            {product ? (
                                <>
                                    <div className="border rounded-xl p-4 flex justify-center items-center">
                                        <Image
                                            src={selectedImage ?? product.thumbnail}
                                            alt={product.title}
                                            width={400}
                                            height={400}
                                            className="object-contain rounded-xl"
                                        />
                                    </div>

                                    <div className="flex space-x-4 mt-4 justify-center">
                                        {product.images.map((img, i) => (
                                            <Image
                                                key={i}
                                                src={img}
                                                alt={`Thumbnail ${i + 1}`}
                                                width={60}
                                                height={60}
                                                className={`cursor-pointer border-2 rounded-lg ${
                                                    selectedImage === img
                                                        ? "border-black-500"
                                                        : "border-transparent"
                                                }`}
                                                onClick={() => setSelectedImage(img)}
                                            />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="flex justify-center items-center h-64">
                                    <div className="w-10 h-10 border-4 border-black-400 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                        </div>

                        {/* Details Section */}
                        <div>
                            {product ? (
                                <>
                                    <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                                    <p className="text-gray-700 mb-1">
                                        <strong>Brand:</strong> {product.brand}
                                    </p>
                                    <p className="text-gray-700 mb-3">
                                        <strong>Category:</strong> {product.category}
                                    </p>

                                    <div className="flex items-center space-x-4 mb-4">
                                        <span className="text-2xl font-bold text-black-600">
                                            ৳ {product.price}
                                        </span>
                                        <span className="line-through text-gray-400">
                                            ৳{" "}
                                            {(
                                                product.price /
                                                (1 - product.discountPercentage / 100)
                                            ).toFixed(0)}
                                        </span>
                                        <span className="bg-black-500  text-sm font-medium px-2 py-1 rounded">
                                            {product.discountPercentage}% OFF
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                                            <FaWhatsapp /> Message on WhatsApp
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-3 mb-5">
                                        <label className="text-gray-700 font-semibold">
                                            Quantity:
                                        </label>
                                        <div className="flex items-center border rounded overflow-hidden">
                                            <button
                                                onClick={() =>
                                                    setQuantity((q) => Math.max(1, q - 1))
                                                }
                                                className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
                                            >
                                                <FaMinus />
                                            </button>
                                            <span className="px-4">{quantity}</span>
                                            <button
                                                onClick={() => setQuantity((q) => q + 1)}
                                                className="bg-gray-200 px-3 py-1 hover:bg-gray-300"
                                            >
                                                <FaPlus />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                        <button className="w-full sm:w-1/2 bg-black hover:bg-gray-800 text-white text-sm py-3 rounded-full flex items-center justify-center gap-2 transition-all">
                                            <FaShoppingCart /> Buy Now
                                        </button>

                                        <button className="w-full sm:w-1/2 border border-black hover:bg-gray-100 text-black text-sm font-semibold py-3 rounded-full transition-all">
                                            Add to Cart
                                        </button>
                                    </div>

                                    <hr className="my-4" />

                                    <div>
                                        <h2 className="text-xl font-semibold mb-2">Description</h2>
                                        <p className="text-gray-600">{product.description}</p>
                                    </div>
                                </>
                            ) : (
                                <div className="flex justify-center items-center h-64">
                                    <div className="w-10 h-10 border-4 border-black-400 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default ProductDetails;
