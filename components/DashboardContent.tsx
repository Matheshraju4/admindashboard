import React from "react";
import Stats from "./Stats";
import Sections from "./Sections";

const DashboardContent = () => {
  return (
    <div className="col-span-8 overflow-hidden rounded-xl  sm:bg-gray-50 sm:px-8 sm:shadow">
      <div className="pt-4">
        <h1 className="py-2 text-2xl font-semibold">Dashboard</h1>
        <p className="font- text-slate-600">
          Welcome back, <strong>John Doe</strong>
        </p>
        <p className="font- text-slate-600">
          Soon you will be able to see <strong>Stats</strong>
        </p>
      </div>
      <Stats />
    </div>
  );
};

export default DashboardContent;
