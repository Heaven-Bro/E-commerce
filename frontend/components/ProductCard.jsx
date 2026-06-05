function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-[1.05] transition-transform duration-300 p-4">
            <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
            <p className="text-gray-600 font-medium mb-4">${product.price}</p>
        </div>
    );
}

export default ProductCard;