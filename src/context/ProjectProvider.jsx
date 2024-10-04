import { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext();

export function ProjectProvider({ children }) {
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
    <ProjectContext.Provider value={{ projects, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
