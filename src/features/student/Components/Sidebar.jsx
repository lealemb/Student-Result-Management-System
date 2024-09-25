import { NavLink } from "react-router-dom";
import "../Styles/Sidebar.css";

import {
  FaHome,
  FaClipboard,
  FaCalendarAlt,
  FaClock,
  FaChartLine,
  FaInfoCircle,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar w-64 bg-white border-r shadow-lg flex flex-col pt-16">
      <nav className="sidebar__nav flex flex-col flex-grow">
        <ul className="sidebar__list space-y-4 p-6">
          <li className="sidebar__item flex items-center">
            <FaHome className="sidebar__icon mr-3" />
            <NavLink
              to="/student"
              className={({ isActive }) =>
                `sidebar__NavLink flex-1 p-2 rounded-lg ${
                  isActive
                    ? "text-gray  font-semibold "
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-100"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="sidebar__item flex items-center">
            <FaClipboard className="sidebar__icon mr-3" />
            <NavLink
              to="/student/grade"
              className={({ isActive }) =>
                `sidebar__NavLink flex-1 p-2 rounded-lg ${
                  isActive
                    ? "text-white bg-blue-500 font-semibold shadow-lg"
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-100"
                }`
              }
            >
              Grade Result
            </NavLink>
          </li>
          <li className="sidebar__item flex items-center">
            <FaCalendarAlt className="sidebar__icon mr-3" />
            <NavLink
              to="/student/period"
              className={({ isActive }) =>
                `sidebar__NavLink flex-1 p-2 rounded-lg ${
                  isActive
                    ? "text-white bg-blue-500 font-semibold shadow-lg"
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-100"
                }`
              }
            >
              Period
            </NavLink>
          </li>
          <li className="sidebar__item flex items-center">
            <FaClock className="sidebar__icon mr-3" />
            <NavLink
              to="/student/exams"
              className={({ isActive }) =>
                `sidebar__NavLink flex-1 p-2 rounded-lg ${
                  isActive
                    ? "text-white bg-blue-500 font-semibold shadow-lg"
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-100"
                }`
              }
            >
              Exam Schedule
            </NavLink>
          </li>
          <li className="sidebar__item flex items-center">
            <FaChartLine className="sidebar__icon mr-3" />
            <NavLink
              to="/student/performance"
              className={({ isActive }) =>
                `sidebar__NavLink flex-1 p-2 rounded-lg ${
                  isActive
                    ? "text-white bg-blue-500 font-semibold shadow-lg"
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-100"
                }`
              }
            >
              Performance
            </NavLink>
          </li>
          <li className="sidebar__item flex items-center">
            <FaInfoCircle className="sidebar__icon mr-3" />
            <NavLink
              to="/student/about"
              className={({ isActive }) =>
                `sidebar__NavLink flex-1 p-2 rounded-lg ${
                  isActive
                    ? "text-white bg-blue-500 font-semibold shadow-lg"
                    : "text-gray-600 hover:text-blue-500 hover:bg-blue-100"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
