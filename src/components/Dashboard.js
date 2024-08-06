import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Dashboard = ({ children }) => {
  return (
    <div className="flex h-auto">
        <Sidebar />    
      <div className="w-full">
        <Header />    
        <main className=" ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
