import React from "react";

function Navbar({ onLogout }) {
    return (
        <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">

            <div className="flex items-center gap-3">
                <img src="/mern_logo.png" alt="logo" className="w-10 h-10" />
                <h1 className="text-xl font-bold">MERN Product Dashboard</h1>
            </div>

            <div>
                <button
                    onClick={onLogout}
                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </div>

        </nav>
    );
}

export default Navbar;