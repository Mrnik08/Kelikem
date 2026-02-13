const ContactInfo = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        <div className="glass glass-hover rounded-2xl p-8">
          <h3 className="font-semibold mb-3">Office Address</h3>
          <p className="text-gray-400 text-sm">
            A-162, GR Garden 2, Chipiyana Buzurg,  
            Ghaziabad – 201009
          </p>
        </div>

        <div className="glass glass-hover rounded-2xl p-8">
          <h3 className="font-semibold mb-3">Manufacturing Unit</h3>
          <p className="text-gray-400 text-sm">
            A-129, Sec-A4, Tronica City,  
            Loni Industrial Area, Ghaziabad – 201103
          </p>
        </div>

        <div className="glass glass-hover rounded-2xl p-8">
          <h3 className="font-semibold mb-3">Contact Details</h3>
          <p className="text-gray-400 text-sm">
            📧 humanresource@kalikem.com <br />
            🌐 www.kalikementerprises.com
          </p>
        </div>

      </div>
    </section>
  );
};

export default ContactInfo;
