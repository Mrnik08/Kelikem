import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-dark">
          KALI<span className="text-yellow-500">KEM</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/products" className="hover:text-blue-500 transition">Products</Link>
          <Link to="/about" className="hover:text-blue-500 transition">About</Link>
          <Link to="/album" className="hover:text-blue-500 transition">Album</Link>
          
          <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>

          {/* CTA */}
          <button className="ml-4 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition font-semibold"><a href="/getquote">Get Quote</a>
            
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-white"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="flex flex-col px-6 py-6 gap-4 text-sm">
            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/products">Products</Link>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <Link onClick={() => setOpen(false)} to="/catalogue">Catalogue</Link>
            <Link onClick={() => setOpen(false)} to="/album">Album</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
            

            <button className="mt-4 w-full px-5 py-3 bg-blue-600 rounded-lg font-semibold">
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
