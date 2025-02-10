import { useState } from "react";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative h-22 flex flex-row items-center sm:px-18 px-4 justify-between font-lexend">
      <img src="https://html.themewant.com/elever/assets/images/logo/02.svg" alt="Logo" />
      <div className="lg:flex flex-row items-center gap-10 hidden">
        {["Home", "Services", "Pages", "Shop", "Project", "Blog", "Contact"].map((item, index) => (
          <p key={index} className="font-semibold text-[#141416]">{item}</p>
        ))}
      </div>
      <div className="flex flex-row gap-2">
        <button className="hidden md:block bg-[#F84E1D] cursor-pointer text-white px-8 py-4 tracking-tighter rounded-lg font-semibold text-xl">
          Request a Quote
        </button>
        <p onClick={toggleMenu} className="border border-[#1D1D1F] w-14 cursor-pointer text-3xl rounded-lg flex items-center justify-center h-[55px]">
          <RiMenu4Line />
        </p>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Menu</h2>
          <p onClick={toggleMenu} className="cursor-pointer text-3xl">
            <RiCloseLine />
          </p>
        </div>
        <div className="flex flex-col p-4 px-12  space-y-4">
          {["Home", "About", "Services", "Pages", "Shop", "Blog", "Contact"].map((item, index) => (
            <p key={index} className="font-semibold text-[#999999] text-lg/8 cursor-pointer">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
