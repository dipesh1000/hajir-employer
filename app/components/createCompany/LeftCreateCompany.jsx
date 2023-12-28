"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import DynamicRadioButtons from "@/app/components/DynamicRadioButtons";
import { Button } from "@/components/ui/button";
import { useCreateCompanyContext } from "@/context/CreateCompanyContext";

const LeftCreateCompany = () => {
  const { formState, updateFormState, handleSubmit } =
    useCreateCompanyContext();

  const days = [
    {
      id: "sunday",
      label: "Sunday",
    },
    {
      id: "monday",
      label: "Monday",
    },
    {
      id: "tuesday",
      label: "Tuesday",
    },
    {
      id: "wednesday",
      label: "Wednesday",
    },
    {
      id: "thursday",
      label: "Thursday",
    },
    {
      id: "friday",
      label: "Friday",
    },
    {
      id: "saturday",
      label: "Saturday",
    },
  ];

  const handleDayToggle = (dayId) => {
    updateFormState("selectedDays", (prevSelectedDays) => {
      if (prevSelectedDays.includes(dayId)) {
        return prevSelectedDays.filter((day) => day !== dayId);
      } else {
        return [...prevSelectedDays, dayId];
      }
    });
  };

  const handleDecreaseTime = () => {
    updateFormState("workingHours", (prevHours) => Math.max(prevHours - 10, 0));
  };

  const handleIncreaseTime = () => {
    updateFormState("workingHours", (prevHours) => prevHours + 10);
  };

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className=" w-1/2 p-4 border rounded bg-gray-100">
      <div className="mb-4">
        <h2>Select Business Leave Days</h2>
      </div>

      {days.map((day) => (
        <div
          key={day.id}
          onClick={() => handleDayToggle(day.id)}
          className={`flex flex-row items-start space-x-3 space-y-0 cursor-pointer p-2 rounded ${
            formState.selectedDays.includes(day.id)
              ? "bg-blue-200 border border-blue-500"
              : ""
          }`}
        >
          <Checkbox
            checked={formState.selectedDays.includes(day.id)}
            onCheckedChange={() => handleDayToggle(day.id)}
          />
          <span className="font-normal">{day.label}</span>
        </div>
      ))}
      <p> Select Business Leave Days : {formState.selectedDays.join(", ")}</p>

      <div className="mb-4 mt-8">
        <h2>Office Working Hours</h2>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDecreaseTime}
            className="p-2 rounded bg-blue-200 cursor-pointer"
          >
            -
          </button>
          <div>{formatTime(formState.workingHours)}</div>
          <button
            onClick={handleIncreaseTime}
            className="p-2 rounded bg-blue-200 cursor-pointer"
          >
            +
          </button>
        </div>
        {/* now need the radio button  */}
        <div className="space-y-4 flex flex-col">
          <DynamicRadioButtons
            title="Staff Code"
            options={[
              { label: "Any Network", value: "Any Network" },
              {
                label: "Private office IP [192.168.1.10]",
                value: "Private office IP [192.168.1.10]",
              },
            ]}
            onSelect={(value) => updateFormState("selectedNetwork", value)}
            containerClassName="ml-4 space-y-2"
            labelClassName="ml-4 text-lg"
          />
        </div>
        <p>Selected Staff Code: {formState.selectedNetwork}</p>
      </div>
      <Button className="bg-purple-600" onClick={handleSubmit}>
        Add
      </Button>
    </div>
  );
};

export default LeftCreateCompany;
