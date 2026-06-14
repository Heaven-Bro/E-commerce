import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<> Checkout Page Component</>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;