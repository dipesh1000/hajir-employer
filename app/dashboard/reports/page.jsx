import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-cyan-700">Overall reports</h1>
      <div className="bg-slate-400">
        <div className="flex flex-row w-7 ">
          <p>BIraj karki</p>
          <p>R12</p>
          <button>share</button>
        </div>
        <div className="flex flex-row">
          <Button className=" ">Daily</Button>
          <Button>Weekly</Button>
          <Button>MOnthly</Button>
          <Button>Yearly</Button>
        </div>
      </div>
      <div>
        <table>
          <th>Number</th>
          <th>Report</th>
          <tr>
            <td>1</td>
            <td>Report 1</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default page;
