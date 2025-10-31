import Logo from "./Logo";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="relative flex gap-16 bg-transparent mr-[3.25rem] ml-[2.6875rem] w-auto h-40">
      <Logo />
      <ul className="relative flex gap-[3.75rem] p-0 w-full">
        <NavItem to="portfolio" label="Portfolios" />
        <NavItem to="markets" label="Markets" />
      </ul>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
