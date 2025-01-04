import React from "react";
import { FaTwitter, FaGoogle, FaDiscord } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Contact Section */}
        <div className="flex flex-wrap justify-between text-center lg:text-left">
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
            <h4 className="text-2xl font-semibold text-gray-700">
              Let's keep in touch!
            </h4>
            <p className="text-gray-600 mt-2">
              Find us on any of these platforms.
            </p>
            <div className="flex justify-center lg:justify-start mt-4 space-x-4">
              <a
                href="#"
                className="bg-white p-3 rounded-full shadow text-blue-400 hover:bg-blue-50"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full shadow text-blue-400 hover:bg-blue-50"
                aria-label="Twitter"
              >
                <FaGoogle size={24} />
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full shadow text-blue-400 hover:bg-blue-50"
                aria-label="Twitter"
              >
                <FaDiscord size={24} />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/2 px-4 sm:flex sm:flex-row sm:items-center sm:justify-center">
            <div className="flex flex-wrap justify-center lg:justify-end space-y-6 lg:space-y-0">
              <div className="w-1/2">
                <h5 className="text-sm font-semibold text-gray-700 uppercase mb-2">
                  Useful Links
                </h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Cases
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 px-4">
                <h5 className="text-sm font-semibold text-gray-700 uppercase mb-2">
                  Other Resources
                </h5>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t pt-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href=""
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vallants
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
