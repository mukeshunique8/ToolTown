"use client";
import { useRouter } from "next/navigation";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useModeContext  } from "../contexts/ModeContext";
import React, { useState,useContext } from "react";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  function handleHome(){
     
   router.push(`/`)
 
}
  const{darkmode,setDarkMode} =useModeContext();
  
  const [menu, setMenu] = useState(false);

  function handleMode() {
    setDarkMode((prev) => !prev);
  }
  function toggleMenu() {
    setMenu((prev) => !prev);
  }

  const navLists = ["Docs", "Components", "Blog", "Showcase"];
  const renderNavLists = navLists.map((list, idx) => <a href="">{list}</a>);

  const renderMode = () =>{
    return  (<div className=" md:flex md:items-center  items-end justify-start">
    {darkmode ? (
      <SunIcon
        className="cursor-pointer"
        onClick={handleMode}
        boxSize={23}
      />
    ) : (
      <MoonIcon
        color={"black"}
        className="cursor-pointer"
        onClick={handleMode}
        boxSize={23}
      />
    )}
  </div>)
  }

  return (
    <div
      className={`${
        darkmode ? "bg-black text-white" : "text-black bg-white"
      } w-full  px-8   py-4 flex flex-col items-center md:flex-row justify-between  text-xl `}
    >
      <div className="w-full md:w-1/2 flex justify-between items-center md:justify-start">
        <h2 onClick={handleHome} className="text-2xl cursor-pointer font-bold tracking-widest">ToolTown</h2>

        <div className="flex md:hidden items-center justify-center gap-x-5">
          {renderMode()}
          <HamburgerIcon onClick={toggleMenu} boxSize={23} />
        </div>
      </div>

      <div className={`${menu?"flex mt-4":" hidden md:flex" } flex flex-col md:flex-row w-full md:w-1/2 md:items-center items-end justify-between`}>
        <div className="w-[80%] flex flex-col md:items-center items-end md:flex-row gap-x-8 gap-y-2 justify-end">
          {renderNavLists}
          
        </div>

        <div className={`hidden md:flex`}>
        {renderMode()}
        </div>

        
        
        
      </div>
    </div>
  );
}
