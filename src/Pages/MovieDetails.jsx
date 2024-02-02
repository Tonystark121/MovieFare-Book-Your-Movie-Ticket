import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import Form from "./Form";
import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const [bookOpen, setbookOpen] = useState(false);
  const [data, allData] = useState([]);

  const location = useLocation();
  useEffect(() => {
    if (location.state) allData(location.state);
  }, [location]);

  const handleBooking = () => {
    setbookOpen(!bookOpen);
  };

  if (data) {
    return (
      <div className="">
        <nav className="md:h-[80px] h-[70px] p-8 flex justify-between items-center top-0 border border-b-1 border-solid border-gray-400">
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
        <div className="w-full md:h-[100vh] h-[170vh] flex md:flex-row flex-col gap-4 bg-gradient-to-b from-purple-900 to-blue-700">
          <div className="flex md:flex-row flex-col pt-4 items-center justify-center md:gap-20 gap-6 md:ml-40">
            <div className="md:w-[320px] md:h-[500px] w-[70vw] h-[350px] rounded-2xl shadow-lg">
              <img
                src={
                  data?.show?.image?.original
                    ? data?.show?.image?.original
                    : "https://image.tmdb.org/t/p/original/pdhOE0NAZaPzjsgTvatRP1xFhG3.jpg"
                }
                className="w-full h-full rounded-2xl "
                alt=""
              />
            </div>
            <div className=" md:w-[800px] p-8">
              <h2 class="md:text-4xl font-bold mb-4 text-white">
                {data?.show?.name}
              </h2>
              <div class="flex flex-col flex-wrap gap-3 md:text-left text-center items-start mb-4">
                <p class="text-white mr-4 md:text-2xl">Duration: 2h 30m</p>
                <p class="text-white mr-4 md:text-2xl">
                  Rating: {data?.show?.rating?.average}
                </p>
                <p class="text-white mr-4 md:text-2xl">
                  Genre: {data?.show?.genres?.map((item, idx) => item + ", ")}
                </p>
                <p class="text-white md:text-2xl">
                  Language : {data?.show?.language}
                </p>
              </div>
              <p class="text-white md:text-xl mb-4 mt-3">
                {data?.show?.summary}
              </p>
              <div className="flex md:gap-10 gap-6 mt-12">
                <button class="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800" disabled={bookOpen}>
                  Trailer
                </button>
                <button
                  class="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800"
                  onClick={handleBooking}
                  disabled={bookOpen}
                >
                  Book Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
        {bookOpen && (
          <div
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            className="w-full md:h-[111vh] h-[110vh] flex absolute top-0 justify-center items-center"
            id="booking"
          >
            <div className="md:w-[50%] w-[80%] h-[380px] bg-gray-300 shadow-2xl p-6 rounded-2xl ">
              <Form data={data} />
            </div>
            <ImCross
              className="text-2xl text-white absolute md:top-[140px] top-[70px] cursor-pointer md:right-[120px] right-[50px]"
              onClick={handleBooking}
            />
          </div>
        )}
      </div>
    );
  }
};

export default MovieDetails;
