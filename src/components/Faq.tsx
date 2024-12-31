import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How often should I have my gutters cleaned?",
    answer: "It's recommended to clean your gutters at least twice a year—once in the spring and again in the fall. However, if your property has a lot of trees or experiences heavy storms, more frequent cleaning may be necessary."
  },
  {
    question: "What are the signs that my gutters need cleaning?",
    answer: "Common signs include water overflowing from the gutters, sagging or pulling away from the house, visible debris buildup, staining on the siding, or pests nesting near the gutters."
  },
  {
    question: "Why is regular gutter maintenance important?",
    answer: "Regular maintenance prevents water damage to your home's foundation, walls, and roof, reduces the risk of mold growth, prevents pest infestations, and ensures gutters function efficiently."
  },
  {
    question: "Do you offer maintenance plans for ongoing gutter care?",
    answer: "Yes, we provide seasonal maintenance plans to keep your gutters in top condition year-round. These plans include regular cleanings and inspections to address potential issues before they become costly repairs."
  },
  {
    question: "What does your gutter cleaning service include?",
    answer: "Our service includes removing debris, clearing downspouts, inspecting for damage, and ensuring the gutters are functioning properly. We leave your property clean and your gutters ready to protect your home from water damage."
  },
  {
    question: "Do you offer Gutter Guard installation?",
    answer: `Yes, we offer professional gutter guard installation to keep your gutters free from debris and reduce the need for frequent cleaning. We install a variety of high-quality gutter guards, including:

• Screen Gutter Guards – Durable and cost-effective, perfect for blocking large debris.
• Micro Mesh Gutter Guards – Designed to filter even the finest debris, ensuring optimal flow.
• Brush Gutter Guards – Easy to install and effective at keeping leaves and twigs out.
• Foam Gutter Guards – Simple to install and provide excellent protection against debris buildup.
• Reverse Curve Gutter Guards – Engineered to direct water into the gutter while letting debris fall off, ideal for reducing maintenance.`
  },
  {
    question: "Do you provide both gutter cleaning and repair services?",
    answer: "Yes, we are your trusted gutter cleaning experts and offer comprehensive gutter repair services. Whether you have dirty gutters clogged with debris or need repairs for leaks and damage, our team is equipped to handle both. We thoroughly clean dirty gutters and address any necessary repairs, ensuring your gutters function efficiently and protecting your home from water damage."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-800" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-800" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 whitespace-pre-wrap">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}