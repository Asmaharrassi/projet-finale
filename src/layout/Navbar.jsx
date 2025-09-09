import { FiBell, FiHeart, FiShoppingCart } from "react-icons/fi";
import Button from "../components/Button";

export default function TopNavbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      {/* Col 1: Logo */}
      <div className="flex items-center space-x-1 font-bold text-xl flex-shrink-0">
        <span className="text-orange-500 text-2xl">🎓</span>
        <span>E-tutor</span>
      </div>

      {/* Col 2: Browse + Search */}
<div className="flex items-center gap-6 mx-auto mr-12">
  <select className="border border-gray-200 rounded px-4 py-2 text-sm text-gray-600 w-[120px]">
    <option>Browse</option>
    <option>Courses</option>
    <option>Topics</option>
  </select>

  <input
    type="text"
    placeholder="What do you want learn..."
    className="border border-gray-200 rounded px-4 py-2 text-sm w-[260px] focus:outline-none"
  />
</div>
    {/* Col 3: Icons + Buttons */}
<div className="flex items-center gap-10 flex-shrink-0">
  
  {/* icons*/}
  <div className="flex items-center gap-3">
    <button className="p-2 rounded-md hover:bg-gray-100">
      <FiBell className="text-gray-600 text-lg" />
    </button>
    <button className="p-2 rounded-md hover:bg-gray-100">
      <FiHeart className="text-gray-600 text-lg" />
    </button>
    <button className="p-2 rounded-md hover:bg-gray-100">
      <FiShoppingCart className="text-gray-600 text-lg" />
    </button>
  </div>

  {/* button*/}
  <div className="flex gap-3">
    <Button
      variant="custom"
      className="w-[150px] h-[42px] px-4 bg-[#FFEEE8] text-[#FF6636] border-none text-sm"
    >
      Create Account
    </Button>

    <Button
  variant="custom"
  className="w-[90px] h-[42px] px-4 bg-[#FF6636] text-white border-none text-sm mr-4"
>
  Sign in
</Button>
  </div>

</div> 
    </header>
  );
}