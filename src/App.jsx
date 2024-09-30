import Navbar from "./components/Header/Navbar";
import AboutSection from "./components/Main/AboutSection";
import CallToAction from "./components/Main/CallToAction";
import HeroSection from "./components/Main/HeroSection";
import Panduan from "./components/Main/Panduan";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CallToAction />
      <Panduan/>
    </>
  );
}

export default App;
