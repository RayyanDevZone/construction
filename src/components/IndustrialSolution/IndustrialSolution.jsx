import { FaRegClock } from "react-icons/fa";

const cardData = [
  {
    number: "01",
    heading: "Project Planning",
    details:
      "Collaborating with architects, engineers, and designers to create detailed plans & blueprints.",
  },
  {
    number: "02",
    heading: "Site Preparation",
    details:
      "Collaborating with architects, engineers, and designers to create detailed plans & blueprints.",
  },
  {
    number: "03",
    heading: "System Installation",
    details:
      "Collaborating with architects, engineers, and designers to create detailed plans & blueprints.",
  },
  {
    number: "04",
    heading: "Client Handover",
    details:
      "Collaborating with architects, engineers, and designers to create detailed plans & blueprints.",
  },
];

const IndustrialSolution = () => {
  return (
    <div
      className="min-h-screen w-full flex-col flex items-center justify-center font-lexend"
      style={{
        backgroundImage: `url("https://html.themewant.com/elever/assets/images/working-process/03.webp")`,
      }}
    >
      <h1 className=" text-white text-[99px] font-bold hidden sm:block">INDUSTRIAL SOLUTION</h1>
      <p className="text-white sm:text-4xl text-2xl text-center font-bold sm:mt-10 mt-[199px]">
        What Is The Working Process Like?
      </p>
      <p className="text-center text-white mt-10 mb-18 text-sm">
        Interior design is the art and science of enhancing the interiors,
        sometimes including the
        <br /> exterior, of a space or building, to achieve a healthier and more
        aesthetically pleasing
        <br /> environment.
      </p>
      <div className="min-h-screen w-full bg-[#212529] flex flex-col  items-center">
        <div className=" relative top-[-70px]">
          <div className="w-full flex flex-row gap-4 justify-center flex-wrap items-center">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="card-map  w-[250px] h-[280px]  flex flex-col items-center justify-between p-4 m-2"
              >
                <div className="w-[100px] h-[100px] bg-[#212529] border border-gray-600 rounded-full flex items-center justify-center drop-shadow-2xl">
                  <div className="w-[75px] h-[75px] border border-gray-600 rounded-full flex items-center justify-center hover:bg-[#F84E1D] cursor-pointer ease-in-out duration-100 drop-shadow-xl">
                    <p className="text-white text-3xl font-bold">
                      {card.number}
                    </p>
                  </div>
                </div>
                <p className="text-white text-xl font-bold">{card.heading}</p>
                <p className="text-[#999999] text-sm text-center">
                  {card.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="
      flex sm:flex-row flex-col w-full sm:px-16 px-4 justify-center items-center h-[400px] gap-8"
        >
          <p className="flex flex-row  items-center gap-3 sm:px-3 px-6 py-6 rounded-xl text-white bg-[#f84e1d]">
            <FaRegClock />
            Sunday - Thursday: 8:00 am to 10:45 pm
          </p>
          <p className="bg-[#141416] text-white rounded-lg flex sm:flex-row flex-col sm:items-center items-start sm:gap-20 gap-5 px-8 py-5">
            <p className="sm:text-2xl text-[22px] font-bold">Lets Bring Your Vision to Life</p>
            <p className="underline font-bold">Call Us For Appointment</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustrialSolution;
