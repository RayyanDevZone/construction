import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const teamMembers = [
  {
    image: "https://html.themewant.com/elever/assets/images/team/11.webp",
    name: "John Doe",
    post: "Lead Architect"
  },
  {
    image: "https://html.themewant.com/elever/assets/images/team/09.webp",
    name: "Jane Smith",
    post: "Project Manager"
  },
  {
    image: "https://html.themewant.com/elever/assets/images/team/10.webp",
    name: "David Brown",
    post: "Civil Engineer"
  }
];

const TeamMember = () => {
useGSAP(()=>{
  gsap.from(".team ,.services",{
    opacity:0,
    x:-100,
    scrollTrigger:{ trigger:".team ,.services",
    },
    duration:1,

  })
})
useGSAP(()=>{gsap.from(".cards-team",{
  opacity:0,
  y:-100,
  scrollTrigger:{ trigger:".cards-team",start:"top 80%",},
  stagger:.3,
  duration:1
})})
   
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center sm:py-16 py-8 sm:px-10 px-4 bg-[#F5F3F2] font-lexend">
      <div className="w-full h-[120px] border-b-1 border-b-[#999999] flex flex-col justify-around ">
        <p className="services uppercase text-[#f84e1d] font-bold">Service we provide</p>
        <p className="team uppercase text-[#141416] sm:text-5xl text-2xl font-bold">Expert Team Members</p>
      </div>
      <div className="cards-container w-full flex overflow-x-auto whitespace-nowrap hide-scrollbar sm:mt-10 mt-16 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="cards-team sm:w-[350px] w-[400px] sm:h-[450px] h-[550px] flex-shrink-0 flex flex-col items-start bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full h-[350px] bg-cover bg-center rounded-b-2xl" style={{ backgroundImage: `url(${member.image})` }}></div>
            <div className="p-4 text-start">
              <p className="text-2xl font-bold">{member.name}</p>
              <p className="text-sm mt-2 text-[#999999]">{member.post}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
