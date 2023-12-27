"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const LeftCreateEmployee = () => {
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
      <div className="space-y-4">
        <h2 className="text-xl font-bold mb-2">Joining date</h2>
        {/* Rest of the code */}
      </div>
    </div>
  );
};

export default LeftCreateEmployee;
