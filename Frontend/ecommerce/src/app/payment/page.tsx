import Image from "next/image";
import img1 from "@assets/chapa.png";
import img2 from "@assets/paypal.png";
import Link from "next/link";

const Payment = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-28">
      <div className="bg-white shadow-lg p-20">
        <h1 className="font-bold text-xl text-primaryDark mb-2">
          Choose your payment
        </h1>
        <div className="flex gap-2 mb-2 mt-4">
          <button className="p-2 shadow-xl border border-gray-400">
            <Link href="/payment/payment-success">
              <Image src={img1} alt="chapa" width={150} height={150} />
            </Link>
          </button>
          <button className="p-2 shadow-xl border border-gray-400">
            <Link href="/payment/payment-failure">
              <Image src={img2} alt="paypal" width={150} height={150} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
