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
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/index";
import { LoginForm } from "@/app/globals";
import { loginUser } from "@/app/store/slices/authSlice";

const schema = yup.object({
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
});
const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  useState(false);
  const form = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isValid, isDirty, isSubmitting, isSubmitSuccessful } =
    formState;
    
  const router = useRouter();
  const { token, user, loading, error } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  const onError = (errors: FieldErrors) => {
    console.log(errors);
  };

  const onSubmit = async (data: LoginForm) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (token) {
      reset();
      router.push("/");
    }
  }, [token, user, router, dispatch, form, reset]);

  return (
    <div className="min-h-screen flex items-center justify-center text-primaryDark bg-primaryHover">
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
          <div className="mb-4 relative">
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
          <Link
            href="/rest-password"
            className="flex justify-end mb-2 text-primaryBrown"
          >
            Forgot password?
          </Link>
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
