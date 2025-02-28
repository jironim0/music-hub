"use client";

import { SelectedSection } from "@/shared/components/shared/selected-section";
import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";
import React from "react";

import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(6, "Password must be at least 8 characters")
    .matches(/(?=.*[0-9])/, "*Invalid password. Must contain one number."),
});

const testArray = [
  [
    {
      id: 1,
      title: "Title",
      imageUrl:
        "https://i1.sndcdn.com/artworks-ifja3I2KBZJYQRNS-IFu4iQ-t500x500.jpg",
    },
    {
      id: 2,
      title: "Title",
      imageUrl:
        "https://i1.sndcdn.com/artworks-ifja3I2KBZJYQRNS-IFu4iQ-t500x500.jpg",
    },
    {
      id: 3,
      title: "Title",
      imageUrl:
        "https://i1.sndcdn.com/artworks-ifja3I2KBZJYQRNS-IFu4iQ-t500x500.jpg",
    },
  ],
];

export default function FavoritePage() {
  const isAuth = true;

  const handleLogin = async (email: string, password: string | number) => {
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      console.log("authorize error", result.error);
    } else {
      console.log("you are authorized grats");
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: async (values) => {
      await handleLogin(values.email, values.password);
    },
  });

  return (
    <>
      {isAuth ? (
        <div className="text-white mx-auto pt-[200px]">
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
            <span className="flex flex-col">
              <input
                type="email"
                placeholder=" Email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="text-white rounded-md bg-[#151515] w-[400px] h-12 placeholder:text-white placeholder:font-semibold hover:placeholder:opacity-50"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-500 pt-2 font-bold text-xl">
                  {formik.errors.email}
                </div>
              ) : null}
            </span>
            <span className="flex flex-col">
              <input
                type="password"
                placeholder=" Password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                className="text-white rounded-md bg-[#151515] w-[400px] h-12 placeholder:text-white placeholder:font-semibold hover:placeholder:opacity-50"
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-red-500 pt-2 font-bold text-xl">
                  {formik.errors.password}
                </div>
              ) : null}
            </span>

            <span>
              If u dosent have an account, please{" "}
              <a href="/register" className="text-[#1DB954]">
                register
              </a>
            </span>

            <button
              className="bg-[#1DB954] rounded-md w-[100px] h-12"
              type="submit"
            >
              Вход
            </button>
          </form>
        </div>
      ) : (
        <div className="flex-col">
          {/* select with genre */}
          <div></div>
          {/* select section */}
          <div className="gap-[25px] flex p-[50px]">
            {testArray.map((item) => (
              <SelectedSection items={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
