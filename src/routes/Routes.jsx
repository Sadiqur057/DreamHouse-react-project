import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Contact from "../pages/contact/Contact";
import Profile from "../pages/profile/Profile";
import PrivateRoutes from "./PrivateRoutes";
import PropertyDetails from "../pages/property/PropertyDetails";
import UpdateProfile from "../pages/profile/UpdateProfile";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Bookmarks from "../pages/bookmarks/Bookmarks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "property/:id",
        loader: ()=> fetch('/estate-data.json'),
        element: (
          <PrivateRoutes>
            <PropertyDetails></PropertyDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/bookmarks",
        loader:()=>fetch('/estate-data.json'),
        element: (
          <PrivateRoutes>
            <Bookmarks></Bookmarks>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default routes;
