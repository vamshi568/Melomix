"use client"
import { addaonsdid } from "@/app/globalredux/slices/slice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Newresealse = ({newresealse}) => {


const router=useRouter()
  const dispact=useDispatch()
  const handleonclick=(id)=>{
    dispact(addaonsdid(id))
router.push('/home/newplaylist')
  }
  if (newresealse.items === undefined) {
    return null
  }
  return (
    <div className="text-white flex-grow sm:ml-36  max-[600px]:p-6 mt-[20px] sm:mt-[96px]" >
      <h1 className="text-2xl font-bold mb-8">New Releases</h1>
      <div className="flex flex-wrap gap-8 sm:gap-12">

      {newresealse.items.map((item)=>(
        <div key={item.id} onClick={()=>handleonclick(item.id)} className="font-semibold cursor-pointer w-[82px]  sm:w-[166px]  h-auto text-center">
        <img className="w-[166px] h-[82px] sm:h-[166px] rounded-lg mb-4" src={item.images[0].url} alt={item.name}/>
<p>{item.name.length>30?item.name.slice(0,30)+'...':item.name}</p>
        </div>
      )
      
      )}
      </div>
    </div>
  );
};

export default Newresealse;
