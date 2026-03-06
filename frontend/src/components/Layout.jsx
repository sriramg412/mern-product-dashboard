import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar onLogout={handleLogout} />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 w-full p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;
