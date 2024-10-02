import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectId();
  }, [id]);

  async function getProjectId() {
    const respons = await fetch(
      `https://66fb57208583ac93b40b758c.mockapi.io/projects/Projects/${id}`
    );
    const data = await respons.json();
    setProject(data);
    console.log(data);
  }

  return (
    <div className="py-10 px-5 font-medium">
      {project == null ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>{project.projectName}</h2>
          <p>Onwer: {project.businessOwner}</p>
          <br />
          <p>{project.description}</p>
          <br />
          <p>
            Skill yang dibutuhkan: <br />
            {project.skillsRequired.join(" || ")}
          </p>

          <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300 mt-4">
            Kerjakan Project
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
