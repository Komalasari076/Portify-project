import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Header/Login";
import Navbar from "./components/Header/Navbar";
import Panduan from "./components/Main/Panduan";
import ProjectList from "./components/Main/ProjectList";
import ProjectDetail from "./components/Main/ProjectDetail";
import Dashboard from "./components/Main/Dashboard";
import HomePage from "./components/HomePage";
import Persyaratan from "./components/Main/Persyaratan";
import Register from "./components/Header/Register";
import Pengajuan from "./components/Main/Pengajuan";
import PageTemplate from "./components/PageTemplate";

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
