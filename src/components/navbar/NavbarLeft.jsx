const NavbarLeft = () => {
  return (
    <div className="navbar__left col-span-3 flex flex-row gap-5 items-center">
      <div className="aside__toggle leading-5 ml-5 text-[25px]">
        <i className="fas fa-bars"></i>
      </div>
      <div className="navbar__logo h-full">
        <img className="h-5 mx-auto" src="images/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default NavbarLeft;