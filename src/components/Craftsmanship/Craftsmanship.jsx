import { MdCheckCircle } from "react-icons/md";

const Craftsmanship = () => {
  return (
    <div className="py-20 w-full min-h-screen h-auto bg-white flex flex-row items-center px-16 font-lexend mb-10">
      <img
        src="https://html.themewant.com/elever/assets/images/about/02.webp"
        className="h-[400px] w-[450px] "
      />
      <div className="pl-10 flex flex-col">
        <p className="text-4xl font-bold">
          A Tradition of Craftsmanship, Innovation, and Client-Centered
          Solutions in Every
          <br /> Project
        </p>
        <p className="mt-3 text-sm text-[#999999]">
          We build multi-family and affordable housing communities, industrial
          facilities, public and private healthcare facilities, fitness centers
          and office buildings. We improve the supply chain management process,
          increase operational efficiencies and build environments that foster
          creativity.
        </p>
        <div className="flex flex-col mt-4">
          <p className="flex flex-row gap-2 items-center">
          <MdCheckCircle className="text-[#F84E1D] text-lg"/>
            Structural Integrity Verification
          </p>
          <p className="flex flex-row gap-2 items-center">
          <MdCheckCircle className="text-[#F84E1D] text-lg"/>
            Energy Efficiency & Sustainability Compliance
          </p>
          <p className="flex flex-row gap-2 items-center">
            <MdCheckCircle className="text-[#F84E1D] text-lg"/>
            Precision in Finishing Touches
          </p>
        </div>
        <button className="bg-[#F84E1D] cursor-pointer w-56 text-white px-8 py-3 tracking-tighter rounded-md font-semibold text-lg mt-4">
          More About Us
        </button>
      </div>
    </div>
  );
};

export default Craftsmanship;
