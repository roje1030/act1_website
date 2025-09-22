import React from 'react';
import './App.css';

function App() {
  return (
    <div className="font-sans">

      {/* Header Section */}
      <header className="bg-white shadow-md p-4">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <ul className="flex space-x-8">
            <li><button className="text-xl font-bold text-blue-600">Home</button></li>
            <li><button className="text-xl text-blue-600">Products</button></li>
            <li><button className="text-xl text-blue-600">About Us</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative">
        <img src="/assets/hero-image.png" alt="Woman applying skincare" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <h1 className="text-4xl font-semibold">Big Deals 20% Off</h1>
        </div>
      </section>

      {/* New Products Section */}
      <section id="new-products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What's New?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Product 1 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <img src="/assets/blueberry-micellar-toner.png" alt="Blueberry Micellar Toner" className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="font-semibold text-lg">Blueberry Micellar Toner</p>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <img src="/assets/blueberry-moisturizing-serum.png" alt="Blueberry Moisturizing Face Serum" className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="font-semibold text-lg">Blueberry Moisturizing Face Serum</p>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white shadow-lg p-6 rounded-lg text-center">
              <img src="/assets/blueberry-facial-wash.png" alt="Blueberry Facial Wash" className="w-full h-48 object-cover mb-4 rounded-md" />
              <p className="font-semibold text-lg">Blueberry Facial Wash</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
