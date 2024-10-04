import { useState } from "react";

function Panduan() {
  const [active, setActive] = useState("talent");

  return (
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
            Panduan Talent
          </button>

          <button
            onClick={() => setActive("onwer")}
            className={` ${
              active === "onwer"
                ? "border-b-2 border-sky-800"
                : "border-gray-300"
            }`}
          >
            Panduan Onwer
          </button>
        </div>
      </div>

      <div>
        {active === "talent" && (
          <div>
            <div className="p-2">
              <h1>1. Pilih Proyek</h1>
              <p className="mb-3">
                Di halaman daftar proyek, kamu dapat menjelajahi berbagai proyek
                yang tersedia. Pastikan untuk membaca deskripsi proyek dengan
                cermat untuk memahami kebutuhan pengusaha dan memastikan bahwa
                kamu memiliki keterampilan yang sesuai.
              </p>

              <h1>2. Buat Akun dan Login</h1>
              <p className="mb-3">
                Setelah menemukan proyek yang cocok, kamu perlu membuat akun dan
                login untuk mengajukan diri dalam proyek tersebut. Ini
                diperlukan untuk mengakses form pengajuan proyek. Kamu juga akan
                bisa mengakses dahsboard untuk melihat riwayat proyek yang
                sedang kamu kerjakan.
              </p>

              <h1>3. Isi Form Pengajuan</h1>
              <p className="mb-3">
                Setelah login, klik "Kerjakan Proyek" untuk diarahkan ke form
                pengajuan proyek yang telah dibuat oleh pengusaha. Di sini, kamu
                akan diminta mengisi informasi tentang diri kamu dan mengunggah
                sampel proyek atau karya yang relevan. Jika belum pernah membuat
                portofolio sebelumnya, jangan khawatir—unggah saja karya terbaik
                yang menurutmu bisa menunjukkan kemampuanmu di bidang yang
                dibutuhkan.
              </p>

              <h1>4. Seleksi oleh Pengusaha atau organisasi</h1>
              <p className="mb-3">
                Pengusaha atau organisasi akan meninjau form yang sudah kamu isi
                dan memilih satu talent terbaik yang paling cocok untuk proyek
                mereka. Jika kamu terpilih, kamu akan menerima notifikasi
                melalui email.
              </p>

              <h1>5. Konfirmasi dan Mulai Proyek</h1>
              <p className="mb-3">
                Jika kamu terpilih, pengusaha mungkin akan mengundangmu untuk
                wawancara singkat atau diskusi terkait proyek sebelum pengerjaan
                dimulai. Setelah semuanya disepakati, kamu bisa langsung mulai
                mengerjakan proyek.
              </p>

              <h1>6. Bekerja dengan Profesionalisme</h1>
              <p className="mb-3">
                Pastikan untuk menyelesaikan proyek dengan dedikasi tinggi dan
                etika kerja yang baik. Jaga komunikasi yang terbuka dan
                profesional dengan pengusaha agar proyek berjalan lancar.
              </p>

              <h1>7. Feedback dari Pengusaha</h1>
              <p className="mb-3">
                Setelah proyek selesai, kamu akan menerima umpan balik yang
                jujur dan membangun dari pengusaha. Ini akan sangat berguna
                untuk pengembangan dirimu dan memperkaya portofolio ke depannya.
              </p>
            </div>
          </div>
        )}
      </div>

      <div>
        {active === "onwer" && (
          <div>
            <div className="p-2">
              <h1>1. Buat Akun dan Login</h1>
              <p className="mb-3">
                Pengusaha atau organisasi diwajibkan untuk membuat akun dan
                login ke platform jika ingin mengajukan proyek. Setelah login,
                kamu akan diarahkan ke dashboard di mana kamu bisa melanjutkan
                proses verifikasi.
              </p>

              <h1>2. Verifikasi Akun</h1>
              <p className="mb-3">
                Untuk bisa mengajukan proyek, kamu perlu melakukan verifikasi
                akun dengan mengisi informasi bisnis yang jelas dan legal
                melalui form verifikasi di dashboard. Proses ini memerlukan
                pembayaran biaya admin sebesar Rp 5.000 yang tidak dapat
                dikembalikan. Hanya akun yang sudah diverifikasi yang dapat
                mengajukan proyek.
              </p>

              <h1>3. Konfirmasi via Email</h1>
              <p className="mb-3">
                Jika verifikasi berhasil, kamu akan menerima email konfirmasi
                yang berisi panduan lengkap untuk mengajukan proyek, termasuk
                instruksi tentang cara membuat Google Form untuk rekrutmen
                talent, yang nantinya perlu kamu lampirkan di form pengajuan
                proyek. Di dalam email itu juga akan ada link untuk mengakses
                form pengajuan proyek.
              </p>

              <h1>4. Ajukan Proyek</h1>
              <p className="mb-3">
                Isi form pengajuan proyek dengan data yang jelas dan detail,
                termasuk deskripsi proyek dan link ke form rekrutmen talent yang
                telah kamu buat. Pastikan untuk menyertakan informasi yang
                memudahkan talent memahami kebutuhan proyek.
              </p>

              <h1>5. Proyek Tampil di Daftar Proyek</h1>
              <p className="mb-3">
                Setelah form pengajuan proyek dikirimkan, proyekmu akan muncul
                di halaman daftar proyek yang dapat diakses oleh umum, termasuk
                oleh talent yang belum login.
              </p>

              <h1>6. Seleksi Talent</h1>
              <p className="mb-3">
                Setelah talent mengisi form pengajuan untuk proyekmu, kamu bisa
                menyeleksi dan memilih satu talent terbaik untuk bekerja pada
                proyek tersebut. Proses ini bisa melibatkan wawancara atau
                diskusi, tergantung kebutuhanmu.
              </p>

              <h1>7. Feedback untuk Talent</h1>
              <p className="mb-3">
                Setelah proyek selesai, jangan lupa untuk memberikan feedback
                yang jujur dan membangun kepada talent yang telah bekerja. Ini
                akan membantu mereka mengembangkan keterampilan lebih jauh dan
                juga membangun hubungan baik dengan talent di masa depan.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Panduan;
