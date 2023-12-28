"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import DynamicRadioButtons from "../DynamicRadioButtons";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RightCreateEmployee = () => {
  const [selectedStaffCode, setSelectedStaffCode] = useState(null);
  const [selectedDateSelection, setSelectedDateSelection] = useState(null);
  const [selectedSalaryCalculation, setSelectedSalaryCalculation] =
    useState(null);

  const [showGovernmentCalendar, setShowGovernmentCalendar] = useState(false);
  const [governmentSelectedDates, setGovernmentSelectedDates] = useState([]);

  const [showOfficialCalendar, setShowOfficialCalendar] = useState(false);
  const [officialSelectedDates, setOfficialSelectedDates] = useState([]);

  const [selectedSickLeave, setSelectedSickLeave] = useState("");
  const [selectedProbation, setSelectedProbation] = useState("");

  const handleGovernmentDateSelect = (date) => {
    if (!governmentSelectedDates.includes(date)) {
      setGovernmentSelectedDates([...governmentSelectedDates, date]);
    }
  };

  const handleGovernmentRemoveDate = (date) => {
    const updatedDates = governmentSelectedDates.filter((d) => d !== date);
    setGovernmentSelectedDates(updatedDates);
  };

  const handleOfficialDateSelect = (date) => {
    if (!officialSelectedDates.includes(date)) {
      setOfficialSelectedDates([...officialSelectedDates, date]);
    }
  };

  const handleOfficialRemoveDate = (date) => {
    const updatedDates = officialSelectedDates.filter((d) => d !== date);
    setOfficialSelectedDates(updatedDates);
  };

  const handleSickLeaveSelect = (value) => {
    setSelectedSickLeave(value);
  };

  const handleProbation = (value) => {
    setSelectedProbation(value);
  };

  return (
    <div className="w-1/2">
      <h2 className="text-xl font-bold mb-2 text-blue-800">Add Candidates</h2>
      <h3 className="text-md font-bold mb-2 text-blue-800">
        Rasan Technology Pvt Ltd
      </h3>
      <div className="p-4 border rounded bg-gray-100">
        <form action="" method="post">
          <h2 className="text-xl font-bold mb-2 text-blue-500">Staff Code</h2>

          <Input
            label="Company Name"
            className="w-61 mb-2"
            placeholder="RT001"
          />
          <h2 className="text-xl font-bold mt-2 text-blue-500 ">
            Candidate details
          </h2>
          <div className="space-y-4 mt-2">
            <Input
              label="Address"
              className="w-61 mb-2"
              placeholder="Full Name"
            />
          </div>
          <div className="space-y-4">
            <Input
              label="Address"
              className="w-61 mb-2
            "
              placeholder="Designation"
            />
          </div>
          <div className="space-y-4">
            <Input
              label="Address"
              className="w-61 mb-2"
              placeholder="Mobile Number"
            />
          </div>
          <div className="space-y-4">
            <Input
              label="Address"
              className="w-61 mb-2"
              placeholder="Confirm mobile number"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2 text-blue-500">
              Salary Type
            </h2>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Monthly" />
              </SelectTrigger>
              <SelectContent onSelect={handleProbation}>
                <SelectItem value="Weekly">Monthly</SelectItem>
                <SelectItem value="Monthly">Weekly</SelectItem>
                <SelectItem value="Yearly">Daily</SelectItem>
              </SelectContent>
            </Select>
            <p>Selected Salary : {selectedProbation}</p>
          </div>
          <h2 className="text-xl font-bold mt-2 text-blue-500 ">
            Salary Ammoutn
          </h2>
          <div className="space-y-4 mt-2">
            <Input
              label="Address"
              className="w-61 mb-2"
              placeholder="sALARY AMMOUNT"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Joining date</h2>
            <div className="flex items-center">
              <div className="relative w-48">
                <Input
                  label="Please Select"
                  value={officialSelectedDates
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
                        selected={officialSelectedDates}
                        onSelect={handleOfficialDateSelect}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex mt-2">
              {officialSelectedDates.map((date) => (
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
            <h2 className="text-xl font-bold mb-2 text-cyan-300">
              Add causal leave{" "}
            </h2>
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
            <p>
              Add causal leave
              {selectedSickLeave}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightCreateEmployee;
