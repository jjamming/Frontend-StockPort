import Logo from "./Logo";
import NavItem from "./NavItem";
import SearchBar from "./SearchBar";
import ToLogin from "./ToLogin";

const Navbar = () => {
  return (
    <div className="flex relative w-auto h-40 ml-[2.6875rem] mr-[3.25rem] bg-transparent">
      <Logo></Logo>
      <div className="flex relative ml-[3.25rem] mr-[5rem] p-0 gap-[3.75rem]">
        <NavItem to="markets" label="Markets"></NavItem>
        <NavItem to="portfolio" label="Portfolios"></NavItem>
        <NavItem to="community" label="Community"></NavItem>
      </div>
      <SearchBar></SearchBar>
      <ToLogin></ToLogin>
    </div>
  );
};

export default Navbar;
