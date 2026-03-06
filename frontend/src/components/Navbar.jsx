import React from "react";

function Navbar({ onLogout, toggleMenu }) {
    return (
        <nav className="bg-gray-900 text-white px-4 md:px-6 py-3 flex justify-between items-center z-50 relative">

            <div className="flex items-center gap-3">
                {/* Hamburger Menu - Only visible on mobile/tablet */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white mr-2 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                <img src="/mern_logo.png" alt="logo" className="w-8 h-8 md:w-10 md:h-10 object-cover" />
                <h1 className="text-lg md:text-xl font-bold truncate max-w-[150px] sm:max-w-none">MERN Dashboard</h1>
            </div>

            <div>
                <button
                    onClick={onLogout}
                    className="bg-red-500 px-3 md:px-4 py-1.5 md:py-2 rounded text-sm md:text-base hover:bg-red-600 transition-colors"
                >
                    Logout
                </button>
            </div>

        </nav>
    );
}

export default Navbar;