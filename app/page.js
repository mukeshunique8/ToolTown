"use client"
import { ModeContext } from "../app/contexts/ModeContext";
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import SearchModal from "./components/SearchModal"
import React, { useState,useContext } from "react";
import Categories from "./components/Categories";


export default function Page() {
    const {darkmode,isSearch,setIsSearch} = useContext(ModeContext);

    return (
       <div className={`${darkmode ? "bg-black  " :" bg-white"}  w-full flex flex-col justify-center items-center`}>
        <Navbar/>
        <Search/>
        { isSearch && <SearchModal/>  }
        <Categories/>
       </div>
    )
  }