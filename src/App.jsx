import React from "react";
import "./index.css";


import Hero from "./component/Hero.jsx";
import Navbar from "./component/Navbar.jsx";
import About from "./component/About.jsx";  
import Services from "./component/Services.jsx";
import WhyChoose from "./component/WhyChoose.jsx";
import Contact from "./component/Contact.jsx";
import FAQ from "./component/FAQ.jsx";
import Footer from "./component/Footer.jsx";


function App() {
  return (
    <>
     <div className="overflow-x-hidden">
  <Navbar />
  {/* rest of site */}
</div>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Contact />
      <FAQ />
      <Footer />
      {/* <WhyChoose /> 
      <Contact />  */}
      {/* {/* <FAQ /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;