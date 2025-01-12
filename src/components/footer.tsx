import React from "react";
import { FaInstagram } from "react-icons/fa";
import { useModal } from "../utils/ModalContext";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { openModal } = useModal();
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center text-center lg:text-left">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0 px-4">
            <h4 className="text-xl md:text-2xl font-semibold text-gray-700">
              Let's keep in touch!
            </h4>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Find us on any of these platforms.
            </p>
            <div className="flex justify-center lg:justify-start mt-4 space-x-4">
              <a
                href="https://www.instagram.com/_vallants/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2 rounded-full shadow text-white hover:opacity-90 transition duration-300 ease-in-out"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 px-4">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h5 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                  Useful Links
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link reloadDocument to={"/about"}>
                      <a className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link reloadDocument to={"/pricing"}>
                      <a className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        Pricing
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-gray-700 uppercase mb-3">
                  Other Resources
                </h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link reloadDocument to={"/terms-conditions"}>
                      <a className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        Terms & Conditions
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link reloadDocument to={"/privacy-policy"}>
                      <a className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      onClick={openModal}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-300 cursor-pointer"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-200 pt-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vallants
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
