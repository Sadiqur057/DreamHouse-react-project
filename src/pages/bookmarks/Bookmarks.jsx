import { Link, useLoaderData } from "react-router-dom";
import { getDataFromLS } from "../../utils/saveToLS";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookmarkCard from "./BookmarkCard";
import { Helmet } from "react-helmet-async";
import { TfiFaceSad } from "react-icons/tfi";
const Bookmarks = () => {
  const allData = useLoaderData();
  const { user } = useContext(AuthContext);
  const savedData = getDataFromLS(user.uid);

  const targetData = allData.filter((data) => savedData.includes(data.id));

  if (targetData.length === 0) {
    return (
      <div className="w-full flex justify-center text-bold items-center font-poppins bg-cool h-screen pt-14">
        <section className="flex items-center h-fit sm:p-16 dark:bg-gray-50 dark:text-gray-800 w-[90%] max-w-[480px]">
          <div className="container flex flex-col items-center justify-center mx-auto my-8 space-y-8 text-center px-4">
            <TfiFaceSad className="text-[120px]"></TfiFaceSad>

            <p className="text-2xl md:text-3xl font-medium leading-10">
              Did you bookmarked anything yet?
            </p>
            <Link to="/">
            <button className="btn-neutral btn rounded-sm  md:text-xl">Return Home</button></Link>
          </div>
        </section>
      </div>
    );
  }

  window.scrollTo(0, 0);

  console.log(savedData, allData.length);
  return (
    <div className="pt-[70px]">
      <Helmet>
        <title>DH | Bookmarks</title>
      </Helmet>
      {targetData.map((data) => (
        <BookmarkCard data={data} key={data.id}></BookmarkCard>
      ))}
    </div>
  );
};

export default Bookmarks;
