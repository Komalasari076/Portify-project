import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectContext } from "../../../context/ProjectProvider";

function ProjectDetail() {
  const { id } = useParams();
  const { projects } = useContext(ProjectContext);
  const project = projects.find((project) => project.id === id);

  return (
    <div className="py-10 px-5 font-medium min-h-screen">
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

          <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-sky-800 hover:text-white mt-4">
            <a
              href={project.recruitmentFormLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kerjakan Project
            </a>
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
