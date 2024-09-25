import React from "react";
import Logo from "../../../assets/Logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaUsers,
  FaMoneyCheckAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-slate-200 text-black md:w-64 w-48 p-4 md:block fixed inset-y-0 left-0">
      <div className="items-center">
        <div className="flex mb-6 items-center">
          <img
            className="object-cover p-2 w-20 h-20 "
            alt="SRM Logo"
            src={Logo}
          />
          <h1 className=" font-bold text-2xl ml-3 text-custom-blue">SRMS</h1>
        </div>

        <ul>
          <li>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 transition-colors rounded ${
                  isActive
                    ? " text-black"
                    : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              <FaHome className="mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/managestudents"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 transition-colors rounded ${
                  isActive
                    ? "bg-blue-500 text-black"
                    : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              <FaUsers className="mr-2" />
              Manage Students
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/manageteachers"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 transition-colors rounded ${
                  isActive
                    ? "bg-blue-500 text-black"
                    : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              <FaClipboardList className="mr-2" />
              Manage Teachers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/paymentstatus"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 transition-colors rounded ${
                  isActive
                    ? "bg-blue-500 text-black"
                    : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              <FaMoneyCheckAlt className="mr-2" />
              Payment Status
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/examschedule"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 transition-colors rounded ${
                  isActive
                    ? "bg-blue-500 text-black"
                    : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              <FaCalendarAlt className="mr-2" />
              Exam Schedule
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/period"
              className={({ isActive }) =>
                `flex items-center py-2 px-4 transition-colors rounded ${
                  isActive
                    ? "bg-blue-500 text-black"
                    : "hover:bg-blue-100 hover:text-blue-500"
                }`
              }
            >
              <FaClock className="mr-2" />
              Period
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
