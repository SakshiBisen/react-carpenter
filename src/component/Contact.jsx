import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>

          <h3 className="text-3xl font-bold text-black mb-6">
            With Shri Naganaraya Furniture
          </h3>

          <p className="text-black text-lg mb-8">
            Reach out for custom furniture, kitchen work, or any carpentry
            requirement – we deliver premium craftsmanship with every order.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Location */}
            <div className="bg-gray-900 p-6 rounded-xl flex items-center gap-4">
              <div className="bg-yellow-400 text-black p-3 rounded-full">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-sm text-gray-300">
                  Jodhpur, Rajasthan
                </p>
              </div>
            </div>

            {/* Call */}
            <div className="bg-gray-900 p-6 rounded-xl flex items-center gap-4">
              <div className="bg-yellow-400 text-black p-3 rounded-full">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-semibold text-white">Call Us</p>
                <p className="text-yellow-400 font-medium">
                  +91 6376075132
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-900 p-6 rounded-xl flex items-center gap-4">
              <div className="bg-yellow-400 text-black p-3 rounded-full">
                <Mail size={22} />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-sm text-gray-300">
                  shivanshenterprises@gmail.com
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-gray-900 p-6 rounded-xl flex items-center gap-4">
              <div className="bg-green-500 text-white p-3 rounded-full">
                📱
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <a
                  href="https://wa.me/916376075132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400"
                >
                  Chat Now
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1663091030467-22032c4b0aea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FycGVudGVyJTIwY29udGFjdCUyMHVzfGVufDB8fDB8fHww"
            alt="Furniture Service"
            className="rounded-2xl shadow-2xl   h-3000 w-1000 "
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;