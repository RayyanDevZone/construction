import { IoLocationOutline } from "react-icons/io5";

const DemandingServices = () => {
  return (
    <div className="min-h-screen h-auto flex flex-col sm:px-18 bg-[#EFEBE7] font-lexend">
      <div className="w-full flex flex-row justify-between items-center mt-20">
        <div>
          <p className="text-4xl font-bold text-[#1D1D1F]">
            Explore Our Construction Portfolio
          </p>
          <p className="text-sm mt-3 text-[#999999]">
            Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla
            turpis integer dui sed <br /> posuere sem. Id molestie mi arcu
            gravida lorem potenti.
          </p>
        </div>
        <button className="bg-[#F84E1D] cursor-pointer text-white px-8 py-3 tracking-tighter rounded-md font-semibold text-xl">
          More Portfolio
        </button>
      </div>

      <div className="h-auto flex flex-row justify-between mt-10 mb-20">
        <div className="card w-[550px] h-[600px] rounded-2xl flex flex-col bg-white">
          <div
            className="w-full h-3/5 rounded-t-2xl bg-cover bg-center px-12 py-8 flex flex-col justify-between text-white  "
            style={{
              backgroundImage: `url('https://html.themewant.com/elever/assets/images/portfolio/05.webp')`,
            }}
          >
            <div>
              {" "}
              <p className="text-3xl font-bold">Azila Mansion</p>
              <p className="text-sm">Luxury Residences, Modern Homes</p>
            </div>
            <p className="border border-white px-3 backdrop-blur-md py-2 w-40 rounded-md  flex items-center justify-center ">
              <IoLocationOutline className="mr-2" /> Dubai Marina
            </p>
          </div>
          <div className="h-2/5 w-full flex flex-row justify-center flex-wrap gap-4 p-4">
          <div className="h-auto w-[130px] rounded-lg bg-[#F5f5f5] border border-[#EDECEC] flex flex-col px-2 py-2">
              <p className="text-[#999999]">Price:</p>
              <p className="text-xl font-semibold">
                From <br /> $290k
              </p>
            </div> <div className="h-auto w-[130px] rounded-lg bg-[#F5f5f5] border border-[#EDECEC] flex flex-col px-2 py-2">
            <p className="text-[#999999]">Client:</p>
              <p className="text-xl font-semibold">
                RC <br /> Builders
              </p>
            </div> <div className="h-auto w-[130px] rounded-lg bg-[#F5f5f5] border border-[#EDECEC] flex flex-col px-2 py-2">
            <p className="text-[#999999]">Project year:</p>
              <p className="text-xl font-semibold">
                15 oct <br /> 2025
              </p>
            </div> <div className="h-auto w-[130px] rounded-lg bg-[#F5f5f5] border border-[#EDECEC] flex flex-col px-2 py-2">
            <p className="text-[#999999]">Duration:</p>
              <p className="text-xl font-semibold">
                3Y, 4M
              </p>
            </div>
          </div>
        </div>
        <div className="card w-[550px] rounded-2xl h-[600px] flex flex-col bg-white">
          <div
            className="w-full h-3/5 rounded-t-2xl bg-cover bg-center px-12 py-8 flex flex-col justify-between text-white  "
            style={{
              backgroundImage: `url('https://html.themewant.com/elever/assets/images/portfolio/06.webp')`,
            }}
          >
            <div>
              {" "}
              <p className="text-3xl font-bold">Greenfield Eco Community</p>
              <p className="text-sm">Luxury Residences, Modern Homes</p>
            </div>
            <p className="border border-white px-3 backdrop-blur-md py-2 w-44 rounded-md  flex items-center justify-center  ">
              <IoLocationOutline className="mr-2" /> Berlin, Germany
            </p>
          </div>
          <div className="h-2/5 w-full flex flex-row justify-center flex-wrap gap-4 p-4">
            <div className="h-auto w-[130px] rounded-lg bg-[#F5f5f5] border border-[#EDECEC] flex flex-col px-2 py-2">
              <p className="text-[#999999]">Price:</p>
              <p className="text-xl font-semibold">
                From <br /> $290k
              </p>
            </div>
            <div className="h-auto w-[130px] rounded-lg bg-[#F5f5f5] border border-[#EDECEC] flex flex-col px-2 py-2 ">
              <p className="text-[#999999]">Client:</p>
              <p className="text-xl font-semibold">
                RC <br /> Builders
              </p>
            </div>
            <div className="h-auto w-[130px] rounded-lg bg-[#F5f5f5] border border-[#EDECEC] flex flex-col px-2 py-2 ">
              <p className="text-[#999999]">Project year:</p>
              <p className="text-xl font-semibold">
                15 oct <br /> 2025
              </p>
            </div>
            <div className="h-auto w-[130px] rounded-lg bg-[#F5f5f5] border border-[#EDECEC] flex flex-col px-2 py-2 ">
              <p className="text-[#999999]">Duration:</p>
              <p className="text-xl font-semibold">
                3Y, 4M
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandingServices;
