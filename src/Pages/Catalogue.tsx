import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Catalogue = () => {
  const [pdfUrl] = useState("/catalogue/KALIKEM-Catalogue.pdf");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Auto-open PDF in a new tab when page loads
    const openPDF = () => {
      try {
        window.open(pdfUrl, "_blank");
        toast.success("Catalogue opened in new tab");
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to open catalogue");
        setIsLoading(false);
      }
    };

    // Small delay to ensure smooth page load
    const timer = setTimeout(openPDF, 500);
    return () => clearTimeout(timer);
  }, [pdfUrl]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Kalikem _CATALOGUE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Catalogue downloading...");
  };

  const handleView = () => {
    window.open(pdfUrl, "_blank");
    toast.success("Opening catalogue...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 py-20 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl text-blue-400 font-bold mb-4">KALIKEM Catalogue</h1>
          <p className="text-gray-300 text-lg">
            Browse our complete range of premium LED lighting solutions
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 mb-8">
          <div className="text-center mb-8">
            <div className="text-7xl mb-6">📄</div>
            {isLoading ? (
              <div>
                <p className="text-xl text-gray-300 mb-4">Opening your catalogue...</p>
                <div className="inline-block animate-spin">
                  <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold mb-2 text-yellow-300">Complete Product Guide</h2>
                <p className="text-gray-300 text-lg">
                  44-page comprehensive catalogue featuring all our LED lighting products
                </p>
              </div>
            )}
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-8 border-y border-white/10">
            <div className="text-center">
              <div className="text-3xl mb-2">📋</div>
              <p className="text-sm text-gray-300">44 Pages</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💡</div>
              <p className="text-sm text-gray-300">Complete Range</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <p className="text-sm text-gray-300">Specs & Pricing</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleView}
              className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              📖 View Online
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105"
            >
              ⬇️ Download PDF
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">📋 What's Inside</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ LED Panel Lights</li>
              <li>✓ LED Downlights</li>
              <li>✓ LED Street Lights</li>
              <li>✓ LED High Bay Lights</li>
              <li>✓ Technical Specifications</li>
              <li>✓ Pricing Information</li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">💡 Why Download</h3>
            <ul className="space-y-2 text-gray-300">
              <li>✓ Offline access anytime</li>
              <li>✓ Easy to share with team</li>
              <li>✓ Quick reference guide</li>
              <li>✓ Complete product range</li>
              <li>✓ Updated specifications</li>
              <li>✓ Professional format</li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 text-center bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8">
           <h3 className="text-3xl font-bold mb-4">
            Need help selecting the right product?
          </h3>
          <p className="text-gray-400 mb-8">
            Our team will assist you with specifications, quantities, and
            application guidance.
          </p>
          <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:shadow-lg transition-all duration-300"> <a href="/getquote">💬 Request a Quote</a>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
