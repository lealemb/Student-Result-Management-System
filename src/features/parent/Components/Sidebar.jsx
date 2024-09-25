import { Link } from "react-router-dom";
import "../Styles/Sidebar.css";

import { FaHome, FaClipboard, FaCalendarAlt, FaClock } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="sidebar w-64 bg-white border-r shadow-lg flex flex-col pt-16">
      <nav className="sidebar__nav flex flex-col flex-grow">
        <ul className="sidebar__list space-y-4 p-6">
          <li className="sidebar__item flex items-center text-purple-600 font-semibold">
            <FaHome className="sidebar__icon mr-3" />
            <Link to="/parent" className="sidebar__link">
              Dashboard
            </Link>
          </li>
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaClipboard className="sidebar__icon mr-3" />
            <Link to="/parent/grade" className="sidebar__link">
              Grade Result
            </Link>
          </li>
          {/* <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaCalendarAlt className="sidebar__icon mr-3" />
            <Link to="/parent/report" className="sidebar__link">
              Reports
            </Link>
          </li> */}
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaClock className="sidebar__icon mr-3" />
            <Link to="/parent/exams" className="sidebar__link">
              Exam Schedule
            </Link>
          </li>
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaClock className="sidebar__icon mr-3" />
            <Link to="/parent/performance" className="sidebar__link">
              Performance
            </Link>
          </li>
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaClock className="sidebar__icon mr-3" />
            <Link to="/parent/paymentstatus" className="sidebar__link">
              Payment Status
            </Link>
          </li>
          <li className="sidebar__item flex items-center text-gray-600 hover:text-purple-600">
            <FaClock className="sidebar__icon mr-3" />
            <Link to="/parent/about" className="sidebar__link">
              About Us
            </Link>
          </li>

         
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
