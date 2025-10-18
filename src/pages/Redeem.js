import React from 'react';

function RedeemPage() {
  const rewards = [
    {
      id: 1,
      title: '🌸 20% Off Blueberry Skincare Line',
      description: 'Get that fresh glow! Redeem 20% off all Blueberry skincare products.',
      points: 100,
      bgColor: '#ffe6f2',
    },
    {
      id: 2,
      title: '💧 Free Hydrating Face Mask',
      description: 'Claim a free moisturizing sheet mask with your next purchase.',
      points: 80,
      bgColor: '#e6f7ff',
    },
    {
      id: 3,
      title: '✨ Skincare Bundle Discount',
      description: 'Redeem this offer for 30% off when you buy a complete skincare set.',
      points: 150,
      bgColor: '#fff0e6',
    },
    {
      id: 4,
      title: '🧴 Free Travel-Size Toner',
      description: 'Perfect for on-the-go! Redeem a mini toner when you spend over 500 points.',
      points: 120,
      bgColor: '#f0e6ff',
    },
    {
      id: 5,
      title: '💖 Exclusive Self-Care Kit',
      description: 'A luxury set including serum, mask, and moisturizer — limited edition!',
      points: 250,
      bgColor: '#e6ffe6',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 py-16 font-sans">
      <h1 className="text-center text-4xl font-extrabold text-blue-800 mb-6">
        💕 Redeem Your Skincare Rewards 💕
      </h1>
      <p className="text-center text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
        Use your points to claim exclusive discounts, freebies, and glowing self-care treats!
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-6">
        {rewards.map((reward) => (
          <div
            key={reward.id}
            className="relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 text-center"
            style={{ backgroundColor: reward.bgColor }}
          >
            <h2 className="text-gray-800 font-semibold text-lg mb-3">{reward.title}</h2>
            <p className="text-gray-600 mb-4">{reward.description}</p>
            <button
              className="bg-pink-500 text-white font-semibold px-5 py-2 rounded-lg hover:bg-pink-600 transition"
            >
              Redeem for {reward.points} Points
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RedeemPage;
