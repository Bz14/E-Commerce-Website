const Coupon = () => {
  return (
    <div className="bg-white p-6  w-full max-w-md mx-auto space-y-4 border-b border-primaryBrown">
      <h1 className="text-lg font-semibold text-primaryDark">Coupon code</h1>
      <div className="text-primaryDark">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad rem?
        </p>
      </div>
      <div>
        <input
          id="coupon"
          type="text"
          placeholder="Enter your address"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryDark"
        />
      </div>
      <button className="w-full py-2 px-4 bg-primaryDark text-white rounded-md hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primaryDark">
        Apply
      </button>
    </div>
  );
};

export default Coupon;
