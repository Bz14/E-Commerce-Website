import React from "react";

const OrderHistory = () => {
  const orders = [
    { id: 1, item: "Shoes", date: "2024-12-01", status: "Delivered" },
    { id: 2, item: "Bag", date: "2024-11-25", status: "Returned" },
  ];

  return (
    <div className="order-history">
      <h2>Order History</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Item: {order.item}</p>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>
            <button>View Details</button>
            {order.status === "Delivered" && <button>Return/Refund</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
