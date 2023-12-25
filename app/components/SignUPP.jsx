"use client";
import { useState } from "react";

export default function Hajir() {
  const [response, setResponse] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneNumber = e.target.number.value; // assuming the input field has the name "number"

    try {
      const response = await fetch(
        "https://system.hajirapp.com/api/employer/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone: phoneNumber }), // use the key "phone"
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setResponse(data);

      // Handle the specific structure of the response
      if (data.status === "success") {
        console.log("Successfully Registered. OTP Sent Successfully");
        console.log("OTP:", data.data.otp);
        console.log("Token:", data.data.token);
      } else {
        console.error("Registration failed. Message:", data.message);
      }
    } catch (error) {
      console.error("Error during API request:", error.message);
    }
  };

  return (
    <div>
      <h1>Hajir</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Number:
          <input type="number" name="number" />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Display response information */}
      {response.message && <p>Message: {response.message}</p>}
      {response.error && <p>Error: {response.error}</p>}
    </div>
  );
}
