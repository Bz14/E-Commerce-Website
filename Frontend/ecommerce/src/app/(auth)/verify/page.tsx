"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Verify = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();
  const [resendMessage, setResendMessage] = useState("");

  const handleResendEmail = () => {
    setResendMessage(
      "Verification email has been resent. Please check your inbox!"
    );
    setTimeout(() => setResendMessage(""), 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-primaryBrown">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center text-primaryDark max-w-md">
        <h1 className="text-2xl font-bold mb-4">Check Your Email</h1>
        <p className="text-gray-600 mb-6">
          A verification email has been sent to your email <b>{email}</b>.
          Please check your inbox and click the verification link to proceed.
        </p>

        <button
          onClick={handleResendEmail}
          className="bg-primaryBrown text-white px-4 py-2 rounded hover:bg-primaryHover mb-4 mr-4"
        >
          Resend Email
        </button>

        {resendMessage && (
          <p className="text-green-600 font-medium mb-4">{resendMessage}</p>
        )}

        <button
          onClick={() => router.push("/login")}
          className="bg-primaryDark text-white px-4 py-2 rounded hover:bg-gray-400"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Verify;
