import { Link, useNavigate } from "react-router-dom";
import regImg from "../../assets/images/register.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Register = () => {
  const { createUser, updateUserProfile, setReload } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleViewPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    const email = data.email;
    const password = data.password;
    const name = data.name;
    const photo = data.photo;

    createUser(email, password)
      .then(() => {
        toast.success("Account created succesfully");
        updateUserProfile(name, photo)
          .then(() => {
            setReload(true)
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            toast.error(error.message.split("(")[1].split(")")[0]);
          });
      })
      .catch((error) => {
        toast.error(error.message.split("(")[1].split(")")[0]);
      });
  };
  return (
    <section className="bg-base-200 py-14 lg:pt-0 lg:min-h-[760px] min-h-screen lg:h-screen flex items-center bg-cool">
      <Helmet>
        <title>DH | Register</title>
      </Helmet>
      <div className="flex flex-col w-full justify-center mx-auto  lg:flex-row-reverse lg:justify-center  items-center lg:glass lg:items-center mt-6 lg:mt-16 p-0 lg:w-fit rounded-md">
        <div className="flex flex-col justify-center text-center rounded-sm w-full  md:w-[400px]  lg:text-left p-0 flex-1">
          <div className="m-0 p-8 space-y-3 rounded-sm bg-base-100 mx-auto lg:min-w-[380px] w-[90%] md:w-full border-2">
            <h1 className="text-2xl font-bold text-center">Register Now</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="email" className="block text-left">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 outline-none"
                  {...register("name", { required: "Name is required" })}
                />
                {
                  <p className="text-left text-red-500">
                    {errors.name?.message}
                  </p>
                }
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-left">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="photo"
                  autoComplete="none"
                  className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 outline-none"
                  {...register("photo", { required: "Photo URL is required" })}
                />
                {
                  <p className="text-left text-red-500">
                    {errors.photo?.message}
                  </p>
                }
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="block text-left">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 outline-none"
                  {...register("email", { required: "Email is required" })}
                />
                {
                  <p className="text-left text-red-500">
                    {errors.email?.message}
                  </p>
                }
              </div>
              <div className="space-y-1">
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
                      required: "Password is Required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                        message:
                          "Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long",
                      },
                    })}
                  />
                  <p
                    onClick={handleViewPassword}
                    className="cursor-pointer absolute right-4 top-4 text-xl"
                  >
                    {showPassword ? <VscEyeClosed /> : <VscEye />}
                  </p>
                </div>
                {
                  <p className="text-left text-red-500">
                    {errors.password?.message}
                  </p>
                }
              </div>
              <button className="block w-full p-3 text-center rounded-sm btn-neutral btn">
                Register
              </button>
            </form>

            <p className="text-sm text-center sm:px-6 text-gray-400 dark:text-gray-600">
              Already have an account? &nbsp;
              <Link
                to="/login"
                rel="noopener noreferrer"
                className="font-semibold text-gray-100 dark:text-gray-800"
              >
                Login Here
              </Link>
            </p>
          </div>
        </div>
        <div className="items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 hidden lg:flex w-[400px] p-6">
          <img
            src={regImg}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
