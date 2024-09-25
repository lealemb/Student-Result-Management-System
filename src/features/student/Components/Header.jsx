import PropTypes from "prop-types";
import "../Styles/Header.css";

import SchoolLogo from "../../../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import studentIcon from "../../../assets/Vector.png";

const Header = ({ userName, pageTitle }) => {
  return (
    <header className="w-full  bg-white  p-4 fixed top-0 left-0 flex items-center justify-between z-10">
      <div className="sidebar__header p-6 flex flex-col items-center">
        <div className="sidebar__logo flex items-center">
          <img
            src={SchoolLogo}
            alt="Logo"
            className="sidebar__logo-image w-10 h-10 object-cover"
          />
          <h1 className="sidebar__title text-custom-blue font-bold ml-3">SRMS</h1>
        </div>
      </div>
      {/* Page Title */}
      <h2 className="text-xl font-semibold">{pageTitle}</h2>

      {/* Search Input */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-lg p-2 w-full pl-10 focus:outline-none"
        />
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-4">
        <img src={studentIcon} alt="User" className="rounded-full w-10 h-10" />
        <span className="text-gray-600">{userName}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  userName: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Header;
