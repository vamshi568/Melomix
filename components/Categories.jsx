'use client'
import {  addplaylistid } from "@/app/globalredux/slices/slice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import WhatsAppButton from "./Whatsapp";


const Categories = ({categories}) => {
const dispact=useDispatch()
const router=useRouter()
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const handleonclick=(id)=>{
    dispact(addplaylistid(id))
router.push('/home/genre')
  }

  if (categories.items === undefined) {
    return  null
  }
  return (
    <div className="text-white flex-grow sm:ml-36  max-[600px]:p-6 mt-[20px] sm:mt-[96px]" >
      <h1 className="text-2xl font-bold mb-8">Genres & Mood</h1>
      <div className="flex flex-wrap gap-8 sm:gap-12" >

      {categories.items.map((item)=>(
        <div key={item.id} onClick={()=>handleonclick(item.id)} className="cursor-pointer p-3 sm:p-5 font-bold overflow-hidden rounded-lg w-[82px] h-[82px] sm:w-[166px] sm:h-[166px] relative " style={{ backgroundColor: getRandomColor() }}>
<p className="text-xs">{item.name}</p>
          <img className="shadow-xl  shadow-black shad absolute rotate-[15.6deg] sm:w-[100px] w-[50px] h-[50px] sm:h-[100px] top-[36.89%] -right-[10.89%]" src={item.icons[0].url} alt={item.name}/>
        </div>
      )
      
      )}
      </div>
    </div>
  );
};

export default Categories;
