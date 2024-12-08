const ProductOfTheWeek = () => {
  const product = {
    name: "Wireless Noise-Canceling Headphones",
    description:
      "Experience the ultimate sound clarity and comfort with these premium wireless headphones. Perfect for work, travel, and relaxation.",
    price: "$299",
    image: "/assets/headphones.jpg", // Replace with the path to your product image
  };

  return (
    <section className="py-10 bg-gradient-to-r from-gray-100 to-gray-200">
      <h2 className="text-3xl font-bold text-center mb-6">
        Product of the Week
      </h2>
      <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 p-6">
          <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-green-600 mb-4">
            Price: {product.price}
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductOfTheWeek;
