"use client"

import { ModeContext } from "../contexts/ModeContext";
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import SearchModal from "../components/SearchModal"
import React, { useState,useContext } from "react";
import Hero from "./components/Hero";



export default function Page() {
    const {darkmode,isSearch,setIsSearch} = useContext(ModeContext);

    return (
       <div className={`${darkmode ? "bg-black  " :" bg-white"}  w-full h-screen flex flex-col justify-start items-center`}>
        <Navbar/>
        <Search/>
        { isSearch && <SearchModal/>  }
       <Hero/>
       </div>
    )
  }