"use client";

import React, { useState } from "react";
import DashboardMain from "./AccountSetting";
import AccountSetting from "./AccountSetting";
import DashboardContent from "./DashboardContent";
import EditCourse from "./EditCourse";
import EditWebinar from "./EditWebinar";

const Dashboard = () => {
  const [isDashboard, setIsDashboard] = useState(true);
  const [isAccountsetting, setIsAccountsetting] = useState(false);
  const [isEditCourse, setIsEditCourse] = useState(false);
  const [isEditWebinar, setIsEditWebinar] = useState(false);
  let content;
  if (
    isDashboard &&
    isAccountsetting === false &&
    isEditCourse === false &&
    isEditWebinar === false
  ) {
    content = "Dashboard";
  } else if (
    isAccountsetting &&
    isDashboard === false &&
    isEditCourse === false &&
    isEditWebinar === false
  ) {
    content = "Account Setting";
  } else if (
    isEditCourse &&
    isDashboard === false &&
    isAccountsetting === false &&
    isEditWebinar === false
  ) {
    content = "Edit Course";
  } else content = "Edit Webinar";

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
        <h1 className="border-b py-6 text-4xl font-semibold">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <div className="relative my-4 w-56 sm:hidden">
            <input
              className="peer hidden"
              type="checkbox"
              name="select-1"
              id="select-1"
            />
            <label
              htmlFor="select-1"
              className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
            >
              {content}
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
              <li
                onClick={() => {
                  setIsEditCourse(false);
                  setIsEditWebinar(false);
                  setIsAccountsetting(false);
                  setIsDashboard(true);
                }}
                className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
              >
                Dashboard
              </li>
              <li
                onClick={() => {
                  setIsDashboard(false);
                  setIsEditCourse(false);
                  setIsAccountsetting(false);
                  setIsEditWebinar(true);
                }}
                className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
              >
                Edit webinar site
              </li>
              <li
                onClick={() => {
                  setIsDashboard(false);
                  setIsEditCourse(false);
                  setIsEditWebinar(false);
                  setIsAccountsetting(true);
                }}
                className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
              >
                Edit Course
              </li>
              <li
                onClick={() => {
                  setIsDashboard(false);
                  setIsEditCourse(false);
                  setIsEditWebinar(false);
                  setIsAccountsetting(true);
                }}
                className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white"
              >
                Account Setting
              </li>
            </ul>
          </div>

          <div className="col-span-2 hidden sm:block">
            <ul>
              <li
                onClick={() => {
                  setIsEditCourse(false);
                  setIsEditWebinar(false);
                  setIsAccountsetting(false);
                  setIsDashboard(true);
                }}
                className={
                  isDashboard
                    ? "mt-5 cursor-pointer font-semibold px-2 py-2  transition hover:border-l-blue-700 hover:text-blue-700 border-l-2 border-l-blue-700   text-blue-700"
                    : "mt-5 cursor-pointer font-semibold px-2 py-2  transition hover:border-l-blue-700 hover:text-blue-700"
                }
              >
                Dashboard
              </li>
              <li
                onClick={() => {
                  setIsDashboard(false);
                  setIsEditCourse(false);
                  setIsAccountsetting(false);
                  setIsEditWebinar(true);
                }}
                className={
                  isEditWebinar
                    ? "mt-5 cursor-pointer font-semibold px-2 py-2  transition hover:border-l-blue-700 hover:text-blue-700 border-l-2 border-l-blue-700   text-blue-700"
                    : "mt-5 cursor-pointer font-semibold px-2 py-2  transition hover:border-l-blue-700 hover:text-blue-700"
                }
              >
                Edit Webinar Site
              </li>
              <li
                onClick={() => {
                  setIsDashboard(false);
                  setIsEditWebinar(false);
                  setIsAccountsetting(false);
                  setIsEditCourse(true);
                }}
                className={
                  isEditCourse
                    ? "mt-5 cursor-pointer font-semibold px-2 py-2  transition hover:border-l-blue-700 hover:text-blue-700 border-l-2 border-l-blue-700   text-blue-700"
                    : "mt-5 cursor-pointer font-semibold px-2 py-2  transition hover:border-l-blue-700 hover:text-blue-700"
                }
              >
                Edit Course Site
              </li>
              <li
                className={
                  isAccountsetting
                    ? "mt-5 cursor-pointer font-semibold px-2 py-2  transition hover:border-l-blue-700 hover:text-blue-700 border-l-2 border-l-blue-700   text-blue-700"
                    : "mt-5 cursor-pointer font-semibold px-2 py-2  transition hover:border-l-blue-700 hover:text-blue-700"
                }
                onClick={() => {
                  setIsDashboard(false);
                  setIsEditCourse(false);
                  setIsEditWebinar(false);
                  setIsAccountsetting(true);
                }}
              >
                Account Settings
              </li>
              {/* <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Billing
              </li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Notifications
              </li>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Integrations
              </li> */}
            </ul>
          </div>
          {isDashboard && <DashboardContent />}
          {isAccountsetting && <AccountSetting />}
          {isEditCourse && <EditCourse />}
          {isEditWebinar && <EditWebinar />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
