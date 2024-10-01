function Login() {
  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
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
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              Belum punya akun?{" "}
              <a href="/register" className="text-indigo-600">
                Daftar di sini
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
