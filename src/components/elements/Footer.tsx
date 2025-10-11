import { Container } from "../shared/Container";
import logo from "/assets/logos/BrightonRxLogo.png";
import { navItems } from "./Navbar";
import { NavItem } from "../shared/NavItem";

export const Footer = () => {
  return (
    <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
      <Container className="pb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={logo} className="w-60" alt="Brighton Rx Logo" />
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-heading-1">
            {navItems.map((item, key) => (
              <li key={key} className="whitespace-nowrap">
                <NavItem href={item.href} text={item.text} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};
