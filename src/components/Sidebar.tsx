import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle =
    "block px-4 py-3 rounded-xl hover:bg-blue-50 transition font-medium";

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-5 hidden md:block">
      <h1 className="text-2xl font-bold text-blue-600 mb-8">MediFlow</h1>

      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-blue-100 text-blue-600" : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-blue-100 text-blue-600" : ""}`
          }
        >
          Analytics
        </NavLink>

        <NavLink
          to="/patients"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? "bg-blue-100 text-blue-600" : ""}`
          }
        >
          Patients
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;