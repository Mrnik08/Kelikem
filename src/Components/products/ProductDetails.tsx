const ProductDetail = () => {
  return (
    <div className="bg-black text-white px-6 lg:px-24 py-24">
      
      {/* Top Section */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="glass rounded-3xl h-[400px]" />
        
        <div>
          <h1 className="text-4xl font-bold mb-4">
            LED Street Light
          </h1>

          <p className="text-gray-300 mb-6">
            High-efficiency LED street luminaire designed for urban
            and highway applications with superior optical control.
          </p>

          <button className="px-8 py-4 bg-blue-600 rounded-xl">
            Send Enquiry
          </button>
        </div>
      </div>

      {/* Specs */}
      <div className="mt-20 grid lg:grid-cols-2 gap-10">
        <div className="glass rounded-2xl p-8">
          <h3 className="font-semibold mb-4">Technical Specifications</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Wattage: 30W – 150W</li>
            <li>Ingress Protection: IP66</li>
            <li>Housing: Die-cast Aluminium</li>
            <li>Operating Voltage: 90–300V AC</li>
            <li>Surge Protection: 10KV</li>
          </ul>
        </div>

        <div className="glass rounded-2xl p-8">
          <h3 className="font-semibold mb-4">Applications</h3>
          <ul className="text-gray-400 space-y-2 text-sm">
            <li>Urban Roads</li>
            <li>Highways</li>
            <li>Industrial Zones</li>
            <li>Commercial Areas</li>
          </ul>
        </div>
      </div>

      {/* Downloads */}
      <div className="mt-16 glass rounded-2xl p-8 text-center">
        <h3 className="font-semibold mb-4">
          Product Documents
        </h3>
        <button className="glass glass-hover px-6 py-3 rounded-xl">
          Download Datasheet
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
