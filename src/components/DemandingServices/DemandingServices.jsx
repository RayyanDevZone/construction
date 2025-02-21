import { FaLocationArrow } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);
const servicesData = [
  {
    image: "https://html.themewant.com/elever/assets/images/service/icons/04.svg",
    number: "01",
    heading: "Experience & Quality",
    description: "Once planning is complete, site preparation begins. This phase involves clearing the land, grading, and excavating the site to ensure it is ready."
  },
  {
    image: "https://html.themewant.com/elever/assets/images/service/icons/05.svg",
    number: "02",
    heading: "Innovative Solutions",
    description: "Implementing cutting-edge technologies and processes to deliver innovative solutions tailored to client needs."
  },
  {
    image: "https://html.themewant.com/elever/assets/images/service/icons/06.svg",
    number: "03",
    heading: "Sustainable Practices",
    description: "Focusing on eco-friendly and sustainable practices to minimize environmental impact and promote long-term benefits."
  }
];


const DemandingServices = () => {
  useGSAP(()=>{
    gsap.from(".card",{
      opacity:0,
      y:-100,
      scrollTrigger:{ trigger:".card",start:"top 80%",},
      stagger:.3,
      duration:1
    })
  })
  useGSAP(()=>{
    gsap.from(".head , .mdhead",{
      opacity:0,
      x:-100,
      scrollTrigger:{ trigger:".head",start:"top 80%",},
      duration:.7,
      stagger:.3
    })
  })
  useGSAP(()=>{
    gsap.from(".btn-demand",{
      opacity:0,
      x:100,
      scrollTrigger:{ trigger:".btn-demand",start:"top 80%",},
      duration:.7,
      stagger:.3
    })
  })

  return (
    <div className="w-full min-h-screen h-auto bg-[#EDE9E5]">
      <div className="h-[200px] w-full  flex sm:flex-row flex-col justify-between sm:items-center items-start sm:px-16 px-4 py-20  font-lexend ">
        <div>
          <p className=" head sm:text-4xl text-2xl font-bold">We Provide Demanding Services</p>
          <p className=" mdhead mt-3 text-sm text-[#999999]">
            Quis nulla blandit vulputate morbi adipiscing sem vestibulum. Nulla
            turpis integer dui sed
            <br /> posuere sem. Id molestie mi arcu gravida lorem potenti.
          </p>
        </div>
        <button className="btn-demand bg-[#F84E1D] cursor-pointer text-white px-8 py-3 my-3 tracking-tighter rounded-md font-semibold text-lg flex flex-row items-center">
          Book Appointment <FaLocationArrow className="ml-3" />
        </button>
      </div>

      <div
        className="w-full h-[400px] rounded-xl mt-27"
        style={{
          backgroundImage: `url("https://html.themewant.com/elever/assets/images/service/03.webp")`,
        }}
      >
        {" "}
      </div>
      <div className="card-container w-full h-auto flex sm:flex-row flex-col items-center justify-center gap-8 mt-8 relative top-[-121.5px]">
        {servicesData.map((service, index) => (
          <div key={index} className="card w-[350px] flex flex-col h-[300px] rounded-xl bg-white overflow-hidden font-lexend">
            <div className="h-1/3 flex flex-row items-center justify-between">
              <div className="h-full bg-[#F84E1D] w-[100px] flex items-center justify-center rounded-br-md">
                <img src={service.image} alt="service icon" />
              </div>
              <p className="text-6xl text-[#EFEBE7] font-bold mr-10">{service.number}</p>
            </div>
            <div className="h-2/3 my-4 px-8 flex flex-col items-start justify-center">
              <h1 className="text-xl text-[#1D1D1F] font-bold">{service.heading}</h1>
              <p className="text-sm text-[#959784]">{service.description}</p>
              <p className="flex flex-row items-center gap-2 mt-2 text-[#F84E1D] cursor-pointer">
                Read more <FaArrowRight />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemandingServices;
