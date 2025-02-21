import { useState, useEffect } from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const socialIcons = [FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn];
const Navbar = () => {

  useGSAP(() => {
    gsap.from(".navbar p", {
      opacity: 0,
      stagger: 0.1,
    });
  });
  useGSAP(() => {
    gsap.from(".btn", {
      opacity: 0,
      duration: 0.5,
    });
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar top-0 sm:top-14 bg-white w-full z-999 h-22 flex flex-row items-center sm:px-18 px-4 justify-between font-lexend">
      <img
        src="https://html.themewant.com/elever/assets/images/logo/02.svg"
        alt="Logo"
      />
      <div className="lg:flex flex-row items-center gap-10 hidden">
        {[
          "Home",
          "Services",
          "Pages",
          "Shop",
          "Project",
          "Blog",
          "Contact",
        ].map((item, index) => (
          <p key={index} className="font-semibold text-[#141416]">
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-row gap-2">
        <button className=" btn hidden md:block bg-[#F84E1D] cursor-pointer text-white px-8 py-4 tracking-tighter rounded-lg font-semibold text-xl">
          Request a Quote
        </button>
        <p
          onClick={toggleMenu}
          className="border border-[#1D1D1F] w-14 cursor-pointer text-3xl rounded-lg flex items-center justify-center h-[55px]"
        >
          <RiMenu4Line />
        </p>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-999 top-0 right-0 h-full w-4/5 bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Menu</h2>
          <p
            onClick={toggleMenu}
            className="cursor-pointer text-[#f84e1d] text-3xl"
          >
            <RiCloseLine />
          </p>
        </div>
        <div className="flex flex-col p-4 px-12  space-y-4">
          {[
            "Home",
            "About",
            "Services",
            "Pages",
            "Shop",
            "Blog",
            "Contact",
          ].map((item, index) => (
            <p
              key={index}
              className="font-semibold text-[#999999] text-lg/8 cursor-pointer active:text-[#f84e1d] duration-100"
            >
              {item}
            </p>
          ))}
          <div className="flex gap-6 mt-6">
            {socialIcons.map((Icon, index) => (
              <button
                key={index}
                className="h-[40px] w-[40px] flex items-center justify-center rounded-md border border-[#2F3336] text-white bg-[#171717]"
              >
                <Icon />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
