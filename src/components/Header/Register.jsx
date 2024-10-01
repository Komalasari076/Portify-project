function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input type="email" placeholder="Email" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input type="password" placeholder="Password" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input type="password" placeholder="Confirm Password" required />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500"
          >
            Register
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            Sudah punya akun?{" "}
            <a href="/login" className="text-indigo-600">
              Login di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
