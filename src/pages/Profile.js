import React, { useState } from 'react';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleEditClick = () => setIsEditing(!isEditing);

  return (
    <div className="max-w-4xl h-screen mx-auto p-6 bg-gray-600 text-white shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-gray-700 p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={userData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md text-white"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md text-white"
            readOnly={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            type="text"
            value={userData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md text-white"
            readOnly={!isEditing}
          />
        </div>
        <button
          onClick={handleEditClick}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
