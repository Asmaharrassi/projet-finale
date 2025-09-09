import teacherImg from "../assets/Teacher.png";
function Header() {
    return (
      <header className="bg-white py-16 px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* 🔹 Left Section: Text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Learn with expert anytime anywhere
          </h2>
          <p className="text-gray-600 mb-6 text-base">
            Our mission is to help people to find the best course online and learn with expert anytime, anywhere.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition">
            Create Account
          </button>
        </div>
  
        {/* 🔹 Right Section: Image */}
        <div className="flex justify-center">
          <img
            src={teacherImg}
            alt="Learning"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </header>
    );
  }
  
  export default Header;
  