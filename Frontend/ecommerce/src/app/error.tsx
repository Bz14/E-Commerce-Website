'use client'

import { useEffect } from 'react'
import { BiSolidCommentError } from "react-icons/bi";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-400 to-pink-400">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full space-y-6">
        <BiSolidCommentError className="text-6xl text-red-600 mx-auto" />
        <h2 className="text-3xl font-semibold text-red-600 mb-4 animate__animated animate__fadeIn">
          Oops, Something Went Wrong!
        </h2>
        <p className="text-lg text-gray-700 mb-6 animate__animated animate__fadeIn animate__delay-1s">
          We encountered an unexpected issue. Please try again later or contact support if the problem persists.
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-primaryBrown text-white rounded-full hover:bg-primaryHover transition duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
