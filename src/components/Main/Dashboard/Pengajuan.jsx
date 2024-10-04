import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../../../context/ProjectProvider";

function Pengajuan() {
  const { addProject } = useContext(ProjectContext);
  const [namaProject, setNamaProject] = useState("");
  const [namaPengusaha, setNamaPengusaha] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [skills, setSkills] = useState("");
  const [linkForm, setLinkForm] = useState("");
  const navigate = useNavigate();

  const handlePengajuan = async (e) => {
    e.preventDefault();

    console.log("Nama Project:", namaProject);
    console.log("Nama Pengusaha:", namaPengusaha);
    console.log("Deskripsi:", deskripsi);
    console.log("Skills:", skills);
    console.log("linkForm:", linkForm);

    const newProject = {
      projectName: namaProject,
      businessOwner: namaPengusaha,
      description: deskripsi,
      skillsRequired: skills.split(", ").map((skills) => skills.trim()),
      recruitmentFormLink: linkForm,
    };

    console.log("New Project Data: ", newProject);

    alert("Project berhasil di tambahkan");
    await addProject(newProject);
    navigate("/project");
  };

  return (
    <div className="flex justify-center items-center h-screen font-medium">
      <div className="w-full max-w-md bg-blue-100 border-2 border-sky-800 p-10 rounded-lg">
        <form onSubmit={handlePengajuan}>
          <div className="flex flex-col my-4">
            <label className=" text-gray-900 mb-1">Nama Project</label>
            <input
              type="text"
              placeholder="contoh: Brand Copywriting"
              value={namaProject}
              onChange={(e) => setNamaProject(e.target.value)}
              required
              className="w-full p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col my-4">
            <label className=" text-gray-900 mb-1">
              Nama Pengusaha atau Komunitas
            </label>
            <input
              type="text"
              placeholder="contoh: Batik Local"
              value={namaPengusaha}
              onChange={(e) => setNamaPengusaha(e.target.value)}
              required
              className="w-full p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col my-4">
            <label className=" text-gray-900 mb-1">Deskripsi Project</label>
            <textarea
              placeholder="contoh: Kami membutuhkan copywriter pemula untuk membuat 5 konten singkat (sekitar 100 kata per konten) yang akan digunakan untuk kampanye media sosial. Fokus pada mempromosikan produk-produk UMKM kami yang ramah lingkungan, seperti tas belanja dan botol minum dari bahan daur ulang."
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              required
              className="w-full p-2 rounded-md"
            ></textarea>
          </div>

          <div className="flex flex-col my-4">
            <label className=" text-gray-900 mb-1">Skill yang Dibutuhkan</label>
            <textarea
              placeholder="Pisahkan dengan koma. contoh: Penulisan kreatif dasar, Kemampuan dasar dalam riset produk, Pengetahuan dasar tentang media sosial, Komunikasi yang baik"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              required
              className="w-full p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col my-4">
            <label className=" text-gray-900 mb-1">Link Form Google</label>
            <input
              type="text"
              placeholder="Link form google untuk rekrutmen"
              value={linkForm}
              onChange={(e) => setLinkForm(e.target.value)}
              required
              className="w-full p-2 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-sky-800 py-1 px-4 hover:bg-sky-600 my-4 text-white"
          >
            Tambahkan Proyek
          </button>
        </form>
      </div>
    </div>
  );
}

export default Pengajuan;
