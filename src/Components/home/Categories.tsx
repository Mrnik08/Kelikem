import { motion } from "framer-motion";
import { FaHome, FaIndustry, FaCity, FaSun } from "react-icons/fa";

const categories = [
  { icon: <FaHome />, title: "Indoor Lighting" },
  { icon: <FaCity />, title: "Commercial Lighting" },
  { icon: <FaIndustry />, title: "Industrial Lighting" },
  { icon: <FaSun />, title: "Outdoor Lighting" },
];

const Categories = () => {
  return (
    <section className="py-20 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Lighting Categories
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-glass backdrop-blur-glass border border-borderGlass p-8 rounded-2xl text-center cursor-pointer hover:shadow-glow transition-all duration-300"
          >
            <div className="text-4xl text-blue-500 mb-4 flex justify-center">
              {cat.icon}
            </div>
            <h3 className="text-lg font-semibold">{cat.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
