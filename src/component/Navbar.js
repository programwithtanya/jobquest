import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <div>
     <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Link to={"/"}><img src={logo} className='w-40' alt="logo" /></Link>
    </div>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center text-[#1F1C1C]">
      <div class="mr-5 hover:text-gray-600 cursor-pointer font-varela">Add Job</div>
      <div class="mr-5 hover:text-gray-600 cursor-pointer font-varela">Want Job</div>
      <div class="mr-5 hover:text-gray-600 cursor-pointer font-varela">Contact</div>

    </nav>
    <Link to={"/loginpage"}>

    <button class="inline-flex items-center bg-[#212A3B] text-white  border-0 py-1 px-3 focus:outline-none hover:bg-[#3e3b3b] rounded text-lg mt-4 md:mt-0 font-varela">Login Now
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>

  </div>
</header>
    </div>
  )
}
