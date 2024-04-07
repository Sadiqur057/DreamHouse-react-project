import { NavLink } from "react-router-dom";
const NavBar = () => {
  const activeStyles = "bg-white border px-3 py-2 rounded-xl border-c-primary text-c-primary font-bold hover:bg-c-primary hover:text-[#fff]"
  const inactiveStyles = "px-3 py-2 font-medium border border-transparent hover:border hover:border-c-primary rounded-xl mx-1 text-c-primary"
  const links = <>
    <NavLink to='/' className={(isActive)=> isActive? activeStyles: "font-medium px-2"}>Home</NavLink>
    <NavLink to='/about' className={({isActive})=> isActive? activeStyles : inactiveStyles}>About</NavLink>
  </>
  return (
    <div className="fixed z-10 w-full glass">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center ">
            {links}
          </ul>
        </div>
        <div className="navbar-end items-center gap-3">
          <div
            tabIndex={0}
            role="button"
            className="  btn-circle avatar tooltip tooltip-left border" data-tip="hello" 
          >
            <div className="w-full rounded-full tooltip tooltip-left" data-tip="hello">
              <img className="w-full h-full"
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
              />
            </div>
          </div>
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
