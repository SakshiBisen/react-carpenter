function Hero() {
  return (
    <section
      className="h-screen w-full overflow-hidden bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop")`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center text-white px-4 sm:px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premium Custom Furniture in Jodhpur.
        </h1>

        <p className="text-lg md:text-xl mb-8">
          High-quality wooden furniture & aluminum work across Rajasthan.
        </p>

        <a
          href="#contact"
          className="bg-[#6B4226] hover:bg-[#8B5E3C] transition px-8 py-3 rounded-full text-white font-semibold"
        >
          Get Free Quote
        </a>
      </div>
    </section>
  );
}
export default Hero;