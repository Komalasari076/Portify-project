import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import AboutSection from "./components/Main/AboutSection";
import CallToAction from "./components/Main/CallToAction";
import HeroSection from "./components/Main/HeroSection";
import Panduan from "./components/Main/Panduan";

function App() {
  return (
    <div className="box-border md:container md:mx-auto">
      {/* <Navbar />

      <HeroSection />

      <AboutSection />

      <CallToAction />

      <Footer /> */}

      <Panduan/>
    </div>
  );
}

export default App;
