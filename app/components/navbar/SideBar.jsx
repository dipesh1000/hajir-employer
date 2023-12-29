import React from "react";
import { PowerIcon } from "@heroicons/react/24/outline";
import NavLinks from "./NavLinks";

export default function Sidebar() {
  return (
    <div className="fixed h-full flex flex-col px-4 py-4 md:w-64 bg-gray-800 text-white">
      {/* Placeholder for user information */}
      <div className="flex items-center justify-center mb-8">
        {/* Add your user information here */}
      </div>

      <div className="flex-grow flex flex-col space-y-4">
        <NavLinks />

        {/* Adding a separator line */}
        <hr className="border-t border-gray-600 my-4" />

        <form>
          <button
            className="flex h-12 items-center justify-center gap-2
          rounded-md bg-gray-700 p-3 text-sm font-medium
           hover:bg-red-500 hover:text-white"
          >
            <PowerIcon className="w-6" />
            <span className="hidden md:block">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}
