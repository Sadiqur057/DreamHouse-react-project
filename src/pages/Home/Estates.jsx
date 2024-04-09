import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const Estates = () => {
  const [estateData, setEstateData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try{
      fetch("/estate-data.json")
      .then((res) => res.json())
      .then((data) => setEstateData(data));
    }
    finally{
      setLoading(false)
    }
  }, []);
  if(loading){
    return <h1>Loading</h1>
  }
  return (
    <div className="w-[90%] md:w-5/6 lg:w-5/6 mx-auto font-poppins">
      <h1 className="text-4xl font-bold text-center my-6 md:my-10 ">Estates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {
        estateData.map(data=><EstateCard data={data} key={data.id}></EstateCard>)
      }
      </div>
    </div>
  );
};

export default Estates;
