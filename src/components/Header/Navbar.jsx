import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center text-lg font-bold p-5 border-b-2 border-slate-200">
      <div className="flex">
        <img src={logo} alt="Logo" width={40} />
        <h1 className="text-2xl">Portify</h1>
      </div>

      <div className="flex list-none ">
        <li className="mr-10 hover:text-sky-800 transition duration-300 ease-in-out">
          <Link to="/">Home</Link>
        </li>

        <li className="mr-10 hover:text-sky-800 transition duration-300 ease-in-out">
          <Link to="/project">Projects</Link>
        </li>

        <li className="mr-10 hover:text-sky-800 transition duration-300 ease-in-out">
          <Link to="/panduan">Panduan</Link>
        </li>

        <li className="hover:text-sky-800 transition duration-300 ease-in-out">
          <Link to="/persyaratan">Persyaratan</Link>
        </li>
      </div>

      <div>
        <h1 className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300">
          <Link to="/login">Login</Link>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
