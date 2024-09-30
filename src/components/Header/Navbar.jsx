function Navbar() {
  return (
    <div className="flex justify-between items-center text-lg font-bold p-5 border-b-2 border-slate-200">
      <div>
        <h1>Portify</h1>
      </div>

      <div className="flex list-none ">
        <li className="mr-10 hover:text-sky-800 transition duration-300 ease-in-out">
          Home
        </li>
        <li className="mr-10 hover:text-sky-800 transition duration-300 ease-in-out">
          About
        </li>
        <li className="mr-10 hover:text-sky-800 transition duration-300 ease-in-out">
          Project
        </li>
        <li className="mr-10 hover:text-sky-800 transition duration-300 ease-in-out">
          Syarat
        </li>
        <li className="hover:text-sky-800 transition duration-300 ease-in-out">
          Panduan
        </li>
      </div>

      <div>
        <h1 className="rounded-full bg-blue-100 border-2 border-sky-800 py-1 px-4 hover:bg-blue-300">
          Login
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
