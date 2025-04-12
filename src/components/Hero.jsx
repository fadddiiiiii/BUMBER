import React from 'react';
import { Link } from 'react-router';
import { HiArrowRight } from 'react-icons/hi';
import video from '../assets/banner-video.mov';
import bannerLeft from '../assets/banner-left.avif';
import bannerRight from '../assets/banner-right.png';
const Hero = () => {
  return (
    <div className="bg-black text-white md:pt-5 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-9  pb-16 relative">
        {/* video */}
        <div className='w-full h-full mt-20 relative'>
          <video src={video} autoPlay muted loop className='w-full h-full object-cover' />

          
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center items-center ">
        <div className="flex sm:flex-row flex-wrap gap-8 shrink-0">
        <a
  href="https://signup-topaz-eight.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-block px-10 py-6 mt-16 text-lg font-bold text-white text-center transition-transform duration-300 ease-in-out transform bg-gradient-to-br from-green-400 to-blue-600 rounded-lg shadow-md hover:scale-105 hover:bg-gradient-to-bl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 overflow-hidden group"
>
  <span className="absolute inset-0 w-full h-full transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-10"></span>
  <span className="relative text-xl z-10">JOIN NOW</span>
</a>


  </div>
</div>
        {/* overlay */}
        {/* <div className='absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-t from-black to-transparent hidden md:block'></div> */}
      </div>
    </div>
  );
};

export default Hero;