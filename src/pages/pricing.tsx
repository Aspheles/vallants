import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

type Plan = {
  name: string;
  price: string;
  features: {
    [key: string]: boolean;
  };
};

type Feature = {
  name: string;
};

const Pricing: React.FC = () => {
  const plans: Plan[] = [
    {
      name: "Basic Plan",
      price: "€50",
      features: {
        domainHosting: false,
        technicalSupport: true,
        storage: false,
        customDomain: false,
      },
    },
    {
      name: "Premium Plan",
      price: "€150",
      features: {
        domainHosting: true,
        technicalSupport: true,
        storage: true,
        customDomain: true,
      },
    },
  ];

  const featuresList: Feature[] = [
    { name: "Domain Hosting" },
    { name: "Technical Support" },
    { name: "Storage" },
    { name: "Custom Domain" },
  ];

  return (
    <>
      <div className="h-[45rem] bg-gradient-to-b from-[#1D0D4C] to-[#6A00A1] text-white px-4 w-full mx-auto">
        <h1 className="text-4xl font-bold text-white py-16 text-center">
          Plans & Pricing
        </h1>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full text-[#1D0D4C]">
            <div className="flex items-center justify-center bg-gradient-to-b from-[#420674] to-[#1D0D4C] rounded-t-lg text-white w-[22rem] h-[6rem] mx-4 shadow-lg">
              <div className="flex flex-row items-center justify-center space-x-4">
                <h2 className="text-2xl font-semibold">Basic Package</h2>

                {/* Divider using React Icon */}
                <div className="border-l-2 border-white h-[3rem] mx-4"></div>

                <p className="text-5xl font-semibold">€500</p>
              </div>
            </div>
            <div className="rounded-md shadow-lg border">
              {/* Features List */}
              <ul className="">
                <li className="flex items-center h-[3rem]  bg-white px-4 ">
                  <p>
                    Up to{" "}
                    <span className="font-semibold">
                      5 custom-designed pages (Home, About, Services, Contact,
                      Blog)
                    </span>
                  </p>
                </li>
                <li className="flex items-center h-[3rem] bg-[#F4F2FA] px-4">
                  <p>
                    Mobile and tablet{" "}
                    <span className="font-semibold">responsive design</span>
                  </p>
                </li>
                <li className="flex items-center h-[3rem] bg-white px-4">
                  <p>
                    Basic <span className="font-semibold">SEO</span> setup (meta
                    tags, alt text, keyword optimization)
                  </p>
                </li>
                <li className="flex items-center h-[3rem] bg-[#F4F2FA] px-4">
                  <p>
                    Integration with{" "}
                    <span className="font-semibold">social media</span> (links,
                    feeds)
                  </p>
                </li>
                <li className="flex items-center h-[3rem] bg-white px-4">
                  <p>
                    Contact form with{" "}
                    <span className="font-semibold">email notifications</span>
                  </p>
                </li>
                <li className="flex items-center h-[3rem] bg-[#F4F2FA] px-4">
                  <p>
                    SSL certificate setup for{" "}
                    <span className="font-semibold">site security</span>
                  </p>
                </li>
                <li className="flex items-center h-[3rem] bg-white px-4">
                  <p>Domain configuration</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center py-12 px-4">
        <div className="max-w-4xl w-full text-[#1D0D4C]">
          {/* Addons Title and Plans */}
          <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
            {/* Addons Title */}
            <div className="flex items-center space-x-4">
              <p className="text-2xl hover:text-3xl transition-all cursor-pointer">
                <FaQuestionCircle />
              </p>
              <p className="text-4xl font-bold drop-shadow-xl text-[#6A00A1]">
                Addons
              </p>
            </div>

            {/* Plans Section */}
            <div className="flex flex-wrap justify-end gap-2">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className="flex items-center justify-center bg-gradient-to-b from-[#420674] to-[#1D0D4C] rounded-lg text-white w-full sm:w-[14rem] h-[6rem] shadow-lg"
                >
                  <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                      {plan.name}
                    </h2>
                    <p className="text-3xl sm:text-4xl font-semibold">
                      {plan.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Table */}
          <div className="rounded-md shadow-lg border overflow-x-auto">
            <table className="min-w-full table-auto rounded-md overflow-hidden">
              <thead className="bg-[#420674] text-white">
                <tr>
                  <th className="px-4 py-4 text-left text-sm sm:text-base font-semibold">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="px-4 sm:px-8 py-4 text-center text-sm sm:text-base font-semibold"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featuresList.map((feature, rowIndex) => {
                  // Normalize the feature name
                  const featureKey = feature.name
                    .toLowerCase()
                    .replace(/ /g, "")
                    .replace(/[^a-z]/g, ""); // Remove special characters

                  return (
                    <tr
                      key={feature.name}
                      className={`${
                        rowIndex % 2 === 0 ? "bg-white" : "bg-[#F4F2FA]"
                      }`}
                    >
                      <td className="px-4 sm:px-8 py-4 text-left text-sm sm:text-base font-semibold">
                        {feature.name}
                      </td>
                      {plans.map((plan) => (
                        <td
                          key={plan.name}
                          className="px-4 sm:px-8 py-4 text-center"
                        >
                          <span
                            className={`w-4 h-4 rounded-full inline-block ${
                              plan.features[featureKey]
                                ? "bg-green-500"
                                : "bg-gray-300"
                            }`}
                          ></span>
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
