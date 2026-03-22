import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav
      className="bg-white shadow-md fixed w-full z-50"
    >
  <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

    <h1
      className="text-2xl font-bold text-[#6B4226]"
    >
      🪵 Shri Naganaraya Furniture
    </h1>

    <ul
      className="hidden md:flex gap-8 font-medium text-gray-700"
    >
      <li><a href="#home" className="hover:text-[#6B4226]">Home</a></li>
      <li><a href="#about" className="hover:text-[#6B4226]">About</a></li>
      <li><a href="#services" className="hover:text-[#6B4226]">Services</a></li>
      <li><a href="#why" className="hover:text-[#6B4226]">Why Choose</a></li>
      <li><a href="#contact" className="hover:text-[#6B4226]">Contact</a></li>
      <li><a href="#faq" className="hover:text-[#6B4226]">FAQ</a></li>
    </ul>

    <a
      href="tel:6376075132"
      className="bg-[#6B4226] text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition"
    >
      📞 Call Now
    </a>

  </div>
</nav>
    </>
  )
}

export default Navbar
