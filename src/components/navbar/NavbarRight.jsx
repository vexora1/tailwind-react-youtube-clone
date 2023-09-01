const NavbarRight = () => {
  return (
    <div className="navbar__right col-span-3 flex flex-row justify-end gap-10 px-5 items-center">
      <div className="navbar__right__item">
        <i className="fas fa-plus"></i>
      </div>
      <div className="navbar__right__item">
        <i className="fas fa-comment-alt"></i>
      </div>
      <div className="navbar__right__item">
        <i className="fas fa-bell"></i>
      </div>
      <div className="navbar__right__item">
        <img
          className="
                w-9
                h-9
                rounded-full
                object-cover
                border-2
                border-gray-700
                ring-1
                ring-gray-700
                focus:outline-none
              "
          src="/images/user_pp.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default NavbarRight;