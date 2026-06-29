import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      navigate("/dashboard");

    } catch (error) {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/building.jpg')",
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">

        {/* College Logo */}

        <img
          src="/pkr-logo.png"
          alt="PKR Logo"
          className="w-24 h-24 bg-white rounded-full p-2 mb-4"
        />

        {/* College Name */}

        <h1 className="text-5xl font-bold text-white text-center">
          P.K.R ARTS COLLEGE FOR WOMEN
        </h1>

        <p className="text-xl text-gray-200 mt-2 mb-10">
          Gobichettipalayam
        </p>

        {/* Login Card */}

        <div className="bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-[420px]">

          <h2 className="text-3xl font-bold text-center mb-8">
            Event Management System
          </h2>

          <input
            type="email"
            placeholder=" Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border p-4 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border p-4 rounded-lg mb-6"
          />

          <button
            onClick={login}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 rounded-lg"
          >
            Login
          </button>

        

        </div>

      </div>
    </div>
  );
}

export default Login;