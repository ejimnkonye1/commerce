/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";

export function AccountInfo() {
  const [username, setUsername] = useState("currentUsername");
  const [email, setEmail] = useState("email@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Logic to save the updated account information
    console.log("Account information updated:", { username, email, phone });
    setIsEditing(false);
  };

  return (
    <div className="p-4 lg:p-10 bg-neutral-50 dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Account Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300">Username</label>
          {isEditing ? (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          ) : (
            <p className="mt-1 text-gray-900 dark:text-white">{username}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          ) : (
            <p className="mt-1 text-gray-900 dark:text-white">{email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300">Phone Number</label>
          {isEditing ? (
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 p-2 border rounded w-full"
            />
          ) : (
            <p className="mt-1 text-gray-900 dark:text-white">{phone}</p>
          )}
        </div>

        <div className="flex justify-end mt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}