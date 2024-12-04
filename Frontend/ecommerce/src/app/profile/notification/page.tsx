import React from "react";

const Notifications = () => {
  const notifications = [
    "Your order has been shipped!",
    "Exclusive offer: 20% off on your next purchase!",
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
