import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import Product from './pages/Product';
import Redeem from './pages/Redeem';
import Login from './pages/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/'); // ✅ Redirect to Home page after login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login'); // ✅ Redirect to Login page after logout
  };

  return (
    // ✅ Apply the same gradient background as Product.js
    <div className="font-sans min-h-screen bg-gradient-to-b from-white to-blue-100">
      {/* Show header only when logged in */}
      {isLoggedIn && <Header onLogout={handleLogout} />}

      {/* Routes */}
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* Protected Routes */}
        {isLoggedIn ? (
          <>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  {/* Hero Section */}
                  <section id="hero" className="relative">
                    <img
                      src="/assets/homepage.png"
                      alt="Woman applying skincare"
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 text-white"></div>
                  </section>

                  {/* New Products Section */}
                  <section id="new-products" className="py-16">
                    <div className="max-w-7xl mx-auto text-center">
                      <h2 className="text-3xl font-bold mb-8 text-blue-800">What's New?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Product 1 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                          <img
                            src="/assets/blueberry-micellar-toner.png"
                            alt="Blueberry Micellar Toner"
                            className="w-full h-48 object-cover mb-4 rounded-md"
                          />
                          <p className="font-semibold text-lg text-gray-800">
                            Blueberry Micellar Toner
                          </p>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                          <img
                            src="/assets/blueberry-moisturizing-serum.png"
                            alt="Blueberry Moisturizing Face Serum"
                            className="w-full h-48 object-cover mb-4 rounded-md"
                          />
                          <p className="font-semibold text-lg text-gray-800">
                            Blueberry Moisturizing Face Serum
                          </p>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                          <img
                            src="/assets/blueberry-facial-wash.png"
                            alt="Blueberry Facial Wash"
                            className="w-full h-48 object-cover mb-4 rounded-md"
                          />
                          <p className="font-semibold text-lg text-gray-800">
                            Blueberry Facial Wash
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              }
            />

            <Route path="/product" element={<Product />} />
            <Route path="/redeem" element={<Redeem />} />
          </>
        ) : (
          // Redirect to login if not logged in
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </div>
  );
}

// ✅ Header Component (with Logout button)
function Header({ onLogout }) {
  return (
    <header className="bg-white shadow-md p-4">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src="/assets/logo.png"
            alt="Pat on Me Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-2xl font-bold text-blue-700">Pat On Me</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 items-center">
          <li><Link to="/" className="text-xl font-bold text-blue-600">Home</Link></li>
          <li><Link to="/product" className="text-xl text-blue-600">Products</Link></li>
          <li><Link to="/redeem" className="text-xl text-blue-600">Redeem</Link></li>

          {/* Logout Button */}
          <li>
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-600 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
