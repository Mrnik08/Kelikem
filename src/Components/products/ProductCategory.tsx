import { useState } from "react";

const categories = [
  "All Products",
  "Street Lights",
  "Flood Lights",
  "High Mast Lighting",
  "Architectural Lighting",
  "Landscape Lighting",
  "Lighting Poles",
];

const ProductCategories = () => {
  const [active, setActive] = useState("All Products");

  return (
    <section className="px-6 lg:px-24 mt-6 mb-14">
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActive(category)}
            className={`
              px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                active === category
                  ? "bg-blue-600 text-white shadow-glow"
                  : "glass glass-hover text-gray-300 hover:text-white"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
