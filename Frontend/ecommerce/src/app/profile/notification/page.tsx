"use client";
import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    "Your order has been shipped!",
    "Exclusive offer: 20% off on your next purchase!",
    "New message from customer support.",
  ]);

  const handleDismiss = (index: number) => {
    setNotifications(notifications.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Notifications</h2>
      {notifications.length > 0 ? (
        <ul className="space-y-4">
          {notifications.map((note, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
            >
              <span className="text-gray-700">{note}</span>
              <button
                onClick={() => handleDismiss(index)}
                className="px-3 py-1 bg-primaryBrown text-white rounded-lg hover:bg-primaryHover transition duration-200"
              >
                Dismiss
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          <p>No new notifications.</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;
