import { Link } from "react-router-dom";

type NavItemProps = {
  to: string;
  label: string;
};

const NavItem = ({ to, label }: NavItemProps) => {
  return (
    <div className="relative flex justify-center items-center">
      <Link
        to={to}
        className="opacity-60 hover:opacity-100 font-suit font-bold text-3xl leading-noraml"
      >
        {label}
      </Link>
    </div>
  );
};

export default NavItem;
