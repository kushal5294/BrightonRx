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
  return (
    <header className="z-50 py-6 bg-gray-800 text-white lg:bg-white lg:text-[#175a81]">
      <Container>
        <nav className="w-full flex flex-col lg:flex-row justify-between items-center">
          {/* Logo */}
          <div className="min-w-max inline-flex relative -mt-4 mb-7">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="Brighton Rx Logo" className="w-75" />
            </a>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            {/* Nav Items Row */}
            <ul className="w-full flex flex-row flex-wrap justify-center items-center gap-2 text-base list-none">
              {navItems.map((item, key) => (
                <li
                  key={key}
                  className={`
                    inline-flex items-center justify-center whitespace-nowrap rounded-md border border-gray-200 px-2 py-1 hover:bg-gray-700 
                    lg:border-0 lg:px-0 lg:py-0 lg:hover:bg-transparent
                    ${item.text === "About Us" ? "!hidden md:!inline-flex" : ""}
                  `}
                >
                  <NavItem href={item.href} text={item.text} />
                  {key < navItems.length - 1 && (
                    <span className="mx-1 hidden lg:inline">|</span>
                  )}
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="py-4 mt-4 lg:mt-0">
              <div className="flex flex-col lg:flex-row items-center gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 8 6"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" />
                  </svg>
                  <span className="text-xl">{email}</span>
                </div>
                <span className="hidden lg:inline">|</span>
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
                    className="feather feather-phone w-5 h-5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-xl">{phone}</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
