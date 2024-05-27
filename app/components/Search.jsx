"use client";
import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { useModeContext } from "../contexts/ModeContext";

export default function Search() {
    const {darkmode,isSearch,setIsSearch} = useModeContext();

    function handleSearch(){
        setIsSearch((prev)=>!prev)
    }

  return (
    <div className={`max-w-[1440px] pt-[50px] md:pt-[100px] w-full mx-auto flex  justify-center items-center ${darkmode?"bg-black text-white ":"text-black bg-white"}`}>
      <button onClick={handleSearch} className="searchBg p-2 md:p-4 cursor-pointer shadow-xl w-[250px] sm:w-[400px] rounded-[16px] flex justify-around items-center">
        <div className="flex justify-start items-center w-2/3 ">
          <Search2Icon className=" " boxSize={25} />
          <p className="pl-[20px] cursor-pointer">Quick Search..</p>
        </div>
        <div className=" flex justify-end items-center w-1/3">
          <p>ctrl+ K</p>
        </div>
         </button>
    </div>
  );
}
