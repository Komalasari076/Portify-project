function HeroSection() {
  return (
    <div className="flex justify-between items-center font-medium text-base p-5 gap-x-32">
      <div>
        <div className="mb-10 text-sky-800 text-lg">
          <h1>Empowering Portfolios, Enabling Businesses</h1>
        </div>

        <div className="mb-6">
          <p>
            Mulailah perjalananmu sebagai talenta digital dengan mengerjakan
            proyek nyata yang memperkuat portofolio sekaligus mendukung bisnis
            lokal. Dapatkan pengalaman langsung, feedback berharga, dan
            kesempatan untuk membuat dampak nyata. Bergabunglah sekarang, bantu
            UMKM dan organisasi berkembang, sambil mengembangkan kariermu!
          </p>
          <p>
            Ingin tahu caranya? Lihat panduan lengkap dan persyaratan untuk
            memulai.
          </p>
        </div>

        <div>
          <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300">
            Persyaratan dan Panduan
          </button>
        </div>
      </div>

      <div className="w-full h-96">
        <span></span>
      </div>
    </div>
  );
}

export default HeroSection;
