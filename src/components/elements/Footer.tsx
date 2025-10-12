import { Container } from "../shared/Container";
import logo from "/assets/logos/BrightonRxLogo.png";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-8 bg-gray-800 lg:bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-60" alt="Brighton Rx Logo" />
          </div>

          <ul className="flex flex-wrap justify-center gap-2 text-base list-none text-[#11b9bf] lg:text-heading-1">
            {navItems.map((item, key) => {
              const itemClass =
                item.text === "About Us"
                  ? "hidden md:inline-flex"
                  : "inline-flex";

              return (
                <li
                  key={key}
                  className={`${itemClass} items-center justify-center whitespace-nowrap px-2 py-0.5 lg:px-0 lg:py-0`}
                >
                  <NavItem href={item.href} text={item.text} />
                  {key < navItems.length - 1 && (
                    <span className="mx-1 hidden lg:inline">|</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
