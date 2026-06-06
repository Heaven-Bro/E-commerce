import {link} from 'react-router-dom';

const Product_Details = () => {
    const BASEURL = import.meta.env.VITE_BASE_URL;

    return (
        <Link to={'/products/${product.id}'} className= "bg-white rounded-xl shadow-md hover:scale-[1.03] transition-transform p-4 cursor-pointer">
            <img 
            src={`${BASEURL}${product.image}`} 
            alt={product.name} 
            className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-gray-800 font-bold">${product.price}</p>
            </Link>
    ); 
}