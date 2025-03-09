const products = [
    {
        id: 1,
        name: "Kashem-Premium Long Wallet",
        price: "$20",
        priceInBDT: "BDT 1350",
        img: "https://via.placeholder.com/150",
        inStock: "In stock",
        color: "Orange Shade",
        leatherType: "Genuine Leather",
        leatherHide: "Cow",
        size: "Length: 19cm & Width: 9cm",
    },
    {
        id: 2,
        name: "Product 2",
        price: "$25",
        priceInBDT: "BDT 1750",
        img: "https://via.placeholder.com/150",
        inStock: "Out of stock",
        color: "Red",
        leatherType: "Synthetic Leather",
        leatherHide: "N/A",
        size: "Length: 20cm & Width: 10cm",
    },
    {
        id: 3,
        name: "Product 3",
        price: "$30",
        priceInBDT: "BDT 2100",
        img: "https://via.placeholder.com/150",
        inStock: "In stock",
        color: "Black",
        leatherType: "Genuine Leather",
        leatherHide: "Cow",
        size: "Length: 20cm & Width: 11cm",
    },
];

const Products = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            <h3 className="text-3xl font-semibold text-center mb-10">Featured Products</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
                    >
                        <div className="flex flex-col md:flex-row items-start">
                            {/* Left side: Product name, price, and price in BDT */}
                            <div className="md:w-1/2 flex flex-col justify-between">
                                <h4 className="text-xl font-semibold">{product.name}</h4>
                                <p className="text-gray-400 text-lg">{product.price}</p>
                                <p className="text-gray-400 text-lg">{product.priceInBDT}</p>
                            </div>

                            {/* Right side: Product image */}
                            <div className="md:w-1/2 mt-4 md:mt-0">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            {/* Product description */}
                            <p className="text-sm text-gray-400">{product.inStock}</p>
                            <p className="text-sm text-gray-400">Color: {product.color}</p>
                            <p className="text-sm text-gray-400">
                                Leather Type: {product.leatherType}
                            </p>
                            <p className="text-sm text-gray-400">
                                Leather Hide: {product.leatherHide}
                            </p>
                            <p className="text-sm text-gray-400">Size: {product.size}</p>
                        </div>

                        <button className="mt-5 w-full py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-100 transition-colors">
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
