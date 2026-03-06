import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";

function Dashboard() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/products");
            setProducts(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleLogout = () => {
       
        navigate("/");
    };

    useEffect(() => {
        fetchProducts();
    }, []);


    return (

        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar onLogout={handleLogout} />

            <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8 flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">

                <div className="w-full lg:w-1/3">
                    <ProductForm
                        refresh={fetchProducts}
                        editingProduct={editingProduct}
                        setEditingProduct={setEditingProduct}
                    />
                </div>

             
                <div className="w-full lg:w-2/3">
                    <ProductTable
                        products={products}
                        refresh={fetchProducts}
                        setEditingProduct={setEditingProduct}
                    />
                </div>

            </main>
        </div>
    );
}

export default Dashboard;