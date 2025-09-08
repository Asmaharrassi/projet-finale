import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; 

export default function CurrencyDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const currencies = ["USD", "EUR", "TND"];
  const [selected, setSelected] = useState("USD");
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
        <ul className="absolute right-0 mt-2 w-24 bg-white text-black rounded shadow z-10">
          {currencies.map((currency) => (
            <li
              key={currency}
              onClick={() => {
                setSelected(currency);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {currency}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}