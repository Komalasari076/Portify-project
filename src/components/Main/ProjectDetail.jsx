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
    <>
      {project == null ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <h2>{project.projectName}</h2>
          <p>{project.description}</p>
          <p>Onwer: {project.businessOwner}</p>
        </div>
      )}
    </>
  );
}

export default ProjectDetail
