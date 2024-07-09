import React from "react";

interface HeroProps {
  heading: string;
  message: string;
}

const Hero: React.FC<HeroProps> = ({ heading, message }) => {
  return (
    <div className="min-h-screen w-full pl flex items-center justify-center mb-12 bg-cover bg-center bg-fixed  custom-img overflow-hidden">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 Z-[2]" />

      {/* <div className="text-white z-[2] ">
        <h2 className="text-6xl font-bold ">{heading}</h2>
        <p className="py-5 w-[800px] text-xl leading-[1.6]">{message}</p>
        <div className="flex gap-28 mt-5 items-center justify-center ">
          <button className="btn btn-outline rounded-full px-20  text-[1.1rem] text-white">Buy Art</button>
          <button className="btn btn-outline rounded-full px-20 text-[1.1rem] text-white">Events</button>
        </div>
      </div> */}

      <div className="p-16 text-white z-[2] max-w-[900px] sm:mt-0 mt-20">
        <h2 className="text-6xl font-bold" >{heading}</h2>
        <p className="py-5 text-xl leading-[1.5]" >{message}</p>
        <div className=" flex sm:items-center justify-center flex-wrap gap-4 sm:gap-28 mt-10 sm:mt-10 ">
          <button className="btn btn-outline text-white w-[250px] h-[60px] text-[1.2rem]">Buy Art</button>
          <button className="btn btn-outline text-white w-[250px] text-[1.2rem] h-[60px]">Events</button>
        </div>
      </div>

     
    </div>
  );
};

export default Hero;
