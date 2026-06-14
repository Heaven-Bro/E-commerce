import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart} from "../context/CartContext";

function CheckoutPage(){
    const BASEURL = import.meta.env.VITE_DJANGO_BASE_URL;
    const navigate = useNavigate();
    const {clearCart} = useCart();


    const [ from , setForm] = useState({
        name: "",
        address: "",
        phone: "",
        payment_method:"COD",
    });

    const [loading, setloading] = useState(false);
    const [message, setmessage] = useState(null);
    
    const handleChange = (e) =>  {
        setForm({
            ...form,
            [e.target.value]: e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        setmessage("");
        try {
            const res = await fetch(`{BASEURL}/api/orders/create`, {
                method: "POSt",
                headers:{
                    "content-Type": "application/json",
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();

            if(res.ok){
                setmessage("Order placed successfully!");
                fetch(`{BASEURL}/api/cart/`)
                clearCart();
                setTimeout(()=>{
                    navigate("/");

                }, 2000)
            }else {
                setmessage(data.error|| "False to place order. Please try again")
            }
        } catch(error){
            setmessage("An error occured. Please try again.")
        }
    }
    return (
        <div className ="min-h-screen bg-gray-100 flex justify-center items-center p-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

                <form onSubmit={handleSubmit} className ="space-y-4"L>
                    <input
                        type="text"
                        name="Name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-2"
                    />
                    <input
                        type="phone"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full border rounded-lg p-2"
                    />

                    <select 
                        name="Payment_method "
                        value={form.payment_method}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-2"
                    >   
                        <option value="COD">Cash on Delivary</option>
                        <option value = "CrediCard"> Credit Card</option>
                        <option value="PayPal">PayPal</option>
                    </select>

                    <button type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        {loading ? "Processing..." : "Place Order"}

                    </button>
                    {message && (
                        <p className="text-center text-green-700 font-semibold mt-4">{message}</p>
                    )}
                </form>
            </div>
        </div>
    )

}

export default CheckoutPage;