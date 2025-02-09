const cardItems = [
  {
    image: "https://html.themewant.com/elever/assets/images/facts/icon/06.svg",
    title: "3,658+",
    description: "Years Of Experience"
  },
  {
    image: "https://html.themewant.com/elever/assets/images/facts/icon/07.svg",
    title: "658+",
    description: "Expert Members"
  },
  {
    image: " https://html.themewant.com/elever/assets/images/facts/icon/08.svg",
    title: "368+",
    description: "Modern Equipment"
  },
  {
    image: "https://html.themewant.com/elever/assets/images/facts/icon/09.svg",
    title: "153+",
    description: "Tons Of Harvest"
  }
];

const About = () => {
  return (
    <div
      className="h-[636px] w-full flex flex-col items-center px-16 font-lexend"
      style={{
        backgroundImage: `url("https://html.themewant.com/elever/assets/images/why-choose/01.webp")`,
      }}
    >
      <div className="flex flex-row items-center justify-between w-full px-8 mt-16">
        <div className="text-white">
          <p className="uppercase text-[#f84e1d]">About our company</p>
          <p className="text-5xl mt-4 font-bold uppercase">
            We are The Leader In
            <br />
            Construction Industry{" "}
          </p>
        </div>
        <button className="bg-[#F84E1D] cursor-pointer text-white px-8 py-3 tracking-tighter rounded-md font-semibold text-md">
          Make an Appointment
        </button>
      </div>

      <div className="card-container w-full flex flex-row justify-center  mt-24">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className={`card flex flex-row h-[200px] w-[300px] justify-center items-center ${
              index === 0 || index === cardItems.length - 1
                ? "border-t border-b border-[#2B2B30]"
                : "border border-[#2B2B30]"
            }`}
          >
            <div className="border border-gray-700 bg-[#141416] h-[75px] w-[75px] rounded-full mx-3 flex justify-center items-center">
              <img src={item.image} alt={item.title} className="h-[50px] w-[50px]" />
            </div>
            <div>
              <p className="font-bold text-4xl text-white">{item.title}</p>
              <p className="text-[#656565] text-md">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
