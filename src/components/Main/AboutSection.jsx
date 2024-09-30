function AboutSection() {
  return (
    <div className="p-5 font-medium text-base">
      <div className="text-center m-10">
        <p>
          Portify adalah platform yang menghubungkan talenta digital pemula yang
          ingin membangun portofolio mereka dengan pengusaha atau organisasi
          yang membutuhkan layanan pembuatan produk digital. Kami menyediakan
          ruang bagi kedua belah pihak untuk berkolaborasi, sehingga talenta
          dapat berkembang dan usaha dapat terus tumbuh.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="rounded-md bg-blue-100 border-2 border-sky-800">
          <h1 className="p-2 text-white bg-sky-800">Upgrade Portfolio yang Profesional</h1>
          <p className="p-2">
            Dengan mengerjakan proyek-proyek nyata, kamu akan mendapatkan
            pengalaman langsung dan feedback berharga dari klien. Portofolio
            yang kamu buat akan terlihat lebih kredibel dan relevan,
            meningkatkan daya tarikmu di mata calon pemberi kerja. Kini, kamu
            bisa membangun portofolio tanpa perlu menggunakan proyek palsu atau
            klien fiktif.
          </p>
        </div>

        <div className="rounded-md bg-blue-100 border-2 border-sky-800 ">
          <h1 className="p-2 text-white bg-sky-800">
            Dukung Pengusaha UMKM dan Organisasi
          </h1>
          <p className="p-2">
            Dengan talenta-talenta digital yang siap bekerja untuk membangun
            portofolio, UMKM dan organisasi mendapatkan solusi digital dengan
            biaya terjangkau, bahkan gratis. Ini adalah kesempatan bagi
            pengusaha untuk meningkatkan bisnis mereka tanpa mengeluarkan biaya
            besar, sambil membantu pengembangan profesional para pencari kerja.
          </p>
        </div>

        <div className="rounded-md bg-blue-100 border-2 border-sky-800">
          <h1 className="p-2 text-white bg-sky-800">
            Manfaat Saling Menguntungkan
          </h1>
          <p className="p-2">
            Kolaborasi antara talenta digital dan pengusaha menciptakan hubungan
            simbiosis. Pencari kerja mendapatkan pengalaman yang meningkatkan
            kredibilitas, sementara pengusaha mendapatkan layanan berkualitas
            tanpa harus membayar mahal. Bersama-sama, mereka mendorong
            perkembangan usaha sekaligus karier.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
