import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";
import ProductHero from "../Components/products/ProductHero";
import ProductCategories from "../Components/products/ProductCategory";
import ProductGrid from "../Components/products/ProductGrid";
import CatalogueCTA from "../Components/products/CatalogueCTA";

const Products = () => {
  return (
    <div className="bg-black text-white">

        {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[520px] h-[520px] bg-blue-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-cyan-400/10 blur-[160px] rounded-full" />
      </div>
      
      <Navbar />
      <ProductHero />
      <ProductCategories />
      <ProductGrid />
      <CatalogueCTA />
      <Footer />
    </div>
  );
};

export default Products;
