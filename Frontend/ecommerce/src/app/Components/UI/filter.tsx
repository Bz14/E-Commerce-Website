import React from "react";

const Filter = () => {
  return (
    <div className="p-4 bg-primaryBrown rounded-md w-full mt-2 lg:mt-0 lg:w-64 text-white">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      {/* Category Section */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Category</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <input type="checkbox" id="cloth" className="mr-2" />
            <label htmlFor="cloth" className="text-sm">
              Cloths
            </label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="shoe" className="mr-2" />
            <label htmlFor="shoe" className="text-sm">
              Shoes
            </label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="bags" className="mr-2" />
            <label htmlFor="bags" className="text-sm">
              Bags
            </label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="accessory" className="mr-2" />
            <label htmlFor="accessory" className="text-sm">
              Accessories
            </label>
          </li>
        </ul>
      </div>

      {/* Price Range Section */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <input
          type="range"
          min="30"
          max="10000"
          className="w-full text-primaryDark"
        />
        <div className="flex justify-between text-sm mt-2">
          <span>$30</span>
          <span>$10000</span>
        </div>
      </div>

      {/* Brand Section */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Brand</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <input type="checkbox" id="gucci" className="mr-2" />
            <label htmlFor="gucci" className="text-sm">
              Gucci
            </label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="prada" className="mr-2" />
            <label htmlFor="prada" className="text-sm">
              Prada
            </label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="louis" className="mr-2" />
            <label htmlFor="louis" className="text-sm">
              Louis Vuitton
            </label>
          </li>
        </ul>
      </div>

      {/* Rating Section */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Rating</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <input type="radio" name="rating" id="4stars" className="mr-2" />
            <label htmlFor="4stars" className="text-sm">
              4 Stars & above
            </label>
          </li>
          <li className="flex items-center">
            <input type="radio" name="rating" id="3stars" className="mr-2" />
            <label htmlFor="3stars" className="text-sm">
              3 Stars & above
            </label>
          </li>
          <li className="flex items-center">
            <input type="radio" name="rating" id="2stars" className="mr-2" />
            <label htmlFor="2stars" className="text-sm">
              2 Stars & above
            </label>
          </li>
        </ul>
        <div className="flex justify-end">
          <button className="bg-white text-primaryDark p-2 rounded mt-3 text-sm">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
