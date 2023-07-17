'use client'
import { addaonsdid, increment } from "@/app/globalredux/slices/slice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Search = ({ search }) => {
const dispact=useDispatch()
const router=useRouter()
const handelsong=(playlistid)=>{
    dispact(increment(playlistid))

  }
const handleonclick=(id)=>{
    dispact(addaonsdid(id))
router.push('/home/playlist')
  }
  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000); // Divide by 60,000 to get minutes
    const seconds = Math.floor((ms % 60000) / 1000); // Take the remainder after dividing by 60,000 and divide by 1000 to get seconds
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; // Add leading zero to seconds if necessary
  };
  return (
    <div className="text-white relative mt-[96px] ml-36 w-10/12">
      <Link href={"/home"}>
        <p className="text-xl items-center mt-6 flex">< BsArrowLeftShort className='text-3xl'/>  Back</p>
      </Link>
      <h1 className="font-extrabold text-[24px] mt-[50px] mb-[32px]">
        Playlists
      </h1>
      <div className="flex flex-wrap gap-10 mt-6">
        {search.playlists.items.map((item) => (
          <div onClick={()=>handleonclick(item.id)} key={item.id} className="w-[166px] cursor-pointer flex flex-col items-center">
            <img
              className="h-[166px] w-[166px] rounded-md"
              src={item.images[0].url}
              alt={item.id}
            />
            <h1 className="text-base mt-4 mb-1 text-center">{item.name.length>30?item.name.slice(0,30)+'...':item.name}</h1>
            <p className="text-[#9B9B9B] text-sm">{item.tracks.total} Tracks</p>
          </div>
        ))}
      </div>
      <h1 className="font-extrabold text-[24px] mt-[50px] mb-[32px]">Tracks</h1>
      <div className="gap-[32px] flex flex-col">
        {search.tracks.items.map((item) => (
          <div key={item.id} onClick={()=>handelsong(item.id)} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                className="h-[60px] w-[60px]"
                src={item.album.images[0].url}
                alt={item.id}
              />
              <div>
                <h1 className="font-bold">{item.name}</h1>
                <p className="text-[#9B9B9B] text-sm">{item.artists[0].name}</p>
              </div>
            </div>
            <p>{formatTime(item.duration_ms)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
