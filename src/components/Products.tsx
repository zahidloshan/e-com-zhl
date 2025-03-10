"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

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
    const [products, setProducts] = useState<Product[]>([]); // Use Product[] type
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
