/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import { Hammer, ChefHat, DoorOpen, Briefcase, Wrench, Factory } from "lucide-react";

function Services() {
  const services = [
    {
      title: "Custom Wooden Furniture",
      img: "https://plus.unsplash.com/premium_photo-1744799173390-8084e843253d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3VzdG9tJTIwV29vZGVuJTIwRnVybml0dXJlfGVufDB8fDB8fHww",
      icon: Hammer,
    },
    {
      title: "Modular Kitchen",
      img: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=800&auto=format&fit=crop",
      icon: ChefHat,
    },
    {
      title: "Doors & Windows",
      img: "https://images.unsplash.com/photo-1725261707741-b39e3476f516?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fERvb3JzJTIwJTI2JTIwV2luZG93c3xlbnwwfHwwfHx8MA%3D%3D",
      icon: DoorOpen,
    },
    {
      title: "Office Furniture",
      img: "https://images.unsplash.com/photo-1758977403616-056095cfb6c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGFsbCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      icon: Briefcase,
    },
    {
      title: "Aluminum Work",
      img: "https://plus.unsplash.com/premium_photo-1683141491701-6a4e1d9ea3fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFsbCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      icon: Wrench,
    },
    {
      title: "Best Furniture ",
      img: "https://images.unsplash.com/photo-1653971858625-9cb23d0dca80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsbCUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      icon: Factory,
    },
  ];

  return (
    <section id="services" className="   bg-background">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-5xl font-bold text-primary mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 mb-16">
          We provide premium carpentry & furniture services across Rajasthan
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <service.icon size={24} className="text-primary" />
                  <h3 className="text-xl font-semibold text-primary">
                    {service.title}
                  </h3>
                </div>

                <a
                  href="#contact"
                  className="text-sm font-medium text-dark hover:text-primary transition"
                >
                  Get Service →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;