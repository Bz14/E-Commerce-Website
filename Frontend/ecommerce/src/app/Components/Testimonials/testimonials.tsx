import img from "@assets/profile1.png";
import Image from "next/image";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback: "Amazing products! Highly recommend.",
      rating: 5,
      photo: img,
    },
    {
      name: "John Smith",
      feedback: "Great customer service and quality.",
      rating: 4,
      photo: img,
    },
    {
      name: "John Smith",
      feedback: "Great customer service and quality.",
      rating: 4,
      photo: img,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r bg-white text-primaryDark">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimony, index) => (
          <div
            key={index}
            className="p-6 bg-primaryBrown text-white rounded-lg shadow-lg max-w-sm transition-transform transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <Image
                src={testimony.photo}
                alt={testimony.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">{testimony.name}</h3>
                <p className="text-yellow-500">
                  {"⭐".repeat(testimony.rating)}
                </p>
              </div>
            </div>
            <p className="italic">&ldquo;{testimony.feedback}&rdquo;</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
