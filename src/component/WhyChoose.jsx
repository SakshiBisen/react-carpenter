/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Check } from "lucide-react"; // also required!

function WhyChoose() {
  const points = [
    "Custom Wooden Furniture",
    "Modular Kitchen Solutions",
    "Wood work services Jodhpur",
    "Door & Window Installations",
    "Office & Commercial Fit-Outs",
    "Bulk Manufacturing Orders",
  ];

  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#8B5E3C] mb-6">
            Why choose us
          </h2>

          <p className="text-base text-dark mb-6">
            We deliver high-quality carpentry and furniture services across Rajasthan.
          </p>

          <ul className="space-y-4">
            {points.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <Check className="text-accent" size={20} />
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1000&auto=format&fit=crop"
            alt="Furniture work"
            className="rounded-2xl shadow-xl h-auto w-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChoose;