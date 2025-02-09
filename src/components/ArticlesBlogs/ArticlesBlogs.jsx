const ArticlesBlogs = () => {
  return (
    <div className="min-h-screen h-auto w-full flex flex-col px-12 py-16 bg-[#F5F3F2] font-lexend">
      <div className="w-full h-[120px] border-b-1 border-b-[#EBE4E0] flex flex-row justify-between items-center">
        <div>
          <p className="uppercase text-[#f84e1d] font-bold">
            {" "}
            services we provide
          </p>
          <p className="uppercase text-[#141416] text-5xl mb-8 mt-4 font-bold">
            Articles & Blog Posts
          </p>{" "}
        </div>
        <button className="bg-[#F84E1D] cursor-pointer text-white px-8 py-3 tracking-tighter rounded-md h-12 font-semibold text-xl">
          View All Posts
        </button>
      </div>

      <div className="w-full mx-5 flex flex-col px-4 py-5 min-h-[800px] items-center  bg-white rounded-xl mt-16 ">
        <p className="uppercase border-b-1 border-[#EBE4E0] flex items-center justify-center w-full pb-4">
          Through a unique combination of engineering, and construction
        </p>
        <img
          src="https://html.themewant.com/elever/assets/images/blog/15.webp"
          className="w-full rounded-xl my-3"
        ></img>
        <div className="w-full border-t-1 border-[#EBE4E0] h-[200px] flex flex-row items-center ">
          <div className="h-full flex flex-col pl-5 font-bold justify-center w-[150px] border-r-1 border-[#EBE4E0]">
            <img
              src="https://html.themewant.com/elever/assets/images/blog/18.webp"
              className="h-[70px] w-[70px]"
            />
            <p className="mt-5 text-start">BY</p>
            <p className="text-start">Markus Smith</p>
          </div>
          <div className="flex flex-col px-5 py-7">
            <div className=" flex flex-row items-center gap-8 uppercase ">
              <p className="text-[#1d1d1f]">18 December, 2024 </p>
              <p className="text-[#f84e1d] ">Interior Design</p>
            </div>{" "}
            <p className="text-2xl font-bold text-[#1d1d1f] mt-5 uppercase hover:text-[#f84e1d] cursor-pointer">
              construction and design disciplines and expertise,liquid
              <br /> delivers excellent design perspective through
            </p>
            <p className="underline font-bold mt-3 cursor-pointer">READ DETAILS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesBlogs;
