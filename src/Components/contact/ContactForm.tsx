import { WHATSAPP_NUMBER } from '../../utils/constants';

const ContactForm = () => {
  // sanitize: remove any non-digit characters (handles +, spaces, dashes)
  const whatsappNumber = (WHATSAPP_NUMBER ).replace(/\D/g, "");
  const defaultMessage = "Hello! I'm interested in learning more about KALIKEM products.";

  const openWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const quickQuestions = [
    { icon: "📦", title: "Product Info", message: "I want to know more about your products" },
    { icon: "💰", title: "Pricing", message: "Can you provide pricing information?" },
    { icon: "🤝", title: "Partnership", message: "I'm interested in becoming a dealer" },
    { icon: "📋", title: "Custom Order", message: "I need a custom order quote" },
  ];

  const handleQuickChat = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Chat with us on WhatsApp
          </h2>
          <p className="text-gray-300 text-lg">
            Get instant support and answers to your questions
          </p>
        </div>

        {/* Main WhatsApp CTA */}
        <div className="glass rounded-3xl p-12 mb-12 text-center">
          <div className="text-6xl mb-6">💬</div>
          <h3 className="text-2xl font-bold mb-4">Start a Conversation</h3>
          <p className="text-gray-300 mb-8">
            Click below to open WhatsApp and chat with our team. We're here to help!
          </p>
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-glow transform hover:scale-105 inline-flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.895 10.317 1.364 2.372 3.823 3.701 6.396 3.701 2.205 0 4.308-.859 5.906-2.176l.348-.214 3.799 1.015-.983-3.231.239-.375A9.868 9.868 0 0012.051 2.75c-5.363 0-9.900 4.438-9.900 9.9 0 1.421.292 2.798.843 4.097l.261.52-1.1 3.622 3.771-1.123.52.273c1.203.659 2.738 1.139 4.205 1.139 5.363 0 9.900-4.438 9.900-9.9 0-5.462-4.437-9.9-9.9-9.9" />
            </svg>
            Chat on WhatsApp
          </button>
        </div>

        {/* Quick Message Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickQuestions.map((item, i) => (
            <button
              key={i}
              onClick={() => handleQuickChat(item.message)}
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/15 hover:shadow-2xl text-left"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-gray-200 transition">
                Tap to message
              </p>
            </button>
          ))}
        </div>

        {/* Response Time Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            ⏱️ Average response time: <span className="font-bold text-white">5-10 minutes</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
