import { Link, useLocation } from "react-router-dom";
import { FiMessageSquare, FiHeart, FiShield, FiLogOut, FiHome } from "react-icons/fi";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", to: "/dashboard", icon: <FiHome /> },
    { name: "Kritik & Saran", to: "/kritik", icon: <FiMessageSquare /> },
    { name: "Harapan", to: "/harapan", icon: <FiHeart /> },
    { name: "Perundungan", to: "/perundungan", icon: <FiShield /> },
  ];

  return (
    <>
      <aside
        className={`fixed md:static top-0 left-0 h-full bg-white shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-40 w-64 p-6`}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`flex items-center space-x-2 px-4 py-2 rounded hover:bg-green-100 transition ${
                location.pathname.includes(item.to)
                  ? "bg-green-200 text-green-800 font-semibold"
                  : "text-green-800"
              }`}
              onClick={toggleSidebar}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
          <button className="flex items-center space-x-2 px-4 py-2 text-red-600 rounded hover:bg-red-100 transition">
            <FiLogOut />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Overlay untuk mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
