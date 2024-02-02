import React, { useEffect } from "react";
import image from "../assets/bg1.png";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const handleClick = () => {
      navigate('../home')
  }
  return (
    <div className='w-full h-full bg-cover filter flex justify-center items-center relative' style={{backgroundImage:`url(${image})`}}>
         <div className='absolute top-0 left-0 w-full p-3 flex justify-between items-center bg-black'>
             <h1 className='text-white text-3xl ml-5 font-semibold cursor-pointer'>MoviesFare</h1>
             <button className='py-[10px] px-4 bg-red-600 md:mr-8 text-white border border-none rounded-md tracking-wider cursor-pointer'>SignIn</button>
         </div>
         <div className='flex flex-col justify-center items-center gap-5'>
            <h1 className='text-white md:text-4xl text-3xl text-center text-wrap'>Book Your Tickets anywhere, anytime!!</h1>
            <button className='md:py-3 md:px-24 py-2 px-14 text-white text-2xl rounded-lg cursor-pointer bg-red-700 hover:bg-red-800 ' onClick={handleClick}>Get Started</button>
         </div>
    </div>
  );
};

export default Welcome;
