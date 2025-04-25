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
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaShoppingCart } from "react-icons/fa";

// // Define the product type
// type Product = {
//     id: number;
//     title: string;
//     price: number;
//     thumbnail: string;
//     availabilityStatus: boolean;
//     name: string;
//     color: string;
//     leatherType: string;
//     leatherHide: string;
//     size: string;
//     description: string;
// };

// const Products = () => {
//     const [products, setProducts] = useState<Product[]>([]); // Use Product[] type
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("https://dummyjson.com/products")
//             .then((res) => res.json())
//             .then((data) => {
//                 setProducts(data.products.slice(0, 8)); // Limit to 8 products
//                 setLoading(false);
//             })
//             .catch((err) => console.error("Error fetching products:", err));
//     }, []);

//     return (
//         <div className="container mx-auto py-10">
//             <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

//             {loading ? (
//                 <p className="text-center text-lg font-semibold text-gray-600 loading-text">
//                     Loading products...
//                 </p>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                     {products.map((product) => (
//                         <div
//                             key={product.id}
//                             className="border rounded-lg shadow-lg p-4 bg-white relative"
//                         >
//                             {/* Product Image */}
//                             <div className="relative">
//                                 <Image
//                                     src={product.thumbnail}
//                                     alt={product.title}
//                                     width={300}
//                                     height={200}
//                                     className="rounded-md w-full h-40 object-cover"
//                                 />
//                                 <span className="absolute top-2 left-2 bg-black px-3 py-1 rounded text-white px-4 py-2 font-semibold ">
//                                     BDT {product.price}
//                                 </span>
//                                 <button className="absolute top-2 right-2 bg-black text-white px-4 py-2 rounded flex items-center">
//                                     <FaShoppingCart className="mr-2" /> Buy Now
//                                 </button>
//                             </div>

//                             {/* Product Details */}
//                             <div className="p-4">
//                                 {product.availabilityStatus ? (
//                                     <p className="text-green-600 text-sm font-bold">IN STOCK</p>
//                                 ) : (
//                                     <p className="text-red-500 text-sm font-bold">OUT OF STOCK</p>
//                                 )}

//                                 <h3 className="text-lg font-bold mt-1">{product.name}</h3>

//                                 <p className="text-gray-600 text-sm">
//                                     <span className="font-semibold">Color:</span> {product.color}
//                                 </p>
//                                 <p className="text-gray-600 text-sm">
//                                     <span className="font-semibold">Leather Type:</span>{" "}
//                                     {product.leatherType}
//                                 </p>
//                                 <p className="text-gray-600 text-sm">
//                                     <span className="font-semibold">Leather Hide:</span>{" "}
//                                     {product.leatherHide}
//                                 </p>
//                                 <p className="text-gray-600 text-sm">
//                                     <span className="font-semibold">Size:</span> {product.size}
//                                 </p>
//                             </div>

//                             {/* Product Info */}
//                             <div className="mt-4 text-center">
//                                 <h3 className="font-bold text-lg">{product.title}</h3>
//                                 <p className="text-sm text-gray-500">
//                                     {product.description.slice(0, 60)}...
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Products;

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
// Define the product type
type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
    availabilityStatus: boolean;
    name: string;
    color: string;
    leatherType: string;
    leatherHide: string;
    size: string;
    description: string;
};

const Products = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products.slice(0, 8));
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="container mx-auto py-10 ">
            <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Products</h2>

            {loading ? (
                <div className="w-10 h-10 border-4  border-black-400 border-t-transparent rounded-full animate-spin"></div>
            ) : (
                // <p className="text-center text-lg font-medium text-gray-500">Loading products...</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Link href={`/products/${product.id}`}>
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
                            >
                                {/* Product Image */}
                                <div className="relative flex items-center justify-center flex-col bg-white pt-14 pb-4">
                                    {/* Price Tag */}
                                    <span className="absolute top-3 left-3 bg-black/80 text-white text-sm px-3 py-1 rounded-full font-semibold shadow-md">
                                        BDT {product.price}
                                    </span>

                                    {/* Product Image (rounded with hover glow) */}
                                    <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border border-gray-300 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300">
                                        <Image
                                            src={product.thumbnail}
                                            alt={product.title}
                                            width={128}
                                            height={128}
                                            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-4 space-y-2">
                                    {product.availabilityStatus ? (
                                        <p className="text-xs text-green-600 font-semibold">
                                            ✅ In Stock
                                        </p>
                                    ) : (
                                        <p className="text-xs text-red-500 font-semibold">
                                            ❌ Out of Stock
                                        </p>
                                    )}
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                                        {product.title}
                                    </h3>

                                    {/* Two-column layout
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                                    <p>
                                        <span className="font-semibold">Color:</span>{" "}
                                        {product.color}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Leather Type:</span>{" "}
                                        {product.leatherType}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Hide:</span>{" "}
                                        {product.leatherHide}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Size:</span> {product.size}
                                    </p>
                                </div>

                                <hr className="my-3" /> */}
                                    <p className="text-sm text-gray-500">
                                        {product.description.slice(0, 70)}...
                                    </p>
                                    {/* Buy Button at Bottom */}
                                    <div className="px-4 pb-4">
                                        <button className="w-full mt-4 bg-black hover:bg-gray-800 text-white text-sm py-2 rounded-full flex items-center justify-center gap-2 transition-all">
                                            <FaShoppingCart /> Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
