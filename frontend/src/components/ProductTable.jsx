import axios from "axios";

function ProductTable({ products, refresh, setEditingProduct }) {
    const deleteProduct = async (id) => {
        try {
            if (window.confirm("Are you sure you want to delete this product?")) {
                await axios.delete(`http://localhost:5000/api/products/${id}`);
                refresh();
            }
        } catch (err) {
            console.error(err);
            alert("Error deleting product");
        }
    };

    return (
        <div className="bg-white rounded-lg md:rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th scope="col" className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="px-2 sm:px-4 lg:px-6 py-8 sm:py-12 text-center text-xs sm:text-sm text-gray-500">
                                    No products found. Start by creating one.
                                </td>
                            </tr>
                        ) : (
                            products.map((p) => (
                                <tr key={p._id} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap">
                                        <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">{p.name}</div>
                                    </td>
                                    <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap">
                                        <div className="text-xs sm:text-sm text-gray-700">₹{parseFloat(p.price).toFixed(2)}</div>
                                    </td>
                                    <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap">
                                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                            {p.category}
                                        </span>
                                    </td>
                                    <td className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end">
                                            <button
                                                onClick={() => setEditingProduct(p)}
                                                className="text-indigo-600 hover:text-indigo-900 transition-colors text-xs sm:text-sm"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => deleteProduct(p._id)}
                                                className="text-red-500 hover:text-red-700 transition-colors text-xs sm:text-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductTable;