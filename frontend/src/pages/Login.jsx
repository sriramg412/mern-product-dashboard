import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "https://mern-product-dashboard-e7fs.onrender.com/api/products",
        { email, password }
      );

      if (res.data.message === "Login success") {
        alert(res.data.message);
        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }

    } catch (err) {

      alert("Login failed");

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-3 sm:px-4 py-8">

      <div className="w-full max-w-md bg-white rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          Login
        </h2>

        <div className="space-y-3 sm:space-y-4">

          <input
            type="email"
            placeholder="Email address"
            className="w-full text-sm border rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full text-sm border rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white p-2 sm:p-3 rounded-lg hover:bg-blue-700 transition font-medium text-sm sm:text-base"
          >
            Login
          </button>

        </div>

        <p className="text-center mt-4 sm:mt-5 text-sm sm:text-base text-gray-600">

          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 ml-1 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Login;