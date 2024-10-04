import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    localStorage.setItem("email", userEmail);
    if (userEmail) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

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
        {login ? (
          <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300">
            <Link to="/dashboard">Dashboard</Link>
          </button>
        ) : (
          <button className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
