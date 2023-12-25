// DynamicRadioButtons.js

import React, { useState } from "react";

const DynamicRadioButtons = ({
  title,
  options,
  onSelect,
  containerClassName,
  labelClassName,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className={containerClassName}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex">
        {options.map((option, index) => (
          <div
            key={option.value}
            className={`flex items-center mb-3 bg-gray-200 p-4 rounded-lg cursor-pointer ${
              selectedOption === option.value ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleOptionChange(option.value)}
          >
            <input
              type="radio"
              id={option.value}
              name={`dynamicRadio_${title}`} // Ensure unique names for radio buttons
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => {}}
              className="mr-2 hidden"
            />
            <label
              htmlFor={option.value}
              className={`text-gray-700 ${labelClassName}`}
            >
              {selectedOption === option.value ? "✔" : " "}
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicRadioButtons;
