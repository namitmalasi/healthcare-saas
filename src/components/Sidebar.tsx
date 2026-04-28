import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
  closeSidebar: () => void;
};
const Sidebar = ({ isOpen, closeSidebar }: Props) => {
  const linkStyle =
    "block px-4 py-3 rounded-xl hover:bg-blue-50 transition font-medium";

  return (
    <>
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
        />
      )}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-white border-r p-5 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <h1 className="text-2xl font-bold text-blue-600 mb-8">MediFlow</h1>

        <nav className="space-y-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "bg-blue-100 text-blue-600" : ""}`
            }
            onClick={closeSidebar}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "bg-blue-100 text-blue-600" : ""}`
            }
            onClick={closeSidebar}
          >
            Analytics
          </NavLink>

          <NavLink
            to="/patients"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "bg-blue-100 text-blue-600" : ""}`
            }
            onClick={closeSidebar}
          >
            Patients
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
