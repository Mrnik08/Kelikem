import {WHATSAPP_NUMBER} from '../../utils/constants';
const DealerSection = () => {

  const whatsappNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  const dealershipMessage = "I'm interested in becoming a dealer or distributor for Kalikem products";

  const handleDealershipEnquiry = () => {
    const encodedMessage = encodeURIComponent(dealershipMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="glass rounded-3xl p-14 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Dealer & Distributor Enquiries
        </h2>

        <p className="text-gray-400 mb-8">
          Interested in becoming an authorized Kalikem partner?
        </p>

        <button 
          onClick={handleDealershipEnquiry}
          className="px-10 py-4 glass glass-hover rounded-xl bg-green-500 hover:bg-green-600 font-bold text-white transition-all duration-300 hover:shadow-glow">
          Apply for Dealership
        </button>
      </div>
    </section>
  );
};

export default DealerSection;
