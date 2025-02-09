const testimonialsData = [
  {
    image:
      "https://html.themewant.com/elever/assets/images/testimonials/06.webp",
    name: "Daniel Kobak",
    company: "MARKTWO.INC",
    feedback:
      "The innovation designs presented exceeded our expectations. Their creative approach and attention to details were evident in every aspect of the project. Aesthetics showcased their commitments.",
    brandImage:
      "https://html.themewant.com/elever/assets/images/testimonials/brand/01.webp",
  },
  {
    image:
      "https://html.themewant.com/elever/assets/images/testimonials/07.webp",
    name: "Sarah Johnson",
    company: "BUILDTECH",
    feedback:
      "Their professional team delivered high-quality work and demonstrated strong project management skills. We are extremely satisfied with the results and highly recommend their services.",
    brandImage:
      "https://html.themewant.com/elever/assets/images/testimonials/brand/02.webp",
  },
  {
    image:
      "https://html.themewant.com/elever/assets/images/testimonials/08.webp",
    name: "Michael Lee",
    company: "CONSTRUCTO",
    feedback:
      "The project was completed on time and within budget. Their innovative solutions and expertise helped us achieve our goals efficiently. We appreciate their dedication and hard work.",
    brandImage:
      "https://html.themewant.com/elever/assets/images/testimonials/brand/03.webp",
  },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen h-auto w-full py-16 px-12 bg-[#f84e1d] flex flex-col items-center font-lexend">
      <div className="w-full h-[120px] border-b-1 border-b-white flex flex-col justify-around">
        <p className="uppercase text-white font-bold">Testimonials</p>
        <p className="uppercase text-white text-4xl mb-8 mt-4 font-bold">
          We’re The Leader In Construction Industry
        </p>
      </div>

      <div className="card-container w-full flex overflow-x-auto whitespace-nowrap  hideScrollbar mt-10 gap-16">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="card h-[500px] w-[500px] ml-10 flex-shrink-0 flex flex-col items-start bg-white overflow-hidden shadow-lg rounded-xl"
          >
            <div className="flex flex-row items-center gap-6 ">
              <img
                src={testimonial.image}
                alt="testimonials"
                className="h-[150px]"
              />
              <div>
                <p className="text-2xl font-bold text-[#141416]">
                  {testimonial.name}
                </p>
                <p className="text-sm mt-2 text-[#f84e1d] font-semibold">
                  {testimonial.company}
                </p>
              </div>
            </div>
            <p className="text-[#999999] px-10 text-lg mt-12 break-words whitespace-normal">
              {testimonial.feedback}
            </p>
            <img
              src={testimonial.brandImage}
              alt="testimonials"
              className="h-[40px] mt-12 ml-10"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
