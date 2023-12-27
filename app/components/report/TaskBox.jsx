"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiShare, FiDownload } from "react-icons/fi";

const TaskBox = ({ loadingPercentage }) => {
  return (
    <div className="w-full lg:w-1/3 border p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Task</h2>
      <div className="flex flex-col items-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-full bg-green-500 h-16 w-16 flex items-center justify-center"
        >
          <span className="text-white font-bold">{loadingPercentage}%</span>
        </motion.div>
        <h2 className="text- ">Attendance Report</h2>
        <div className="flex space-x-4 mt-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
          >
            <FiShare className="mr-2" />
            Share
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 text-white px-4 py-2 rounded flex items-center"
          >
            <FiDownload className="mr-2" />
            Export
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
