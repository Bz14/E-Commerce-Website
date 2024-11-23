import React from "react";

const Filter = () => {
  return (
    <div className="p-4 bg-primaryBrown rounded-md w-full lg:w-64 text-white">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Category</h3>
        <ul className="space-y-2">
          <li>
            <input type="checkbox" id="cloth" />{" "}
            <label htmlFor="cloth">Cloths</label>
          </li>
          <li>
            <input type="checkbox" id="Shoe" />{" "}
            <label htmlFor="shoe">Shoe</label>
          </li>
          <li>
            <input type="checkbox" id="Bags" />{" "}
            <label htmlFor="bags">Bags</label>
          </li>
          <li>
            <input type="checkbox" id="Bags" />{" "}
            <label htmlFor="accessory">Accessories</label>
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-medium mb-2">Price Range</h3>
        <input
          type="range"
          min="30"
          max="10000"
          className="w-full text-primaryDark"
        />
        <div className="flex justify-between text-sm">
          <span>$30</span>
          <span>$10000</span>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Brand</h3>
        <ul className="space-y-2">
          <li>
            <input type="checkbox" id="gucci" />{" "}
            <label htmlFor="gucci">Gucci</label>
          </li>
          <li>
            <input type="checkbox" id="prada" />{" "}
            <label htmlFor="prada">Prada</label>
          </li>
          <li>
            <input type="checkbox" id="louis" />{" "}
            <label htmlFor="louis">Louis Vuton</label>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-medium mb-2">Rating</h3>
        <ul className="space-y-2">
          <li>
            <input type="radio" name="rating" id="4stars" />{" "}
            <label htmlFor="4stars">4 Stars & above</label>
          </li>
          <li>
            <input type="radio" name="rating" id="3stars" />{" "}
            <label htmlFor="3stars">3 Stars & above</label>
          </li>
          <li>
            <input type="radio" name="rating" id="2stars" />{" "}
            <label htmlFor="2stars">2 Stars & above</label>
          </li>
        </ul>
        <div className="flex justify-end">
          <button className="bg-white text-primaryDark p-2 rounded mt-3">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
