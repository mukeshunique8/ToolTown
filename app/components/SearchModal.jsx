import React, { useEffect } from "react";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import { useModeContext } from "../contexts/ModeContext";

export default function SearchModal() {
  const { darkmode, isSearch, setIsSearch } = useModeContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.getElementById("search-modal");
      if (modal && !modal.contains(event.target)) {
        setIsSearch(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSearch]);

  return (
    <div
      
      className={`${
        darkmode ? "blur-black text-white" : "text-black blur-white"
      } absolute top-[50%] -translate-y-[50%] w-full h-full flex flex-col justify-start p-4 items-center shadow-2xl`}
    >
      <div
      id="search-modal"
        className={`${
          darkmode ? "bg-black text-white" : "text-black bg-white"
        } flex flex-col shadow-2xl p-4 w-[300px] sm:w-[500px] md:w-[600px] min-h-[500px]  rounded-md`}
      >
        {/* <div onClick={() => setIsSearch(false)} className="flex self-end cursor-pointer">
          <CloseIcon boxSize={18} />
        </div> */}

        <div className="flex justify-center pt-6 gap-4 w-full items-center">
          <Search2Icon boxSize={18} />
          <input className={`${darkmode?"text-white":"text-black"} p-2 rounded-md w-[70%]`} type="text" placeholder="Search the docs.." />
        </div>
      </div>
    </div>
  );
}
