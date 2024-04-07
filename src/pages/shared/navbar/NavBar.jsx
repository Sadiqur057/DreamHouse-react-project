import { NavLink } from "react-router-dom";
const NavBar = () => {
  const activeStyles = "bg-white border px-3 py-2 rounded-xl border-c-primary text-c-primary font-bold hover:bg-c-primary hover:text-[#fff]"
  const inactiveStyles = "px-3 py-2 font-medium border border-transparent hover:border hover:border-c-primary rounded-xl mx-1 text-c-primary"
  const links = <>
    <NavLink to='/' className={(isActive)=> isActive? activeStyles: "font-medium px-2"}>Home</NavLink>
    <NavLink to='/about' className={({isActive})=> isActive? activeStyles : inactiveStyles}>About</NavLink>
  </>
  return (
    <>This is nav</>
  );
};

export default NavBar;
