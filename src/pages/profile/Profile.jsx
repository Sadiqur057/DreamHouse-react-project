import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub,FaFacebook } from "react-icons/fa6";
import { FaLinkedin ,FaInstagram} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <h1 className="text-4xl h-screen w-full flex justify-center items-center bg-red-500">
        Loading...
      </h1>
    );
  }
  return (
    <div className="text-4xl w-full flex justify-center  min-h-screen h-fit bg-cool items-center pt-10">
      <Helmet>
        <title>DH | Profile</title>
      </Helmet>
      <div className="flex flex-col justify-center max-w-lg w-[90%] p-6 bg-base-100 rounded-sm sm:px-12 sm:py-12 dark:text-gray-800 h-fit">
        <img
          src={user?.photoURL}
          alt=""
          className="w-60 h-60 mx-auto rounded-full  aspect-square"
        />
        <div className="space-y-4 text-center divide-y">
          <div className="my-2 space-y-5">
            <h2 className="text-2xl font-semibold sm:text-5xl">{user?.displayName}</h2>
            <p className="px-5 text-base md:text-xl sm:text-base dark:text-gray-600">
              {user?.email}
            </p>
          </div>
          <div className="flex justify-center pt-4 space-x-4 align-center">
              <FaGithub className="cursor-pointer"/>
              <FaFacebook className="cursor-pointer"/>
              <FaInstagram className="cursor-pointer"/>
              <FaLinkedin className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
