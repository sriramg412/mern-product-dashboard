import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import ProductForm from "../components/ProductForm";

function AddProduct() {
    const location = useLocation();
    const navigate = useNavigate();
    const productToEdit = location.state?.product || null;

    const [editingProduct, setEditingProduct] = useState(productToEdit);

    const handleRefresh = () => {
        navigate("/products");
    };

    return (
        <Layout>
            <div className="w-full max-w-2xl mx-auto">
                <ProductForm
                    refresh={handleRefresh}
                    editingProduct={editingProduct}
                    setEditingProduct={(val) => {
                        setEditingProduct(val);
                        if (!val) {
                            navigate("/products");
                        }
                    }}
                />
            </div>
        </Layout>
    );
}

export default AddProduct;
