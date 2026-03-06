import axios from "axios";

function ProductTable({ products, refresh, setEditingProduct }) {

    const deleteProduct = async (id) => {
        try {
            if (window.confirm("Are you sure you want to delete this product?")) {
                await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`);
                refresh();
            }
        } catch (err) {
            console.error(err);
            alert("Error deleting product");
        }
    };

    return (

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">


            <div className="px-6 py-4 border-b bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-700">
                    Product List
                </h2>
            </div>

            <div className="overflow-x-auto">
                {/* Desktop view: Traditional Table */}
                <table className="hidden md:table min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">
                                Product Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">
                                Price
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">
                                Category
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-12 text-gray-500">
                                    No products found. Add a new product.
                                </td>
                            </tr>
                        ) : (
                            products.map((p) => (
                                <tr key={p._id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4 font-medium text-gray-800">{p.name}</td>
                                    <td className="px-6 py-4 text-gray-600">₹{parseFloat(p.price).toFixed(2)}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                                            {p.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => setEditingProduct(p)} className="bg-indigo-500 text-white px-3 py-1 rounded mr-2 hover:bg-indigo-600 transition">
                                            Edit
                                        </button>
                                        <button onClick={() => deleteProduct(p._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                {/* Mobile view: Stacked Cards */}
                <div className="md:hidden divide-y divide-gray-200">
                    {products.length === 0 ? (
                        <div className="text-center py-8 text-gray-500 text-sm">
                            No products found. Add a new product.
                        </div>
                    ) : (
                        products.map((p) => (
                            <div key={p._id} className="p-4 bg-white hover:bg-gray-50 transition">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-gray-800 text-base">{p.name}</h3>
                                    <span className="px-2 py-1 text-[10px] font-bold bg-blue-100 text-blue-700 rounded-full uppercase tracking-wider">
                                        {p.category}
                                    </span>
                                </div>
                                <div className="text-gray-600 font-medium mb-4 text-lg">
                                    ₹{parseFloat(p.price).toFixed(2)}
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => setEditingProduct(p)} className="flex-1 bg-indigo-50 text-indigo-600 border border-indigo-200 px-3 py-2 rounded-lg hover:bg-indigo-100 transition text-sm font-medium">
                                        Edit
                                    </button>
                                    <button onClick={() => deleteProduct(p._id)} className="flex-1 bg-red-50 text-red-600 border border-red-200 px-3 py-2 rounded-lg hover:bg-red-100 transition text-sm font-medium">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>

    );
}

export default ProductTable;