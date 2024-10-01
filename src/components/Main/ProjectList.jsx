import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProjectList() {
  const [projects, setProject] = useState([]);

  async function getDataProject() {
    let URL = "https://66fb57208583ac93b40b758c.mockapi.io/projects/Projects";
    const respons = await fetch(URL);
    const result = await respons.json();
    setProject(result);
  }

  useEffect(() => {
    getDataProject();
  }, []);
 
  return (
    <div>
      <h1>Daftar Proyek</h1>

      <ul className="grid grid-cols-4 gap-8">
        {projects.map((item) => (
          <li
            key={item.id}
            className="rounded-md bg-blue-100 border-2 border-sky-800"
          >
            <Link to={`/projects/${item.id}`}>{item.projectName}</Link>

            <p>Skills: {item.skillsRequired.join(", ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
