import React from 'react';

function Product() {
  const products = [
    // Blueberry line
    {
      id: 1,
      name: 'Blueberry Water Micellar Toner',
      image: '/assets/blueberry-micellar-toner.png',
      isNew: true, // ✅ marked new
    },
    {
      id: 2,
      name: 'Blueberry Facial Wash',
      image: '/assets/blueberry-facial-wash.png',
      isNew: true, // ✅ marked new
    },
    {
      id: 3,
      name: 'Blueberry Moisturizing Face Serum',
      image: '/assets/blueberry-moisturizing-serum.png',
      isNew: true, // ✅ marked new
    },
    {
      id: 4,
      name: 'Blueberry Facial Sheet Moisturizing Mask',
      image: '/assets/blueberry-facial-mask.png',
      isNew: false, // ❌ removed new
    },

    // Bamboo line
    {
      id: 5,
      name: 'Bamboo Water Micellar Toner',
      image: '/assets/bamboo-micellar-toner.png',
      isNew: false,
    },
    {
      id: 6,
      name: 'Bamboo Facial Wash',
      image: '/assets/bamboo-facial-wash.png',
      isNew: false,
    },
    {
      id: 7,
      name: 'Bamboo Moisturizing Face Serum',
      image: '/assets/bamboo-moisturizing-serum.png',
      isNew: true,
    },
    {
      id: 8,
      name: 'Bamboo Facial Sheet Moisturizing Mask',
      image: '/assets/bamboo-facial-mask.png',
      isNew: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 py-16">
      <h1 className="text-center text-4xl font-extrabold text-blue-800 mb-12">
        PRODUCTS
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-center"
          >
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
                NEW
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-contain mb-4"
            />
            <p className="font-semibold text-gray-800">{product.name}</p>

            <button className="absolute bottom-3 right-3 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition">
              🛍️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
