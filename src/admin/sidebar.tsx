import { NavLink, useLocation } from "react-router-dom";
import { FiMessageSquare, FiHeart, FiShield, FiLogOut, FiHome, FiX } from "react-icons/fi";
import { useEffect } from "react";
import { useAuth} from "./context/AuthContext";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  const { logout } = useAuth();

  const navItems = [
    { name: "Dashboard", to: "", icon: <FiHome className="text-lg" /> },
    { name: "Kritik & Saran", to: "kritik", icon: <FiMessageSquare className="text-lg" /> },
    { name: "Harapan", to: "harapan", icon: <FiHeart className="text-lg" /> },
    { name: "Perundungan", to: "perundungan", icon: <FiShield className="text-lg" /> },
  ];

  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      toggleSidebar();
    }
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    window.location.href = "/admin";
  };

  return (
    <>
      {/* Mobile overlay with darker background */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:h-auto
          transition-transform duration-300 ease-in-out z-40 w-64`}
      >
        <div className="p-5 flex flex-col h-full">
          {/* Mobile close button */}
          <button
            className="md:hidden self-end mb-3 p-2 rounded-full hover:bg-gray-100 text-gray-500"
            onClick={toggleSidebar}
          >
            <FiX className="text-xl" />
          </button>

          <nav className="flex-1 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                end={item.to === ""}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
                  ${isActive
                    ? "bg-green-100 text-green-800 font-medium border-l-4 border-green-500"
                    : "text-gray-700 hover:bg-gray-100"}`
                }
              >
                {item.icon}
                <span className="text-base">{item.name}</span>
              </NavLink>
            ))}
          </nav>

          <button
            onClick={handleLogout}
            className="mt-6 flex items-center gap-3 px-4 py-3 text-red-600 rounded-xl hover:bg-red-50 transition-colors"
          >
            <FiLogOut className="text-lg" />
            <span className="text-base">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}