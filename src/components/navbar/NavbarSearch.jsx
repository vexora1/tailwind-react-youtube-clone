const NavbarSearch = () => {
  return (
    <div className="navbar__search col-span-5 flex flex-row">
      <input
        className="
              w-full
              h-9
              bg-gray-700
              rounded-tl-full
              rounded-bl-full
              px-5
              ring-1
              ring-slate-600
              focus:outline-none
              focus:ring-1
              focus:ring-gray-500
              focus:border-transparent"
        name="q"
        type="text"
        placeholder="Search"
      />
      <button type="submit"
        className="
              h-9
              bg-gray-700
              rounded-tr-full
              rounded-br-full
              ml-[2px]
              px-5
              ring-1
              ring-gray-700
              focus:outline-none              
            ">
        <i className="fas fa-search"></i>
      </button>

      <button className="
            h-9
            w-9
            bg-gray-700
            rounded-full
            ml-2
            px-2
          ">
        <i className="fas fa-microphone"></i>
      </button>
    </div>
  );
};

export default NavbarSearch;