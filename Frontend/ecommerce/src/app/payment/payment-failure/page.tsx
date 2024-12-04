import { FaTimesCircle } from "react-icons/fa";
import Link from "next/link";

const PaymentFailurePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center p-20 bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4 flex gap-2 items-center justify-center text-primaryBrown ">
            <FaTimesCircle className="text-red-500 text-6xl mb-4" />
            <h1 className="text-3xl font-bold text-primaryDark mb-2">
              Payment Failed
            </h1>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Unfortunately, your payment could not be processed. Please try
            again.
          </p>
          <button className="bg-primaryBrown text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-500 transition duration-300">
            <Link href="/payment">Retry Payment</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailurePage;
