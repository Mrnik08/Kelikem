import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        whileHover={{ scale: 1.01 }}
        className="glass glass-hover rounded-3xl p-14 max-w-6xl mx-auto"
      >
        <h2 className="text-amber-300 text-3xl font-bold mb-6">
          Performance you trust. Quality you see.
        </h2>

        <p className="text-gray-300 leading-relaxed mb-4">
          Kalikem Enterprises was founded with a clear vision — to redefine
          architectural lighting through innovation, engineering excellence,
          and uncompromising quality.
        </p>

        <p className="text-gray-300 leading-relaxed">
          What began as an idea has grown into a commitment to deliver
          world-class lighting solutions that blend performance, sustainability,
          and aesthetic brilliance. Every product is crafted with precision,
          powered by advanced technology, and shaped by a deep understanding of
          modern lighting needs.
        </p>
        <p className="text-gray-300 leading-relaxed">
          At KALIKEM, we believe lighting is more than illumination —
          it is an experience. Our mission is to enhance environments and
          inspire people through reliable, durable, and visually striking
          lighting solutions.
        </p>

      </motion.div>
    </section>
  );
};

export default BrandStory;
