const Newsletter = () => {
  return (
    <section className="py-10 bg-blue-100 text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Get the latest updates and exclusive offers.</p>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded-l-lg"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
