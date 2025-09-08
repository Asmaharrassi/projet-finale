import { NavLink } from "react-router-dom";
import CurrencyDropdown from "../components/CurrencyDropdown";
import LanguageDropdown from "../components/LanguageDropdown";

export default function TopNavbar() {
  return (
    <nav className="bg-gray-900 text-white text-sm">
      <div className="w-full max-w-[1200px] mx-auto px-6 flex justify-between items-center h-12">
        
        {/* LEFT SIDE: Links */}
        <ul className="flex gap-8 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Become an Instructor", path: "/instructor" },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-orange-500 pb-1 text-orange-500"
                    : "hover:text-orange-500 hover:border-b-2 hover:border-orange-300 pb-1"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE: Dropdowns */}
        <div className="flex items-center gap-6">
          <CurrencyDropdown />
          <LanguageDropdown />
        </div>
      </div>
    </nav>
  );
}