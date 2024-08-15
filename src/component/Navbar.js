import React from 'react';
import logo from '../images/logo.png';

export default function Navbar() {
  return (
    <div>
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img src={logo} className='w-48 p-2 ' alt="logo" />
    <nav class="md:ml-auto flex flex-wrap items-center text-lg justify-center text-black">
      <div class="mr-5 hover:text-gray-900">Add Job</div>
      <div class="mr-5 hover:text-gray-900">Want Job</div>
      <div class="mr-5 hover:text-gray-900">Contact</div>
      <div class="mr-5 hover:text-gray-900">Fourth Link</div>
    </nav>
      <button class="inline-flex items-center bg-[#212A3B] text-white  border-0 py-1 px-3 focus:outline-none hover:bg-[#3e3b3b] rounded text-lg mt-4 md:mt-0">Login Now
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </div>
  );
}
