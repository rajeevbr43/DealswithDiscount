import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Heart, ShoppingCart, Search } from "lucide-react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <Router>
      {/* Header */}
      <header className="bg-[#111] sticky top-0 z-50 border-b border-[#222] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-2xl font-bold text-gold">
            Deals With Discount
          </Link>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#222] text-sm pl-9 pr-4 py-2 rounded-full outline-none text-gray-200"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Link to="/wishlist" className="relative">
              <Heart className="text-gold hover:scale-110 transition" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-black text-xs rounded-full px-1">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gold hover:scale-110 transition" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-black text-xs rounded-full px-1">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products search={search} cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer */}
      <footer className="bg-[#111] text-center py-6 border-t border-[#222] text-sm text-gray-400">
        © {new Date().getFullYear()} Deals With Discount — All Rights Reserved.
      </footer>
    </Router>
  );
                  }
