import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
  closeSidebar: () => void;
};
const Sidebar = ({ isOpen, closeSidebar }: Props) => {
  const linkStyle =
    "block px-4 py-2 rounded-md hover:bg-gray-50 transition text-sm";

  return (
    <>
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
        />
      )}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-6 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        <h1 className="text-xl font-semibold text-gray-900 mb-8 tracking-tight">
          MediFlow
        </h1>

        <nav className="space-y-1">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "bg-gray-100 text-gray-900 border-l-2 border-gray-800" : "text-gray-600"}`
            }
            onClick={closeSidebar}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "bg-gray-100 text-gray-900 border-l-2 border-gray-800" : "text-gray-600"}`
            }
            onClick={closeSidebar}
          >
            Analytics
          </NavLink>

          <NavLink
            to="/patients"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? "bg-gray-100 text-gray-900 border-l-2 border-gray-800" : "text-gray-600"}`
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
