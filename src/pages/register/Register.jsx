import { Link, useNavigate } from "react-router-dom";
import regImg from "../../assets/images/register.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()

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
          .then(()=>{
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
      <div className="flex flex-col w-full justify-center mx-auto  lg:p-14 lg:flex-row-reverse lg:justify-center lg:gap-10 items-center lg:glass lg:items-center mt-6 lg:mt-16 p-0 lg:w-fit rounded-md">
        <div className="flex flex-col justify-center text-center rounded-sm w-full  lg:max-w-md xl:max-w-lg lg:text-left p-0 flex-1">
          <div className="m-0 p-8 space-y-3 rounded-sm bg-base-100 mx-auto max-w-[380px] lg:min-w-[380px] w-[90%]">
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
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-4 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800  outline-none"
                  {...register("password", {
                    required: "Password is Required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                      message:
                        "Password must contain at least one lowercase letter, one uppercase letter, and be at least 6 characters long",
                    },
                  })}
                />
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
        <div className="items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 hidden lg:flex">
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
