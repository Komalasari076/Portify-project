function AboutSection() {
  return (
    <div className="p-5 font-medium h-69">
      <div className="text-center bg-blue-100 rounded-md p-8">
        <p>
          Portify adalah platform yang menghubungkan talenta digital pemula
          dengan pengusaha atau komunitas yang membutuhkan produk digital. Di
          sini, kedua belah pihak bisa berkolaborasi secara gratis, memberikan
          kesempatan bagi talent untuk membangun portofolio, sementara pengusaha
          dan komunitas kecil mendapat dukungan dalam mengembangkan usahanya.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-16 mt-16">
        <div className="rounded-md bg-blue-100 border-2 border-sky-800">
          <h1 className="p-2 text-white bg-sky-800">
            Upgrade Portofolio Profesional
          </h1>
          <p className="p-2">
            Dapatkan pengalaman nyata dan feedback langsung untuk membangun
            portofolio yang kredibel, menarik perhatian perusahaan tanpa
            menggunakan fake project.
          </p>
        </div>

        <div className="rounded-md bg-blue-100 border-2 border-sky-800">
          <h1 className="p-2 text-white bg-sky-800">
            Dukung UMKM dan komunitas
          </h1>
          <p className="p-2">
            Bantu UMKM dan komunitas kecil mendapatkan solusi digital
            berkualitas tanpa biaya besar, sambil memberikan talent kesempatan
            untuk berkembang.
          </p>
        </div>

        <div className="rounded-md bg-blue-100 border-2 border-sky-800">
          <h1 className="p-2 text-white bg-sky-800">
            Kolaborasi yang Saling Menguntungkan
          </h1>
          <p className="p-2">
            Kolaborasi ini memberi manfaat ganda. talent dapat mengembangkan
            kariernya, sementara pengusaha dan komunitas kecil menerima dukungan
            digital tanpa biaya tinggi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
