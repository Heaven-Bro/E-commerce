import { useCart } from "../context/CartContext";

function CartPage() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-600 mt-10">
                        Your cart is empty.
                    </p>
                ) : (
                    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-4 border-b"
                            >
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-600">
                                        ${item.price}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity - 1
                                            )
                                        }
                                        className="px-2 py-1 bg-gray-200 rounded"
                                    >
                                        -
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }
                                        className="px-2 py-1 bg-gray-200 rounded"
                                    >
                                        +
                                    </button>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="ml-4 text-red-500 hover:text-red-700"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}

                        <div className="border-t pt-4 mt-4 flex justify-between items-center">
                            <h2 className="text-xl font-bold">Total:</h2>
                            <p className="text-xl font-bold text-green-600">
                                ${total}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;