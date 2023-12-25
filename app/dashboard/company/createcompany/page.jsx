import LeftCreateCompany from "@/app/components/createCompany/LeftCreateCompany";
import RightCreateCompany from "@/app/components/createCompany/RightCreateCompany";
import React from "react";

const Page = () => {
  return (
    <div className="flex">
      <RightCreateCompany />
      <LeftCreateCompany />
    </div>
  );
};

export default Page;
