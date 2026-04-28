import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    login();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-slate-50">
      
      <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white p-10">
        <h1 className="text-5xl font-bold mb-4">MediFlow</h1>
        <p className="text-lg text-blue-100 text-center max-w-md">
          Smart healthcare management platform for hospitals and clinics.
        </p>
      </div>

      <div className="flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-slate-500 mb-6">Login to continue</p>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded-xl mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded-xl mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;