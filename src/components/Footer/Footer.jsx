import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className=" w-full h-[550px] flex flex-col font-lexend"
      style={{
        backgroundImage: `url("https://html.themewant.com/elever/assets/images/footer/01.webp")`,
      }}
    >
      <div className="w-full h-[70px] border-b-1 border-[#333338] text-white uppercase flex flex-row items-center justify-center ">
        <p className="w-[155px] h-full flex justify-center items-center border border-[#333338]">
          ABOUT US
        </p>
        <p className="w-[155px] h-full flex justify-center items-center border border-[#333338]">
          PROJECTS
        </p>
        <p className="w-[155px] h-full flex justify-center items-center border border-[#333338]">
          UPDATES
        </p>
        <p className="w-[155px] h-full flex justify-center items-center border border-[#333338]">
          MISSION
        </p>
        <p className="w-[155px] h-full flex justify-center items-center border border-[#333338]">
          INSIDE
        </p>
        <p className="w-[155px] h-full flex justify-center items-center border border-[#333338]">
          CONTACT
        </p>
        <p className="w-[155px] h-full flex justify-center items-center border border-[#333338]">
          HISTORY
        </p>
      </div>

      <div className="flex flex-row items-center justify-between h-[400px]  py-16 px-12">
        <div className="w-1/4 h-full flex flex-col">
          <img
            src="https://html.themewant.com/elever/assets/images/logo/01.svg"
            className="w-[200px] h-[90px]"
          />
          <p className="text-[#7C7C84] mt-8">
            we’re committed to elevating the construction experience for our
            clients. With a passion for innovation and quality craftsmanship,
          </p>
          <div className="flex flex-row gap-6 mt-6">
            {" "}
            <button className="h-[40px] w-[40px] flex items-center justify-center rounded-md border border-[#2F3336] text-white bg-[#171717]"><FaFacebookF /></button>
            <button className="h-[40px] w-[40px] flex items-center justify-center rounded-md border border-[#2F3336] text-white bg-[#171717]"><FaXTwitter /></button>
            <button className="h-[40px] w-[40px] flex items-center justify-center rounded-md border border-[#2F3336] text-white bg-[#171717]"><FaYoutube /></button>
            <button className="h-[40px] w-[40px] flex items-center justify-center rounded-md border border-[#2F3336] text-white bg-[#171717]"><FaLinkedinIn /></button>
          </div>
        </div>
        <div>
          <h1 className="text-white font-bold text-xl ">Useful Links</h1>
          <p className="text-[#73737E] mb-3">Our Gallery</p>
          <p className="text-[#73737E] my-3">About Us</p>
          <p className="text-[#73737E] mb-3"> Our Services</p>
          <p className="text-[#73737E] mb-3">Our Team</p>
          <p className="text-[#73737E] mb-3 "> Contact Us</p>
        </div>
        <div>
          <h1 className="text-white font-bold text-xl ">Quick Services</h1>
          <p className="text-[#73737E] my-3">General Contracting</p>
          <p className="text-[#73737E] mb-3">Project Management</p>
          <p className="text-[#73737E] mb-3"> New Construction</p>
          <p className="text-[#73737E] mb-3">Renovation and Remodeling</p>
          <p className="text-[#73737E] mb-3 "> Interior FInishing</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-bold text-xl ">Newsletter</h1>
          <p className="text-[#73737E]">
            Aplications prodize before front
            <br /> end ortals visualize front end
          </p>
          <input
            placeholder="Email Address"
            className="border border-[#333338] bg-[#171717] placeholder:text-[#7C7C84] rounded-md py-3 px-3 mt-4"
          />
          <button className="text-white bg-[#f84e1d] rounded-md py-3 px-3 mt-4 hover:bg-[#F84E1D] cursor-pointer">
            SUBSCRIBE
          </button>
        </div>
   
      </div>
      <div className="h-[70px] w-full border-t-1 border-[#333338] flex flex-row items-center justify-between px-22 text-white">
        <p>Copyright © 2025 Elever. All Rights Reserved.</p>
        <div className="flex flex-row gap-10">
          <p>Terms of use</p>
          <p>Privacy</p>
          <p>Environmental Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
