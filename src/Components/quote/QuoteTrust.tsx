const trustPoints = [
  "Architectural & infrastructure-grade products",
  "Custom manufacturing capabilities",
  "Trusted by contractors & professionals",
  "Quality-controlled production process",
];

const QuoteTrust = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="glass rounded-3xl p-14 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          Why request a quote from Kalikem?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {trustPoints.map((point, index) => (
            <div key={index} className="glass rounded-xl px-6 py-4 text-gray-300">
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteTrust;
