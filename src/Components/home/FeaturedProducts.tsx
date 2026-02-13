import { motion } from "framer-motion";
import PannelImg from "../../assets/images/Pannel.png";
import DownLightImg from "../../assets/images/DownLight.png";
import StreetImg from "../../assets/images/Street.png";
import HighBayImg from "../../assets/images/HighBay.png";

const products = [
  { name: "LED Panel Light", desc: "High efficiency & uniform brightness", img: PannelImg },
  { name: "LED Downlight", desc: "Modern design & low power", img: DownLightImg },
  { name: "LED Street Light", desc: "High lumen outdoor lighting", img: StreetImg },
  { name: "LED High Bay", desc: "Industrial grade performance", img: HighBayImg },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured LED Products
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-gray-900 rounded-xl p-6 hover:shadow-[0_0_25px_#3b82f6] transition"
          >
            <img src={p.img} alt={p.name} className="mb-4 mx-auto object-fill" />
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-sm text-gray-400 mt-2">{p.desc}</p>
            <button className="mt-4 text-blue-500 text-sm font-semibold"><a href="/products">View Details →</a>
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
