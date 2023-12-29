// AuthenticationPage.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import UserAuthForm from "@/app/components/UserAuthForm";

export default function AuthenticationPage() {
  const [response, setResponse] = useState({});
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    onSubmit: async (values) => {
      try {
        const apiResponse = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/employer/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        if (!apiResponse.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await apiResponse.json();
        setResponse(data);
        if (data.status === "success") {
          alert(`Successfully Registered.  \n Your OTP is: ${data.data.otp}`);
          console.log("OTP:values", data.data.otp);
          // console.log('Token:', data.data.token);
          router.push(`/signin?phone=${values.phone}&otp=${data.data.otp}`);
        } else {
          console.error("Registration failed. Message:", data.message);
        }
      } catch (error) {
        console.error("Error during API request:", error.message);
      }
    },
  });

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="https://hajirapp.com"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Official Site
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            HAJIR
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                A modern attendance system for smart people.
              </p>
              <footer className="text-sm">
                @Copyright 2023 © www.hajirapp.com
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Hajir account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your Phone number
              </p>
            </div>
            <UserAuthForm
              // onSubmit={handleApiRequest}
              formik={formik}
            />
            <p className="px-8 text-center text-sm text-muted-foreground">
              We will send you a one-time password on this mobile number.
              <br />
              <span className="font-bold">I have read and agree</span> Terms &
              Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
