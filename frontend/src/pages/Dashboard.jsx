import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [activeModal, setActiveModal] = useState(null);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const res = await axios.get("https://mern-product-dashboard-e7fs.onrender.com/api/products");
            setProducts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const categories = Array.from(new Set(products.map(p => p.category)));
    const categoriesCount = categories.length;

    const dummyUsers = [
        { id: 1, name: "Admin (You)", role: "Administrator", lastActive: "Just now" },
        { id: 2, name: "System Services", role: "Bot", lastActive: "Always" }
    ];

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="mt-2 text-sm text-gray-500">Welcome back! Here's a summary of your store today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">

                <div
                    onClick={() => setActiveModal('products')}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 flex items-center justify-between cursor-pointer hover:-translate-y-1"
                >
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Total Products</h3>
                        <p className="text-3xl font-bold text-gray-900">{products.length}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-xl">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                    </div>
                </div>

                <div
                    onClick={() => setActiveModal('categories')}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 flex items-center justify-between cursor-pointer hover:-translate-y-1"
                >
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Categories</h3>
                        <p className="text-3xl font-bold text-gray-900">{categoriesCount}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                    </div>
                </div>

                <div
                    onClick={() => setActiveModal('users')}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 flex items-center justify-between cursor-pointer hover:-translate-y-1"
                >
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Active Users</h3>
                        <p className="text-3xl font-bold text-gray-900">{dummyUsers.length}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                </div>

            </div>


            <Modal
                isOpen={activeModal === 'products'}
                onClose={() => setActiveModal(null)}
                title="Product Inventory Summary"
            >
                <div className="space-y-4">
                    {products.length === 0 ? (
                        <p className="text-gray-500 text-center py-4">No products in inventory.</p>
                    ) : (
                        <ul className="divide-y divide-gray-100 border border-gray-100 rounded-lg">
                            {products.slice(0, 5).map(p => (
                                <li key={p._id} className="p-3 flex justify-between items-center hover:bg-gray-50">
                                    <div>
                                        <p className="font-medium text-gray-800">{p.name}</p>
                                        <p className="text-xs text-gray-500">{p.category}</p>
                                    </div>
                                    <span className="font-bold text-gray-700">₹{p.price}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {products.length > 5 && (
                        <p className="text-xs text-center text-gray-500 mt-2">
                            Showing 5 of {products.length} products
                        </p>
                    )}
                    <button
                        onClick={() => navigate('/products')}
                        className="w-full mt-4 bg-blue-50 text-blue-700 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                    >
                        View Full Inventory
                    </button>
                </div>
            </Modal>


            <Modal
                isOpen={activeModal === 'categories'}
                onClose={() => setActiveModal(null)}
                title="Product Categories"
            >
                <div className="grid grid-cols-2 gap-3">
                    {categories.length === 0 ? (
                        <p className="text-gray-500 col-span-2 text-center py-4">No categories found.</p>
                    ) : (
                        categories.map(cat => (
                            <div key={cat} className="bg-purple-50 text-purple-700 font-medium p-3 rounded-lg text-center flex flex-col justify-center items-center shadow-sm">
                                <span>{cat}</span>
                                <span className="text-xs font-normal opacity-75 mt-1">
                                    {products.filter(p => p.category === cat).length} items
                                </span>
                            </div>
                        ))
                    )}
                </div>
            </Modal>

            <Modal
                isOpen={activeModal === 'users'}
                onClose={() => setActiveModal(null)}
                title="Active Administrators"
            >
                <ul className="divide-y divide-gray-100">
                    {dummyUsers.map(user => (
                        <li key={user.id} className="py-3 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">
                                {user.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-medium text-gray-800">{user.name}</p>
                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                    <span>{user.role}</span>
                                    <span>•</span>
                                    <span className="text-green-600">Active {user.lastActive}</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </Modal>

        </Layout>
    );
}

export default Dashboard;