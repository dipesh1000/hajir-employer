"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import TaskBox from "@/app/components/report/TaskBox";

const mockData = {
  name: "Biraj KARKI",
  r12Code: "ABC123",
  dailyData: [
    { type: "Attendee", count: 15 },
    { type: "Late", count: 3 },
    { type: "Absent", count: 2 },
    { type: "Early Punch Out", count: 1 },
    { type: "Sick Leave", count: 1 },
  ],
  weeklyData: [
    { type: "Attendee", count: 100 },
    { type: "Late", count: 20 },
    { type: "Absent", count: 10 },
    { type: "Early Punch Out", count: 5 },
    { type: "Sick Leave", count: 3 },
  ],
  monthlyData: [
    { type: "Attendee", count: 500 },
    { type: "Late", count: 50 },
    { type: "Absent", count: 30 },
    { type: "Early Punch Out", count: 15 },
    { type: "Sick Leave", count: 10 },
  ],
  yearlyData: [
    { type: "Attendee", count: 2000 },
    { type: "Late", count: 150 },
    { type: "Absent", count: 100 },
    { type: "Early Punch Out", count: 50 },
    { type: "Sick Leave", count: 30 },
  ],
};

const OverviewReport = () => {
  const [selectedTab, setSelectedTab] = useState("daily");
  const [tabData, setTabData] = useState(mockData.dailyData);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);

    switch (tab) {
      case "daily":
        setTabData(mockData.dailyData);
        break;
      case "weekly":
        setTabData(mockData.weeklyData);
        break;
      case "monthly":
        setTabData(mockData.monthlyData);
        break;
      case "yearly":
        setTabData(mockData.yearlyData);
        break;
      default:
        setTabData([]);
        break;
    }
  };

  return (
    <>
      <h1 className="text-xl font-bold	 ">Overview Report</h1>
      <div className="flex flex-col lg:flex-row p-8">
        <div className="w-full lg:w-2/3 border p-4 mb-4 lg:mb-0">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Name: {mockData.name}
              </h2>
              <p className="text-gray-600">R12 Code: {mockData.r12Code}</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Share
            </button>
          </div>

          <div className="flex space-x-4">
            {["daily", "weekly", "monthly", "yearly"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded ${
                  selectedTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-4 border">
            <table className="w-full bg-white border rounded">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2 text-left"></th>
                  <th className="border p-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {tabData.map((row) => (
                  <tr key={row.type}>
                    <td className="border p-2 text-gray-800">{row.type}</td>
                    <td className="border p-2 text-gray-600">{row.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <TaskBox loadingPercentage={80} />
      </div>
    </>
  );
};

export default OverviewReport;
