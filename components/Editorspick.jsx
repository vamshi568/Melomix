"use client"
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addaonsdid } from "@/app/globalredux/slices/slice";
import { useRouter } from "next/navigation";

const Editorspick = ({editorspick}) => {
const router=useRouter()
const dispact=useDispatch()
  const handleonclick=(id)=>{
    dispact(addaonsdid(id))
router.push('/home/playlist')
  }

  if (editorspick.items === undefined) {
    return null
  }
  return (
    <div className="text-white flex-grow sm:ml-36  max-[600px]:p-6 mt-[30px] sm:mt-[96px]" >
      <h1 className="text-2xl font-bold mb-8">Editor's Pick</h1>
      <div className="flex flex-wrap gap-8 sm:gap-12">

      {editorspick.items.map((item)=>(
        <div key={item.id} onClick={()=>handleonclick(item.id)} className="cursor-pointer font-semibold  w-[82px]  sm:w-[166px]  h-auto  text-center">
          <img className="w-[166px] h-[82px] sm:h-[166px] rounded-lg mb-2 sm:mb-4" src={item.images[0].url} alt={item.name}/>
<p>{item.name}</p>
        </div>
      )
      
      )}
      </div>
    </div>
  );
};

export default Editorspick;
