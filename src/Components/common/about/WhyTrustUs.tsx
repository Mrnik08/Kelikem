const points = [
  "Advanced manufacturing & engineering",
  "Strict quality control at every stage",
  "Durable & reliable products",
  "Trusted by architects & contractors",
  "Client-first mindset",
  "Industry expertise & proven track record",
];

const WhyTrustUs = () => {
  return (
    <section className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Trust KALIKEM</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:bg-white/15 overflow-hidden"
            >
              {/* Premium light glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-2xl font-bold text-blue-400 mb-3">✦</div>
                <p className="text-base lg:text-lg text-gray-200 group-hover:text-white transition-colors duration-300">
                  {p}
                </p>
              </div>

              {/* Subtle animated border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
