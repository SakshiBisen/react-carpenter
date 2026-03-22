import { MapPin, Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#8B5E3C] text-white text-center pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Shri Naganaraya Furniture
          </h2>
          <p className="text-gray-200 text-sm">
            Professional Carpenter Services in Rajasthan. We provide
            furniture making, repair, installation and custom wooden
            designs with high quality finishing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#faq" className="hover:text-yellow-400">FAQ</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li>Furniture Making</li>
            <li>Furniture Repair</li>
            <li>Door & Window Work</li>
            <li>Modular Kitchen</li>
            <li>Custom Wood Design</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Info
          </h3>

          <div className="space-y-3 text-gray-200 text-sm">

            <div className="flex items-center gap-2">
              <MapPin size={18}/>
              <span>Jodhpur, Rajasthan</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18}/>
              <span>+91 6376075132</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18}/>
              <span>info@shrinarayanfurniture.com</span>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-gray-300 text-sm">
        © 2026 Shri Naganaraya Furniture | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;