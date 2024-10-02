import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <div className="flex justify-center gap-10 list-none font-medium p-5 border-t-2 border-slate-200">
        <li className=" hover:text-sky-800 transition duration-300 ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:text-sky-800 transition duration-300 ease-in-out">
          <Link to="/project">Projects</Link>
        </li>
        <li className="hover:text-sky-800 transition duration-300 ease-in-out">
          <Link to="/panduan">Panduan</Link>
        </li>
        <li className=" hover:text-sky-800 transition duration-300 ease-in-out">
          <Link to="/persyaratan">Persyaratan</Link>
        </li>
      </div>

      <div>
        <p className="text-sm text-center p-2 rounded-md bg-blue-100 border-sky-800">
          Copywrite &copy; 2024 Portify. Design By Komala
        </p>
      </div>
    </div>
  );
}

export default Footer;
