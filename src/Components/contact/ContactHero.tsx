import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="min-h-[60vh] flex items-center px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        

        <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight">
          Let’s discuss your <br />
          <span className="text-blue-500">lighting requirements</span>
        </h1>

        <p className="mt-8 text-lg text-gray-300">
          Reach out to us for product inquiries, dealership opportunities,
          or project collaborations.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
