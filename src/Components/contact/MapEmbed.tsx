const MapEmbed = () => {
  return (
    <section className="py-24 px-6 lg:px-24">
      <div className="glass rounded-3xl overflow-hidden max-w-7xl mx-auto h-[400px]">
        <iframe
          title="Kalikem Location"
          src="https://www.google.com/maps?q=Ghaziabad&output=embed"
          className="w-full h-full border-none"
        />
      </div>
    </section>
  );
};

export default MapEmbed;
