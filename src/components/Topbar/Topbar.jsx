import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);



const Topbar = () => {
  useGSAP(()=>{
    gsap.from(".contactdiv p",{
      opacity:0,
      y:-100,
      stagger:.3,
      duration:1,
      scrollTrigger:{ trigger:".contactdiv",start:"top 80%",}
  })
  })
  useGSAP(()=>{
    gsap.from(".icondiv p",{
      opacity:0,
      y:-100,
      stagger:.3,
      duration:1,
      scrollTrigger:{ trigger:".icondiv",start:"top 80%",}
  })
  })
  return (
    <div className="hidden lg:flex h-14 w-full bg-[#1D1D1F] flex-row justify-between items-center px-16 font-lexend">
      <div className="contactdiv text-white flex flex-row">
        <p className="flex flex-row items-center px-10 gap-3">
          <IoIosPhonePortrait />
          (555) 123-4567, (555) 876-5432
        </p>
        <p className="flex flex-row items-center gap-2 font-semibold">
          <MdEmail/>
          info@elever.com
        </p>
      </div>
      <div className="icondiv flex flex-row items-center text-white">
        <p className="flex flex-row items-center text-md font-semibold">
          Follow us on:{" "}
        </p>
        <p className="flex flex-row gap-2 px-3 font-bold">
          <FaFacebookF className="cursor-pointer"/>
          <FaWhatsapp className="cursor-pointer"/>
          <FaXTwitter className="cursor-pointer"/>
          <FaLinkedinIn className="cursor-pointer"/>
        </p>
      </div>
    </div>
  );
};

export default Topbar;
