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
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <button onClick={openSidebar} className="md:hidden text-2xl">
        ☰
      </button>
      <h2 className="text-xl font-semibold">Dashboard</h2>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;