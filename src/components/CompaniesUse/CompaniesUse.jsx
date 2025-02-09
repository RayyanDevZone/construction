const companiesData = [
  {
    image: "https://html.themewant.com/elever/assets/images/brand/07.svg",
    heading: "Nicraft",
    description: "There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks"
  },
  {
    image: "https://html.themewant.com/elever/assets/images/brand/08.svg",
    heading: "Encline",
    description: "There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks"
  },
  {
    image: "https://html.themewant.com/elever/assets/images/brand/08.svg",
    heading: "Corato",
    description: "There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks"
  },
  {
    image: "https://html.themewant.com/elever/assets/images/brand/10.svg",
    heading: "Campie",
    description: "There are generally two types of AI: Narrow or Weak AI, which is designed to perform specific tasks"
  }
];

const CompaniesUse = () => {
  return (
    <div className="min-h-screen h-auto w-full bg-[#EFEBE7] flex flex-col sm:px-16 px-8 justify-between py-5 font-lexend">
      <p className="sm:text-4xl text-2xl font-bold text-[#1D1D1F]">
        <span className="text-[#f84e1d]">156+ </span>
        companies use Elever to<br /> power their integrations
      </p>
      <div className="card-container flex sm:flex-row flex-col w-full mb-10 gap-8 mt-8">
        {companiesData.map((company, index) => (
          <div key={index} className="card h-[300px] sm:w-[260px] w-[350px] bg-white rounded-xl flex flex-col items-center justify-between  p-4">
            <div className="h-[40px] w-[200px]  bg-cover bg-center mt-8" style={{ backgroundImage: `url(${company.image})` }}></div>
            <div className="h-[2px] rounded-full mt-4 w-full bg-[#f84e1d]"></div>
            <div className="flex flex-col h-2/3  mt-4">
              <p className="text-xl text-start font-bold">{company.heading}</p>
              <p className="text-sm/6 text-start  text-[#999999] mt-2 ">{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesUse;
