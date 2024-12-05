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
          <button className="mt-2 text-sm text-primaryBrown underline">
            Change Picture
          </button>
        )}
      </div>

      <div className="mt-6">
        {isEditing ? (
          <>
            <div className="flex flex-col gap-6 bg-gray-50 p-6 rounded-lg shadow-lg text-primaryDark ">
              <div>
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={editableUser.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-primaryBrown"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={editableUser.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-primaryBrown"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={editableUser.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-primaryBrown"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={editableUser.address}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-primaryBrown"
                  placeholder="Enter your address"
                />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-6 text-primaryDark">
              <button
                onClick={handleCancel}
                className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md shadow-md hover:bg-gray-300 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 text-white bg-gradient-to-r from-primaryBrown to-primaryHover rounded-md shadow-md hover:opacity-90 transition duration-300"
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
