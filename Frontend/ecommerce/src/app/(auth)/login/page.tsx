"use client";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import Spinner from "@/app/Components/UI/spinner";
import { useRouter } from "next/navigation";

type SignUpForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object({
  name: yup.string().required("Full name is required."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Invalid email format."),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .matches(
      /(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(
      /(?=.*[a-z])/,
      "Password must contain at least one lowercase letter."
    )
    .matches(/(?=.*[0-9])/, "Password must contain at least one number.")
    .matches(
      /(?=.*[@$!%*?&])/,
      "Password must contain at least one special character."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match.")
    .required("Please confirm your password."),
});
const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const form = useForm<SignUpForm>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isValid, isDirty, isSubmitting, isSubmitSuccessful } =
    formState;
  const apiUrl = "http://localhost:5000/api/v1"; // process.env.API_URL;
  const router = useRouter();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  const onError = (errors: FieldErrors) => {
    console.log(errors);
  };
  const onSubmit = async (data: SignUpForm) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (!response.ok) {
        const data = await response.json();
        setError(
          data.message || "An error occurred while creating your account."
        );
        return;
      }
      reset();
      router.push(`/verify?email=${encodeURIComponent(data.email)}`);
    } catch (error) {
      setError("Something went wrong");
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-primaryDark bg-primaryBrown">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              aria-label="Email"
              autoComplete="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.email?.message}
            </p>
          </div>
          <div className="mb-6 relative">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              {...register("password")}
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              aria-label="Password"
              autoComplete="new-password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none mt-7"
            >
              {isPasswordVisible ? (
                <FaEye size={20} />
              ) : (
                <FaEyeSlash size={20} />
              )}
            </button>
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.password?.message}
            </p>
          </div>
          <div className="mb-4 text-center">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primaryBrown hover:underline">
              SignUp
            </Link>
          </div>
          <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
          <div className="flex flex-col items-center gap-3">
            <button
              disabled={(!isDirty && !isValid) || isSubmitting}
              type="submit"
              className="w-full bg-primaryDark hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {loading ? <Spinner /> : "Login"}
            </button>
            <p className="text-sm">Or</p>
            <button
              type="button"
              className="w-full bg-gray-100 hover:bg-gray-200 text-primaryDark font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center"
            >
              <FcGoogle className="mr-2" size={20} /> Login With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
