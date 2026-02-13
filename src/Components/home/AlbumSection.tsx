import { motion } from "framer-motion";
import { useState } from "react";

// Dynamically import images from src/assets/KalikemPic using Vite's glob
// Supported extensions: png, jpg, jpeg, webp
const importImages = () => {
  try {
    const modules = import.meta.glob('/src/assets/KalikemPic/*.{png,jpg,jpeg,webp}', { eager: true }) as Record<string, { default: string }>;
    const imgs = Object.keys(modules).map((path) => ({
      src: modules[path].default,
      alt: `KALIKEM Project ${path.split('/').pop()}`,
    }));
    // Sort for consistent ordering
    imgs.sort((a, b) => a.src.localeCompare(b.src));
    return imgs;
  } catch (e) {
    // Fallback to a small static set if import fails
    return [
      { src: '/images/Street.png', alt: 'KALIKEM Project 1' },
      { src: '/images/DownLight.png', alt: 'KALIKEM Project 2' },
    ];
  }
};

const images = importImages();

const AlbumSection = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="relative py-24 px-6 lg:px-20 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm tracking-widest text-gray-300 mb-4">
            PROJECT GALLERY
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-blue-500">Work in Action</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our installations, lighting projects, and security solutions
            delivered across residential, commercial, and industrial spaces.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
              onClick={() => setActiveImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-56 object-fill transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setActiveImage(null)}
        >
          <motion.img
            src={activeImage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default AlbumSection;
