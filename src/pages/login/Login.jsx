import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const Login = () => {
  // scroll to top on load
  const onLoad = () => {
    window.scrollTo(0, 0);
  };
  onLoad();

  const navigate = useNavigate();
  const location = useLocation();

  // handle show password button
  const [showPassword, setShowPassword] = useState(false);
  const handleViewPassword = () => {
    setShowPassword(!showPassword);
  };

  // accessing auth context
  const { loginUser, googleLogin, githubLogin } = useContext(AuthContext);
  // if(user){
  //   navigate(location?.state? location.state :"/profile");
  // }

  // managing react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // social login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Login Success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  // handle form submit
  const onSubmit = (data, e) => {
    e.preventDefault();
    const email = data.email;
    const password = data.password;
    loginUser(email, password)
      .then(() => {
        toast.success("Login Success");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMsg = error.message.split("(")[1].split(")")[0];
        if (errorMsg === "auth/invalid-credential") {
          toast.error("Your email or password is incorrect");
        } else {
          toast.error(errorMsg);
        }
      });
  };
  return (
    <section className="bg-base-200 lg:pt-0 lg:min-h-[760px] min-h-screen lg:h-screen flex py-[60px] items-center bg-cool">
      <Helmet>
        <title>DH | Login</title>
      </Helmet>
      <div className="flex flex-col w-full justify-center mx-auto  lg:flex-row lg:justify-center items-center lg:glass lg:items-center mt-6 lg:mt-16  lg:w-fit rounded-md">
        <div className="flex flex-col justify-center text-center rounded-sm w-full  md:w-[400px]  lg:text-left p-0 flex-1">
          <div className="m-0 p-8 space-y-3 rounded-sm bg-base-100 mx-auto lg:w-full lg:max-w-[400px] w-[90%]">
            <h1 className="text-2xl font-bold text-center">Login Here</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="username" className="block text-left">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="email"
                  className="w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800  outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                <p className="text-left text-red-500">
                  {errors.email?.message}
                </p>
              </div>
              <div className="space-y-1 ">
                <label htmlFor="password" className="block text-left">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    className="w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800  outline-none"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <p
                    onClick={handleViewPassword}
                    className="cursor-pointer absolute right-4 top-4 text-xl"
                  >
                    {showPassword ? <VscEyeClosed /> : <VscEye />}
                  </p>
                </div>
                <p className="text-left text-red-500">
                  {errors.password?.message}
                </p>
              </div>
              <button className="block w-full p-3 text-center rounded-sm btn-neutral btn">
                Login
              </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
              <p className="px-3 text-sm text-gray-400 dark:text-gray-600">
                Login with social accounts
              </p>
              <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
            </div>
            <div className="flex justify-center space-x-4 text-2xl">
              <button
                onClick={handleGoogleLogin}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <FaGoogle className="cursor-pointer" />
              </button>
              <button
                onClick={handleGithubLogin}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <FaGithub className="cursor-pointer" />
              </button>
            </div>
            <p className="text-sm text-center sm:px-6 text-gray-400 dark:text-gray-600">
              Dont have an account? &nbsp;
              <Link
                to="/register"
                rel="noopener noreferrer"
                className="font-semibold text-gray-100 dark:text-gray-800"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
        <div className="items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 hidden lg:flex w-[400px] p-6">
          <img
            src={loginImg}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
