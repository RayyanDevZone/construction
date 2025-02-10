import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
const menuItems = [
  "ABOUT US",
  "PROJECTS",
  "UPDATES",
  "MISSION",
  "INSIDE",
  "CONTACT",
  "HISTORY",
];

const usefulLinks = [
  "Our Gallery",
  "About Us",
  "Our Services",
  "Our Team",
  "Contact Us",
];

const quickServices = [
  "General Contracting",
  "Project Management",
  "New Construction",
  "Renovation and Remodeling",
  "Interior Finishing",
];

const socialIcons = [FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn];

const policies = [
  "Terms of use",
  "Privacy",
  "Environmental Policy",
];

const Footer = () => {
  return (
    <div
      className="w-full min-h-[550px] h-auto bg-[#1D1D1F] flex flex-col font-lexend"
      style={{
        backgroundImage: `url("https://html.themewant.com/elever/assets/images/footer/01.webp")`,
      }}
    >
      <div className="w-full h-[70px] sm:border-b border-[#333338] text-white uppercase flex flex-wrap items-center justify-center">
        {menuItems.map((item, index) => (
          <p key={index} className="sm:w-[155px] w-[90px] h-full flex justify-center items-center sm:border border-[#333338]">
            {item}
          </p>
        ))}
      </div>

      <div className="flex sm:flex-row flex-col items-center justify-between min-h-[400px] py-16 sm:px-12">
        <div className="sm:w-1/4 w-full px-4 h-full flex flex-col">
          <img
            src="https://html.themewant.com/elever/assets/images/logo/01.svg"
            alt="Elever Logo"
            className="w-[200px] h-[90px]"
          />
          <p className="text-[#7C7C84] mt-8">
            We’re committed to elevating the construction experience for our
            clients. With a passion for innovation and quality craftsmanship.
          </p>
          <div className="flex gap-6 mt-6">
            {socialIcons.map((Icon, index) => (
              <button key={index} className="h-[40px] w-[40px] flex items-center justify-center rounded-md border border-[#2F3336] text-white bg-[#171717]">
                <Icon />
              </button>
            ))}
          </div>
        </div>
        <div className="w-full px-4 text-start mt-4 sm:mt-0">
          <h1 className="text-white font-bold text-xl mb-3">Useful Links</h1>
          {usefulLinks.map((link, index) => (
            <p key={index} className="text-[#73737E] mb-3 flex flex-row items-center gap-2 hover:text-[#f84e1d] cursor-pointer duration-100"><FaArrowRight />{link}</p>
          ))}
        </div>
        <div className="w-full px-4 text-start mt-4 sm:mt-0">
          <h1 className="text-white font-bold text-xl mb-3">Quick Services</h1>
          {quickServices.map((service, index) => (
            <p key={index} className="text-[#73737E] mb-3 flex flex-row items-center gap-2  hover:text-[#f84e1d] cursor-pointer duration-100"><FaArrowRight />{service}</p>
          ))}
        </div>
        <div className="flex flex-col w-full px-4 sm:px-0">
          <h1 className="text-white font-bold text-xl mb-3">Newsletter</h1>
          <p className="text-[#73737E]">
            Applications prodize before front
            <br /> end portals visualize front end.
          </p>
          <input
            placeholder="Email Address"
            className="border border-[#333338] bg-[#171717] placeholder:text-[#7C7C84] text-white focus:outline-none rounded-md py-3 px-3 mt-4"
          />
          <button className="text-white bg-[#f84e1d] rounded-md py-3 px-3 mt-4 hover:bg-[#F84E1D] cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div className="min-h-[70px] w-full border-t border-[#333338] flex items-center sm:flex-row flex-col justify-between sm:px-22 py-2 sm:py-0 text-white">
        <p className="">Copyright © 2025 Elever. All Rights Reserved.</p>
        <div className="flex sm:gap-10 gap-4">
          {policies.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          </div>
      </div>
    </div>
  );
};
export default Footer;
