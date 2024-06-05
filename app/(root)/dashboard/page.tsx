import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import Stats from "@/components/Stats";
import { Card } from "@/components/ui/card";
import React from "react";

const page = () => {
  return (
    <div className="w-full p-4">
      <Dashboard />
      {/* <Card className="w-full h-full flex flex-row ">
        <Sidebar />
        <div className="w-full h-full">
          
        </div>
      </Card> */}
    </div>
  );
};

export default page;
