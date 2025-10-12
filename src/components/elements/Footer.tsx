import { Container } from "../shared/Container";
import logo from "/assets/logos/BrightonRxLogo.png";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-4 bg-gray-800 lg:bg-box-bg">
      <Container className="pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-60" alt="Brighton Rx Logo" />
          </div>

          <ul className="flex flex-wrap justify-center items-center text-base list-none text-[#11b9bf] lg:text-heading-1 lg:divide-x lg:divide-[#11b9bf]">
            {navItems.map((item, key) => {
              const itemClass =
                item.text === "About Us"
                  ? "hidden md:inline-flex"
                  : "inline-flex";

              return (
                <li
                  key={key}
                  className={`${itemClass} items-center justify-center whitespace-nowrap px-3 py-0.5`}
                >
                  <NavItem href={item.href} text={item.text} />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
