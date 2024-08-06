import {React, useState} from 'react';
import { FaSearch, FaCog, FaEnvelope, FaUser } from 'react-icons/fa'; // Import Font Awesome icons
import { useNavigate } from "react-router-dom";

const Header = () => {

   const navigate = useNavigate()
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchClick = () => {
    console.log('Search button clicked');
  };

  const handleSettingsClick = () => {
    console.log('Settings button clicked');
    navigate('/setting')
  };

  const handleMailClick = () => {
    console.log('Mail Notifications button clicked');

  };

  const handleUserClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleNavigate =() => {
    navigate('/profile')
  }

  return (
    <header className="flex items-center w-full justify-between bg-gray-800 text-white h-16 p-4">
      <div className="flex-grow relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex ml-4 items-center space-x-4">
        <a
          href ='https://www.google.com/intl/en-US/gmail/about/'
          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Mail Notifications"
        >
          <FaEnvelope className="text-xl" />
        </a>
        <button
          onClick={handleSettingsClick}
          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Settings"
        >
          <FaCog className="text-xl" />
        </button>
        <button
          onClick={handleUserClick}
          className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="User Profile"
        >
          <FaUser className="text-xl" />
        </button>
         {isDropdownOpen && (
        <div
          className="absolute top-14 right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg"
          onClick={handleCloseDropdown} 
        >
          <div className="p-4 border-b">
            <p className="text-lg font-semibold">John Doe</p>
            <p className="text-sm text-gray-400">john.doe@example.com</p>
          </div>
          <ul>
            <li onClick={handleNavigate} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
      </div>
    </header>
  );
};

export default Header;
