import { RiMenu4Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="h-22 flex flex-row items-center sm:px-18 px-4 justify-between font-lexend">
      <img src="https://html.themewant.com/elever/assets/images/logo/02.svg"></img>
      <div className="lg:flex flex-row items-center gap-10 hidden">
        <p className="font-semibold text-[#141416]">Home </p>
        <p className="font-semibold text-[#141416]">Services </p>
        <p className="font-semibold text-[#141416]">Pages </p>
        <p className="font-semibold text-[#141416]">Shop </p>
        <p className="font-semibold text-[#141416]">Project </p>
        <p className="font-semibold text-[#141416]">Blog </p>
        <p className="font-semibold text-[#141416]">Contact </p>
      </div>
      <div className="flex flex-row gap-2">
        {" "}
        <button className="hidden md:block bg-[#F84E1D] cursor-pointer text-white px-8 py-4 tracking-tighter rounded-lg font-semibold text-xl ">
          Request a Quote
        </button>
        <p className="border border-[#1D1D1F] w-14 cursor-pointer text-3xl rounded-lg flex items-center justify-center h-[55px]">
          <RiMenu4Line />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
