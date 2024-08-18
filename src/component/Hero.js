import React from 'react';
import hero_img from '../images/hero.png';

export default function Hero() {
  return (
    <div className="relative">
      <img 
        className="w-full h-[90vh] object-cover brightness-50" 
        src={hero_img} 
        alt="home" 
      />
      <div className="absolute inset-0 flex mt-48  md:justify-center md:items-center md:mt-0">
        <h1 className="text-[#FFF9E3] text-3xl sm:text-4xl md:text-5xl font-varela  font-bold text-center px-4">
          Transform Your Career : <br /> Discover the Right Job for You!
        </h1>
      </div>
    </div>
  );
}
