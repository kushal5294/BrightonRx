import React from "react";
import { Container } from "../shared/Container";
import logo from "/assets/logos/BrightonRxLogo.png";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-9 pb-5 bg-gray-800 lg:bg-box-bg">
      <style>{`
        .hide-on-mobile {
          display: none;
        }
        @media (min-width: 768px) {
          .hide-on-mobile {
            display: inline-flex;
          }
        }
      `}</style>
      <Container className="pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center gap-3 mb-4 md:mb-0">
            <img
              src={logo}
              className="w-60 lg:w-80"
              alt="Brighton Rx Pharmacy Logo"
            />
            <div className="text-[#11b9bf] text-base lg:text-base">
              © Brighton Rx 2025
            </div>
          </div>

          <div className="flex flex-col items-center">
            <ul className="flex flex-wrap justify-center items-center text-base lg:text-lg list-none text-[#11b9bf]">
              {navItems.map((item, key) => {
                const isAboutUs =
                  item.text.toLowerCase() === "about us" ||
                  item.text.toLowerCase() === "booking";
                const isLastItem = key === navItems.length - 1;

                return (
                  <React.Fragment key={key}>
                    <li
                      className={`inline-flex items-center justify-center whitespace-nowrap px-3 py-0.5 ${
                        isAboutUs ? "hide-on-mobile" : ""
                      }`}
                    >
                      <NavItem href={item.href} text={item.text} />
                    </li>
                    {!isLastItem && (
                      <span
                        className={`mx-3 text-[#11b9bf] self-center text-lg ${
                          isAboutUs ? "hide-on-mobile" : ""
                        }`}
                      >
                        ·
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>

            <ul className="flex flex-wrap justify-center items-center text-base lg:text-lg list-none text-[#11b9bf]">
              {[
                { href: "#", text: "Hippa Notice" },
                { href: "#", text: "Notice of Privacy Practices" },
              ].map((item, key, arr) => (
                <React.Fragment key={key}>
                  <li className="inline-flex items-center justify-center whitespace-nowrap px-3 py-0.5">
                    <NavItem href={item.href} text={item.text} />
                  </li>
                  {key < arr.length - 1 && (
                    <span className="mx-3 text-[#11b9bf] self-center text-lg">·</span>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
