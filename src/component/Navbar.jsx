import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Phone, MessageCircle } from "lucide-react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-3 py-4">

          {/* Logo */}
          <h1 className="text-lg sm:text-2xl font-bold text-[#6B4226]">
            🪵 Shri Naganaraya Furniture 
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
            <li><a href="#home" className="hover:text-[#6B4226]">Home</a></li>
            <li><a href="#about" className="hover:text-[#6B4226]">About</a></li>
            <li><a href="#services" className="hover:text-[#6B4226]">Services</a></li>
            <li><a href="#why" className="hover:text-[#6B4226]">Why Choose</a></li>
            <li><a href="#contact" className="hover:text-[#6B4226]">Contact</a></li>
            <li><a href="#faq" className="hover:text-[#6B4226]">FAQ</a></li>
          </ul>

          {/* Hamburger */}
          <div className="md:hidden text-[#6B4226]">
            {open ? (
              <X size={28} onClick={() => setOpen(false)} />
            ) : (
              <Menu size={28} onClick={() => setOpen(true)} />
            )}
          </div>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white px-6 pb-4 shadow-md">
            <ul className="flex flex-col gap-4 font-medium text-[#6B4226]">
              <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
              <li><a href="#why" onClick={() => setOpen(false)}>Why Choose</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
              <li><a href="#faq" onClick={() => setOpen(false)}>FAQ</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* 📞 CALL BUTTON */}

<a
  href="tel:+916376075132"
  className="
  fixed bottom-4 right-4 
  bg-[#6B4226] 
  text-white px-4 py-2 rounded-full shadow-lg 
  hover:scale-110 transition z-50 flex items-center gap-2"
>
  <Phone className="text-black bg-white p-1 rounded-full" size={20} />
  <span>Call</span>
</a>




    </>
  );
};

export default Navbar;