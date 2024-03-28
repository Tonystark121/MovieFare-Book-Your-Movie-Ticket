import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import Cards from "./Cards";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";

const Home = () => {
  const [details, setDetails] = useState(null);
  const [currPage, setCurrPage] = useState(1)
  const [lastItem, setLastItem] = useState(4)
  const [firstItem, setFirstItem] = useState(0)

  const itemCount =  details?.length
  const pageCount = Math.ceil(itemCount/3)
  const nextPage = () => {
     if(currPage<=pageCount){
        setFirstItem(lastItem)
        setCurrPage(currPage => currPage + 1)
        setLastItem(Math.min(currPage+1)*4, itemCount)
     }else return
  }

  const prevPage = () => {
    if(currPage>1){
        setCurrPage(currPage => currPage-1)
        setLastItem((currPage-1)*4)
        setFirstItem((currPage-2)*4)
    }else return
  }
  console.log(currPage, firstItem, lastItem);

  const api = "https://api.tvmaze.com/search/shows?q=all";

  const fetchMovies = async () => {
    try {
      const data = await fetch(api);
      const result = await data.json();
      setDetails(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="w-full">
      <nav className="h-[80px] p-8 flex justify-between items-center top-0 border border-b-1 border-solid border-gray-400">
        <div className="flex items-center gap-10">
          <h1 className="md:text-4xl text-2xl font-semibold ">MoviesFare</h1>
          <div className="relative">
            <input
              type="text"
              className="w-[600px] py-[10px] pl-16 text-xl border border-solid broder-gray outline-none rounded-lg md:initial hidden md:block "
              placeholder="Search for Movies,TV Shows,Events "
            />
            <IoSearchOutline className="absolute top-[14px] md:block hidden left-3 text-xl" />
          </div>
        </div>
        <div className="flex items-center md:gap-6 gap-3 mr-7">
          <button className="md:py-3 py-2 px-6 md:px-8 md:text-xl text-xs whitespace-nowrap bg-red-600 rounded text-white">
            Sign In
          </button>
          <IoMenuSharp className="text-3xl cursor-pointer font-bold" />
        </div>
      </nav>
      <div className="w-[100%] h-auto bg-slate-100 pt-6">
        <h1 className="text-4xl text-black font-bold text-center ">
          Recommended Movies
        </h1>
        <div className="w-full max-w-[1480px] h-auto pt-4 m-auto flex md:gap-12 gap-7 flex-wrap justify-center">
          {details?.slice(firstItem, lastItem).map((item, idx) => (
            <Cards details={item} key={idx} />
          ))}
          {!details && <h1 className="text-center">Loading...</h1>}
        </div>
        <div className="flex justify-center w-full">
          <div className="flex gap-5 items-center">
            <button disabled={!firstItem} onClick={() => prevPage()}>
              <FaAngleLeft />
            </button>
            <button disabled={lastItem === itemCount} onClick={() => nextPage()}>
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
