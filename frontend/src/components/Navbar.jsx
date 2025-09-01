import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  return (
    <header className="bg-black text-blue-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="hover:text-white transition text-2xl font-bold">
          Aartech Solonics Limited
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-lg">
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <Link to="/settings" className="hover:text-white transition">
            Setting
          </Link>

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              {user && (
                <span className="hover:text-white font-bold text-yellow-400">
                  Welcome {user.username}
                </span>
              )}
              <button
                // onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/home")}
              className="bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition"
            >
              Login
            </button>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-blue-400 hover:text-white transition"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t border-blue-800">
          <ul className="flex flex-col gap-4 px-6 py-2 text-lg">
            <li>
              <Link
                to="/developers"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2"
              >
                Developers
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2"
              >
                Setting
              </Link>
            </li>
            <li>
              {isAuthenticated ? (
                <div className="flex flex-col gap-4 py-2">
                  {user && (
                    <span className="hover:text-white font-bold text-yellow-400 text-center">
                      Welcome {user.username}
                    </span>
                  )}
                  <button
                    // onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    className="block bg-red-600 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                
                <button className="block bg-green-600 text-white px-4 py-2 rounded-md font-semibold text-center hover:bg-green-700 transition w-full">
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
