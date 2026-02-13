const values = [
  "Engineering Excellence",
  "Uncompromised Quality",
  "Sustainable Innovation",
  "Customer-Centric Approach",
  "Continuous Improvement",
  "Design with Purpose",
];

const CoreValues = () => {
  return (
    <section className="py-24 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {values.map((value, i) => (
          <div
            key={i}
            className="glass glass-hover rounded-xl p-8 text-center"
          >
            <p className="font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
