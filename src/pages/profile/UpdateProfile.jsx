import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { updateUserProfile, user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    e.preventDefault();
    const name = data.name;
    const photo = data.photo;
    updateUserProfile(name, photo)
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>DH | Update Profile</title>
      </Helmet>
      <section className="bg-base-200 pt-14 lg:pt-0 min-h-screen flex items-center bg-cool">
        <div className=" max-w-6xl mx-auto my-10 w-[90%]  md:w-[500px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full p-6 md:p-12 mx-auto space-y-6 bg-base-100"
          >
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="name"
                className="block w-full p-4 rounded  bg-gray-100 outline-none"
                readOnly
                value={user?.email || "Not Added"}
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="name"
                className="block w-full p-4 rounded  bg-gray-100 outline-none"
                {...register("name", { required: "Name is required" })}
                defaultValue={user?.displayName}
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div>
              <label htmlFor="photo" className="block mb-1 ml-1">
                Photo URL
              </label>
              <input
                id="photo"
                type="text"
                placeholder="photo url"
                className="block w-full p-4 rounded focus:outline-none bg-gray-100"
                {...register("photo", { required: "Photo url is required" })}
                defaultValue={user?.photoURL}
              />
              <p className="text-red-500">{errors.photo?.message}</p>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold  shadow focus:outline-none btn btn-neutral rounded-sm text-white text-base"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateProfile;
