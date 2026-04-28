import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Patients from "./pages/Patients";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";



function App() {
   const { initAuth,user } = useAuthStore();

  useEffect(() => {
    initAuth();
  if (user) navigate("/dashboard");

  }, []);


  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/patients"
          element={
            <ProtectedRoute>
              <Patients />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
 