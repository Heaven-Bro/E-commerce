import { Link } from "react-router-dom";
function ProductCard({ product }) {
    const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;

    return (
        <Link to={`/products/${product.id}`} className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 p-4 cursor-pointer">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 p-4">
                <img
                    src={`${BASE_URL}${product.image}`}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
                <p className="text-gray-600 font-medium mb-4">${product.price}</p>
            </div>
        </Link>
    );
}

export default ProductCard; 