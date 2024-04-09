import { ToastContainer } from "react-toastify";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/navbar/NavBar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ToastContainer></ToastContainer>
      <div className="min-h-[calc(100vh-260px)]"><Outlet></Outlet></div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
