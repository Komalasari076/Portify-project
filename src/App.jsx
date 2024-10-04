import { Route, Routes } from "react-router-dom";
import PageTemplate from "./PageTemplate";
import HomePage from "./components/Main/Homepage/HomePage";
import ProjectList from "./components/Main/Project/ProjectList";
import ProjectDetail from "./components/Main/Project/ProjectDetail";
import Persyaratan from "./components/Main/Project/Persyaratan";
import Panduan from "./components/Main/Project/Panduan";
import Login from "./components/Header/Login";
import Register from "./components/Header/Register";
import Dashboard from "./components/Main/Dashboard/Dashboard";
import Pengajuan from "./components/Main/Dashboard/Pengajuan";

function App() {
  return (
    <div className="box-border md:container md:mx-auto">
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/panduan" element={<Panduan />} />
          <Route path="/persyaratan" element={<Persyaratan />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pengajuan" element={<Pengajuan />} />
      </Routes>
    </div>
  );
}

export default App;
