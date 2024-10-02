import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Header/Login";
import Navbar from "./components/Header/Navbar";
import Panduan from "./components/Main/Panduan";
import ProjectList from "./components/Main/ProjectList";
import ProjectDetail from "./components/Main/ProjectDetail";
import Dashboard from "./components/Main/Dashboard";
import AddProjectForm from "./components/Main/AddProject";
import HomePage from "./components/Main/HomePage";

function App() {
  return (
    <div className="box-border md:container md:mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/panduan" element={<Panduan />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />

      {/* <Register /> */}
    </div>
  );
}

export default App;
