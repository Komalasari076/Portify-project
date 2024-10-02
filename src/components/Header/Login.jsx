import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex justify-center items-center h-screen font-medium">
        <div className="w-full max-w-md bg-blue-100 border-2 border-sky-800 p-10 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form>
            <div className="my-4">
              <label className=" text-gray-900">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-1 rounded-md"
              />
            </div>

            <div>
              <label className=" text-gray-900">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-1 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-sky-800 py-1 px-4 hover:bg-sky-600 my-8 text-white"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <p>
              Belum punya akun?
              <Link to="/register" className="text-sky-800 ml-1">
                Daftar di sini
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
