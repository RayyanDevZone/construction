import { IoLocationOutline } from "react-icons/io5";

const cardsData = [
  {
    title: "Azila Mansion",
    subtitle: "Luxury Residences, Modern Homes",
    location: "Dubai Marina",
    image: "https://html.themewant.com/elever/assets/images/portfolio/05.webp",
    details: {
      Price: "From $290k",
      Client: "RC Builders",
      "Project year": "15 Oct 2025",
      Duration: "3Y, 4M"
    }
  },
  {
    title: "Greenfield Eco Community",
    subtitle: "Luxury Residences, Modern Homes",
    location: "Berlin, Germany",
    image: "https://html.themewant.com/elever/assets/images/portfolio/06.webp",
    details: {
      Price: "From $290k",
      Client: "RC Builders",
      "Project year": "15 Oct 2025",
      Duration: "3Y, 4M"
    }
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen h-auto flex flex-col sm:px-18 px-4 bg-[#EFEBE7] font-lexend">
      <div className="w-full flex sm:flex-row flex-col justify-between sm:items-center items-start mt-20">
        <div>
          <p className="sm:text-5xl text-3xl font-bold text-[#1D1D1F]">
            What we create last 5+ years<br/>
            for our customers
          </p>
          <p className="text-sm mt-5 text-[#999999]">
            Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla
            turpis integer dui sed <br /> posuere sem. Id molestie mi arcu
            gravida lorem potenti.
          </p>
        </div>
        <button className="bg-[#F84E1D] cursor-pointer text-white mt-5 px-8 py-3 tracking-tighter rounded-md font-semibold text-xl">
          More Portfolio
        </button>
      </div>

      <div className="h-auto flex overflow-x-auto whitespace-nowrap hide-scrollbar mt-10 mb-10 gap-16">
        {cardsData.map((card, index) => (
          <div key={index} className="card sm:w-[550px] sm:h-[600px] h-[500px] w-[355px] flex-shrink-0 rounded-2xl flex flex-col bg-white">
            <div
              className="w-full h-3/5 rounded-t-2xl bg-cover bg-center px-12 py-8 flex flex-col justify-between text-white"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div>
                <p className="sm:text-3xl text-xl font-bold">{card.title}</p>
                <p className="text-sm">{card.subtitle}</p>
              </div>
              <div className="border border-white px-3 backdrop-blur-md py-2 w-40 rounded-md flex items-center justify-center">
                <IoLocationOutline className="mr-2" /> {card.location}
              </div>
            </div>
            <div className="h-2/5 w-full flex flex-row justify-center flex-wrap gap-4 p-4">
              {Object.entries(card.details).map(([key, value], index) => (
                <div key={index} className="h-auto sm:w-[130px] w-[150px] rounded-lg bg-[#F5f5f5] border border-[#EDECEC] flex flex-col px-2 py-2">
                  <p className="text-[#999999]">{key}:</p>
                  <p className="text-xl font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
