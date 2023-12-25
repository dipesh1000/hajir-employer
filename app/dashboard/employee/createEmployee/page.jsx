import LeftCreateEmployee from "@/app/components/createEmployee/LeftCreateEmployee";
import RightCreateEmployee from "@/app/components/createEmployee/RightCreateEmployee";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <RightCreateEmployee />
      <LeftCreateEmployee />
    </div>
  );
};

export default Page;
