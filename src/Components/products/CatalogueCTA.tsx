import { motion } from "framer-motion";

const CatalogueCTA = () => {
  return (
    <section className="py-32 px-6 lg:px-24 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-6xl mx-auto glass rounded-3xl p-16 text-center"
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Download our complete <br />
          <span className="text-blue-500">Product Catalogue</span>
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Explore our full range of architectural luminaires, street lighting,
          high mast systems, and engineered lighting poles — designed for
          durability, performance, and modern infrastructure needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/catalogue/KALIKEM-Catalogue.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-blue-600 rounded-xl hover:shadow-glow transition font-semibold"
          >
            Download Catalogue
          </a>

          <a
            href="/getquote"
            className="px-10 py-4 glass glass-hover rounded-xl font-semibold"
          >
            Request Custom Quote
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CatalogueCTA;
