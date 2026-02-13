import { useState } from "react";
import {WHATSAPP_NUMBER} from "../../utils/constants"

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productInterest: "",
    quantity: "",
    message: "",
  });

  const whatsappNumber = WHATSAPP_NUMBER.replace(/\D/g, ""); // Sanitize number to digits only

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const quoteText = `Hi! I'm requesting a quote:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Product Interest: ${formData.productInterest}
Quantity: ${formData.quantity}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(quoteText);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <section className="py-16 px-6 lg:px-24">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="Your company name"
              />
            </div>

            {/* Product Interest */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Product Interest *
              </label>
              <select
                name="productInterest"
                value={formData.productInterest}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-dark focus:outline-none focus:border-blue-500"
              >
                <option value="" disabled>
                  ---Project Type---
                </option>
                <option className="text-black">Indoor Lighting</option>
                <option className="text-black">Street Lighting</option>
                <option className="text-black">Architectural Lighting</option>
                <option className="text-black">Industrial Lighting</option>
                <option className="text-black">High Mast Lighting</option>
                <option className="text-black">Lighting Poles</option>
                <option className="text-black">CCTV Solutions</option>
                <option className="text-black">Accessories</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Estimated Quantity
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                placeholder="e.g., 500 kg/month"
              />
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2">
              Additional Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
              rows={5}
              placeholder="Tell us more about your requirements..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:shadow-glow transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.364-3.905 6.75-1.895 10.317 1.364 2.372 3.823 3.701 6.396 3.701 2.205 0 4.308-.859 5.906-2.176l.348-.214 3.799 1.015-.983-3.231.239-.375A9.868 9.868 0 0012.051 2.75c-5.363 0-9.900 4.438-9.900 9.9 0 1.421.292 2.798.843 4.097l.261.52-1.1 3.622 3.771-1.123.52.273c1.203.659 2.738 1.139 4.205 1.139 5.363 0 9.900-4.438 9.900-9.9 0-5.462-4.437-9.9-9.9-9.9" />
            </svg>
            Send Quote Request on WhatsApp
          </button>

          <p className="text-center text-gray-400 text-sm mt-4">
            * Required fields. We'll respond within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
