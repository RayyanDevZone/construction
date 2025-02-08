import { FaLocationArrow } from "react-icons/fa";
const DemandingServices = () => {
  return (
    <div className="w-full min-h-screen h-auto bg-[#EDE9E5]">
      <div className="h-[200px] w-full  flex flex-row justify-between items-center px-16 font-lexend ">
        <div>
          <p className="text-4xl font-bold">We Provide Demanding Services</p>
          <p className="mt-3 text-sm text-[#999999]">
            Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla
            turpis integer dui sed
            <br /> posuere sem. Id molestie mi arcu gravida lorem potenti.
          </p>
        </div>
        <button className="bg-[#F84E1D] cursor-pointer text-white px-8 py-3 tracking-tighter rounded-md font-semibold text-lg flex flex-row items-center">
          Book Appointment <FaLocationArrow className="ml-3" />
        </button>
      </div>


      <div className="w-full h-[400px] rounded-xl"
        style={{ backgroundImage: `url("https://html.themewant.com/elever/assets/images/service/03.webp")` }}> </div>
    </div>
  );
};

export default DemandingServices;
