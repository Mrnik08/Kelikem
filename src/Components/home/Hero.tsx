import { motion } from "framer-motion";
import HeroImage from "../../assets/images/HeroImage.png";
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            Perfect <span className="text-blue-500">LED Lighting</span> Solutions
            <br /> for Modern Spaces
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            Energy-efficient, durable & stylish LED lights for residential,
            commercial and industrial applications.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/products" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
              View Products
            </a>
            <a href="/catalogue" className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition">
              Download Catalogue
            </a>
          </div>
        </motion.div>

        {/* IMAGE / VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
          <img
            src={HeroImage}
            alt="LED Light"
            className="relative z-10 w-full"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
