import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function HeroSection() {
  return (
    <div className="flex justify-beetween items-center gap-x-4 font-medium px-5 py-10 min-h-full">
      <div className="w-3/5">
        <div className="mb-10 text-sky-800 text-lg">
          <h1>Empowering Portfolios, Enabling Businesses</h1>
        </div>

        <div className="mb-6">
          <p>
            Jadilah talenta digital dengan kesempatan mengerjakan proyek-proyek
            nyata yang tidak hanya memperkuat portofoliomu, tetapi juga membantu
            bisnis lokal dan komunitas berkembang. Dapatkan pengalaman langsung,
            feedback berharga, dan buatlah dampak nyata melalui kontribusimu.
            Ingin tahu caranya? Lihat panduan lengkap dan persyaratan untuk
            memulai
          </p>
        </div>

        <div>
          <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300 mr-4">
            <Link to="/panduan">Panduan</Link>
          </button>
          <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300 ">
            <Link to="/persyaratan">Persyaratan</Link>
          </button>
        </div>
      </div>

      <div className="w-2/5">
        <img src={logo} alt="Logo Portify" />
      </div>
    </div>
  );
}

export default HeroSection;
