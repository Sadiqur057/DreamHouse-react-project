import { GrLocation } from "react-icons/gr";
import { BiArea } from "react-icons/bi";
const EstateCard = ({ data }) => {
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
  } = data || {};
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <figure className="relative">
        <img
          className="h-[250px] object-cover object-center w-full"
          src={image}
          alt="Shoes"
        />
        <p className="font-medium text-[#D91E5C] absolute px-3 py-2 bg-base-200 rounded-xl bottom-2 left-2">
          {price}
        </p>
        <p className="font-medium text-[#478ba5] absolute px-3 py-2 bg-base-200 rounded-xl bottom-2 right-2">
          {status}
        </p>
      </figure>
      <div className="p-3 flex flex-col text-[15px]">
        <div className="flex-1 h-fit">
          <h2 className="font-semibold text-2xl mb-1">{estate_title}</h2>
          <p className="font-medium text-gray-500">{segment_name}</p>
          <p className="text-gray-600  py-[10px] ">
            {description.slice(0, 60)}...
          </p>
          <p className="flex items-center gap-1">
            <GrLocation className="text-xl" />
            <span className="font-semibold"></span> {location}
          </p>
          <p className="py-1 flex gap-2">
          <BiArea className="text-xl"/>
            {area}
          </p>
          <p className="flex gap-2 my-2">
            {facilities.map((facility) => (
              <span
                key={facility}
                className="px-2 py-1 rounded-md border border-[#478ba5] bg-[#d8ecf8]"
              >
                {facility}
              </span>
            ))}
          </p>
        </div>
        <div className="flex mt-3 mb-1 justify-end">
          <button className="btn btn-neutral">View Property</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EstateCard;
