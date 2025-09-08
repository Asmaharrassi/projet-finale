import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const languages = ["English", "French", "Arabic"];
  const [selected, setSelected] = useState("English");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 hover:text-orange-500"
      >
        {selected}
        <ChevronDownIcon className="w-4 h-4" />
      </button>
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow z-10">
          {languages.map((lang) => (
            <li
              key={lang}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
