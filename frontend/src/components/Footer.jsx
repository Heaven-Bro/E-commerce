import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">
                            E-commerce Store
                        </h2>
                        <p className="text-gray-400 leading-relaxed">
                            Discover premium products with exceptional quality and fast
                            delivery. Your trusted online shopping destination.
                        </p>

                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 transition"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-sky-500 transition"
                            >
                                <FaTwitter />
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition"
                            >
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Shop
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Best Sellers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Categories
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Deals & Offers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Customer Service
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Shipping Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    Returns & Refunds
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Stay Updated
                        </h3>

                        <p className="text-gray-400 mb-4">
                            Subscribe to receive exclusive offers and updates.
                        </p>

                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
                            />

                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} ShopSphere. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:text-white transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-white transition">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}