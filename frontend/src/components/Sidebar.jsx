import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    const menuItems = [
        { path: "/dashboard", label: "Dashboard" },
        { path: "/products", label: "Products" },
        { path: "/add-product", label: "Add Product" },
    ];

    return (
        <aside className="w-64 bg-white shadow-md hidden md:block min-h-screen">
            <div className="p-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
            </div>
            <ul className="p-4 space-y-2">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link
                            to={item.path}
                            className={`block p-2 rounded cursor-pointer ${location.pathname === item.path
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
    );
}

export default Sidebar;
