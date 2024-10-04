import { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

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
    <div className="font-medium px-5">
      <div className="flex justify-between items-center gap-x-4 py-10 min-h-full">
        <div className="flex">
          <img src={logo} alt="Logo" width={40} />
          <Link to="/">
            <h1 className="text-2xl font-bold">Portify</h1>
          </Link>
        </div>

        <h1 className="text-xl">Dashboard</h1>

        <div>
          <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-sky-800 hover:text-white mr-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScTIyIPPDSCyXkfCLFoGh8DX5R0G4vORCavW_iSP4dUMCN1vg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verifikasi
            </a>
          </button>
          <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-sky-800 hover:text-white mr-2">
            <Link to="/pengajuan">Ajukan project</Link>
          </button>
        </div>
      </div>

      <div className="text-center my-16">
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
              ? "border-b-2 border-sky-800"
              : "border-gray-300"
          }`}
        >
          Talent Project
        </button>

        <button
          onClick={() => setActive("onwer")}
          className={` ${
            active === "onwer" ? "border-b-2 border-sky-800" : "border-gray-300"
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
                  className="py-2 px-4 my-2 rounded-lg bg-sky-800 text-white"
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
                  className="py-2 px-4 my-2 rounded-lg bg-sky-800 text-white"
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
