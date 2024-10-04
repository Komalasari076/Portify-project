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

  async function addProject(newProject) {
    let URL = "https://66fb57208583ac93b40b758c.mockapi.io/projects/Projects";

    console.log("Sending data to API: ", newProject);

    const respons = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });

    const data = await respons.json();
    console.log("Response from API:", data);

    if (respons.ok) {
      setProject((project) => [...project, data]);
    } else {
      console.log("project gagal di tambahkan");
    }
  }

  return (
    <ProjectContext.Provider
      value={{ projects, setProject, addProject, getDataProject }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
