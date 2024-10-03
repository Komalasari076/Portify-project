import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("pasword dan corfirm password tidak sesuai");
      return;
    }

    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));

    const checkData = localStorage.getItem("user");
    if (checkData) {
      alert(
        "Register Berhasil, silahkan login dengan akun yang sudah terdaftar"
      );
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen font-medium">
      <div className="w-full max-w-md bg-blue-100 border-2 border-sky-800 p-10 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister}>
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

          <div className="my-4">
            <label className="text-gray-900">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-1 rounded-md"
            />
          </div>

          <div>
            <label className=" text-gray-900">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full p-1 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-sky-800 py-1 px-4 hover:bg-sky-600 my-8 text-white"
          >
            Register
          </button>
        </form>

        <div className="text-center mt-4">
          <p>
            Sudah punya akun?
            <Link to="/login" className="text-sky-800 ml-1">
              Login di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
