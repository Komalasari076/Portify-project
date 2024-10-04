import { Link } from "react-router-dom";
import portofolio from "../../../assets/portfolio.png";

function CallToAction() {
  return (
    <div className="flex justify-between items-center font-medium text-base px-5 py-10 gap-x-32 min-h-full">
      <div className="w-3/5">
        <h1 className="text-lg">Bantu Usaha Lokal dan Bangun Portofoliomu!</h1>
        <br />
        <p className="mb-6">
          Mulail perjalananmu sebagai talenta digital dengan mengerjakan
          proyek-proyek nyata yang memberikan dampak langsung. Selain membangun
          portofolio profesional, kamu juga berkontribusi dalam mengembangkan
          UMKM dan komunitas kecil dengan solusi digital yang mereka butuhkan.
          Gabung Sekarang dan tunjukkan keterampilanmu sambil menciptakan
          perubahan positif!
        </p>

        <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300">
          <Link to="/project">Lihat Project</Link>
        </button>
      </div>

      <div className="w-2/5">
        <img src={portofolio} alt="Portfolio" />
      </div>
    </div>
  );
}

export default CallToAction;
