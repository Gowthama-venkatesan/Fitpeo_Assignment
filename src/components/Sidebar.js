import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaSearch, FaCog, FaEnvelope, FaUser } from 'react-icons/fa'; 
import home from '../image/home.svg'
import file from '../image/check.svg'
import wallet from '../image/wallet.svg'
import purchase from '../image/purchase.svg'
import logoimg from '../image/logoimg.jpg';

const Sidebar = () => {
  // State to manage the collapsed status
  const [collapsed, setCollapsed] = useState(false);
  // State to manage mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle collapse state
  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`relative ${mobileMenuOpen ? 'block' : 'hidden'} md:flex md:flex-col md:items-center ${collapsed ? 'w-20' : 'w-[80px]'} h-auto  bg-gray-800 p-4 transition-all duration-300`}>
      <div className="absolute top-4 right-4 md:hidden">
        <button onClick={handleMobileMenuToggle} className="text-red">
          <FaBars size={24} />
        </button>
      </div>
      
      <img 
        src={logoimg} 
        className={`w-10 h-10 rounded cursor-pointer ${collapsed ? 'w-8 h-8' : 'w-10 h-10'}`} 
        alt="logo" 
        onClick={handleCollapseToggle}
      />
      
      {/* Sidebar Links */}
      <ul className={`flex flex-col items-center ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <li className='my-5'><Link to="/"><img src={home} className='w-10 h-10' alt="home" /> </Link></li>
        <li className='my-5'><Link to="/"><img src={file} className='w-10 h-10' alt="file" /> </Link></li>
        <li className='my-5'><Link to="/"><img src={wallet} className='w-10 h-10' alt="wallet" /> </Link></li>
        <li className='my-5'><Link to="/"><img src={purchase} className='w-10 h-10' alt="purchase" /> </Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
