import portofolio from "../../assets/Desain tanpa judul.png";

function CallToAction() {
  return (
    <div className="flex justify-between items-center font-medium text-base p-5 gap-x-32 h-96">
      <div>
        <h1 className="text-lg">Bantu Usaha Lokal dan Bangun Portofoliomu!</h1><br />
        <p className="mb-6">
          Mulail perjalananmu sebagai talenta digital dengan mengerjakan
          proyek-proyek nyata yang memberikan dampak langsung. Selain membangun
          portofolio profesional, kamu juga berkontribusi dalam mengembangkan
          UMKM dan komunitas dengan solusi digital yang mereka butuhkan. Gabung
          Sekarang dan tunjukkan keterampilanmu sambil menciptakan perubahan
          positif!
        </p>

        <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300">Lihat Proyek</button>
      </div>

      <div className="w-full">
        <img src={portofolio} alt="" />
      </div>
    </div>
  );
}

export default CallToAction;
