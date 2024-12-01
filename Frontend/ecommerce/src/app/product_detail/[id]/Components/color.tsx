"use client";
import { useState } from "react";

interface ColorProps {
  colors: string[];
}

const Color: React.FC<ColorProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1 className="text-lg font-semibold mb-2">Colors:</h1>
      <div className="flex gap-2 mt-2">
        {colors &&
          colors.map((color, index) => (
            <label key={index} className="relative cursor-pointer">
              <input
                type="checkbox"
                className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:border-transparent"
                style={{ backgroundColor: color }}
                checked={selectedColor === color}
                onChange={() => handleColorChange(color)}
              />
              {selectedColor === color && (
                <span className="absolute inset-0 flex items-center justify-center text-white">
                  ✓
                </span>
              )}
            </label>
          ))}
      </div>
    </div>
  );
};

export default Color;
