import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="min-h-[80vh] flex items-center px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl"
      >
    

        <h1 className="mt-6 text-5xl lg:text-7xl font-extrabold leading-tight">
          Precision lighting <br />
          <span className="text-blue-500">crafted to last</span>
        </h1>

        <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-3xl">
          We design architectural luminaires and engineered lighting poles that
          balance performance, durability, and visual elegance.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
