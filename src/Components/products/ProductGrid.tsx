
import StreetImage from "../../assets/images/Street.png";
import Highmast from "../../assets/images/HightMast.jpeg";
import Decorative from "../../assets/images/Decorative.jpeg";
import DesignerPole from "../../assets/images/DesignerPole.jpeg";
import Solar from "../../assets/images/SolarLight.jpeg";
import PostTop from "../../assets/images/PostTop.jpeg"
import Hanging from "../../assets/images/HangingLight.jpeg";
import Walllight from "../../assets/images/WallLight.jpeg";
import FloodLight from "../../assets/images/FloodLight.jpeg";
import Bracket from "../../assets/images/Bracket.jpeg";

import outdoorgarden from "../../assets/images/outdoorgarden.jpeg";
import OutdoorBollard from "../../assets/images/OutdoorBollard.jpeg";
import LedStreetLight from "../../assets/images/LedStreet.jpeg"

// import CommercialImage from "../../assets/images/commercial.png";
import PTZImage from "../../assets/images/ptz.png";

const categoryImageMap: Record<string, string> = {
  "Indoor Lighting": Hanging,
  "Outdoor Lighting": LedStreetLight,
  "High Power Lighting": FloodLight,
  "Infrastructure Lighting": Highmast,
  "Architectural": Walllight,
   "Lighting Poles": DesignerPole,
    "Urban Infrastructure": Decorative,
  "Landscape Lighting": DesignerPole,
  "Renewable Energy": Solar,
  "Garden Lighting": PostTop,
  "Smart Lighting": StreetImage,
  "Pathway Lighting": OutdoorBollard,
  "General Lighting": outdoorgarden,
  "Accessories": Bracket,
  "Security": PTZImage,
};

const products = [
  {
    name: "LED Street Light",
    category: "Outdoor Lighting",
  },
  {
    name: "Flood Light",
    category: "High Power Lighting",
  },
  {
    name: "High Mast Luminaire",
    category: "Infrastructure Lighting",
  },
  {
    name: "Architectural Wall Light",
    category: "Architectural",
  },
  {
    name: "Octagonal Lighting Pole",
    category: "Lighting Poles",
  },
  {
    name: "Decorative Pole",
    category: "Urban Infrastructure",
  },
  {
    name: "Designer Pole Light",
    category: "Landscape Lighting",
  },
  {
    name: "Solar Light Energy System",
    category: "Renewable Energy",
  },
  {
    name: "Post Top Light",
    category: "Garden Lighting",
  },
  {
    name: "Street Light with Smart Control",
    category: "Smart Lighting",
  },
  {
    name: "Outdoor Bollard Light",
    category: "Pathway Lighting",
  },
  {
    name: "Outdoor Lights",
    category: "General Lighting",
  },
  
  {
    name: "Hanging Light",
    category: "Indoor Lighting",
  },
  {
    name:"Bracket",
    category: "Accessories",
  },
  { 
    name:"CCTV",
    category: "Security",
  }
];

const ProductGrid = () => {
  return (
    <section className="px-6 lg:px-24 py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="glass glass-hover rounded-2xl p-6 flex flex-col justify-between"
          >
            {/* Image Placeholder */}
            <div className="h-40 rounded-xl bg-white/10 mb-5 flex items-center justify-center text-gray-500 text-sm overflow-hidden">
              <img 
                src={categoryImageMap[product.category] } 
                alt={product.name} 
                className="w-full h-full object-fill"
              />
            </div>

            {/* Info */}
            <div>
              <h3 className="font-semibold text-lg mb-1">
                {product.name}
              </h3>
              <p className="text-sm text-gray-400">
                {product.category}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex gap-3">
              <a
                href="/contact"
                className="flex-1 text-center py-2 glass rounded-lg text-sm hover:text-blue-400 transition"
              >
                Enquire
              </a>
              <a
                href="/catalogue"
                className="flex-1 text-center py-2 bg-blue-600 rounded-lg text-sm hover:shadow-glow transition"
              >
                Catalogue
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
