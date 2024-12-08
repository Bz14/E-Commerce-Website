const HowToUse = () => {
  const steps = [
    {
      title: "Browse Products",
      description:
        "Explore a wide variety of products in our categories to find what you need.",
      icon: "🛍️", // You can replace with React Icons if needed
    },
    {
      title: "Add to Cart",
      description:
        "Easily add your favorite products to the cart with just a click.",
      icon: "🛒",
    },
    {
      title: "Checkout Securely",
      description:
        "Complete your purchase through our secure and fast checkout process.",
      icon: "💳",
    },
    {
      title: "Enjoy Your Order",
      description:
        "Sit back and relax while we deliver your products right to your doorstep.",
      icon: "📦",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">How to Use</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition"
          >
            {/* Icon */}
            <div className="text-4xl">{step.icon}</div>
            {/* Step Details */}
            <div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowToUse;
