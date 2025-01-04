import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a range of services including planning, design, development, testing, and support tailored to your needs.",
    },
    {
      question: "How long does a project take?",
      answer:
        "The timeline depends on the complexity and scope of the project. On average, projects take 4-8 weeks to complete.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "Our pricing is flexible and based on the specific requirements of your project. Contact us for a custom quote.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we provide ongoing support and maintenance to ensure your solution runs smoothly.",
    },
    {
      question: "How do I get started?",
      answer:
        "You can get started by reaching out to us through our contact form or giving us a call. We'll guide you through the next steps.",
    },
  ];

  return (
    <section className="w-full h-[600px] bg-gradient-to-br from-[#1D0D4C] via-[#470981] to-[#A900FF] flex items-center">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white pb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg shadow-sm border-none"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-700 focus:outline-none "
                aria-expanded={openIndex === index}
              >
                <span className="text-1xl">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 bg-white rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
