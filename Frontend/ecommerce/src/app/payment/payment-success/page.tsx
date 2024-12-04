import { MdOutlineCelebration } from "react-icons/md";
import Link from "next/link";

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-center p-20 bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
          <div className="text-4xl mb-4 flex gap-2 items-center justify-center text-primaryBrown ">
            <MdOutlineCelebration className="text-5xl " />
            <h1>Congratulations</h1>
          </div>
          <h1 className="text-3xl font-bold text-primaryDark mb-2">
            Payment Success
          </h1>

          <p className="text-lg text-gray-700 mb-6">
            Thank you for your purchase! Your payment was successful.
          </p>
          <button className="bg-primaryBrown text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-500 transition duration-300">
            <Link href="/products">Continue Shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
