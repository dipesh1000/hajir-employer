// Page.
import React from "react";
import LeftCreateCompany from "@/app/components/createCompany/LeftCreateCompany";
import RightCreateCompany from "@/app/components/createCompany/RightCreateCompany";
import { CreateCompanyProvider } from "@/context/CreateCompanyContext";

const Page = () => {
  return (
    <CreateCompanyProvider>
      <div className="flex">
        <RightCreateCompany />
        <LeftCreateCompany />
      </div>
    </CreateCompanyProvider>
  );
};

export default Page;
