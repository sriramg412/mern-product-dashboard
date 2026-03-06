import { useState, useEffect } from "react";
import axios from "axios";

function ProductForm({ refresh, editingProduct, setEditingProduct }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name);
            setPrice(editingProduct.price);
            setCategory(editingProduct.category);
        } else {
            setName("");
            setPrice("");
            setCategory("");
        }
    }, [editingProduct]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingProduct) {

                await axios.put(`${import.meta.env.VITE_API_URL}/products/${editingProduct._id}`, {
                    name,
                    price,
                    category,
                });
                setEditingProduct(null);
            } else {

                await axios.post(`${import.meta.env.VITE_API_URL}/products/add`, {
                    name,
                    price,
                    category,
                });
            }
            setName("");
            setPrice("");
            setCategory("");
            refresh();
        } catch (err) {
            console.error(err);
            alert("Error saving product");
        }
    };

    const handleCancel = () => {
        setEditingProduct(null);
        setName("");
        setPrice("");
        setCategory("");
    };

    return (
        <div className="bg-white rounded-lg md:rounded-xl shadow-md p-4 sm:p-6 sticky top-20 sm:top-24">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
                {editingProduct ? "Edit Product" : "Add New Product"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Product Name
                    </label>
                    <input
                        required
                        type="text"
                        placeholder="e.g. Wireless Mouse"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-sm border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                </div>

                <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Price (in ₹)
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-2 sm:pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 text-xs sm:text-sm">₹</span>
                        </div>
                        <input
                            required
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full text-sm border border-gray-300 rounded-lg pl-6 sm:pl-7 p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                        Category
                    </label>
                    <input
                        required
                        type="text"
                        placeholder="e.g. Electronics"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full text-sm border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
                    {editingProduct && (
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="flex-1 bg-white text-gray-700 border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-gray-50 transition font-medium text-sm sm:text-base"
                        >
                            Cancel
                        </button>
                    )}
                    <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm hover:shadow text-sm sm:text-base"
                    >
                        {editingProduct ? "Save Changes" : "Create Product"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProductForm;