const Categories = () => {
  const categories = [
    { name: "Clothes", icon: "👗" },
    { name: "Shoes", icon: "👠" },
    { name: "Bags", icon: "👜" },
    { name: "Accessories", icon: "🕶" },
  ];

  return (
    <section className="py-12 bg-gray-50 text-primaryDark">
      <h2 className="text-4xl font-bold text-center mb-8">
        Shop by Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg transform hover:-translate-y-2 hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="text-5xl mb-4">{category.icon}</div>
            <p className="text-lg font-semibold ">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
