"use client";
import { useState } from "react";
import Image from "next/image";

const UserInformation = () => {
  const [user, setUser] = useState({
    picture: "/default-profile.png",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Street, City, Country",
  });

  const handleEdit = () => {
    // Add logic for editing user details
    alert("Edit functionality coming soon!");
  };

  return (
    <div>
      <Image
        src={user.picture}
        alt="Profile"
        className="profile-picture"
        width={150}
        height={150}
      />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phone}</p>
      <p>{user.address}</p>
      <button onClick={handleEdit} className="edit-btn">
        Edit
      </button>
    </div>
  );
};

export default UserInformation;
