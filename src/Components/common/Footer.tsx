const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-6 lg:px-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">
            KALI<span className="text-blue-500">KEM</span>
          </h3>
          <p className="text-sm text-gray-400">
            Premium LED lighting solutions for modern homes, businesses and industries.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/catalogue">Catalogue</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Products</h4>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Indoor Lighting</li>
            <li>Outdoor Lighting</li>
            <li>Commercial Lighting</li>
            <li>Industrial Lighting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-400">
            📞 +91 9220902078 <br />
            ✉ humanresource@kalikem.com
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Kalikem . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
