

function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-4 tems-center">

        {/* Image Side */}
        <div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
            alt="Carpenter working"
            className="rounded-2xl shadow-2xl h-auto w-full object-cover"
          />
  
          {/* Brown Accent Box */}
          <div className="absolute -bottom-6 -right-6 bg-primary w-32 h-32 rounded-2xl -z-10"></div>
        </div>

        {/* Text Side */}
        <div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6">
            About Us
          </h2>

          <p className="leading-relaxed mb-6 text-lg text-dark">
            <span className="font-semibold text-primary">
              Shri Naganaraya Furniture
            </span>{" "}
            is a trusted Jodhpur-based furniture manufacturer with over
            10+ years of experience in crafting premium wooden furniture.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            We specialize in custom home furniture, modular kitchens,
            aluminum work, office setups, and bulk manufacturing orders
            across Rajasthan with high-quality finishing and affordable pricing.
          </p>

          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition duration-300 shadow-md"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;