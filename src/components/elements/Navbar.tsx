import { useState } from "react";
import { Container } from "../shared/Container";
import logo from "/assets/logos/BrightonRxLogo.png";
import { NavItem } from "../shared/NavItem";
import { phone, email } from "../../utils/constants";

export const navItems = [
  { href: "/", text: "Home" },
  { href: "/booking", text: "Booking" },
  { href: "/about-us", text: "About Us" },
  { href: "/services", text: "Services" },
  { href: "/contact-us", text: "Contact Us" },
];

export const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="z-50 py-6 bg-gray-800 text-white lg:bg-white lg:text-[#175a81]">
      <Container>
        <nav className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* --- Top Row: Logo + Dropdown / Nav Links --- */}
          <div className="w-full flex justify-between items-center mb-4 lg:mb-0">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="Brighton Rx Logo"
                className="w-60 sm:w-75" // smaller on small screens
              />
            </a>

            {/* Dropdown for small/medium */}
            <div className="lg:hidden relative mt-4">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 border border-[#11b9bf] rounded-md text-[#11b9bf]"
              >
                {/* Hamburger icon */}
                <span className="flex flex-col justify-between w-5 h-4">
                  <span className="block h-0.5 bg-current rounded"></span>
                  <span className="block h-0.5 bg-current rounded"></span>
                  <span className="block h-0.5 bg-current rounded"></span>
                </span>
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-md shadow-lg overflow-hidden z-50">
                  {navItems.map((item, key) => (
                    <li
                      key={key}
                      className={`border-b ${
                        key === navItems.length - 1
                          ? "border-transparent"
                          : "border-[#11b9bf]"
                      } hover:bg-gray-600`}
                    >
                      <a
                        href={item.href}
                        className="block px-4 py-2 whitespace-nowrap text-[#11b9bf]"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Nav Links + Contact Info for large screens */}
            <div className="hidden lg:flex flex-col ml-auto justify-start gap-1 mt-6">
              {/* Nav Links */}
              <ul className="flex flex-row items-center justify-end text-base list-none divide-x divide-gray-300">
                {navItems.map((item, key) => (
                  <li
                    key={key}
                    className="items-center justify-center whitespace-nowrap px-3"
                  >
                    <NavItem href={item.href} text={item.text} />
                  </li>
                ))}
              </ul>

              {/* Contact Info in the same container, row below links */}
              <div className="flex flex-row items-center gap-4 text-[#175a81] text-lg divide-x divide-gray-300">
                {/* Email */}
                <div className="flex items-center gap-2 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8 6"
                    fill="currentColor"
                    className="w-5 h-5 align-middle"
                  >
                    <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
                  </svg>
                  <span>{email}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone w-5 h-5 align-middle"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>{phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- Contact Info for small/medium --- */}
          <div className="w-full flex flex-row items-center justify-center lg:hidden text-[#11b9bf] text-base sm:text-sm gap-2 mt-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 8 6"
                fill="currentColor"
                className="w-5 h-5 align-middle hidden"
              >
                <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
              </svg>
              <span>{email}</span>
            </div>

            <span className="mx-2">|</span>

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-phone w-5 h-5 align-middle hidden"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>{phone}</span>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
