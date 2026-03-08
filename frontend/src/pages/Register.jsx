import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {

    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        { name, email, password }
      );

      alert(res.data.message);

    } catch (err) {

      alert("Registration failed: " + (err.response?.data?.message || err.message));

    } finally {
      setLoading(false);
    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-3 sm:px-4 py-8">

      <div className="w-full max-w-md bg-white rounded-lg sm:rounded-xl shadow-lg p-6 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
          Register
        </h2>

        <div className="space-y-3 sm:space-y-4">

          <input
            placeholder="Name"
            className="w-full text-sm border p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            className="w-full text-sm border p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full text-sm border p-2 sm:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleRegister}
            disabled={loading}
            className={`w-full text-white p-2 sm:p-3 rounded-lg transition font-medium text-sm sm:text-base ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
              }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

        </div>

        <p className="text-center mt-4 sm:mt-5 text-sm sm:text-base text-gray-600">
          Already have account?
          <Link to="/" className="text-blue-600 ml-1 font-semibold hover:underline">
            Login
          </Link>
        </p>

      </div>

    </div>

  );

}

export default Register;