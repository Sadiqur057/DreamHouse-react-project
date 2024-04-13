import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const BookmarkCard = ({ data }) => {
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
    id
  } = data || {};
  return (
    <section className="font-poppins"
    data-aos="zoom-in-up"
    data-aos-delay="300"
    data-aos-duration="800"
    data-aos-offset="10"
    >
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="block max-w-sm gap-8 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-base-100">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full h-80 rounded lg:min-h-96  lg:col-span-7"
          />
          <div className="space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl mb-2 mt-3 lg:mt-0">
              {estate_title}
            </h3>
            <span className="font-medium dark:text-gray-600">
              {segment_name}
            </span>

            <p className="flex gap-2 my-3 md:my-0 text-sm">
              {facilities.map((facility) => (
                <span
                  key={facility}
                  className="px-2 py-1 rounded-sm border border-[#478ba5] bg-[#d8ecf8]"
                >
                  {facility}
                </span>
              ))}
            </p>
            <p>{description.slice(0, 75)}...</p>
            <div className="overflow-x-auto">
              <table className="table">
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
            <Link to={`/property/${id}`}>
              <button className="mt-2 btn btn-neutral rounded-sm">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
BookmarkCard.propTypes = {
  data: PropTypes.object,
};
export default BookmarkCard;
