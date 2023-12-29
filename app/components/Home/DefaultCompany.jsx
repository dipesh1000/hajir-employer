import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const DefaultCompany = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Image
          src="/dashboard-image.svg"
          alt="Picture of the author"
          width={300}
          height={300}
          className="mx-auto"
        />
        <h3 className="text-2xl font-bold mb-4 text-black">
          You have not created a company yet.
        </h3>
        <Button asChild>
          <Link href="/">Create A Company</Link>
        </Button>
      </div>
    </div>
  );
};

export default DefaultCompany;
