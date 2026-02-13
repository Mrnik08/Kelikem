import { motion } from "framer-motion";

// Import image modules from src/assets/images and build a filename->url map
const modules = import.meta.glob("../../assets/images/*.{png,jpg,jpeg,svg}", { eager: true }) as Record<string, { default: string }>;
const imagesMap: Record<string, string> = Object.keys(modules).reduce((acc, path) => {
  const name = path.split("/").pop()?.toLowerCase() || path;
  acc[name] = (modules[path] as any).default;
  return acc;
}, {} as Record<string, string>);

const cctvProducts = [
  {
    title: "Dome Camera",
    desc: "Indoor & outdoor surveillance with night vision clarity",
    image: imagesMap["indoor.png"] || "/images/indoor.png",
  },
  {
    title: "Bullet Camera",
    desc: "Long-range outdoor monitoring with weather resistance",
    image: imagesMap["bullet.png"] || "/images/bullet.png",
  },
  {
    title: "PTZ Camera",
    desc: "360° pan-tilt-zoom for large area coverage",
    image: imagesMap["ptz.png"] || "/images/ptz.png",
  },
  {
    title: "Wall Mount Camera",
    desc: "High-definition security for commercial spaces",
    image: imagesMap["commercial.png"] || "/images/commercial.png",
  },
];

const CCTVSection = () => {
  return (
    <section className="relative py-24 px-6 lg:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm tracking-wider mb-4">
            SMART SURVEILLANCE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced CCTV <span className="text-blue-500">Security Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            High-performance CCTV cameras engineered for reliability, clarity,
            and intelligent surveillance across residential, commercial, and
            industrial environments.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cctvProducts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="relative mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full  object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-300" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{item.desc}</p>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"><a href="/getquote">Get Quote</a>
                
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
       
      </div>
    </section>
  );
};

export default CCTVSection;
