const Shipping = () => {
  return (
    <div className="bg-white p-6  w-full max-w-md mx-auto space-y-4 border-b border-primaryBrown">
      <h1 className="text-lg font-semibold text-primaryDark">
        Calculated Shipping
      </h1>
      <div>
        <select
          id="shipping-method"
          className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100 text-primaryDark outline-none"
        >
          <option disabled selected>
            Your city
          </option>
          <option>Addis Ababa</option>
          <option>BahirDar</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="address"
          className="block text-primaryDark mb-2 outline-none rounded-xl"
        >
          Enter Your Address
        </label>
        <input
          id="address"
          type="text"
          placeholder="Enter your address"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryDark"
        />
      </div>
      <button className="w-full py-2 px-4 bg-primaryDark text-white rounded-md hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primaryDark">
        Calculate
      </button>
    </div>
  );
};

export default Shipping;
