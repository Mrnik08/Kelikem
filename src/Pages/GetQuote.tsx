import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";

import QuoteHero from "../Components/quote/QuoteHero";
import QuoteForm from "../Components/quote/QuoteForm";
import QuoteTrust from "../Components/quote/QuoteTrust";

const GetQuote = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <Navbar />

      <QuoteHero />
      <QuoteForm />
      <QuoteTrust />

      <Footer />
    </div>
  );
};

export default GetQuote;
