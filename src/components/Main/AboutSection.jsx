function AboutSection() {
  return (
    <div className="p-5 font-medium text-base h-69">
      <div className="text-center m-10">
        <p>
          Portify adalah platform yang menghubungkan talenta digital pemula
          dengan pengusaha atau organisasi yang membutuhkan produk digital. Di
          sini, kedua belah pihak bisa berkolaborasi secara gratis, memberikan
          kesempatan bagi talenta untuk membangun portofolio mereka, sementara
          pengusaha dan organisasi mendapat dukungan dalam mengembangkan usaha
          mereka. Bersama, kita tumbuh melalui proyek-proyek nyata yang saling
          menguntungkan
        </p>
      </div>

      <div className="grid grid-cols-3 gap-16 my-10">
        <div className="rounded-md bg-blue-100 border-2 border-sky-800">
          <h1 className="p-2 text-white bg-sky-800">
            Tingkatkan Portofolio Profesional
          </h1>
          <p className="p-2">
            Dapatkan pengalaman nyata dan feedback langsung untuk membangun
            portofolio yang kredibel, menarik perhatian perusahaan tanpa
            menggunakan proyek fiktif.
          </p>
        </div>

        <div className="rounded-md bg-blue-100 border-2 border-sky-800">
          <h1 className="p-2 text-white bg-sky-800">
            Dukung UMKM dan Organisasi
          </h1>
          <p className="p-2">
            Bantu UMKM dan organisasi mendapatkan solusi digital berkualitas
            tanpa biaya besar, sambil memberikan talenta kesempatan untuk
            berkembang.
          </p>
        </div>

        <div className="rounded-md bg-blue-100 border-2 border-sky-800">
          <h1 className="p-2 text-white bg-sky-800">
            Kolaborasi yang Saling Menguntungkan
          </h1>
          <p className="p-2">
            Kolaborasi ini memberi manfaat ganda: talenta mengembangkan karier,
            sementara pengusaha menerima dukungan digital tanpa biaya tinggi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
