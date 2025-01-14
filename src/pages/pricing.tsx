import React from "react";
import { Link } from "react-router-dom";

type Plan = {
  name: string;
  description: string;
  originalPrice: number;
  discount?: number;
  features: string[];
};

const Pricing: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Starter Plan",
      description:
        "Ideal for small businesses or individuals looking to establish an online presence with essential features.",
      originalPrice: 500,
      features: [
        "Up to 5 custom-designed pages",
        "Mobile and tablet responsive design",
        "Integration with social media (links, feeds)",
        "SSL certificate setup for site security",
        "Domain configuration",
      ],
    },
    {
      name: "Professional Plan",
      description:
        "Perfect for growing businesses that need additional features to engage visitors and optimize performance.",
      originalPrice: 700,
      discount: 10,
      features: [
        "Up to 7 custom-designed pages",
        "Mobile and tablet responsive design",
        "Integration with social media (links, feeds)",
        "Basic SEO setup (meta tags, alt text, keyword optimization)",
        "SSL certificate setup for site security",
        "Contact form with email notifications",
        "Google Analytics integration for traffic insights",
      ],
    },
    {
      name: "Premium Plan",
      description:
        "A comprehensive package tailored for businesses seeking advanced features and enhanced functionality.",
      originalPrice: 1000,
      features: [
        "Up to 10 custom-designed pages",
        "Mobile and tablet responsive design",
        "Advanced SEO setup (meta tags, alt text, keyword optimization, XML sitemap)",
        "Integration with social media (links, feeds)",
        "Contact form with email notifications",
        "SSL certificate setup for site security",
        "Domain configuration",
        "Google Analytics integration for traffic insights",
        "Custom email account setup",
      ],
    },
  ];

  const calculateDiscountedPrice = (price: number, discount?: number) => {
    if (discount) {
      return price - price * (discount / 100);
    }
    return price;
  };

  return (
    <div className="bg-gradient-to-b from-[#1D0D4C] to-[#6A00A1] text-white px-8 py-16 w-full mx-auto">
      <div className="max-w-screen-md mx-auto mb-12 text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
          Plans & Pricing
        </h2>
        <p className="mb-5 text-lg font-light text-gray-200 sm:text-xl">
          Here at Vallants, we focus on affordable solutions for starting
          businesses.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 sm:gap-8 gap-8 sm:text-left text-center sm:items-stretch items-center justify-center">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="relative flex flex-col max-w-xl p-8 mx-auto text-center text-gray-900 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="mb-4 text-3xl font-bold text-[#1D0D4C]">
              {plan.name}
            </h3>
            <p className="mb-6 text-base font-light text-gray-700 sm:text-lg">
              {plan.description}
            </p>
            <div className="flex flex-col items-center mb-6 relative">
              {plan.discount ? (
                <>
                  <span className="relative text-5xl text-white font-extrabold bg-[#6A00A1] py-4 px-10 rounded-full shadow-md">
                    <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      -{plan.discount}%
                    </span>
                    €
                    {calculateDiscountedPrice(
                      plan.originalPrice,
                      plan.discount
                    ).toFixed(2)}
                  </span>

                  <span className="text-base text-gray-500 line-through mt-1">
                    €{plan.originalPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-5xl text-white font-extrabold bg-[#6A00A1] py-4 px-10 rounded-full shadow-md">
                  €{plan.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-gray-800">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <Link reloadDocument to={"/contact"}>
                <a className="text-white bg-[#6A00A1] hover:bg-purple-700 font-medium rounded-full text-lg px-6 py-3 transition-all duration-300 cursor-pointer">
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
