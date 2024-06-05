"use client";

import {
  BookText,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Presentation,
  User2,
  Wrench,
} from "lucide-react";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-slate-200 border-r-2 border-slate-400 flex-none w-64  p-4 invisible md:visible  ">
      <div className="border-b-2 border-slate-400">
        <div className="text-lg font-bold text-white P-2 bg-black p-3 text-center rounded-md mb-5 ">
          Nextjs Projects
        </div>
      </div>

      <div className="mt-5">
        <div className="text-lg  flex flex-row items-center gap-3 p-3  text-center rounded-md  font-normal hover:bg-slate-300">
          <LayoutDashboard />
          Dashboard
        </div>

        <div
          className={
            isOpen
              ? "text-lg  px-0  p-3 text-center rounded-md  font-normal hover:bg-slate-300 pb-0"
              : "text-lg  px-0  p-3 text-center rounded-md  font-normal hover:bg-slate-300  "
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-row items-center gap-3 ">
            <Wrench /> Modify websites
            {!isOpen ? <ChevronRight /> : <ChevronDown />}
          </div>
          {isOpen && (
            <div className=" mt-3 bg-white rounded-md ">
              <div className="text-lg  flex flex-row items-center gap-3 p-3 text-center rounded-md  font-normal border-b-2 border-slate-400 hover:bg-blue-100">
                <BookText /> Course website
              </div>
              <div className="text-lg  flex flex-row items-center gap-3 p-3 text-center rounded-md  font-normal border-b-2 border-slate-400 hover:bg-blue-100">
                <Presentation /> webinar Site
              </div>
            </div>
          )}
        </div>
        <div className="text-lg  flex flex-row items-center gap-3 p-3 text-center rounded-md  font-normal hover:bg-slate-300">
          <User2 /> User Profile
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
