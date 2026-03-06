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

                <table className="min-w-full">

                    <thead className="bg-gray-100">
                        <tr>

                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">
                                Product Name
                            </th>

                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">
                                Price
                            </th>

                            <th className="px-4 sm:px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">
                                Category
                            </th>

                            <th className="px-4 sm:px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase whitespace-nowrap">
                                Actions
                            </th>

                        </tr>
                    </thead>


                    <tbody className="divide-y divide-gray-200">

                        {products.length === 0 ? (

                            <tr>
                                <td
                                    colSpan="4"
                                    className="text-center py-12 text-gray-500"
                                >
                                    No products found. Add a new product.
                                </td>
                            </tr>

                        ) : (

                            products.map((p) => (

                                <tr
                                    key={p._id}
                                    className="hover:bg-gray-50 transition"
                                >

                                    <td className="px-6 py-4 font-medium text-gray-800">
                                        {p.name}
                                    </td>

                                    <td className="px-6 py-4 text-gray-600">
                                        ₹{parseFloat(p.price).toFixed(2)}
                                    </td>

                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                                            {p.category}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 text-right">

                                        <button
                                            onClick={() => setEditingProduct(p)}
                                            className="bg-indigo-500 text-white px-3 py-1 rounded mr-2 hover:bg-indigo-600 transition"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => deleteProduct(p._id)}
                                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>

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