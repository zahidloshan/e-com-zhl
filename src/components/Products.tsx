// const products = [
//     {
//         id: 1,
//         name: "Kashem-Premium Long Wallet",
//         price: "$20",
//         priceInBDT: "BDT 1350",
//         img: "https://via.placeholder.com/150",
//         inStock: "In stock",
//         color: "Orange Shade",
//         leatherType: "Genuine Leather",
//         leatherHide: "Cow",
//         size: "Length: 19cm & Width: 9cm",
//     },
//     {
//         id: 2,
//         name: "Product 2",
//         price: "$25",
//         priceInBDT: "BDT 1750",
//         img: "https://via.placeholder.com/150",
//         inStock: "Out of stock",
//         color: "Red",
//         leatherType: "Synthetic Leather",
//         leatherHide: "N/A",
//         size: "Length: 20cm & Width: 10cm",
//     },
//     {
//         id: 3,
//         name: "Product 3",
//         price: "$30",
//         priceInBDT: "BDT 2100",
//         img: "https://via.placeholder.com/150",
//         inStock: "In stock",
//         color: "Black",
//         leatherType: "Genuine Leather",
//         leatherHide: "Cow",
//         size: "Length: 20cm & Width: 11cm",
//     },
// ];

// const Products = () => {
//     return (
//         <div className="container mx-auto px-6 py-10">
//             <h3 className="text-3xl font-semibold text-center mb-10">Featured Products</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {products.map((product) => (
//                     <div
//                         key={product.id}
//                         className="bg-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
//                     >
//                         <div className="flex flex-col md:flex-row items-start">
//                             {/* Left side: Product name, price, and price in BDT */}
//                             <div className="md:w-1/2 flex flex-col justify-between">
//                                 <h4 className="text-xl font-semibold">{product.name}</h4>
//                                 <p className="text-gray-400 text-lg">{product.price}</p>
//                                 <p className="text-gray-400 text-lg">{product.priceInBDT}</p>
//                             </div>

//                             {/* Right side: Product image */}
//                             <div className="md:w-1/2 mt-4 md:mt-0">
//                                 <img
//                                     src={product.img}
//                                     alt={product.name}
//                                     className="w-full h-full object-cover rounded-md"
//                                 />
//                             </div>
//                         </div>

//                         <div className="mt-4">
//                             {/* Product description */}
//                             <p className="text-sm text-gray-400">{product.inStock}</p>
//                             <p className="text-sm text-gray-400">Color: {product.color}</p>
//                             <p className="text-sm text-gray-400">
//                                 Leather Type: {product.leatherType}
//                             </p>
//                             <p className="text-sm text-gray-400">
//                                 Leather Hide: {product.leatherHide}
//                             </p>
//                             <p className="text-sm text-gray-400">Size: {product.size}</p>
//                         </div>

//                         <button className="mt-5 w-full py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-100 transition-colors">
//                             Buy Now
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Products;
// import Image from "next/image";
// import { FaShoppingCart, FaPlay } from "react-icons/fa";

// const products = [
//     {
//         id: 1,
//         name: "KASHEM-PREMIUM LONG WALLET",
//         price: "BDT 1350",
//         color: "Orange Shade",
//         leatherType: "Genuine Leather",
//         leatherHide: "Cow",
//         size: "Length: 19cm & Width: 9cm",
//         image: "/wallet1.png", // Replace with actual image path
//         inStock: true,
//     },
//     {
//         id: 2,
//         name: "CLASSIC LEATHER WALLET",
//         price: "BDT 1250",
//         color: "Dark Brown",
//         leatherType: "Full Grain Leather",
//         leatherHide: "Buffalo",
//         size: "Length: 18cm & Width: 8cm",
//         image: "/wallet2.png",
//         inStock: true,
//     },
//     {
//         id: 3,
//         name: "VINTAGE LEATHER WALLET",
//         price: "BDT 1450",
//         color: "Black",
//         leatherType: "Top Grain Leather",
//         leatherHide: "Cow",
//         size: "Length: 20cm & Width: 10cm",
//         image: "/wallet3.png",
//         inStock: false,
//     },
//     {
//         id: 4,
//         name: "SLIM LEATHER WALLET",
//         price: "BDT 1150",
//         color: "Tan Brown",
//         leatherType: "Genuine Leather",
//         leatherHide: "Goat",
//         size: "Length: 17cm & Width: 7cm",
//         image: "/wallet4.png",
//         inStock: true,
//     },
// ];

// const Product = () => {
//     return (
//         <div className="container mx-auto px-6 py-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {products.map((product) => (
//                     <div
//                         key={product.id}
//                         className="border rounded-lg shadow-lg bg-white overflow-hidden"
//                     >
//                         {/* Product Image with Overlay */}
//                         <div className="relative">
//                             <Image
//                                 src={product.image}
//                                 alt={product.name}
//                                 width={400}
//                                 height={300}
//                                 className="w-full h-56 object-cover"
//                             />
//                             {/* Play Button Overlay */}
//                             <div className="absolute inset-0 flex items-center justify-center">
//                                 <div className="bg-black bg-opacity-50 p-3 rounded-full">
//                                     <FaPlay className="text-white text-lg" />
//                                 </div>
//                             </div>
//                             {/* Price Tag */}
//                             <span className="absolute top-3 left-3 bg-white px-3 py-1 text-sm font-semibold text-black rounded">
//                                 {product.price}
//                             </span>
//                             {/* Buy Now Button */}
//                             <button className="absolute top-3 right-3 bg-black text-white px-4 py-2 rounded flex items-center gap-2">
//                                 <FaShoppingCart /> Buy Now
//                             </button>
//                         </div>

//                         {/* Product Details */}
//                         <div className="p-4">
//                             {product.inStock ? (
//                                 <p className="text-green-600 text-sm font-bold">IN STOCK</p>
//                             ) : (
//                                 <p className="text-red-500 text-sm font-bold">OUT OF STOCK</p>
//                             )}

//                             <h3 className="text-lg font-bold mt-1">{product.name}</h3>

//                             <p className="text-gray-600 text-sm">
//                                 <span className="font-semibold">Color:</span> {product.color}
//                             </p>
//                             <p className="text-gray-600 text-sm">
//                                 <span className="font-semibold">Leather Type:</span>{" "}
//                                 {product.leatherType}
//                             </p>
//                             <p className="text-gray-600 text-sm">
//                                 <span className="font-semibold">Leather Hide:</span>{" "}
//                                 {product.leatherHide}
//                             </p>
//                             <p className="text-gray-600 text-sm">
//                                 <span className="font-semibold">Size:</span> {product.size}
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Product;
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart, FaPlay } from "react-icons/fa";

const Products = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products.slice(0, 8)); // Limit to 8 products
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

            {loading ? (
                <p className="text-center text-lg font-semibold text-gray-600 loading-text">
                    Loading products...
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="border rounded-lg shadow-lg p-4 bg-white relative"
                        >
                            {/* Product Image */}
                            <div className="relative">
                                <Image
                                    src={product.thumbnail}
                                    alt={product.title}
                                    width={300}
                                    height={200}
                                    className="rounded-md w-full h-40 object-cover"
                                />
                                <span className="absolute top-2 left-2 bg-black px-3 py-1 rounded text-white px-4 py-2 font-semibold ">
                                    BDT {product.price}
                                </span>
                                <button className="absolute top-2 right-2 bg-black text-white px-4 py-2 rounded flex items-center">
                                    <FaShoppingCart className="mr-2" /> Buy Now
                                </button>
                                {/* <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white rounded-full w-10 h-10 mx-auto my-auto">
                                    <FaPlay />
                                </button> */}
                            </div>

                            {/* Product Details */}
                            <div className="p-4">
                                {product.availabilityStatus ? (
                                    <p className="text-green-600 text-sm font-bold">IN STOCK</p>
                                ) : (
                                    <p className="text-red-500 text-sm font-bold">OUT OF STOCK</p>
                                )}

                                <h3 className="text-lg font-bold mt-1">{product.name}</h3>

                                <p className="text-gray-600 text-sm">
                                    <span className="font-semibold">Color:</span> {product.color}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-semibold">Leather Type:</span>{" "}
                                    {product.leatherType}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-semibold">Leather Hide:</span>{" "}
                                    {product.leatherHide}
                                </p>
                                <p className="text-gray-600 text-sm">
                                    <span className="font-semibold">Size:</span> {product.size}
                                </p>
                            </div>

                            {/* Product Info */}
                            <div className="mt-4 text-center">
                                <h3 className="font-bold text-lg">{product.title}</h3>
                                <p className="text-sm text-gray-500">
                                    {product.description.slice(0, 60)}...
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
