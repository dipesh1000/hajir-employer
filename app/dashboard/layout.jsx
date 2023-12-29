"use client";

import React from "react";
import { Inter } from "next/font/google";

import Header from "../components/navbar/Header";
import Sidebar from "../components/navbar/SideBar";
import UserAuthForm from "../components/UserAuthForm";

const inter = Inter({ subsets: ["latin"] });

const { isLoggedIn } = UserAuthForm();
console.log(isLoggedIn, "Froom is Loged in in dashboard");

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-800`}>
        <Header />

        <div className="flex flex-col md:flex-row md:h-screen">
          <div className="w-full md:w-64">
            <Sidebar />
          </div>

          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
