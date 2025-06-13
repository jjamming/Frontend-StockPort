import { Link } from "react-router-dom";

type NavItemProps = {
  to: string;
  label: string;
};

const NavItem = ({ to, label }: NavItemProps) => {
  return (
    <div className="flex relative items-center justify-center">
      <Link to={to} className="font-suit text-3xl font-bold leading-noraml">
        {label}
      </Link>
    </div>
  );
};

export default NavItem;
