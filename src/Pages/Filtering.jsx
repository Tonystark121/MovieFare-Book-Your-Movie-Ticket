import React, { useEffect, useState } from "react";
import { Data } from "../assets/Data";
import { IoSearch } from "react-icons/io5";

const Filtering = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const handleBtn = (id) => {
    const btn = document.querySelector(`#btn${id}`);
    btn.classList.toggle("bg-blue-400");
    btn.classList.toggle("text-white");
    btn.classList.toggle("border-none");
    btn.classList.toggle("checked");
    if (btn.classList.contains("checked")) {
      setFilter([...filter, btn.textContent]);
    } else {
      setFilter(filter.filter((item) => item !== btn.textContent));
    }
  };
  console.log(filter);
  const category = ["Fruits", "Veggies", "Animals", "Birds"];
  return (
    <div className="">
      <div className="relative">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-200 focus:bg-white border-2 border-gray-200 focus:border-blue-500 rounded-lg pl-10 pr-4 py-2 w-[50%] m-auto mt-5"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-0 top-12 flex items-center pl-3">
          <IoSearch className="text-gray-400" />
        </div>
      </div>
      <div className="flex gap-8 justify-center items-center w-full mt-8">
        {category.map((item, idx) => (
          <div
            key={idx}
            className="border-2 border-red-200 px-3 py-1 rounded cursor-pointer"
            onClick={() => handleBtn(idx)}
            id={`btn${idx}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-10 w-full flex flex-wrap gap-12">
        {Data?.filter(
          (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.cat.toLowerCase().includes(search.toLowerCase())
        )
          .filter(
            (item) =>
              filter.length === 0 || 
              filter.some((ele) =>
                item.cat.toLowerCase().includes(ele.toLowerCase())
              )
          )
          .map((item, idx) => (
            <div
              key={idx}
              className="w-[150px] bg-stone-200 h-[60px] border-2 flex flex-col border-gray-500 rounded justify-between items-start p-1"
            >
              <h3 className="font-semibold ">{item.name}</h3>
              <p>{item.cat}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Filtering;
