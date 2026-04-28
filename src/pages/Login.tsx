import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Login = () => {
  const navigate = useNavigate();

  const { login, user, loading, error } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const getFriendlyError = (message: string) => {
    if (message.includes("invalid-credential")) {
      return "Invalid email or password.";
    }

    if (message.includes("too-many-requests")) {
      return "Too many attempts. Please try again later.";
    }

    if (message.includes("network-request-failed")) {
      return "Network issue. Check your internet connection.";
    }

    return "Login failed. Please try again.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormError("");

    const cleanEmail = email.trim();
    const cleanPassword = password.trim();

    if (!cleanEmail || !cleanPassword) {
      setFormError("All fields are required.");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(cleanEmail)) {
      setFormError("Please enter a valid email.");
      return;
    }

    await login(cleanEmail, cleanPassword);
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-slate-50">
      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-center items-center bg-blue-600 text-white p-10">
        <h1 className="text-5xl font-bold mb-4">MediFlow</h1>
        <p className="text-blue-100 text-center max-w-md text-lg">
          Smart healthcare management platform for hospitals and clinics.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md rounded-2xl shadow-md p-8"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
          <p className="text-slate-500 mb-6">Login to continue</p>

          {(formError || error) && (
            <div className="mb-4 rounded-xl bg-red-50 border border-red-200 p-3 text-sm text-red-600">
              {formError || getFriendlyError(error || "")}
            </div>
          )}

          <input
            type="email"
            placeholder="Email address"
            className="w-full border rounded-xl p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-sm text-slate-400 mt-4 text-center">
            Secure login powered by Firebase
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
