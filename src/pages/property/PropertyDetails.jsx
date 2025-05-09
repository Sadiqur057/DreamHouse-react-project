import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { saveDataToLS } from "../../utils/saveToLS";
import { toast } from "react-toastify";
const PropertyDetails = () => {
  const [loading, setLoading] = useState(true);
  const [propertyData, setPropertyData] = useState([]);
  const data = useLoaderData();
  const { id: propertyId } = useParams();

  const onLoad = () => {
    window.scrollTo(0, 0);
  };
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const target = data.find(
      (targetProperty) => targetProperty.id == propertyId
    );
    setPropertyData(target);

    setLoading(false);
    onLoad();
  }, [data, propertyId]);



  const {
    estate_title,
    image,
    segment_name,
    price,
    status,
    description,
    area,
    location,
    facilities,
    additional_information,
  } = propertyData || {};

  const handleAddToBookmark = () => {
    console.log("Coming");
    const data = saveDataToLS(propertyId, user.uid);
    console.log(user.uid, propertyId);
    console.log(data);
  };
  const handleProcessing=()=>{
    toast.warn("Under Maintenance!")
  }

  if (loading) {
    return (
      <h1 className="h-full flex justify-center items-center text-4xl min-h-[calc(100vh-260px)] font-bold">
        <span className="loading loading-spinner loading-lg"></span>
      </h1>
    );
  }

  return (
    <div className="pt-8 md:pt-12 font-poppins min-h-screen">
      <Helmet>
        <title>DH | {estate_title}</title>
      </Helmet>
      <div className="md:w-[90%] max-w-5xl lg:w-4/6 px-6 py-16 mx-auto space-y-4">
        <article className="space-y-2">
          <img
            src={image}
            alt=""
            className="w-full h-[300px] md:min-h-[460px] xl:min-h-[470px] 2xl:min-h-[540px] rounded-sm object-cover object-center"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="600"
          />

          <div>
            <h1
              className="text-4xl pt-4 font-bold md:tracking-tight md:text-5xl"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-offset="10"
            >
              {estate_title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full sm:flex-row sm:items-center dark:text-gray-600 pt-3 md:pt-5">
              <p
                className="text-gray-500 font-semibold text-lg"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="800"
                data-aos-offset="50"
              >
                {segment_name}
              </p>

              <p className="flex gap-2 my-3 md:my-0">
                {facilities.map((facility, index) => (
                  <span
                    key={facility}
                    className="px-2 py-1 rounded-sm border border-[#478ba5] bg-[#d8ecf8]"
                    data-aos="fade-right"
                    data-aos-delay={index * 200}
                    data-aos-duration="1000"
                    data-aos-offset="50"
                  >
                    {facility}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="250" data-aos-duration="800" data-aos-offset="50">
            <div className="dark:text-gray-800 mb-3">
              <p>{description}</p>
            </div>
            <div>
              <div className="overflow-x-auto">
                <table className="table ">
                  <tbody>
                    <tr className="border-0">
                      <th className="pl-0 py-1">Price</th>
                      <td className="py-0">{price}</td>
                    </tr>
                    <tr className="border-0">
                      <th className="pl-0 py-1">Status</th>
                      <td className="py-0">For {status}</td>
                    </tr>
                    <tr className="border-0">
                      <th className="pl-0 py-1">Location</th>
                      <td className="py-0">{location}</td>
                    </tr>
                    <tr className="border-0">
                      <th className="pl-0 py-1">Area</th>
                      <td className="py-0">{area}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </article>
        <div
        data-aos="fade-up"
        data-aos-delay="350"
        data-aos-offset="50"
        data-aos-duration="800">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold py-1">
              Additional Information
            </h4>
            <ul className="ml-4 space-y-1 list-disc pt-1">
              {additional_information &&
                additional_information.map((info) => (
                  <li key={info}>{info}</li>
                ))}
            </ul>
          </div>
          <div className="flex justify-end gap-3 mt-3">
            <button
              onClick={handleAddToBookmark}
              className="btn btn-default rounded-sm bg-base-300"
            >
              Bookmark
            </button>
            {status === "rent" ? (
              <button onClick={handleProcessing} className="btn btn-neutral rounded-sm">Book Now</button>
            ) : (
              <button onClick={handleProcessing} className="btn btn-neutral rounded-sm">
                Purchase Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
