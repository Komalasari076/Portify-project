import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Header/Login";
import Navbar from "./components/Header/Navbar";
import Register from "./components/Header/register";
import AboutSection from "./components/Main/AboutSection";
import CallToAction from "./components/Main/CallToAction";
import HeroSection from "./components/Main/HeroSection";
import Panduan from "./components/Main/Panduan";
import ProjectList from "./components/Main/ProjectList";
import ProjectDetail from "./components/Main/ProjectDetail";
import Dashboard from "./components/Main/Dashboard";

function App() {
  return (
    <div className="box-border md:container md:mx-auto">
      {/* <Navbar />

      <HeroSection />

      <AboutSection />

      <CallToAction />

      <Footer /> */}

      {/* <Panduan/> */}

      {/* <Login />

      <Register /> */}

      {/* <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes> */}

      <Dashboard/>
    </div>
  );
}

export default App;
