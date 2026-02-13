import Navbar from "../Components/common/Navbar";
import Footer from "../Components/common/Footer";

import ContactHero from "../Components/contact/ContactHero";
import ContactInfo from "../Components/contact/ContactInfoCards";
import ContactForm from "../Components/contact/ContactForm";
import DealerSection from "../Components/contact/DealerSection";
import MapEmbed from "../Components/contact/MapEmbed";
import CTA from "../Components/contact/CTA";

const Contact = () => {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      <Navbar />

      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <DealerSection />
      <MapEmbed />
      <CTA />

      <Footer />
    </div>
  );
};

export default Contact;
