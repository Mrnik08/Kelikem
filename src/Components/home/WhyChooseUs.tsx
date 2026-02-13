import { FaBolt, FaLeaf, FaShieldAlt, FaClock } from "react-icons/fa";

const points = [
  { icon: <FaBolt />, title: "High Efficiency", desc: "Maximum brightness with minimum power" },
  { icon: <FaLeaf />, title: "Energy Saving", desc: "Eco-friendly & cost-effective lighting" },
  { icon: <FaShieldAlt />, title: "Premium Quality", desc: "Strict quality control & testing" },
  { icon: <FaClock />, title: "Long Lifespan", desc: "50,000+ hours durability" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 lg:px-20 bg-gray-950">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Kalikem 
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((p, i) => (
          <div
            key={i}
            className="bg-black p-6 rounded-xl text-center border border-gray-800 hover:border-blue-500 transition"
          >
            <div className="text-3xl text-blue-500 mb-4 flex justify-center">
              {p.icon}
            </div>
            <h3 className="font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
