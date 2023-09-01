import NavbarLeft from "./NavbarLeft";
import NavbarSearch from "./NavbarSearch";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 w-full bg-gray-800 text-gray-100 h-14 z-20">
      <div className="container mx-auto h-full grid grid-cols-11 items-center">
        <NavbarLeft />
        <NavbarSearch />
        <NavbarRight />
      </div>
    </div>
  );
};

export default Navbar;