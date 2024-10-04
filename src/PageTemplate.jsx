import { Outlet } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";

function PageTemplate() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <div>
        <Outlet />
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PageTemplate;
