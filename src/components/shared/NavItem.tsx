interface NavItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: NavItemProps) => {
  return (
    <a
      href={href}
      className="duration-300 font-medium ease-linear hover:text-[#114d6e] py-3 no-underline"
    >
      {text}
    </a>
  );
};
