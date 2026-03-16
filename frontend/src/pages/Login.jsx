import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        { email, password }
      );

      if (res.data.message === "Login success") {
        alert(res.data.message);
        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }

    } catch (err) {
      console.error("Login error details:", err);
      const errorMessage = err.response?.data?.message || "Login failed - Network error or server offline";
      alert(errorMessage);
    } finally {
      setLoading(false);
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
            disabled={loading}
            className={`w-full text-white p-2 sm:p-3 rounded-lg transition font-medium text-sm sm:text-base ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
          >
            {loading ? "Logging in..." : "Login"}
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