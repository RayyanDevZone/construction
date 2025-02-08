import { useState, useEffect } from "react";
import image1 from "../../assets/images/carousel1.webp";
import image2 from "../../assets/images/carousel2.webp";
import image3 from "../../assets/images/carousel3.webp";
const images = [image1, image2, image3];

const FirstPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-black h-screen w-full bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="flex flex-col justify-center items-start px-18 text-white font-lexend h-full">
        <p className="text-xl font-semibold">BUILDING THE BETTER FUTURE</p>
        <p className="text-6xl mt-6 mb-6 font-bold">
          Redefining Quality in Every <br />
          Brick and Beam
        </p>
        <p className="text-sm mb-8">
          we provide a range of services including residential and commercial
          construction, <br />
          Renovations,Project Management, and custom builds.
        </p>
        <div className="flex flex-row gap-4">
          <button className="bg-[#F84E1D] cursor-pointer text-white px-8 py-3 tracking-tighter rounded-md font-semibold text-xl">More About Us</button>
          <button className="text-[#F84E1D] cursor-pointer bg-white px-8 py-3 tracking-tighter rounded-md font-semibold text-xl">Our Services</button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
