import Navbar from "./components/Header/Navbar";
import AboutSection from "./components/Main/AboutSection";
import CallToAction from "./components/Main/CallToAction";
import HeroSection from "./components/Main/HeroSection";
import Panduan from "./components/Main/Panduan";

function App() {
  return (
    <div className="box-border md:container md:mx-auto">
      <Navbar/>

      <HeroSection/>

      <AboutSection/>
    </div>
  );
}

export default App;
