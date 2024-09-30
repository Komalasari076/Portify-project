function Footer() {
  return (
    <div className="">
      <div className="flex justify-center gap-10 list-none font-medium p-5 border-t-2 border-slate-200">
        <li className=" hover:text-sky-800 transition duration-300 ease-in-out">
          Home
        </li>
        <li className=" hover:text-sky-800 transition duration-300 ease-in-out">
          About
        </li>
        <li className=" hover:text-sky-800 transition duration-300 ease-in-out">
          Project
        </li>
        <li className=" hover:text-sky-800 transition duration-300 ease-in-out">
          Syarat
        </li>
        <li className="hover:text-sky-800 transition duration-300 ease-in-out">
          Panduan
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
