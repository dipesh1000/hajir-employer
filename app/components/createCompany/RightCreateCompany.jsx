"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DynamicRadioButtons from "../DynamicRadioButtons";
import { DayPicker } from "react-day-picker";
import { useCreateCompanyContext } from "@/context/CreateCompanyContext";

const staffCodeOptions = [
  { label: "Auto generated", value: "Auto generated" },
  { label: "Custom", value: "Custom" },
];

const dateSelectionOptions = [
  { label: "English", value: "English" },
  { label: "Nepali", value: "Nepali" },
];

const salaryCalculationOptions = [
  { label: "Calender Days", value: "Calender Days" },
  { label: "30 Days", value: "30 Days" },
];

const RightCreateCompany = () => {
  const { formState, updateFormState } = useCreateCompanyContext();

  const handleInputChange = (fieldName, value) => {
    updateFormState(fieldName, value);
  };

  const handleGovernmentDateSelect = (date) => {
    updateFormState("governmentHolidays", (prevHolidays) => [
      ...prevHolidays,
      date,
    ]);
  };

  const handleGovernmentRemoveDate = (date) => {
    updateFormState("governmentHolidays", (prevHolidays) =>
      prevHolidays.filter((d) => d !== date)
    );
  };

  const handleOfficialDateSelect = (date) => {
    updateFormState("officialHolidays", (prevHolidays) => [
      ...prevHolidays,
      date,
    ]);
  };

  const handleOfficialRemoveDate = (date) => {
    updateFormState("officialHolidays", (prevHolidays) =>
      prevHolidays.filter((d) => d !== date)
    );
  };

  const handleSickLeaveSelect = (value) => {
    updateFormState("selectedSickLeave", value);
  };

  const handleProbation = (value) => {
    updateFormState("selectedProbation", value);
  };
  return (
    <div className="w-1/2">
      <div className="p-4 border rounded bg-gray-100">
        <form action="" method="post">
          <h2 className="text-xl font-bold mb-2">Company name</h2>

          <Input
            label="Company Name"
            className="w-61"
            value={formState.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
          />

          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Address</h2>

            <Input
              label="Address"
              className="w-61"
              value={formState.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <DynamicRadioButtons
              title="Staff Code"
              options={staffCodeOptions}
              onSelect={(value) =>
                handleInputChange("selectedStaffCode", value)
              }
              containerClassName="ml-4 space-y-2"
              labelClassName="ml-4 text-lg"
              optionContainerClassName="flex items-center space-x-4 cursor-pointer"
              optionLabelClassName="text-base"
              optionInputClassName="hidden"
              selectedOptionClassName="bg-blue-500 text-white"
            />
          </div>

          <p>Selected Staff Code: {formState.selectedStaffCode}</p>

          <div className="space-y-4">
            <DynamicRadioButtons
              title="Date Selection"
              options={dateSelectionOptions}
              onSelect={(value) =>
                handleInputChange("selectedDateSelection", value)
              }
              containerClassName="ml-4 space-y-2"
              labelClassName="ml-4 text-lg"
              optionContainerClassName="flex items-center space-x-2"
              optionLabelClassName="text-base"
              optionInputClassName="p-2 rounded"
            />
          </div>

          <p>Selected Date Selection: {formState.selectedDateSelection}</p>

          <div className="space-y-4">
            <DynamicRadioButtons
              title="Salary Calculation"
              options={salaryCalculationOptions}
              onSelect={(value) =>
                handleInputChange("selectedSalaryCalculation", value)
              }
              containerClassName="ml-4 space-y-2"
              labelClassName="ml-4 text-lg"
              optionContainerClassName="flex items-center space-x-2"
              optionLabelClassName="text-base"
              optionInputClassName="p-2 rounded"
            />
          </div>
          <p>
            Selected Salary Calculation: {formState.selectedSalaryCalculation}
          </p>
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Government Holidays</h2>
            <div className="flex items-center">
              <div className="relative w-48">
                {/* ... (rest of the component remains unchanged) */}
              </div>
            </div>
            <div className="flex mt-2">
              {formState.governmentHolidays.map((date) => (
                <div
                  key={date.toString()}
                  className="flex items-center bg-gray-200 p-2 rounded-md mr-2"
                >
                  <span>{format(date, "PP")}</span>
                  <span
                    role="img"
                    aria-label="cross icon"
                    onClick={() => handleGovernmentRemoveDate(date)}
                    style={{ cursor: "pointer", marginLeft: "4px" }}
                  >
                    ❌
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Official Holidays</h2>
            <div className="flex items-center">
              <div className="relative w-48">
                {/* ... (rest of the component remains unchanged) */}
              </div>
            </div>
            <div className="flex mt-2">
              {formState.officialHolidays.map((date) => (
                <div
                  key={date.toString()}
                  className="flex items-center bg-gray-200 p-2 rounded-md mr-2"
                >
                  <span>{format(date, "PP")}</span>
                  <span
                    role="img"
                    aria-label="cross icon"
                    onClick={() => handleOfficialRemoveDate(date)}
                    style={{ cursor: "pointer", marginLeft: "4px" }}
                  >
                    ❌
                  </span>
                </div>
              ))}
            </div>
            {/* ... (rest of the component remains unchanged) */}
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Official Holidays</h2>
            <div className="flex items-center">
              <div className="relative w-48">
                <Input
                  label="Please Select"
                  value={formState.officialHolidays
                    .map((date) => format(date, "PP"))
                    .join(", ")}
                  readOnly
                />
                <span
                  role="img"
                  aria-label="calendar icon"
                  onClick={() => setShowOfficialCalendar(!showOfficialCalendar)}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  📅
                </span>
                {showOfficialCalendar && (
                  <div className="fixed inset-0 flex items-center justify-center">
                    <div
                      className="absolute inset-0 bg-black opacity-50"
                      onClick={() => setShowOfficialCalendar(false)}
                    ></div>
                    <div className="z-10 bg-white p-4 rounded-md">
                      <DayPicker
                        mode="single"
                        selected={formState.officialHolidays}
                        onSelect={handleOfficialDateSelect}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex mt-2">
              {formState.officialHolidays.map((date) => (
                <div
                  key={date.toString()}
                  className="flex items-center bg-gray-200 p-2 rounded-md mr-2"
                >
                  <span>{format(date, "PP")}</span>
                  <span
                    role="img"
                    aria-label="cross icon"
                    onClick={() => handleOfficialRemoveDate(date)}
                    style={{ cursor: "pointer", marginLeft: "4px" }}
                  >
                    ❌
                  </span>
                </div>
              ))}
            </div>

            {/* select sick allowed  */}
            <h2 className="text-xl font-bold mb-2">Sick Leave allowed</h2>
            <div className="flex">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Monthly" />
                </SelectTrigger>
                <SelectContent onSelect={handleSickLeaveSelect}>
                  <SelectItem value="Weekly">Weekly</SelectItem>
                  <SelectItem value="Monthly">Monthly</SelectItem>
                  <SelectItem value="Yearly">Yearly</SelectItem>
                </SelectContent>
                <Input className="w-[80px]" type="number" name="" id="" />
              </Select>
            </div>
            <p>Selected Sick Leave: {formState.sickLeave}</p>

            <div className="space-y-4">
              <h2 className="text-xl font-bold mb-2">Probation Period</h2>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Monthly" />
                </SelectTrigger>
                <SelectContent onSelect={handleProbation}>
                  <SelectItem value="Weekly">1 month</SelectItem>
                  <SelectItem value="Monthly">3 months</SelectItem>
                  <SelectItem value="Yearly">6 months</SelectItem>
                </SelectContent>
              </Select>
              <p>Selected Probation Period: {formState.probationPeriod}</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightCreateCompany;
