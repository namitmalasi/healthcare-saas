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
    <div className="min-h-screen grid md:grid-cols-2 bg-gray-50">
      {/* Left Side */}
      <div className="hidden md:flex flex-col justify-center items-center bg-gray-900 text-white p-10">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">MediFlow</h1>
        <p className="text-gray-400 text-center max-w-md">
          Smart healthcare management platform for hospitals and clinics.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex justify-center items-center p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md rounded-lg border border-gray-200 p-8"
        >
          <h2 className="text-2xl font-bold mb-1 text-gray-900">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-sm mb-6">Login to continue</p>

          {(formError || error) && (
            <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-700">
              {formError || getFriendlyError(error || "")}
            </div>
          )}

          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3 mb-6 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition disabled:opacity-60 font-medium text-sm"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Secure login powered by Firebase
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
