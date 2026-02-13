import Navbar from '../Components/common/Navbar'
import AlbumSection from '../Components/home/AlbumSection'
import Footer from '../Components/common/Footer'

const Album = () => {
  return (
    <div className="relative min-h-screen bg-[#05070a] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[520px] h-[520px] bg-blue-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-cyan-400/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <AlbumSection />
        <Footer />
      </div>
    </div>
  );
};

export default Album;
