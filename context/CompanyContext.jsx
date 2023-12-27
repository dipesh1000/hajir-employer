"use client";
import React, { createContext, useContext, useState } from "react";

const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const updateSelectedCompany = (company) => {
    setSelectedCompany(company);
  };

  return (
    <CompanyContext.Provider value={{ selectedCompany, updateSelectedCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompany = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error("useCompany must be used within a CompanyProvider");
  }
  return context;
};
