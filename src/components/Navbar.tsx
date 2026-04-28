import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

type Props = {
  openSidebar: () => void;
};
const Navbar = ({ openSidebar }: Props) => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
      <button
        onClick={openSidebar}
        className="md:hidden text-xl text-gray-600 hover:text-gray-900"
      >
        ☰
      </button>
      <h2 className="text-lg font-semibold text-gray-900">Dashboard</h2>

      <button
        onClick={handleLogout}
        className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 text-sm transition"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;
