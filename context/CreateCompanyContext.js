"use client";
import React, { createContext, useContext, useState } from "react";

const CreateCompanyContext = createContext();

export const useCreateCompanyContext = () => useContext(CreateCompanyContext);

export const CreateCompanyProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    companyName: "",
    address: "",
    staffCode: null,
    dateSelection: null,
    salaryCalculation: null,
    businessLeaveDays: [],
    officeWorkingHours: 0,
    governmentHolidays: [],
    officialHolidays: [],
    sickLeave: "",
    probationPeriod: "",
    selectedDays: [],
    workingHours: 480,
    selectedNetwork: null,
  });

  const updateFormState = (fieldName, value) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formState);
  };

  return (
    <CreateCompanyContext.Provider
      value={{ formState, updateFormState, handleSubmit }}
    >
      {children}
    </CreateCompanyContext.Provider>
  );
};
