"use client";
import React, { useState, useEffect } from "react";
import {
  FaBoxOpen,
  FaCalendarAlt,
  FaTruck,
  FaInfoCircle,
} from "react-icons/fa";
import OrderFilter from "./Components/order_filter";
import OrderDetailHeader from "./Components/order_detail_header";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const fetchedOrders = [
        {
          id: 1,
          date: "2024-11-25",
          deliveredDate: "2024-11-30",
          total: 150,
          quantity: 3,
        },
        {
          id: 2,
          date: "2024-11-25",
          deliveredDate: "2024-11-30",
          total: 150,
          quantity: 3,
        },
        {
          id: 3,
          date: "2024-11-25",
          deliveredDate: "2024-11-30",
          total: 150,
          quantity: 3,
        },
      ];
      setOrders(fetchedOrders);
    };
    fetchOrders();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Order History</h2>
      <OrderFilter />
      {orders.length > 0 ? (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-6">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <OrderDetailHeader />
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition">
                  <td className="border border-gray-200 px-4 py-2 text-primaryBrown">
                    {order.id}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">
                    {order.date}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">
                    {order.deliveredDate || "N/A"}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">
                    ${order.total.toFixed(2)}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-700">
                    {order.quantity}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 flex gap-2 justify-center">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                      View
                    </button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
                      Reorder
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-600">No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
