const Categories = () => {
  const categories = [
    { name: "Electronics", icon: "📱" },
    { name: "Fashion", icon: "👗" },
    { name: "Home Appliances", icon: "🏠" },
    { name: "Beauty", icon: "💄" },
    { name: "Sports", icon: "⚽" },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        Shop by Categories
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg w-36 h-36"
          >
            <div className="text-4xl mb-2">{category.icon}</div>
            <p className="text-lg font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
