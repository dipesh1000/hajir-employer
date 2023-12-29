"use client";
import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Notification from "./Notification";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const toggleNotification = () => {
    setNotificationVisible((prevVisible) => !prevVisible);
  };

  return (
    <div className="flex flex-row p-4 items-center justify-between  bg-gray-800">
      <Link className="flex items-center rounded-md p-4" href="/">
        <div className="w-32 text-white md:w-40">
          <Image
            src="/hajir.svg"
            width={80}
            height={80}
            alt="Picture of the author"
          />
        </div>
      </Link>

      <div className="flex items-center">
        <div
          className="ml-4 p-3" // Adjust the margin as needed
          onMouseEnter={toggleNotification}
          onMouseLeave={toggleNotification}
        >
          <Bell className="bg-slate-200 " size={28} />
          {isNotificationVisible && <Notification />}
        </div>
        <select className="border border-gray-300 rounded px-3 py-1.5 text-sm">
          <option>English</option>
          <option>Nepali</option>
        </select>
        {/* <Input className="w-[200px]" type="email" placeholder="Search Here " /> */}

        {/* if ui/ux says to put profile here then i will put here  */}
        {/* <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
      </div>
    </div>
  );
};

export default Header;
