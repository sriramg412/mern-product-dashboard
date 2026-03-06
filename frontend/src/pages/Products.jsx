import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import ProductTable from "../components/ProductTable";

function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`);
            setProducts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleEditProduct = (product) => {
        navigate("/add-product", { state: { product } });
    };

    return (
        <Layout>
            <div className="w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Products Management</h1>
                    <button
                        onClick={() => navigate("/add-product")}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm font-medium w-full sm:w-auto"
                    >
                        + Add Product
                    </button>
                </div>
                <ProductTable
                    products={products}
                    refresh={fetchProducts}
                    setEditingProduct={handleEditProduct}
                />
            </div>
        </Layout>
    );
}

export default Products;
