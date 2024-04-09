import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser().then(() => {
      toast.success("Logged out successfully")
    });
  };

  const activeStyles =
    "lg:border-y transition duration-300 ease-in-out px-3 py-2 border-c-primary text-c-primary font-bold hover:bg-c-primary hover:text-[#fff] text-[15px] my-2 lg:my-0";
  const inactiveStyles =
    "px-3 py-2 font-medium border-y border-transparent hover:border-y hover:border-c-primary mx-1 text-c-primary hover:glass text-[15px] my-2 lg:my-0";
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        Home
      </NavLink>

      {user && (
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          Profile
        </NavLink>
      )}
      {user && (
        <NavLink
          to="/update-profile"
          className={({ isActive }) =>
            isActive ? activeStyles : inactiveStyles
          }
        >
          Update Profile
        </NavLink>
      )}
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        Contact Us
      </NavLink>
    </>
  );
  return (
    <div className="fixed w-full glass z-50">
      <div className="navbar glass pl-0 lg:px-32">
        <div className="navbar-start pl-0 ">
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
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl md:text-2xl font-bold px-0 md:px-4"
          >
            Dream House
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center ">{links}</ul>
        </div>
        <div className="navbar-end items-center gap-3">
          {user && (
            <div
              tabIndex={0}
              role="button"
              className="  btn-circle avatar tooltip tooltip-left border"
              data-tip={user.displayName}
            >
              {" "}
              <div className="w-full rounded-full">
                <Link to="/profile">
                  <img
                    className="w-full h-full"
                    alt="Profile Picture"
                    src={user?.photoURL}
                  />
                </Link>
              </div>
            </div>
          )}

          {user ? (
            <button
              className="btn btn-neutral rounded-sm md::text-[15px] font-bold"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-neutral rounded-sm md:text-[15px] font-bold ">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
