import { Outlet } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

function PageTemplate() {
  return (
    <>
      {/* Navigasi */}
      <header>
        <Navbar/>
      </header>

      {/* Konten sesuai dgn alamat */}
      <div>
        <Outlet />
      </div>

      {/* Footer */}
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default PageTemplate;
