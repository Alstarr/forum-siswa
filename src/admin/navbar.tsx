import { useContext } from "react";
import { PageTitleContext } from "./context/PageTitleContext";
import { FiMenu } from "react-icons/fi";

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  const { pageTitle } = useContext(PageTitleContext);

  return (
    <header className="w-full h-16 bg-gradient-to-r from-[#4CA965] to-[#59C274] flex items-center justify-between px-6 shadow-md relative z-20">
      <div className="flex items-center space-x-4">
        {/* === Hamburger hanya muncul di mobile === */}
        <button
          onClick={toggleSidebar}
          className="md:hidden text-white focus:outline-none"
        >
          <FiMenu size={24} />
        </button>

        <h1 className="text-white text-lg md:text-xl font-bold">{pageTitle}</h1>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-white text-sm md:text-base">Halo, Admin 👋</span>
      </div>
    </header>
  );
}
