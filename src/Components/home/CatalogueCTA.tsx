import {WHATSAPP_NUMBER} from "../../utils/constants";
const CatalogueCTA = () => {
  return (
    <section className="py-20 px-6 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-20"></div>

      <div className="relative bg-gray-900 rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Download Our Complete LED Catalogue
        </h2>
        <p className="text-gray-300 mb-8">
          Explore our full range of indoor, outdoor & industrial LED lighting solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/catalogue"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Download PDF
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
            className="px-8 py-3 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition"
          >
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalogueCTA;
