"use client";
import { useState } from "react";

interface QuantityProps {
  quantity: number;
}

const Quantity: React.FC<QuantityProps> = ({ quantity }) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 && value <= quantity) {
      setCurrentQuantity(value);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold mb-2">Quantity</label>
      <input
        type="number"
        min={1}
        max={quantity}
        value={currentQuantity}
        onChange={handleQuantityChange}
        className="md:w-44 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDark"
      />
    </div>
  );
};

export default Quantity;
