import { Link, useLocation } from "react-router-dom";

function Sidebar({ isOpen, closeMenu }) {
    const location = useLocation();

    const menuItems = [
        { path: "/dashboard", label: "Dashboard" },
        { path: "/products", label: "Products" },
        { path: "/add-product", label: "Add Product" },
    ];

    return (
        <>
            {/* Mobile Backdrop overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Sidebar content */}
            <aside
                className={`
                    fixed md:static inset-y-0 left-0 z-40
                    w-64 bg-white shadow-lg md:shadow-md h-full min-h-screen
                    transition-transform duration-300 ease-in-out
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                    md:translate-x-0
                `}
            >
                <div className="p-4 border-b flex justify-between items-center bg-white">
                    <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                    {/* Close button for mobile */}
                    <button
                        onClick={closeMenu}
                        className="md:hidden text-gray-500 hover:text-gray-800 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className="p-4 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                onClick={closeMenu} // Close menu when an item is clicked on mobile
                                className={`block p-3 rounded cursor-pointer transition-colors ${location.pathname === item.path
                                    ? "bg-blue-50 text-blue-700 font-medium"
                                    : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    );
}

export default Sidebar;
