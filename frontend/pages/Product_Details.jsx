import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";

function Product_Details() {
    const { id } = useParams();
    const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL}/api/products/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                return response.json();
            })
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [id, BASE_URL]);

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }
    if (error) {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }
    if (!product) {
        return <div className="text-center mt-10">Product not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-content items-center py-10">
            <div className="bg-white rounded-2xl shadow-lg p-68 max-w-3xl w-full mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <img
                        src={`${BASE_URL}${product.image}`}
                        alt={product.name}
                        className="w-full md:w-1/2 h-auto object-cover rounded-lg" />
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                        <p className="text-gray-600 mb-6">{product.description}</p>
                        <p className="text-2xl font-bold text-gray-800 mb-6">${product.price}</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product_Details;

// import {link} from 'react-router-dom';

// const Product_Details = () => {
//     const BASEURL = import.meta.env.VITE_BASE_URL;

//     return (
//         <Link to={'/products/${product.id}'} className= "bg-white rounded-xl shadow-md hover:scale-[1.03] transition-transform p-4 cursor-pointer">
//             <img
//             src={`${BASEURL}${product.image}`}
//             alt={product.name}
//             className="w-full h-48 object-cover rounded-lg mb-4" />
//             <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-600 mb-2">{product.description}</p>
//             <p className="text-gray-800 font-bold">${product.price}</p>
//             </Link>
//     );
// }