import React, { useEffect, useState } from "react";
import { LiaStarSolid } from "react-icons/lia";
import { AiFillLike } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Cards = ({ details }) => {
  const navigate = useNavigate();
  const showDetails = () => {
    navigate("../movieDetail", { state : details});
  }
   console.log(details?.show?.image?.original)
  if (details) {
    return (
      <div
        className="md:w-[320px] w-[280px] md:h-[470px] h-[420px] pb-8 bg-contain bg-no-repeat shadow-lg relative "
        onClick={showDetails}
      >
        <img
          src={details?.show?.image?.original ? details?.show?.image?.original : 'https://image.tmdb.org/t/p/original/pdhOE0NAZaPzjsgTvatRP1xFhG3.jpg'}
          alt="poster"
          className="rounded-2xl w-full h-full cursor-pointer"
        />
        <div className="absolute flex items-center justify-center gap-8 top-0 bg-black w-full py-[8px] rounded-xl cursor-pointer">
          <div className="flex gap-3">
            <LiaStarSolid className="text-yellow text-2xl text-white" />
            <span className="text-white text-xl">
              {details.show.rating.average ? details.show.rating.average : 8.5}
              /10
            </span>
          </div>
          <div className="flex gap-3">
            <AiFillLike className="text-yellow text-2xl text-white" />
            <span className="text-white text-xl">
              {details.show.weight ? details.show.weight : 80}K
            </span>
          </div>
        </div>
      </div>
    );
  }
};

export default Cards;
