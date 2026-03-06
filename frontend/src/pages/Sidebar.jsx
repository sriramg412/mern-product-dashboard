import React from "react";

function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-6">MERN Admin</h2>

      <ul className="space-y-3">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Products</li>
        <li className="hover:text-blue-400 cursor-pointer">Users</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;