import { useState } from "react";

function Persyaratan() {
  const [active, setActive] = useState("talent");

  return (
    <div className=" min-h-screen">
      <div className="py-10 px-5 font-medium">
        <div>
          <div className="flex justify-center text-lg font-bold mb-10">
            <button
              onClick={() => setActive("talent")}
              className={` mr-10 ${
                active === "talent"
                  ? "border-b-2 border-sky-800"
                  : "border-gray-300"
              }`}
            >
              Persyaratan Talent
            </button>

            <button
              onClick={() => setActive("onwer")}
              className={` ${
                active === "onwer"
                  ? "border-b-2 border-sky-800"
                  : "border-gray-300"
              }`}
            >
              Persyaratan Onwer
            </button>
          </div>
        </div>

        <div>
          {active === "talent" && (
            <div>
              <ol>
                <li>
                  1. Mengunggah sampel proyek atau karya yang relevan dengan
                  bidang keahlian
                </li>
                <li>2. Berkomitmen untuk menyelesaikan proyek tepat waktu</li>
                <li>
                  3. Bersedia menerima dan merespon feedback dari owner atau
                  klien
                </li>
                <li>
                  4. Menjaga komunikasi yang baik selama proyek berlangsung
                </li>
                <li>
                  5. Menyepakati syarat dan ketentuan yang berlaku di platform
                </li>
              </ol>
            </div>
          )}
        </div>

        <div>
          {active === "onwer" && (
            <div>
              <ul>
                <li>
                  1. Melakukan verifikasi usaha atau komunitas melalui platform
                </li>
                <li>
                  2. Usaha atau komunitas masih dalam tahap awal atau sedang
                  berkembang
                </li>
                <li>
                  3. Jika usaha dan komunitas sudah berkembang atau profesional, akan ada fitur
                  kolaborasi antar talent untuk bekerja sama pada proyek yang
                  lebih kompleks dan ini berbayar.
                </li>
                <li>
                  4. Proyek yang diajukan sebaiknya sederhana dan tidak terlalu
                  rumit
                </li>
                <li>5. Menyiapkan deskripsi proyek yang jelas dan terperinci</li>
                <li>
                  6. Memberikan feedback yang jujur dan konstruktif setelah proyek
                  selesai
                </li>
                <li>
                  7. Memastikan komunikasi terbuka dan mendukung kolaborasi dengan
                  talent
                </li>
                <li>
                  8. Menyepakati syarat dan ketentuan yang berlaku di platform
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Persyaratan;
