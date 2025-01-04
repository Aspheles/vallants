import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Ensure correct import
import { FiMenu, FiX } from "react-icons/fi";
import clsx from "clsx";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-20">
        {/* Logo section */}

        <NavLink to={"/"}>
          <div className="flex items-center space-x-2">
            <img src="./Vallants_logo.png" alt="logo" className="w-12" />
            <span className="text-[#6A00A1] text-2xl font-bold">VALLANTS</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-12 text-2xl font-semibold">
          {["/", "/about", "/pricing"].map((path, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  clsx(
                    "text-[#6A00A1] transition-colors hover:text-purple-700",
                    { underline: isActive }
                  )
                }
              >
                {path === "/"
                  ? "Home"
                  : path
                      .replace("/", "")
                      .replace(/^\w/, (c) => c.toUpperCase())}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#6A00A1] text-3xl"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-6 bg-[#f9f9f9] py-4">
          {["/", "/about", "/pricing"].map((path, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  clsx("text-[#6A00A1] font-bold", { underline: isActive })
                }
                onClick={toggleMobileMenu}
              >
                {path === "/"
                  ? "Home"
                  : path
                      .replace("/", "")
                      .replace(/^\w/, (c) => c.toUpperCase())}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
