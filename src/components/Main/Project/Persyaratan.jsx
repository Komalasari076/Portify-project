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
                  &#x2713; Mengunggah sampel proyek atau karya yang relevan
                  dengan bidang keahlian
                </li>
                <li>
                  &#x2713; Berkomitmen untuk menyelesaikan proyek tepat waktu
                </li>
                <li>
                  &#x2713; Bersedia menerima dan merespon feedback dari owner
                  atau klien
                </li>
                <li>
                  &#x2713; Menjaga komunikasi yang baik selama proyek
                  berlangsung
                </li>
                <li>
                  &#x2713; Menyepakati syarat dan ketentuan yang berlaku di
                  platform
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
                  &#x2713; Melakukan verifikasi usaha atau komunitas melalui
                  platform
                </li>
                <li>
                  &#x2713; Usaha atau komunitas masih dalam tahap awal atau
                  sedang berkembang
                </li>
                {/* <li>
                  &#x2713; Jika usaha dan komunitas sudah berkembang atau
                  profesional, akan ada fitur kolaborasi antar talent untuk
                  bekerja sama pada proyek yang lebih kompleks dan ini berbayar.
                </li> */}
                <li>
                  &#x2713; Proyek yang diajukan sebaiknya sederhana dan tidak
                  terlalu rumit
                </li>
                <li>
                  &#x2713; Menyiapkan deskripsi proyek yang jelas dan terperinci
                </li>
                <li>
                  &#x2713; Memberikan feedback yang jujur dan konstruktif
                  setelah proyek selesai
                </li>
                <li>
                  &#x2713; Memastikan komunikasi terbuka dan mendukung
                  kolaborasi dengan talent
                </li>
                <li>
                  &#x2713; Menyepakati syarat dan ketentuan yang berlaku di
                  platform
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
