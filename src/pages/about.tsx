import React from "react";

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}

      {/* Executive Team Section */}
      <section
        className=""
        style={{
          background:
            "linear-gradient(106.34deg, #1D0D4C 11.78%, #2B0C5E 32.9%, #470981 55.58%, #A900FF 100%)",
        }}
      >
        <div className="h-[30rem]">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-white capitalize lg:text-3xl">
              Meet The Team
            </h1>
            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
            <p className="max-w-2xl mx-auto mt-6 text-center text-white">
              Meet the talented individuals driving our mission forward with
              passion and innovation.
            </p>
          </div>
        </div>

        <div className="container px-6 py-10 mx-auto -mt-72 sm:-mt-110 md:-mt-96">
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center sm:p-6 rounded-xl">
              <img
                className="object-cover w-[20rem] rounded-xl"
                src="./team/yavuz.png"
                alt="Yavuz Dereli"
                loading="lazy"
              />
              <h1 className="mt-4 text-2xl font-semibold text-white capitalize">
                Yavuz Dereli
              </h1>
              <h1 className="mt-4 text-1xl font-semibold text-gray-100 capitalize">
                Lead Developer & Owner
              </h1>
            </div>
            <div className="flex flex-col items-center sm:p-6 p-12 rounded-xl">
              <img
                className="object-cover w-[20rem] rounded-xl"
                src="./team/placeholder.jpg"
                alt="Faruyili Pazli"
                loading="lazy"
              />
              <h1 className="mt-4 text-2xl font-semibold text-white capitalize">
                Faruyili Pazli
              </h1>
              <h1 className="mt-4 text-1xl font-semibold text-gray-100 capitalize">
                Digital Marketing Specialist
              </h1>
            </div>
            <div className="flex flex-col items-center sm:p-6 p-12 rounded-xl">
              <img
                className="object-cover w-[20rem] rounded-xl"
                src="./team/placeholder.jpg"
                alt="Wilkins Mandoza"
                loading="lazy"
              />
              <h1 className="mt-4 text-2xl font-semibold text-white capitalize">
                Wilkins Mendoza
              </h1>
              <h1 className="mt-4 text-1xl font-semibold text-gray-100 capitalize">
                Lead Designer
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              At the heart of our company lies a commitment to innovation,
              collaboration, and excellence. We aim to harness the power of
              modern technologies to create solutions that make a difference,
              empowering businesses and enriching lives.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start">
                <span className="h-8 w-8 bg-pink-400 text-white rounded-full flex items-center justify-center mr-4">
                  ✓
                </span>
                <p className="text-gray-600">
                  Powered by React and modern web frameworks
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-8 w-8 bg-blue-400 text-white rounded-full flex items-center justify-center mr-4">
                  ✓
                </span>
                <p className="text-gray-600">
                  Focused on user-centric design and functionality
                </p>
              </li>
              <li className="flex items-start">
                <span className="h-8 w-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-4">
                  ✓
                </span>
                <p className="text-gray-600">
                  Driven by passion and innovation
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img
              src="./vision.jpg"
              alt="Team working together"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
