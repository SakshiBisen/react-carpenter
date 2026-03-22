import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      q: "What types of furniture can you build?",
      a: "We craft custom sofas, beds, tables, cabinets and more using premium wood."
    },
    {
      q: "Do you offer installation for modular kitchens?",
      a: "Yes, our team handles both design and on-site installation across Rajasthan."
    },
    {
      q: "Can you work with bulk or commercial orders?",
      a: "Absolutely – we accept bulk manufacturing and commercial fit-out projects."
    },
    {
      q: "What areas do you serve?",
      a: "Shri Naganaraya Furniture delivers carpentry services throughout Rajasthan."
    },
    {
      q: "How do I request a quote?",
      a: "Contact us by phone or WhatsApp and we’ll provide a free estimate quickly."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-section">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-extrabold text-center text-primary mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
            >

              {/* Question */}
              <div
                className="flex justify-between items-center p-5 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-primary" />
                  <h3 className="font-semibold text-primary text-lg">
                    {item.q}
                  </h3>
                </div>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180 text-accent" : "text-gray-500"
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`px-5 transition-all duration-500 ${
                  open === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 overflow-hidden opacity-0"
                }`}
              >
                <p className="text-dark text-sm">{item.a}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;