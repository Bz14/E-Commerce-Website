const OrderFilter = () => {
  return (
    <div className="flex flex-wrap items-end gap-4 bg-primaryDark text-white p-6 shadow-md rounded-lg mb-3">
      <div className="flex flex-col w-full sm:w-auto">
        <label className="font-medium mb-2">From Date</label>
        <input
          type="date"
          className="border text-primaryDark border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 w-full"
        />
      </div>
      <div className="flex flex-col w-full sm:w-auto">
        <label className="font-medium mb-2">To Date</label>
        <input
          type="date"
          className="border text-primaryDark border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 w-full"
        />
      </div>
      <div className="flex flex-col w-full sm:w-auto">
        <label className="font-medium mb-2">Status</label>
        <select className="border border-gray-300 text-primaryDark rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 w-full">
          <option value="all">All</option>
          <option value="delivered">Delivered</option>
          <option value="returned">Returned</option>
          <option value="processing">Processing</option>
        </select>
      </div>
      <button className="w-full sm:w-auto px-6 py-2 bg-primaryBrown text-white font-medium rounded-lg shadow-md hover:bg-primaryHover transition">
        Filter
      </button>
    </div>
  );
};

export default OrderFilter;
