import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {
  const {user, loading} = useContext(AuthContext)
  if(loading){
    return <h1 className='text-4xl h-screen w-full flex justify-center items-center'>Loading</h1>
  }
  if(user){
    return children;
  }
  return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;