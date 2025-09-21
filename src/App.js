import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind is working!
        </h1>
        <p className="text-gray-700 mb-6">
          This is a test component to see if Tailwind CSS classes are applied correctly in your React app.
        </p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
