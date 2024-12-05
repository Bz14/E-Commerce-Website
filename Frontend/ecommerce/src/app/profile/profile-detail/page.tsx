"use client";
import { useState } from "react";
import Image from "next/image";
import profile from "@assets/profile1.png";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { UserProfile } from "@/app/globals";

const UserInformation = () => {
  const [user, setUser] = useState<UserProfile>({
    image: profile,
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Street, City, Country",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState({ ...user });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({ ...editableUser, [name]: value });
  };

  const handleSave = () => {
    setUser(editableUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditableUser(user);
    setIsEditing(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-gray-white shadow-lg rounded-lg p-6 bg-white">
      <div className="flex flex-col items-center">
        <Image
          src={user.image}
          alt="Profile"
          className="rounded-full shadow-md border border-primaryBrown"
          width={150}
          height={150}
        />
        {isEditing && (
          <button className="mt-2 text-sm text-blue-500 underline">
            Change Picture
          </button>
        )}
      </div>

      <div className="mt-6">
        {isEditing ? (
          <>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editableUser.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editableUser.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-600">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={editableUser.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-600">Address</label>
                <input
                  type="text"
                  name="address"
                  value={editableUser.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </>
        ) : (
          <div className="text-gray-700 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <p className="text-lg font-semibold">{user.name}</p>
              <span className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-100 text-green-800 rounded-full">
                <FaCheckCircle />
                Verified
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primaryBrown" />
                <p className="text-sm">{user.email}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primaryBrown" />
                <p className="text-sm">{user.phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primaryBrown" />
                <p className="text-sm">{user.address}</p>
              </div>
            </div>

            <button
              onClick={handleEditToggle}
              className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-primaryBrown to-primaryHover text-white rounded-lg shadow-md hover:opacity-70"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInformation;
