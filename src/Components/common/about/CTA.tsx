const CTA = () => {
  return (
    <section className="py-32 px-6 lg:px-24 text-center">
      <h2 className="text-4xl font-bold mb-6">
        Let’s illuminate spaces together
      </h2>

      <p className="text-gray-400 mb-10">
        Explore our products or connect with our team for your next project.
      </p>

      <div className="flex justify-center gap-6">
        <button className="px-8 py-4 bg-blue-600 rounded-xl hover:shadow-glow transition"><a href="/products">View Products</a>
        </button>
        <button className="px-8 py-4 glass glass-hover rounded-xl"><a href="/contact">Contact Us</a>
        </button>
      </div>
    </section>
  );
};

export default CTA;
