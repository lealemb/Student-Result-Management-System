import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../assets/logo.png';
import { FaHome, FaClipboard, FaCalendarAlt, FaClock, FaInfoCircle, FaChartBar } from 'react-icons/fa';

function SideBar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <aside className="w-1/5 bg-white border-r shadow-lg flex flex-col p-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-6">
          <img 
            src={Logo}
            alt="Logo"
            className="w-10 h-10 object-cover"
          />
          <h1 className="text-custom-blue font-bold text-2xl ml-3">SRMS</h1>
        </div>
      </div>

      <nav className="flex flex-col flex-grow">
        <ul className="space-y-4">
          <li
            className={`flex items-center font-semibold cursor-pointer p-3 rounded-lg ${
              activeItem === '/teacher/dashboard' ? 'bg-teal-500 text-white' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
            }`}
            onClick={() => handleItemClick('/teacher/dashboard')}
          >
            <FaHome className="mr-3" />
            <Link to="/teacher/dashboard">Dashboard</Link>
          </li>

          <li
            className={`flex items-center cursor-pointer p-3 rounded-lg ${
              activeItem === '/teacher/dashboard/inputgrade' ? 'bg-teal-500 text-white' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
            }`}
            onClick={() => handleItemClick('/teacher/dashboard/inputgrade')}
          >
            <FaClipboard className="mr-3" />
            <Link to="/teacher/dashboard/inputgrade">Input Grade</Link>
          </li>

          <li
            className={`flex items-center cursor-pointer p-3 rounded-lg ${
              activeItem === '/teacher/dashboard/examschedule' ? 'bg-teal-500 text-white' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
            }`}
            onClick={() => handleItemClick('/teacher/dashboard/examschedule')}
          >
            <FaCalendarAlt className="mr-3" />
            <Link to="/teacher/dashboard/examschedule">Exam Schedule</Link>
          </li>

          <li
            className={`flex items-center cursor-pointer p-3 rounded-lg ${
              activeItem === '/teacher/dashboard/myschedule' ? 'bg-teal-500 text-white' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
            }`}
            onClick={() => handleItemClick('/teacher/dashboard/myschedule')}
          >
            <FaClock className="mr-3" />
            <Link to="/teacher/dashboard/myschedule">My Schedule</Link>
          </li>

          <li
            className={`flex items-center cursor-pointer p-3 rounded-lg ${
              activeItem === '/teacher/dashboard/performance' ? 'bg-teal-500 text-white' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
            }`}
            onClick={() => handleItemClick('/teacher/dashboard/performance')}
          >
            <FaChartBar className="mr-3" />
            <Link to="/teacher/dashboard/performance">Performance</Link>
          </li>

          <li
            className={`flex items-center cursor-pointer p-3 rounded-lg ${
              activeItem === '/teacher/dashboard/aboutus' ? 'bg-teal-500 text-white' : 'text-gray-600 hover:text-teal-500 hover:bg-gray-100'
            }`}
            onClick={() => handleItemClick('/teacher/dashboard/aboutus')}
          >
            <FaInfoCircle className="mr-3" />
            <Link to="/teacher/dashboard/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
