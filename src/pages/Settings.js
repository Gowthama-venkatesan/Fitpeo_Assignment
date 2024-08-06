import React, { useState } from 'react';

const SettingsPage = () => {
  // State for user settings
  const [settings, setSettings] = useState({
    currentPassword: '',
    newPassword: '',
    emailNotifications: true
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle save settings
  const handleSave = () => {
    // Logic to save settings (e.g., send to server)
    console.log('Settings saved:', settings);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-600 text-white  shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      {/* Change Password */}
      <div className="bg-gray-700 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Change Password</h2>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="currentPassword">Current Password</label>
          <input
            id="currentPassword"
            type="password"
            value={settings.currentPassword}
            onChange={handleChange}
            className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-1" htmlFor="newPassword">New Password</label>
          <input
            id="newPassword"
            type="password"
            value={settings.newPassword}
            onChange={handleChange}
            className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md text-white"
          />
        </div>
      </div>
      
      {/* Notification Preferences */}
      <div className="bg-gray-700 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Notification Preferences</h2>
        <div className="flex items-center">
          <input
            id="emailNotifications"
            type="checkbox"
            checked={settings.emailNotifications}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="emailNotifications" className="text-lg font-semibold">Email Notifications</label>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
