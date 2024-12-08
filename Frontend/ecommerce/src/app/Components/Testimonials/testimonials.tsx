const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "Amazing products! Highly recommend.",
      rating: 5,
    },
    {
      name: "John Smith",
      feedback: "Great customer service and quality.",
      rating: 4,
    },
  ];

  return (
    <section className="py-10 bg-primaryBrown text-white">
      <h2 className="text-3xl font-bold text-center mb-6">
        What Our Customers Say
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimony, index) => (
          <div
            key={index}
            className="p-6 bg-white text-gray-900 rounded-lg shadow-lg max-w-sm"
          >
            <p className="mb-4">{testimony.feedback}</p>
            <div className="flex items-center justify-between">
              <span className="font-bold">{testimony.name}</span>
              <span>{"⭐".repeat(testimony.rating)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
