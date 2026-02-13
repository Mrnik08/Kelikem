const VisionMission = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Our Vision",
            text: "To become a trusted leader in architectural lighting by creating solutions that elevate spaces through design and technology."
          },
          {
            title: "Our Mission",
            text: "To deliver reliable, durable, and refined lighting products backed by engineering precision and customer focus."
          }
        ].map((item, i) => (
          <div key={i} className="glass glass-hover rounded-2xl p-12">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMission;
