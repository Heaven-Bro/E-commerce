import ProductList from "../pages/Product_list"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Product_Details from "../pages/Product_Details";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/products/:id" element={<Product_Details />} />
            </Routes>
        </Router>
    );
}

export default App
