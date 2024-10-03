import { useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      alert("login berhasil");
      navigate("/dashboard");
    } else {
      alert("email atau password salah");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen font-medium">
        <div className="w-full max-w-md bg-blue-100 border-2 border-sky-800 p-10 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="my-4">
              <label className=" text-gray-900">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-1 rounded-md"
              />
            </div>

            <div>
              <label className=" text-gray-900">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
