"use client";
// OTPPage.jsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button"; // Make sure to import necessary components
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");
    const apiEndpoint = "https://system.hajirapp.com/api/employer/verify-opt";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: enteredOtp }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.status === "success") {
        // Use react-toastify to show success message
        toast.success(
          "OTP verification successful! Redirecting to dashboard..."
        );
        router.push("/dashboard");
      } else {
        // Use react-toastify to show error message
        toast.error(`OTP verification failed. Message: ${data.message}`);
      }
    } catch (error) {
      // Use react-toastify to show a generic error message
      toast.error(`Error during OTP verification: ${error.message}`);
    }
  };

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
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Enter OTP</h1>
            <p className="text-sm text-muted-foreground">
              Enter the one-time password sent to your mobile number
            </p>
          </div>

          {/* OTP input boxes */}
          <div className="flex space-x-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="w-12 h-12 text-center border rounded-md"
              />
            ))}
          </div>

          {/* Verify button */}
          <Link href="/dashboard">
            <Button onClick={handleVerify}>Verify</Button>
          </Link>

          <p className="px-8 text-center text-sm text-muted-foreground">
            <span className="font-bold">Resend OTP</span> |{" "}
            <span className="font-bold">Change Number</span>
          </p>
        </div>
      </div>
    </>
  );
}
