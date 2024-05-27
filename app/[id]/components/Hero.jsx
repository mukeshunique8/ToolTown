import React from "react";
import { useParams } from "next/navigation";
import { categories } from "../../data/Categories";
import { RiTailwindCssFill  } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";

const icons = {
  RiTailwindCssFill: <RiTailwindCssFill />,
  
  // Add more icons as needed
};

export default function Hero() {
  const { id } = useParams();
  const cat = decodeURIComponent(id);

  const categoryKeys = Object.keys(categories);
  let categoryData = null;

  if (categoryKeys.includes(cat)) {
    categoryData = categories[cat];
  } else {
    // console.log(`Category with ID ${cat} not found.`);
  }

  const renderLinks = categoryData ? (
    <div className="flex  flex-wrap justify-center items-start mt-4 gap-4">
      {categoryData.links && categoryData.links.map((link, index) => (
        <div key={index} className="flex flex-col bg-white text-center justify-start items-center gap-4 w-[300px] h-[200px] p-4 rounded-[25px] shadow-xl">
          <div className="flex justify-center gap-3 items-center">
            {link.logo && icons[link.logo]}
            <h2 className="text-xl font-semibold">{link.web || 'No Title'}</h2>
          </div>
          {link.link && (
            <p className="text-blue-950 text-center font-bold italic">
              <a target="_blank" rel="noopener noreferrer" href={link.link}>
                {link.link}
              </a>
            </p>
          )}
          <p className="w-full h-[50px]">{link.desc || ''}</p>
          <div className="cursor-pointer flex self-end">
            <CiHeart color="pink" size={30}/>

          </div>
        </div>
      ))}
    </div>
  ) : null;

  return (
    <div className="max-w-[1440px] py-[40px] items-center w-full flex flex-col">
      {categoryData ? (
        <>
          <h2 style={{color:categoryData.hex || "#333"}} className={` text-2xl w-fit text-center font-bold shadow-xl p-4 rounded-lg`}>
            {categoryData.name || 'No Category Name'}
          </h2>
          <div className="flex flex-col">{renderLinks}</div>
        </>
      ) : (
        <p>Category not found.</p>
      )}
    </div>
  );
}
