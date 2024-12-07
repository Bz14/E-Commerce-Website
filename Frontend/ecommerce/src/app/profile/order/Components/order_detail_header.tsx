const OrderDetailHeader = () => {
  return (
    <thead>
      <tr className="bg-gray-100">
        <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
          Order ID
        </th>
        <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
          Order Date
        </th>
        <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
          Delivered Date
        </th>
        <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
          Total
        </th>
        <th className="border border-gray-200 px-4 py-2 text-left text-gray-600">
          Quantity
        </th>
        <th className="border border-gray-200 px-4 py-2 text-center text-gray-600">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default OrderDetailHeader;
