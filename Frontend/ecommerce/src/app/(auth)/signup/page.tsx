import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-primaryDark bg-white md:bg-primaryBrown">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              aria-label="Name"
              autoComplete="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              aria-label="Email"
              autoComplete="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              aria-label="Password"
              autoComplete="new-password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              aria-label="Confirm Password"
              autoComplete="new-password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Confirm your password"
            />
          </div>
          <div className="mb-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-primaryBrown hover:underline">
              Login
            </Link>
          </div>
          <div className="flex flex-col items-center gap-3">
            <button
              type="submit"
              className="w-full bg-primaryDark hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
            <p className="text-sm">Or</p>
            <button
              type="button"
              className="w-full bg-gray-100 hover:bg-gray-200 text-primaryDark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            >
              <FcGoogle className="mr-2" size={20} /> Sign Up With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
