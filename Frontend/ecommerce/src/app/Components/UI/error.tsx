import React from "react";
import { FiAlertCircle } from "react-icons/fi";

const Error: React.FC<{ error: string }> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-red-50 border border-red-300 rounded-md p-4">
      <FiAlertCircle className="text-red-500 text-4xl mb-2" />
      <h2 className="text-red-600 font-bold text-lg">
        Oops! Something went wrong.
      </h2>
      <p className="text-red-500 mt-1 text-center">{error}</p>
    </div>
  );
};

export default Error;
