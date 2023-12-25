"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import DynamicRadioButtons from "@/app/components/DynamicRadioButtons";
import { Button } from "@/components/ui/button";

const LeftCreateEmployee = () => {
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
  const NetworkOptions = [
    { label: "Any Network", value: "Any Network" },
    {
      label: "Private office IP [192.168.1.10]",
      value: "Private office IP [192.168.1.10]",
    },
  ];

  const [selectedDays, setSelectedDays] = useState([]);
  const [workingHours, setWorkingHours] = useState(480); // Default to 08:00 (8 hours * 60 minutes)
  const [selectedNetwork, setSelectedNetwork] = useState(null);

  const handleDayToggle = (dayId) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter((day) => day !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    }
  };

  const handleDecreaseTime = () => {
    if (workingHours > 0) {
      setWorkingHours(workingHours - 10);
    }
  };

  const handleIncreaseTime = () => {
    setWorkingHours(workingHours + 10);
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
            selectedDays.includes(day.id)
              ? "bg-blue-200 border border-blue-500"
              : ""
          }`}
        >
          <Checkbox
            checked={selectedDays.includes(day.id)}
            onCheckedChange={() => handleDayToggle(day.id)}
          />
          <span className="font-normal">{day.label}</span>
        </div>
      ))}
      <p> Select Business Leave Days : {selectedDays.join(", ")}</p>

      <div className="mb-4 mt-8">
        <h2>Office Working Hours</h2>
        <div className="flex items-center space-x-3">
          <button
            onClick={handleDecreaseTime}
            className="p-2 rounded bg-blue-200 cursor-pointer"
          >
            -
          </button>
          <div>{formatTime(workingHours)}</div>
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
            options={NetworkOptions}
            onSelect={setSelectedNetwork}
            containerClassName="ml-4 space-y-2"
            labelClassName="ml-4 text-lg"
          />
        </div>
        <p>Selected Staff Code: {selectedNetwork}</p>
      </div>
      <Button className="bg-purple-600">Add</Button>
    </div>
  );
};

export default LeftCreateEmployee;
