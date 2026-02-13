import Navbar from "../Components/common/Navbar";
import Hero from "../Components/home/Hero";
import Categories from "../Components/home/Categories";
import FeaturedProducts from "../Components/home/FeaturedProducts";
import Testimonials from "../Components/home/Testimonials";
import Footer from "../Components/common/Footer";
import CatalogueCTA from "../Components/home/CatalogueCTA";
import WhyChooseUs from "../Components/home/WhyChooseUs";
import CCTVSection from "../Components/home/CCTVSection";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#05070a] text-white overflow-hidden">

      {/* PREMIUM GLASS BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">

        {/* Top glow */}
        <div className="absolute -top-40 left-1/3 w-[520px] h-130 
          bg-blue-500/10 rounded-full blur-[140px]" />

        {/* Right glow */}
        <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] 
          bg-cyan-400/10 rounded-full blur-[140px]" />

        {/* Bottom glow */}
        <div className="absolute -bottom-40 left-1/4 w-[520px] h-[520px] 
          bg-indigo-500/10 rounded-full blur-[160px]" />

        {/* Subtle noise layer (luxury feel) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Categories />
        <FeaturedProducts />
        <CCTVSection />
        <WhyChooseUs />
        <CatalogueCTA />
        <Testimonials />
        <Footer />
      </div>

    </div>
  );
};

export default Home;
