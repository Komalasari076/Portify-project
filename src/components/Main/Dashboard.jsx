import { useState } from "react";

function Dashboard() {
  const [active, setActive] = useState("talent");

  const talentProject = [
    { id: 1, projectName: "Website development" },
    { id: 2, projectName: "Mobile App Design" },
  ];

  const onwerProject = [
    { id: 1, projectName: "Marketing Strategi" },
    { id: 2, projectName: "Brand Copywriting" },
  ];

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <h1>Dashboard</h1>
        <div>
          <button className="py-2 px-4 mx-2 rounded-lg bg-blue-500 text-white ">
            Verifikasi
          </button>
          <button className="py-2 px-4 mx-2 rounded-lg bg-blue-500 text-white">
            Ajukan project
          </button>
        </div>
      </div>

      <div className="text-center my-20">
        <p>
          Di sini, kamu bisa melihat riwayat proyekmu, baik proyek yang sedang
          kamu kerjakan atau yang kamu ajukan ke orang lain. Jangan lupa untuk
          membaca panduan dan persyaratan terlebih dahulu sebelum mengerjakan
          proyek atau verifikasi untuk mengajukan proyek.
        </p>
      </div>

      <div className="border-b-2 border-gray-300 ">
        <button
          onClick={() => setActive("talent")}
          className={` mr-10 ${
            active === "talent"
              ? "border-b-2 border-indigo-500/100"
              : "border-gray-300"
          }`}
        >
          Talent Project
        </button>

        <button
          onClick={() => setActive("onwer")}
          className={` ${
            active === "onwer"
              ? "border-b-2 border-indigo-500/100"
              : "border-gray-300"
          }`}
        >
          Onwer Project
        </button>
      </div>

      <div>
        {active === "talent" && (
          <div>
            <h2 className="my-5">Project yang kamu kerjakan</h2>
            <ul className="flex flex-col">
              {talentProject.map((item) => (
                <li
                  key={item.id}
                  className="py-2 px-4 my-2 rounded-lg bg-blue-500 text-white"
                >
                  <div className="flex justify-between">
                    <p>{item.projectName}</p>
                    <p>Selesai</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {active === "onwer" && (
          <div>
            <h2 className="my-5">Project yang kamu ajukan</h2>
            <ul className="flex flex-col">
              {onwerProject.map((item) => (
                <li
                  key={item.id}
                  className="py-2 px-4 my-2 rounded-lg bg-blue-500 text-white"
                >
                  <div className="flex justify-between">
                    <p>{item.projectName}</p>
                    <p>Selesai</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
