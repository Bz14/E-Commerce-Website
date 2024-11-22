import React, { useState } from "react";
import { FiSearch } from "react-icons/fi"; // Import search icon from react-icons

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("searching");
  };

  return (
    <div className="flex items-center border border-primaryBrown rounded-md px-3 py-2 max-w-md">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="flex-1 outline-none bg-transparent text-gray-700"
      />
      <button
        onClick={handleSearch}
        className="text-primaryBrown hover:text-primaryHover transition-colors"
      >
        <FiSearch className="text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
